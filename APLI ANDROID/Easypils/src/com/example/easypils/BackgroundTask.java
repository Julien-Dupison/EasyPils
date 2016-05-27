package com.example.easypils;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;

public class BackgroundTask extends AsyncTask<String,Void,String> {
	
	String ip_locale = "192.168.40.57";
	
	String login_url = "http://"+ip_locale+"/EasyPils/includes/traitements/AndroidApli/login.php";
	String pilulier_url = "http://"+ip_locale+"/EasyPils/includes/traitements/AndroidApli/pilulier.php";
	String ordonnances_url = "http://"+ip_locale+"/EasyPils/includes/traitements/AndroidApli/ordonnances.php";
	String ordonnance_url = "http://"+ip_locale+"/EasyPils/includes/traitements/AndroidApli/ordonnance.php";
	String profil_url = "http://"+ip_locale+"/EasyPils/includes/traitements/AndroidApli/profil.php";
	String oubliid_url = "http://"+ip_locale+"/EasyPils/includes/traitements/AndroidApli/oubliid.php";
	String demanderenouv_url = "http://"+ip_locale+"/EasyPils/includes/traitements/AndroidApli/demanderenouv.php";
	
	Context ctx;
	ProgressDialog progressDialog;
	Activity activity;
	AlertDialog.Builder builder;
	public BackgroundTask(Context ctx){
		this.ctx = ctx;
		activity = (Activity)ctx;
	}
	
	
	@Override
	protected void onPreExecute(){
		builder = new AlertDialog.Builder(activity);
		progressDialog = new ProgressDialog(ctx);
		progressDialog.setTitle("Connection au serveur");
		progressDialog.setMessage("recuperation en cours ...");
		progressDialog.setIndeterminate(true);
		progressDialog.setCancelable(false);
		progressDialog.show();
	}
	
