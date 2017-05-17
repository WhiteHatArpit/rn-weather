package com.app;

import android.content.Context;
import android.support.annotation.Nullable;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;

/**
 * Created by arpitgupta on 17/05/17.
 * Common utility methods.
 */
public class Utils {

    @Nullable
    public static JSONObject loadJsonData(Context context, String file) {
        String json;
        try {
            InputStream is = context.getAssets().open(file);
            int size = is.available();
            byte[] buffer = new byte[size];
            int read = is.read(buffer);
            is.close();
            if (read == 0) {
                return null;
            }
            json = new String(buffer, "UTF-8");
        } catch (IOException e) {
            printStackTrace(e);
            return null;
        }
        try {
            return new JSONObject(json);
        } catch (JSONException e) {
            printStackTrace(e);
            return null;
        }
    }

    public static void printStackTrace(Exception e) {
        e.printStackTrace();
    }
}
