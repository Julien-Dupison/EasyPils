package com.example.easypils;

import java.sql.*;

public class DBconnect {
	
	private Connection con;
	private Statement st;
	private ResultSet rs;
	
	public DBconnect(String dbname){
		try{
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost/"+dbname,"root","");
			st = con.createStatement();
		} catch(Exception Ex) {
			System.out.println("TEST");
			System.out.println("Error : "+Ex);
		}
	}
	
	public ResultSet select(String query){
		try{
			rs = st.executeQuery(query);
			return rs;
		} catch(Exception Ex) {
			System.out.println("Error : "+Ex);
			return rs;
		}
	}
	
	public void query(String query){
		try{
			st.executeUpdate(query);
		} catch(Exception Ex) {
			System.out.println("Error : "+Ex);
		}
	}
}
