<?php
	include "../../database.php";

  $id = $_POST['medecin'];
	$nom = $_POST['nom'];
	$spe = $_POST['spe'];
	$rue = $_POST['rue'];
	$ville = $_POST['ville'];
	$cp = $_POST['cp'];

	$sql = "UPDATE medecins SET nom_med = '$nom', spe_med = '$spe', adresse_med = '$rue', postal_med = '$cp', ville_med = '$ville' WHERE id_med = $id";
	$req = $db->prepare($sql);
	$req->execute();
?>
