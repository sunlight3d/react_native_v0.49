/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Realm database Schemas
*/
import Realm from 'realm';
export const TODOLIST_SCHEMA = "TodoList";
export const TODO_SCHEMA = "Todo";
// Define your models and their properties
export const TodoSchema = {
    name: TODO_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',    // primary key
        name: { type: 'string', indexed: true },
        done: { type: 'bool', default: false },
    }
};
export const TodoListSchema = {
    name: TODOLIST_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',    // primary key
        name: 'string',
        creationDate: 'date',
        todos: { type: 'list', objectType: TODO_SCHEMA },
    }
};
const databaseOptions = {
    path: 'todoListApp.realm',
    schema: [TodoListSchema, TodoSchema],
    schemaVersion: 0, //optional    
};
//functions for TodoLists
export const insertNewTodoList = newTodoList => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(TODOLIST_SCHEMA, newTodoList);
            resolve(newTodoList);
        });
    }).catch((error) => reject(error));
});
export const updateTodoList = todoList => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let updatingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);   
            updatingTodoList.name = todoList.name;    
            resolve();     
        });
    }).catch((error) => reject(error));;
});
export const deleteTodoList = todoListId => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let deletingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoListId);
            realm.delete(deletingTodoList.todos);
            realm.delete(deletingTodoList);
            resolve();   
        });
    }).catch((error) => reject(error));;
});
export const deleteAllTodoLists = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let allTodoLists = realm.objects(TODOLIST_SCHEMA);
            for (var index in allTodoLists) {
                let eachTodoList = allTodoLists[index]
                realm.delete(eachTodoList.todos);
            }
            realm.delete(allTodoLists);
            resolve();
        });
    }).catch((error) => reject(error));;
});
export const queryAllTodoLists = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let allTodoLists = realm.objects(TODOLIST_SCHEMA);
        resolve(allTodoLists);  
    }).catch((error) => {        
        reject(error);  
    });;
});
export const filterTodoLists = (searchedText) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let filteredTodoLists = realm.objects(TODOLIST_SCHEMA)
                                .filtered(`name CONTAINS[c] "${searchedText}"`);//[c] = case insensitive
        resolve(filteredTodoLists);
    }).catch((error) => {
        reject(error);
    });;
});
//Add array of Todos to an existing TodoList
export const insertTodos2TodoList = (todoListId, newTodos) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let todoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoListId);
        realm.write(() => {                                                
            for (var index in newTodos) {
                todoList.todos.push(newTodos[index]);                
            }
            resolve(newTodos);
        });
    }).catch((error) => {
        reject(error);
    });;
});
//Get todos from TodoList's Id
export const getTodosFromTodoListId = (todoListId) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let todoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoListId);
        resolve(todoList.todos);
    }).catch((error) => {
        reject(error);
    });;
});
export default new Realm(databaseOptions);