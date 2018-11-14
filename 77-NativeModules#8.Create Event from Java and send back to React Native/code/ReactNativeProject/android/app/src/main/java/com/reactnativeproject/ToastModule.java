/**
 * Mr Nguyen Duc Hoang
ssssscdd * Programming tutorial Channel
 * https://www.youtube.com/c/nguyenduchoang
 * ToastModule contains functions relating to Android's Toast
 */
package com.reactnativeproject;

import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

public class ToastModule extends ReactContextBaseJavaModule{
    private static final String LENGTH_SHORT = "LENGTH_SHORT";
    private static final String LENGTH_LONG = "LENGTH_LONG";

    //Constructor
    public ToastModule(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "ToastModule";
    }
    //Convert constants to React Native

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("PI", "3.1416");
        constants.put(LENGTH_SHORT, Toast.LENGTH_SHORT);
        constants.put(LENGTH_LONG, Toast.LENGTH_LONG);
        return constants;
    }
    //Write a callback function here
    @ReactMethod
    public void doCallbackTask(int aNumber,
                               Callback successCallback,
                               Callback failedCallback) {
        try {
            //Do something
            //Error
            if (aNumber == 100) {
                throw new Exception("Input number is 100, cannot do this task");
            }
            //Success
            String name = "Hoang";
            String email = "sunlight4d@gmail.com";
            int age = 39;
            successCallback.invoke(name, email, age);
        } catch (Exception e) {
            failedCallback.invoke(e.getMessage());
        }
    }
    //Promise => async / await
    @ReactMethod
    public void doPromiseTask(int aNumber, Promise promise){
        try {
            if (aNumber == 100) {
                throw new Exception("I hate 100!");
            }
            WritableMap mapResult = Arguments.createMap();//key - value
            mapResult.putString("name", "Hoang123");
            mapResult.putString("email", "hoang123@gmail.com");
            mapResult.putInt("age", 40);
            promise.resolve(mapResult);
        } catch (Exception e) {
            promise.reject("An error occured", e);
        }
    }
    @ReactMethod
    public void showText(String message, int duration) {
        //This function will be called in React Native !
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
