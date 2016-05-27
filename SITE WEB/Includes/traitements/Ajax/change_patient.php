<?php
	include "../../database.php";

  $id = $_POST['patient'];
	$nom = $_POST['nom'];
	$prenom = $_POST['prenom'];
	$dob = $_POST['dob'];
	$rue = $_POST['rue'];
	$ville = $_POST['ville'];
	$cp = $_POST['cp'];

	$sql = "UPDATE patients SET nom_pat = '$nom', prenom_pat = '$prenom', dob_pat = '$dob', adresse_pat = '$rue', postal_pat = '$cp', ville_pat = '$ville' WHERE id_pat = $id";
	$req = $db->prepare($sql);
	$req->execute();
?>
