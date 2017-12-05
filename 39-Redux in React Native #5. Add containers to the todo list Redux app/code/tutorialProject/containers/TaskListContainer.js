/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
TaskListContainer connect Redux with TaskListComponent
*/

import { connect } from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';

const mapStateToProps = (state) => {
    //alert(`state send to task list = ${JSON.stringify(state)}`);
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
};

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;