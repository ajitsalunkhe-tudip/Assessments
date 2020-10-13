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
    public String getName() {//ToastModule
        return "EmulatorCheckModule";
    }
    //Custom function that we are going to export to JS
    @ReactMethod
    public void showEmulatorToast(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
        isAndroidEmulator();
    }

    private boolean isEmulator() {
    return (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
        || Build.FINGERPRINT.startsWith("generic")
        || Build.FINGERPRINT.startsWith("unknown")
        || Build.HARDWARE.contains("goldfish")
        || Build.HARDWARE.contains("ranchu")
        || Build.MODEL.contains("google_sdk")
        || Build.MODEL.contains("Emulator")
        || Build.MODEL.contains("Android SDK built for x86")
        || Build.MANUFACTURER.contains("Genymotion")
        || Build.PRODUCT.contains("sdk_google")
        || Build.PRODUCT.contains("google_sdk")
        || Build.PRODUCT.contains("sdk")
        || Build.PRODUCT.contains("sdk_x86")
        || Build.PRODUCT.contains("vbox86p")
        || Build.PRODUCT.contains("emulator")
        || Build.PRODUCT.contains("simulator");
    }

    public boolean isAndroidEmulator() {
        String model = Build.MODEL;
        String product = Build.PRODUCT;

        boolean isEmulator = false;
        if (product != null) {
            isEmulator = product.equals("sdk") 
            || product.contains("_sdk") 
            || product.contains("emulator")
            || product.contains("sdk_");
        }
       // Log.d(TAG, "isEmulator=" + isEmulator);
        //Toast.makeText(getReactApplicationContext(), isEmulator, Toast.LENGTH_SHORT).show();
        Toast.makeText(getReactApplicationContext(), ""+isEmulator, Toast.LENGTH_SHORT).show();
        return isEmulator;
    }
}