<?php

	include "../../database.php";

	$nom = $_POST['nom'];
	$spe = $_POST['spe'];
	$rue = $_POST['rue'];
	$ville = $_POST['ville'];
	$cp = $_POST['cp'];
	$tel = $_POST['tel'];

	$sql = "INSERT INTO medecins (nom_med, spe_med, adresse_med, postal_med, ville_med, telephone_med) VALUES (?,?,?,?,?,?)";
	$req = $db->prepare($sql);
	$req->execute(array($nom,$spe,$rue,$cp,$ville,$tel));

?>
