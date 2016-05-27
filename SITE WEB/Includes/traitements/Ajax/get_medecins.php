<?php
	header('Content-Type: application/json');
	include "../../database.php";

	if(!isset($_GET['rech_medecin'])||$_GET['rech_medecin'] == ""){
		$sql = "SELECT * FROM medecins M, specialite S WHERE M.spe_med = S.id_spe AND M.visibilite = 1 ORDER BY nom_med ASC";
	} else {
		$rech = $_GET['rech_medecin'];
		$sql = "SELECT * FROM medecins M, specialite S WHERE M.spe_med = S.id_spe AND M.visibilite = 1 AND (nom_med LIKE '%$rech%' OR lib_spe LIKE '%$rech%')  ORDER BY nom_med ASC";
	}
	$medecins = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($medecins);
?>
