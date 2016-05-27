<?php
	include "../../database.php";
	$id_medecin = $_GET['id'];

	$sql = "UPDATE medecins SET visibilite = 1 WHERE id_med = $id_medecin";
	$req = $db->prepare($sql);
	$req->execute();
?>
