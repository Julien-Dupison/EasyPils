<?php
	include "../../database.php";

	$libelle = $_POST['nom_volume'];

	$sql = "INSERT INTO volume_medic (nom_vol) VALUES (?)";
	$req = $db->prepare($sql);
	$req->execute(array($libelle));
?>
