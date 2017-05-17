package com.app.citylist;

import android.content.Context;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.TextView;

import com.app.NavigationUtils;
import com.app.R;

import java.util.List;

/**
 * Created by arpitgupta on 12/05/17.
 * Activity to show a list of cities.
 */
public class CityListActivity extends AppCompatActivity
        implements CitySelectListener {

    private static final int GRID_SIZE = 2;
    private Context mContext;
    private List<CityModel> mCities;
    private boolean mShowingGrid;

    private TextView mButtonToggleLayout;
    private RecyclerView mRecyclerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mContext = this;
        inflateUI();
        getData();
        populateUI();
    }

    public void inflateUI() {
        setContentView(R.layout.activity_cities_list);
        mButtonToggleLayout = (TextView) findViewById(R.id.button_toggle_layout);
        mRecyclerView = (RecyclerView) findViewById(R.id.recycler_view);
    }

    private void getData() {
        mCities = CityDataHelper.getData(this);
    }

    public void populateUI() {
        CityListAdapter adapter = new CityListAdapter(this, mCities);
        mRecyclerView.setAdapter(adapter);
        showListView();
        mButtonToggleLayout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mShowingGrid) {
                    showListView();
                } else {
                    showGridView();
                }
            }
        });
    }

    private void showListView() {
        mButtonToggleLayout.setText(R.string.city_list_button_label_grid);
        mShowingGrid = false;
        mRecyclerView.setLayoutManager(new GridLayoutManager(mContext, 1));
    }

    private void showGridView() {
        mButtonToggleLayout.setText(R.string.city_list_button_label_list);
        mShowingGrid = true;
        mRecyclerView.setLayoutManager(new GridLayoutManager(mContext, GRID_SIZE));
    }

    @Override
    public void onItemClick(int position) {
        CityModel city = mCities.get(position);
        NavigationUtils.routeToCityWeather(mContext, city.getName());
    }
}
