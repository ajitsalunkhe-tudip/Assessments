package com.assessment;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.os.Build;
import android.widget.Toast;

public class EmulatorCheckModule extends ReactContextBaseJavaModule {
    //constructor
    public EmulatorCheckModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "EmulatorCheckModule";
    }
    //Custom function that we are going to export to JS
    @ReactMethod
    public void showEmulatorToast(String message) {
        isAndroidEmulator(message);
    }


    public boolean isAndroidEmulator(String message) {
        String model = Build.MODEL;
        String product = Build.PRODUCT;

        boolean isEmulator = false;
        if (product != null) {
            isEmulator = product.equals("emulator");
            Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show(); 
        }
        return isEmulator;
    }
}