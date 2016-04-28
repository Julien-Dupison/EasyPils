<?php
	header('Content-Type: application/json');
	include "../../database.php";
	$id_patient = $_GET['id_patient'];
	$sql = "SELECT * FROM patients WHERE id_pat = $id_patient";
	$patient = $db->query($sql)->fetch(PDO::FETCH_ASSOC);

	$dateformat = date_create($patient['dob_pat']);
	$patient['dob_pat'] = date_format($dateformat, 'd/m/Y');

	$id_med = $patient['id_med'];
	if($patient != null){
		$sql = "SELECT * FROM medecins WHERE id_med = $id_med";
		$medecin = $db->query($sql)->fetch(PDO::FETCH_ASSOC);

		$sql = "SELECT * FROM ordonnances WHERE id_pat = $id_patient ORDER BY num_ord DESC";
		$ordonnances = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

		$sql = "SELECT id_alerg, libellé FROM alergies WHERE id_pat = $id_patient";
		$alergies = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

		$sql = "SELECT * FROM messages WHERE id_pat = $id_patient";
		$messages = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

		$ordosreturn = array();
		foreach ($ordonnances as $ordonnance) {
				$dateformat = date_create($ordonnance['date_ord']);
				$ordonnance['date_ord'] = date_format($dateformat, 'd/m/Y');
				array_push($ordosreturn, $ordonnance);
			};

		$return = array (
		    "patient" => $patient,
		    "medecin" => $medecin,
			"ordonnances" => $ordosreturn,
			"alergies" => $alergies,
		);
		echo json_encode($return);
	}
?>
