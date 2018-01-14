/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Redux-from example - FormComponent
*/

import { combineReducers } from 'redux-immutablejs';
import { reducer as form } from 'redux-form/immutable'; // <--- immutable import

const reducer = combineReducers({ form });
export default reducer;