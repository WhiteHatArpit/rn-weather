package com.app;

import android.content.Context;
import android.content.Intent;

import com.app.cityweather.CityWeather;

/**
 * Created by arpitgupta on 13/05/17.
 * Collection of app routes.
 */
public class NavigationUtils {

    public static void
    routeToCityWeather(Context context, String cityName) {
        if (context == null) {
            return;
        }
        Intent i = new Intent(context, CityWeather.class);
        i.putExtra("city_name", cityName);
        context.startActivity(i);
    }
}
