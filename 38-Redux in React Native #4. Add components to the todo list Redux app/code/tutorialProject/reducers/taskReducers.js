/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Reducers for actions : add, toggle 1 task
*/
import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from '../actions/actionTypes';

const taskReducers = (tasks = [], action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return [
                ...tasks,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ]
        case TOGGLE_ONE_TASK:
        return tasks.map(task =>
            (task.taskId === action.taskId) 
              ? {...task, completed: !task.completed}
              : task
          )
            
        default:
            return tasks; //state does not change
    }
}

export default taskReducers;