<?php
	include "../../database.php";
	$id_pharm = $_GET['id'];

	$sql = "UPDATE pharmaciens SET visibilite = 1 WHERE id_pharm = $id_pharm";
	$req = $db->prepare($sql);
	$req->execute();
?>
