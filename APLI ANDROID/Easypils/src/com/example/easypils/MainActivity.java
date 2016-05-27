package com.example.easypils;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends Activity {
	
	EditText username;
	EditText password;
	AlertDialog.Builder builder;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		getActionBar().setTitle("EasyPils");
	}
	
	public void SubmitConnection(View v){
		
		username = (EditText)findViewById(R.id.username);
		password = (EditText)findViewById(R.id.password);
		
		String usernameValue = username.getText().toString();
		String passwordValue = password.getText().toString();
		
		if(usernameValue.equals("")||passwordValue.equals("")){
			builder = new AlertDialog.Builder(MainActivity.this);
			builder.setTitle("Erreur :");
			builder.setMessage("Veuillez renseigner vos identifiants");
			builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
				@Override
				public void onClick(DialogInterface dialog, int which) {
					dialog.dismiss();
				}
			});
			AlertDialog alertDialog = builder.create();
			alertDialog.show();
		} else {
			BackgroundTask backgroundTask = new BackgroundTask(MainActivity.this);
			backgroundTask.execute("login",usernameValue,passwordValue);
		}
	}
	
	public void SubmitidOubli(View v){
		Intent mailIntent = new Intent(MainActivity.this, DemandeMailActivity.class);
		MainActivity.this.startActivity(mailIntent);
	}
}
