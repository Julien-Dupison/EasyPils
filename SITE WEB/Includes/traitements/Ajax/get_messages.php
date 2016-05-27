<?php
	header('Content-Type: application/json');
	include "../../database.php";
	$id_patient = $_GET['id_patient'];

	$sql = "SELECT * FROM messages WHERE id_pat = $id_patient";
	$messages = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($messages);
?>
