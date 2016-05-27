<?php
	header('Content-Type: application/json');
	include "../../database.php";
	$id_medic = $_GET['id_medic'];

	$sql = "SELECT M.id_medic, M.nom_medic, M.dosage_medic, V.nom_vol FROM medicaments M, volume_medic V WHERE M.type_medic = V.id_vol AND M.id_medic = $id_medic";

	$medic = $db->query($sql)->fetch(PDO::FETCH_ASSOC);
	echo json_encode($medic);
?>
