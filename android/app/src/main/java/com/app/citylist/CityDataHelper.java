package com.app.citylist;

import android.content.Context;
import android.support.annotation.NonNull;

import com.app.Utils;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by arpitgupta on 17/05/17.
 * Data helper to get cities list.
 */
class CityDataHelper {

    @NonNull
    static List<CityModel> getData(Context context) {
        ArrayList<CityModel> cities = new ArrayList<>();
        JSONObject data = Utils.loadJsonData(context, "cities.json");
        if (data == null) {
            return cities;
        }
        JSONArray citiesJsonArray = data.optJSONArray("cities");
        if (citiesJsonArray == null) {
            return cities;
        }
        try {
            cities = new Gson().fromJson(
                    citiesJsonArray.toString(),
                    new TypeToken<ArrayList<CityModel>>() {
                    }.getType()
            );
        } catch (JsonSyntaxException e) {
            Utils.printStackTrace(e);
        }
        return cities;
    }
}

