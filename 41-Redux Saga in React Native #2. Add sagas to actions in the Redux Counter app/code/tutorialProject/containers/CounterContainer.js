/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
CounterContainer connect Redux with CounterComponent
*/
import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';

//Actions
import { increaseAction } from '../actions';
import { decreaseAction } from '../actions';

const mapStateToProps = (state) => {    
    //alert(`state after changed : ${JSON.stringify(state.counterReducers)}`);
    return {        
        times: state.counterReducers ? state.counterReducers : 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: (step) => {                        
            dispatch(decreaseAction(step));
        },
        onIncrement: (step) => {                        
            dispatch(increaseAction(step));
        }
    };
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;