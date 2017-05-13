package com.app.citylist;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.app.R;

import java.util.List;

/**
 * Created by arpitgupta on 12/05/17.
 * Adaptor for cities list.
 */
class CityListAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    private CitySelectListener mListener;
    private List<CityModel> mCities;

    CityListAdapter(CitySelectListener listener, List<CityModel> cities) {
        mListener = listener;
        mCities = cities;
    }

    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(parent.getContext());
        View v = inflater.inflate(R.layout.item_city, parent, false);
        return new CityViewHolder(v);
    }

    @Override
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int position) {
        CityViewHolder viewHolder = (CityViewHolder) holder;
        viewHolder.bind(position);
    }

    @Override
    public int getItemCount() {
        if (mCities == null) {
            return 0;
        }
        return mCities.size();
    }

    private class CityViewHolder extends RecyclerView.ViewHolder {

        private View mView;
        private TextView mTextName;

        CityViewHolder(View itemView) {
            super(itemView);
            mView = itemView;
            mTextName = (TextView) mView.findViewById(R.id.text_name);
        }

        void bind(final int position) {
            CityModel city = mCities.get(position);
            mTextName.setText(city.getName());
            mView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (mListener != null) {
                        mListener.onItemClick(position);
                    }
                }
            });
        }
    }
}
