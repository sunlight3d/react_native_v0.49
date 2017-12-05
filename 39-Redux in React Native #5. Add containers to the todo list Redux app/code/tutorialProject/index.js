/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Redux in React Native with TodoList app
*/
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';

let store = createStore(allReducers);
const App = () => (
    <Provider store={store}>
        <TaskManagerComponent />
    </Provider>
);

AppRegistry.registerComponent('tutorialProject', () => App);
