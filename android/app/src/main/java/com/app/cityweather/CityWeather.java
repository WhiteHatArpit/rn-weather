package com.app.cityweather;

import android.os.Bundle;
import android.support.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

public class CityWeather extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "CityWeather";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                Bundle initialProps = new Bundle();
                initialProps.putString("city_key", getIntent().getStringExtra("city_key"));
                initialProps.putString("city_name", getIntent().getStringExtra("city_name"));
                return initialProps;
            }
        };
    }
}
