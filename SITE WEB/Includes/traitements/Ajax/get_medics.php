<?php
	header('Content-Type: application/json');
	include "../../database.php";
	$_GET['nom_medic'];

	if(!isset($_GET['nom_medic'])||$_GET['nom_medic'] == ""){
		$sql = "SELECT M.id_medic, M.nom_medic, M.dosage_medic, V.nom_vol FROM medicaments M, volume_medic V WHERE M.type_medic = V.id_vol AND M.visibilite = 1 ORDER BY nom_medic ASC";
	} else {
		$nommedic = $_GET['nom_medic'];
		$sql = "SELECT M.id_medic, M.nom_medic, M.dosage_medic, V.nom_vol FROM medicaments M, volume_medic V WHERE M.type_medic = V.id_vol AND nom_medic LIKE '%$nommedic%' AND M.visibilite = 1 ORDER BY nom_medic ASC";
	}
	$medics = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($medics);
?>
