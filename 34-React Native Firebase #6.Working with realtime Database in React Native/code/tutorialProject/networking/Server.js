/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
This contains functions, that send GET, POST, DELETE, PUT requests to server
*/
import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const apiGetAllFoods = 'http://localhost:3001/list_all_foods';
const apiInsertNewFood = 'http://localhost:3001/insert_new_food';
const apiUpdateAFood = 'http://localhost:3001/update_a_food';

async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json();
        return responseJson.data; //list of foods
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
//send post request to insert new data
async function insertNewFoodToServer(params) {
    try {
        let response = await fetch(apiInsertNewFood, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function updateAFood(params) {
    try {
        let response = await fetch(apiUpdateAFood, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify(params)
        }); 
        let responseJson = await response.json();                
        return responseJson.result; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export {getFoodsFromServer};
export {insertNewFoodToServer};
export {updateAFood};