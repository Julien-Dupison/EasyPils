<?php
	include "../../database.php";

	$nom = $_POST['nom_medic'];
	$dosage = $_POST['dosage_medic'];
	$volume = $_POST['volume_medic'];

	$sql = "INSERT INTO medicaments (nom_medic, type_medic, dosage_medic) VALUES (?,?,?)";
	$req = $db->prepare($sql);
	$req->execute(array($nom,$volume,$dosage));
?>
