package com.k3rb3ros.employees_n_stuff;

import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class Employees_N_StuffActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
