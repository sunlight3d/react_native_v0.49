/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
AddContainer and dispatch Action
*/
import AddComponent from '../components/AddComponent';
import { addNewTask } from '../actions';
import { connect } from 'react-redux';
const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {                        
            dispatch(addNewTask(inputTaskName));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddComponent);