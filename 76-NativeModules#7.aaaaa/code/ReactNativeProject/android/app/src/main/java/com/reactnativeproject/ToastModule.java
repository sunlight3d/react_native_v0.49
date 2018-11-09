/**
 * Mr Nguyen Duc Hoang
ssssscdd * Programming tutorial Channel
 * https://www.youtube.com/c/nguyenduchoang
 * ToastModule contains functions relating to Android's Toast
 */
package com.reactnativeproject;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

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

    @ReactMethod
    public void showText(String message, int duration) {
        //This function will be called in React Native !
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
