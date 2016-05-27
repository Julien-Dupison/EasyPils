<?php
	header('Content-Type: application/json');
	include "../../database.php";

	if(!isset($_GET['rech_pharmacien'])||$_GET['rech_pharmacien'] == ""){
		$sql = "SELECT * FROM pharmaciens WHERE visibilite = 1 ORDER BY nom_pharm ASC";
	} else {
		$rech = $_GET['rech_pharmacien'];
		$sql = "SELECT * FROM pharmaciens WHERE visibilite = 1 AND (nom_pharm LIKE '%$rech%' OR prenom_pharm LIKE '%$rech%') ORDER BY nom_pharm ASC";
	}
	$pharmaciens = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($pharmaciens);
?>
