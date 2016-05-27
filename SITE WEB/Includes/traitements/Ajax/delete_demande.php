<?php
	include "../../database.php";
	$id_demande = $_GET['id_demande'];

	$sql = "UPDATE demandes_renouv SET visibilite = 0 WHERE id_drenouv = $id_demande";
	$req = $db->prepare($sql);
	$req->execute();

	echo $id_demande;
?>
