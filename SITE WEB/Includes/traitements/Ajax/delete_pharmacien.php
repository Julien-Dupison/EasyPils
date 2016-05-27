<?php
	include "../../database.php";
	$id_pharmacien = $_GET['id_pharmacien'];

	$sql = "UPDATE pharmaciens SET visibilite = 0 WHERE id_pharm = $id_pharmacien";
	$req = $db->prepare($sql);
	$req->execute();

	echo $id_pharmacien;
?>
