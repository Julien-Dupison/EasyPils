package com.example.easypils;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class HomeActivity extends Activity {

	String id;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_home);
		getActionBar().setTitle("EasyPils"); 
		
		Bundle extras = getIntent().getExtras();
		this.id = extras.getString("id_pat");
	}
	
	public void gotoPilulier(View v){
		Intent pilulierIntent = new Intent(HomeActivity.this, PilulierActivity.class);
		pilulierIntent.putExtra("id_pat",id);
		HomeActivity.this.startActivity(pilulierIntent);
	}
	
	public void gotoOrdonnances(View v){
		BackgroundTask backgroundTask = new BackgroundTask(HomeActivity.this);
		backgroundTask.execute("ordonnances",this.id);
	}
	
	public void gotoProfil(View v){
		BackgroundTask backgroundTask = new BackgroundTask(HomeActivity.this);
		backgroundTask.execute("profil",this.id);
	}
}
