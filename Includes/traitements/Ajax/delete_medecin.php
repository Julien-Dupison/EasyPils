<?php
	include "../../database.php";
	$id_medecin = $_GET['id_medecin'];

	$sql = "UPDATE medecins SET visibilite = 0 WHERE id_med = $id_medecin";
	$req = $db->prepare($sql);
	$req->execute();

	echo $id_medecin;
?>
