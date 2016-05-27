package com.example.easypils;

import java.sql.SQLException;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;

public class PilulierActivity extends Activity {

	String id;
	String result;
	DBconnect db;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_pilulier);
		
		Bundle extras = getIntent().getExtras();
		this.id = extras.getString("id_pat");
	}
	
	public void getPilulierMatin(View v) throws SQLException{
		BackgroundTask backgroundTask = new BackgroundTask(PilulierActivity.this);
		backgroundTask.execute("pilulier","matin",this.id);
	}

	public void getPilulierMidi(View v){
		BackgroundTask backgroundTask = new BackgroundTask(PilulierActivity.this);
		backgroundTask.execute("pilulier","midi",this.id);
	}

	public void getPilulierSoir(View v){
		BackgroundTask backgroundTask = new BackgroundTask(PilulierActivity.this);
		backgroundTask.execute("pilulier","soir",this.id);
	}

	public void getPilulierNuit(View v){
		BackgroundTask backgroundTask = new BackgroundTask(PilulierActivity.this);
		backgroundTask.execute("pilulier","nuit",this.id);
	}
}
