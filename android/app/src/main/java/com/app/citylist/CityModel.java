package com.app.citylist;

import com.google.gson.annotations.SerializedName;

class CityModel {

    @SerializedName("name")
    private String name;

    String getName() {
        return name;
    }

    void setName(String name) {
        this.name = name;
    }
}
