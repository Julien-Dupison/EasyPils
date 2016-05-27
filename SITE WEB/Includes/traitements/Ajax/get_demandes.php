<?php
	header('Content-Type: application/json');
	include "../../database.php";

	$sql = "SELECT D.id_drenouv, D.date_drenouv, D.id_ordo, P.nom_pat FROM demandes_renouv D, patients P WHERE D.id_pat = P.id_pat AND D.visibilite = 1 ORDER BY D.id_drenouv DESC";
	$demandes = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($demandes);
?>
