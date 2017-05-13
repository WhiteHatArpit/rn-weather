package com.app;

import android.content.Context;
import android.os.Build;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.Toast;

/**
 * Created by arpitgupta on 12/05/17.
 * Utils
 */
public class Utils {

    public static void showToast(String message) {
        Context context = MainApplication.getInstance().getApplicationContext();
        if (context == null) {
            return;
        }
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show();
    }

    public static boolean isActivityFinishing(AppCompatActivity activity) {
        return activity == null
                || activity.isFinishing()
                || ((Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1
                && activity.isDestroyed()));
    }

    public static void printStackTrace(Exception e) {
        e.printStackTrace();
    }

    public static void logD(String value) {
        if (value != null) {
            Log.d("Weather", value);
        }
    }
}
