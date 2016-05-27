package com.example.easypils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

public class OrdonnanceActivity extends Activity {

	private String id_ord;
	private String id_pat;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_ordonnance);
		getActionBar().setTitle("EasyPils");
		
		Bundle b = getIntent().getExtras();
		String Array = b.getString("Array");
		try {
			JSONObject ordonnance = new JSONObject(Array);
			
			String string_data_ordonnance = ordonnance.getString("ordonnance");
			String string_data_medecin = ordonnance.getString("medecin");
			String string_data_patient = ordonnance.getString("patient");
			String string_data_pharmacien = ordonnance.getString("pharmacien");
			String string_data_medicaments = ordonnance.getString("medicaments");
			String string_data_renouvellements = ordonnance.getString("renouvellements");
			
			JSONObject data_ordonnance = new JSONObject(string_data_ordonnance);
			JSONObject data_medecin = new JSONObject(string_data_medecin);
			JSONObject data_patient = new JSONObject(string_data_patient);
			JSONObject data_pharmacien = new JSONObject(string_data_pharmacien);
			
			JSONArray data_medicaments = new JSONArray(string_data_medicaments);
			JSONArray data_renouvellements = new JSONArray(string_data_renouvellements);
			
			String id_ord = data_ordonnance.getString("num_ord");
			String id_pat = data_ordonnance.getString("id_pat");
			this.id_ord = id_ord;
			this.id_pat = id_pat;
			
			TextView dateordo = (TextView)findViewById(R.id.date_ordonnace);
			dateordo.setText("Le : "+data_ordonnance.getString("date_ord"));
			
			TextView medordo = (TextView)findViewById(R.id.medecin_ordonnance);
			medordo.setText("Prescrit par : Dr "+data_medecin.getString("nom_med"));
			
			TextView prepordo = (TextView)findViewById(R.id.preparateur_ordonnance);
			prepordo.setText("Préparée par : "+data_pharmacien.getString("prenom_pharm")+" "+data_pharmacien.getString("nom_pharm"));
			
			String listemedic = "";
			for (int i = 0; i < data_medicaments.length(); i++) {
				JSONObject medicament = data_medicaments.getJSONObject(i);
				String designation = medicament.getString("nom_medic")+" "+medicament.getString("dosage_medic")+" "+medicament.getString("nom_vol");
				String quantite = "      "+medicament.getString("qte_mat")+" Matin, "+medicament.getString("qte_midi")+" Midi, "+medicament.getString("qte_soir")+" Soir, "+medicament.getString("qte_nuit")+" Nuit";
				if(i != data_medicaments.length()){
					listemedic += "- "+designation+"\n"+quantite+"\n\n";
				} else {
					listemedic += "- "+designation+"\n"+quantite;
				}
			}	
			TextView medicordo = (TextView)findViewById(R.id.medicament_ordonnance);
			medicordo.setText(listemedic);
			
			String listerenouv = "";
			for (int i = 0; i < data_renouvellements.length(); i++) {
				JSONObject renouvellement = data_renouvellements.getJSONObject(i);
				String ligne = "Le "+renouvellement.getString("date_renouv")+", Par "+renouvellement.getString("prenom_pharm")+" "+renouvellement.getString("nom_pharm");
				listerenouv += "- "+ligne+"\n";
			}
			TextView renouvordo = (TextView)findViewById(R.id.renouvellements_ordonnance);
			renouvordo.setText(listerenouv);
			
			
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	
	public void SendDemande(View v){
		BackgroundTask backgroundTask = new BackgroundTask(OrdonnanceActivity.this);
		backgroundTask.execute("demanderenouv",this.id_ord,this.id_pat);
	}
}
