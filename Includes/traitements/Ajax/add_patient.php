<?php
	include "../../database.php";

	$nom = $_POST['nom'];
	$prenom = $_POST['prenom'];
	$dob = $_POST['dob'];
	$rue = $_POST['rue'];
	$ville = $_POST['ville'];
	$cp = $_POST['cp'];
	$med = $_POST['med'];

	$sql = "INSERT INTO patients (nom_pat, prenom_pat, dob_pat, adresse_pat, postal_pat, ville_pat, id_med) VALUES (?,?,?,?,?,?,?)";
	$req = $db->prepare($sql);
	$req->execute(array($nom,$prenom,$dob,$rue,$cp,$ville,$med));
?>
