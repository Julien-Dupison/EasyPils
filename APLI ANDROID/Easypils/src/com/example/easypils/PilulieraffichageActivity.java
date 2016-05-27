package com.example.easypils;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;

public class PilulieraffichageActivity extends Activity {

	String listeMedic;
	String periode;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_pilulieraffichage);
		
		Bundle extras = getIntent().getExtras();
		this.listeMedic = extras.getString("listeMedic");
		this.periode = extras.getString("periode");
		
		TextView displayListeMedic = (TextView)findViewById(R.id.DisplayListeOrdo);
		displayListeMedic.setText(this.listeMedic);
		
		TextView displayPeriode = (TextView)findViewById(R.id.periodePillulier);
		displayPeriode.setText(this.periode);
	}
}
