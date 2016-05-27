<?php
	include "../../database.php";

	$id_pat = $_POST['id_pat'];

	$sql = "SELECT num_ord, date_ord FROM ordonnances WHERE id_pat = $id_pat ORDER BY num_ord DESC";
	$ordonnances = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
	$tabordo = array();
	foreach ($ordonnances as $ordonnance) {
		$dateformat = date_create($ordonnance['date_ord']);
		$ordonnance['date_ord'] = date_format($dateformat, 'd/m/Y');
		array_push($tabordo,$ordonnance);
	}

	$reponse = array();
	$code = "ordonnances_success";
	array_push($reponse,array("code"=>$code,"message"=>$tabordo));

	echo json_encode(array("server_response"=>$reponse));
?>
