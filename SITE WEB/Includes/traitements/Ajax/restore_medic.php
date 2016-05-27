<?php
	include "../../database.php";
	$id_medic = $_GET['id'];

	$sql = "UPDATE medicaments SET visibilite = 1 WHERE id_medic = $id_medic";
	$req = $db->prepare($sql);
	$req->execute();
?>
