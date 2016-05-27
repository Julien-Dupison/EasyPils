package com.example.easypils;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;

public class DemandeMailActivity extends Activity {

	EditText mail;
	AlertDialog.Builder builder;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_demande_mail);
		getActionBar().setTitle("EasyPils");
	}
	
	public void SubmitDemandeMail(View v){
		
		mail = (EditText)findViewById(R.id.mailIdOubli);
		String mailValue = mail.getText().toString();
		
		if(mailValue.equals("")){
			builder = new AlertDialog.Builder(DemandeMailActivity.this);
			builder.setTitle("Erreur :");
			builder.setMessage("Veuillez renseigner votre adresse e-mail");
			builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
				@Override
				public void onClick(DialogInterface dialog, int which) {
					dialog.dismiss();
				}
			});
			AlertDialog alertDialog = builder.create();
			alertDialog.show();
		} else {
			BackgroundTask backgroundTask = new BackgroundTask(DemandeMailActivity.this);
			backgroundTask.execute("demandeid",mailValue);
		}
	}
}