	@Override
	protected String doInBackground(String... params){
		String method = params[0];
		if(method.equals("login")){
			try {
				
				URL url = new URL(login_url);
				HttpURLConnection httpURLConnection = (HttpURLConnection)url.openConnection();
				httpURLConnection.setRequestMethod("POST");
				httpURLConnection.setDoOutput(true);
				httpURLConnection.setDoInput(true);
				OutputStream outputStream = httpURLConnection.getOutputStream();
				BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream, "UTF-8"));
				
				String username = params[1];
				String password = params[2];
				
				String data = URLEncoder.encode("username","UTF-8")+"="+URLEncoder.encode(username,"UTF-8")+"&"+URLEncoder.encode("password","UTF-8")+"="+URLEncoder.encode(password,"UTF-8");
				bufferedWriter.write(data);
				bufferedWriter.flush();
				bufferedWriter.close();
				outputStream.close();
				
				InputStream inputStream = httpURLConnection.getInputStream();
				BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
				StringBuilder stringBuilder = new StringBuilder();
				String line = "";
				while((line = bufferedReader.readLine()) != null){
					stringBuilder.append(line+"\n");
				}
				httpURLConnection.disconnect();
				Thread.sleep(2000);
				return stringBuilder.toString().trim();
				
			} catch(MalformedURLException e) {
				e.printStackTrace();
			} catch(IOException e){
				e.printStackTrace();
			} catch(InterruptedException e){
				e.printStackTrace();
			}
		} else if(method.equals("pilulier")){
			
			String periode = params[1];
			String id_pat = params[2];
			
			try {
				
				URL url = new URL(pilulier_url);
				
				HttpURLConnection httpURLConnection = (HttpURLConnection)url.openConnection();
				httpURLConnection.setRequestMethod("POST");
				httpURLConnection.setDoOutput(true);
				httpURLConnection.setDoInput(true);
				
				OutputStream outputStream = httpURLConnection.getOutputStream();
				BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream, "UTF-8"));
				
				String data = URLEncoder.encode("periode","UTF-8")+"="+URLEncoder.encode(periode,"UTF-8")+"&"+URLEncoder.encode("id_pat","UTF-8")+"="+URLEncoder.encode(id_pat,"UTF-8");
				bufferedWriter.write(data);
				bufferedWriter.flush();
				bufferedWriter.close();
				outputStream.close();
				
				InputStream inputStream = httpURLConnection.getInputStream();
				BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
				StringBuilder stringBuilder = new StringBuilder();
				String line = "";
				while((line = bufferedReader.readLine()) != null){
					stringBuilder.append(line+"\n");
				}
				httpURLConnection.disconnect();
				Thread.sleep(500);
				return stringBuilder.toString().trim();
				
			} catch(MalformedURLException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
			
		} else if(method.equals("ordonnances")){
			
			String id_pat = params[1];
			
			try {
				URL url = new URL(ordonnances_url);
				
				HttpURLConnection httpURLConnection = (HttpURLConnection)url.openConnection();
				httpURLConnection.setRequestMethod("POST");
				httpURLConnection.setDoOutput(true);
				httpURLConnection.setDoInput(true);
				
				OutputStream outputStream = httpURLConnection.getOutputStream();
				BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream, "UTF-8"));
				
				String data = URLEncoder.encode("id_pat","UTF-8")+"="+URLEncoder.encode(id_pat,"UTF-8");
				bufferedWriter.write(data);
				bufferedWriter.flush();
				bufferedWriter.close();
				outputStream.close();
				
				InputStream inputStream = httpURLConnection.getInputStream();
				BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
				StringBuilder stringBuilder = new StringBuilder();
				String line = "";
				while((line = bufferedReader.readLine()) != null){
					stringBuilder.append(line+"\n");
				}
				httpURLConnection.disconnect();
				Thread.sleep(500);
				return stringBuilder.toString().trim();
				
			} catch(MalformedURLException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		} else if(method.equals("profil")){
			String id_pat = params[1];
			
			try {
				URL url = new URL(profil_url);
				
				HttpURLConnection httpURLConnection = (HttpURLConnection)url.openConnection();
				httpURLConnection.setRequestMethod("POST");
				httpURLConnection.setDoOutput(true);
				httpURLConnection.setDoInput(true);
				
				OutputStream outputStream = httpURLConnection.getOutputStream();
				BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream, "UTF-8"));
				
				String data = URLEncoder.encode("id_pat","UTF-8")+"="+URLEncoder.encode(id_pat,"UTF-8");
				bufferedWriter.write(data);
				bufferedWriter.flush();
				bufferedWriter.close();
				outputStream.close();
				
				InputStream inputStream = httpURLConnection.getInputStream();
				BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
				StringBuilder stringBuilder = new StringBuilder();
				String line = "";
				while((line = bufferedReader.readLine()) != null){
					stringBuilder.append(line+"\n");
				}
				httpURLConnection.disconnect();
				Thread.sleep(500);
				return stringBuilder.toString().trim();
				
			} catch(MalformedURLException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		} else if(method.equals("demandeid")){
			
			String mail = params[1];
			
			try {
				URL url = new URL(oubliid_url);
				
				HttpURLConnection httpURLConnection = (HttpURLConnection)url.openConnection();
				httpURLConnection.setRequestMethod("POST");
				httpURLConnection.setDoOutput(true);
				httpURLConnection.setDoInput(true);
				
				OutputStream outputStream = httpURLConnection.getOutputStream();
				BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream, "UTF-8"));
				
				String data = URLEncoder.encode("mail","UTF-8")+"="+URLEncoder.encode(mail,"UTF-8");
				bufferedWriter.write(data);
				bufferedWriter.flush();
				bufferedWriter.close();
				outputStream.close();
				
				InputStream inputStream = httpURLConnection.getInputStream();
				BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
				StringBuilder stringBuilder = new StringBuilder();
				String line = "";
				while((line = bufferedReader.readLine()) != null){
					stringBuilder.append(line+"\n");
				}
				httpURLConnection.disconnect();
				Thread.sleep(500);
				return stringBuilder.toString().trim();
				
			} catch(MalformedURLException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		} else if(method.equals("ordonnance")){
			String id = params[1];
			try {
				URL url = new URL(ordonnance_url);
				
				HttpURLConnection httpURLConnection = (HttpURLConnection)url.openConnection();
				httpURLConnection.setRequestMethod("POST");
				httpURLConnection.setDoOutput(true);
				httpURLConnection.setDoInput(true);
				
				OutputStream outputStream = httpURLConnection.getOutputStream();
				BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream, "UTF-8"));
				
				String data = URLEncoder.encode("id_ordo","UTF-8")+"="+URLEncoder.encode(id,"UTF-8");
				bufferedWriter.write(data);
				bufferedWriter.flush();
				bufferedWriter.close();
				outputStream.close();
				
				InputStream inputStream = httpURLConnection.getInputStream();
				BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
				StringBuilder stringBuilder = new StringBuilder();
				String line = "";
				while((line = bufferedReader.readLine()) != null){
					stringBuilder.append(line+"\n");
				}
				httpURLConnection.disconnect();
				Thread.sleep(500);
				return stringBuilder.toString().trim();
			} catch(MalformedURLException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
		} else if(method.equals("demanderenouv")){
			String id_ord = params[1];
			String id_pat = params[2];
			
			try {
				URL url = new URL(demanderenouv_url);
				
				HttpURLConnection httpURLConnection = (HttpURLConnection)url.openConnection();
				httpURLConnection.setRequestMethod("POST");
				httpURLConnection.setDoOutput(true);
				httpURLConnection.setDoInput(true);
				
				OutputStream outputStream = httpURLConnection.getOutputStream();
				BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream, "UTF-8"));
				
				String data = URLEncoder.encode("id_ord","UTF-8")+"="+URLEncoder.encode(id_ord,"UTF-8")+"&"+URLEncoder.encode("id_pat","UTF-8")+"="+URLEncoder.encode(id_pat,"UTF-8");;
				bufferedWriter.write(data);
				bufferedWriter.flush();
				bufferedWriter.close();
				outputStream.close();
				
				InputStream inputStream = httpURLConnection.getInputStream();
				BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
				StringBuilder stringBuilder = new StringBuilder();
				String line = "";
				while((line = bufferedReader.readLine()) != null){
					stringBuilder.append(line+"\n");
				}
				httpURLConnection.disconnect();
				Thread.sleep(500);
				return stringBuilder.toString().trim();
			} catch(MalformedURLException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		return null;
		
	}
	
	@Override
	protected void onProgressUpdate(Void... params){
		super.onProgressUpdate(params);
	}
	
	@Override
	protected void onPostExecute(String json){
		try {
			progressDialog.dismiss();
			
			JSONObject jsonObject = new JSONObject(json);
			JSONArray jsonArray = jsonObject.getJSONArray("server_response");
			JSONObject JO = jsonArray.getJSONObject(0);
			
			String code = JO.getString("code");
			
			if(code.equals("login_success")){
				String message = JO.getString("message");
				Intent homeIntent = new Intent(activity, HomeActivity.class);
				homeIntent.putExtra("id_pat",message);
				activity.startActivity(homeIntent);
			}
			
			else if(code.equals("login_fail")){
				String message = JO.getString("message");
				showDialog("Oops !",message,code);
			}
			
			else if(code.equals("pilulier_success")){
				JSONArray medicaments = JO.getJSONArray("message");
				String periode = JO.getString("periode");
				
				String listemedic = "";
				for (int i = 0; i < medicaments.length(); i++) {
					JSONObject medicament = medicaments.getJSONObject(i);
					String designation = medicament.getString("designation");
					String quantite = medicament.getString("quantite");
					if(!quantite.equals("0")){
						listemedic += "- "+quantite+" "+designation+"\n";
					}
				}
				
				Intent PilulieraffichageIntent = new Intent(activity, PilulieraffichageActivity.class);
				PilulieraffichageIntent.putExtra("listeMedic",listemedic);
				PilulieraffichageIntent.putExtra("periode",periode);
				activity.startActivity(PilulieraffichageIntent);
			
			} else if (code.equals("ordonnances_success")){
				JSONArray ordonnances = JO.getJSONArray("message");
				
				String[][] donnees_ordonnances = new String[ordonnances.length()][2];	
				for (int i = 0; i < ordonnances.length(); i++) {
					JSONObject ordonnance = ordonnances.getJSONObject(i);
					String idOrdo = ordonnance.getString("num_ord");
					String dateOrdo = ordonnance.getString("date_ord");
					donnees_ordonnances[i][0] = idOrdo;
					donnees_ordonnances[i][1] = dateOrdo;
				}
				Intent ordonnancesIntent = new Intent(activity, OrdoActivity.class);
				Bundle donnees = new Bundle();
				donnees.putSerializable("liste_ordonnances", donnees_ordonnances);
				ordonnancesIntent.putExtras(donnees);
				activity.startActivity(ordonnancesIntent);
			
			} else if (code.equals("profil_success")){
				JSONObject profil = JO.getJSONObject("message");
				
				String nom_pat = profil.getString("nom_pat");
				String prenom_pat = profil.getString("prenom_pat");
				String mail_pat = profil.getString("mail_pat");
				String dob_pat = profil.getString("dob_pat");
				String adresse_pat = profil.getString("adresse_pat");
				String postal_pat = profil.getString("postal_pat");
				String ville_pat = profil.getString("ville_pat");
				String nom_med = profil.getString("nom_med");
				String adresse_med = profil.getString("adresse_med");
				String postal_med = profil.getString("postal_med");
				String ville_med = profil.getString("ville_med");
				String telephone_med = profil.getString("telephone_med");
				
				Intent profilIntent = new Intent(activity, ProfilActivity.class);
				profilIntent.putExtra("nom_pat",nom_pat);
				profilIntent.putExtra("prenom_pat",prenom_pat);
				profilIntent.putExtra("mail_pat",mail_pat);
				profilIntent.putExtra("dob_pat",dob_pat);
				profilIntent.putExtra("adresse_pat",adresse_pat);
				profilIntent.putExtra("postal_pat",postal_pat);
				profilIntent.putExtra("ville_pat",ville_pat);
				profilIntent.putExtra("nom_med",nom_med);
				profilIntent.putExtra("adresse_med",adresse_med);
				profilIntent.putExtra("postal_med",postal_med);
				profilIntent.putExtra("ville_med",ville_med);
				profilIntent.putExtra("telephone_med",telephone_med);
				
				activity.startActivity(profilIntent);
			} else if (code.equals("oubli_success")){
				String message = JO.getString("message");
				showDialog("Bravo !",message,code);
			} else if (code.equals("oubli_fail")){
				String message = JO.getString("message");
				showDialog("Oops !",message,code);
				
				
			} else if (code.equals("ordonnance_success")){
				
				JSONObject ordonnance = JO.getJSONObject("message");
				Intent intent = new Intent(activity, OrdonnanceActivity.class);
				Bundle b = new Bundle();
				b.putString("Array",ordonnance.toString());
				intent.putExtras(b);
				activity.startActivity(intent);
			} else if (code.equals("demanderenouv_success")){
				String message = JO.getString("message");
				showDialog("Bravo",message,code);
			}
			
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	
	public void showDialog(String title, String message, String code){
		builder.setTitle(title);
		builder.setMessage(message);
		builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which) {
				dialog.dismiss();
			}
		});
		AlertDialog alertDialog = builder.create();
		alertDialog.show();
	}
}
