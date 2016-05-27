<?php
	include "../../database.php";
	$id_patient = $_GET['id'];

	$sql = "UPDATE patients SET visibilite = 1 WHERE id_pat = $id_patient";
	$req = $db->prepare($sql);
	$req->execute();
?>
