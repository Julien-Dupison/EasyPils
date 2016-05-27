package com.example.easypils;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup.LayoutParams;
import android.widget.Button;
import android.widget.LinearLayout;

public class OrdoActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_ordonnances);
		getActionBar().setTitle("EasyPils");
		
		LinearLayout layout = (LinearLayout) findViewById(R.id.ordolayout);
		
		Bundle extras = getIntent().getExtras();
		String[][] ordonnances = (String[][]) extras.getSerializable("liste_ordonnances");
		
		for (int i = 0; i < ordonnances.length; i++) {
		    LinearLayout row = new LinearLayout(this);
		    row.setLayoutParams(new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT));
	        Button btnTag = new Button(this);
	        btnTag.setLayoutParams(new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
	        btnTag.setText(ordonnances[i][1]);
	        
	        int id =Integer.parseInt(ordonnances[i][0]);
	        btnTag.setId(id);
	        
	        btnTag.setOnClickListener(new View.OnClickListener() {
	             public void onClick(View v) {
	            	String idbtn = Integer.toString(v.getId());
	            	BackgroundTask backgroundTask = new BackgroundTask(OrdoActivity.this);
	         		backgroundTask.execute("ordonnance",idbtn);
	             }
	         });
	        
	        row.addView(btnTag);
		    layout.addView(row);
		}
	}
}
