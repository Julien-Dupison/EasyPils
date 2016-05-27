<?php
	include "../../database.php";
	$id_demande = $_GET['id'];

	$sql = "UPDATE demandes_renouv SET visibilite = 1 WHERE id_drenouv = $id_demande";
	$req = $db->prepare($sql);
	$req->execute();
?>
