<?php
	include "../../database.php";

	$id_medic = $_POST['id_medic'];
	$nom_medic = $_POST['nom_medic'];
	$dosage_medic = $_POST['dosage_medic'];
	$volume_medic = $_POST['volume_medic'];

	$sql = "UPDATE medicaments SET nom_medic = '$nom_medic', dosage_medic = '$dosage_medic', type_medic = $volume_medic WHERE id_medic = $id_medic";
	$req = $db->prepare($sql);
	$req->execute();
?>
