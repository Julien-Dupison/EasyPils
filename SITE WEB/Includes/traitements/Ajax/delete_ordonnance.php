<?php
	include "../../database.php";
	$id_ordonnance = $_GET['id_ordonnance'];

	/* $sql = "DELETE FROM alergies WHERE id_pat = $id_patient";
	$req = $db->prepare($sql);
	$req->execute();

	$sql = "DELETE FROM messages WHERE id_pat = $id_patient";
	$req = $db->prepare($sql);
	$req->execute();

	$sql = "SELECT * FROM ordonnances WHERE id_pat = $id_patient";
	$ordos = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

	foreach ($ordos as $ordo) {
		$id_ord = $ordo['num_ord'];
		$sql = "DELETE FROM ordo_medic WHERE id_ord = $id_ord";
		$req = $db->prepare($sql);
		$req->execute();
	}

	$sql = "DELETE FROM ordonnances WHERE id_pat = $id_patient";
	$ordos = $db->prepare($sql);
	$ordos->execute();

	$sql = "DELETE FROM patients WHERE id_pat = $id_patient";
    $req = $db->prepare($sql);
    $req->execute(); */

	$sql = "UPDATE ordonnances SET visibilite = 0 WHERE num_ord = $id_ordonnance";
	$req = $db->prepare($sql);
	$req->execute();

?>
