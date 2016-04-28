<?php
	include "../../database.php";
	$id_medic = $_GET['id_medic'];

	$sql = "UPDATE medicaments SET visibilite = 0 WHERE id_medic = $id_medic";
	$req = $db->prepare($sql);
	$req->execute();

	echo $id_medic;
?>
