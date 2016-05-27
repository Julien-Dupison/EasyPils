<?php
	include "../../database.php";

	$username = $_POST['username'];
	$password = $_POST['password'];
	$nom = $_POST['nom'];
	$prenom = $_POST['prenom'];
	$rue = $_POST['rue'];
	$ville = $_POST['ville'];
	$cp = $_POST['cp'];
	$id = $_POST['id'];

	$sql = "UPDATE pharmaciens SET nom_pharm = '$nom', prenom_pharm = '$prenom', login_pharm = '$username', password_pharm = '$password', adresse_pharm = '$rue', postal_pharm = '$cp', ville_pharm = '$ville' WHERE id_pharm = $id";
	$req = $db->prepare($sql);
	$req->execute();
?>
