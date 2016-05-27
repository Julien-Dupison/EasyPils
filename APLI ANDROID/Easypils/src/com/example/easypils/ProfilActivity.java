package com.example.easypils;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;

public class ProfilActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_profil);
		getActionBar().setTitle("EasyPils"); 
		
		Bundle extras = getIntent().getExtras();
		
		String nom_pat = extras.getString("nom_pat");
		String prenom_pat = extras.getString("prenom_pat");
		String mail_pat = extras.getString("mail_pat");
		String dob_pat = extras.getString("dob_pat");
		String adresse_pat = extras.getString("adresse_pat");
		String postal_pat = extras.getString("postal_pat");
		String ville_pat = extras.getString("ville_pat");
		
		String nom_med = extras.getString("nom_med");
		String adresse_med = extras.getString("adresse_med");
		String postal_med = extras.getString("postal_med");
		String ville_med = extras.getString("ville_med");
		String telephone_med = extras.getString("telephone_med");
		
		TextView nompat = (TextView)findViewById(R.id.nompat);
		nompat.setText(nom_pat);
		TextView prenompat = (TextView)findViewById(R.id.prenompat);
		prenompat.setText(prenom_pat);
		TextView mailpat = (TextView)findViewById(R.id.mailpat);
		mailpat.setText(mail_pat);
		TextView dobpat = (TextView)findViewById(R.id.dobpat);
		dobpat.setText(dob_pat);
		TextView adressepat = (TextView)findViewById(R.id.adressepat);
		adressepat.setText(adresse_pat+", "+postal_pat+" "+ville_pat);
		
		TextView nommed = (TextView)findViewById(R.id.nommed);
		nommed.setText(nom_med);
		TextView adressemed = (TextView)findViewById(R.id.adressemed);
		adressemed.setText(adresse_med+", "+postal_med+" "+ville_med);
		TextView telmed = (TextView)findViewById(R.id.telmed);
		telmed.setText(telephone_med);
	}
}
