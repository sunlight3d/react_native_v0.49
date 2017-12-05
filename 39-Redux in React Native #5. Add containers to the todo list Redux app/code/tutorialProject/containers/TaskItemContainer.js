/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
TaskItemContainer
*/
import { connect } from 'react-redux';
import { toggleTask } from '../actions';
import TaskItemComponent from '../components/TaskItemComponent';

const TaskItemContainer = connect()(TaskItemComponent);
export default TaskItemContainer;
