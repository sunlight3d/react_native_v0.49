/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Redux in React Native - Action Creators
*/
import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from './actionTypes';
let newTaskId = 0;

//Action: "add new Task"
export const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTaskName
    }
}
//Action: "toggle 1 task to completed / incompleted"
export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId
    }
}