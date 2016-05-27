<?php

	header('Content-Type: application/json');
	include "../../database.php";

	$id_medecin = $_GET['id_medecin'];
	$sql = "SELECT * FROM medecins M, specialite S WHERE M.spe_med = S.id_spe AND id_med = $id_medecin";
	$medecin = $db->query($sql)->fetch(PDO::FETCH_ASSOC);

	if($medecin != null){

		$sql = "SELECT * FROM patients WHERE id_med = $id_medecin";
		$patients = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

		$patientsreturn = array();
		foreach ($patients as $patient) {
				$dateformat = date_create($patient['dob_pat']);
				$patient['dob_pat'] = date_format($dateformat, 'd/m/Y');
				array_push($patientsreturn, $patient);
		}

		$sql = "SELECT * FROM ordonnances O, patients P WHERE O.id_pat = P.id_pat AND O.id_med = $id_medecin ORDER BY num_ord DESC";
		$ordonnances = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

		$return = array (
		    "patients" => $patientsreturn,
			"ordonnances" => $ordonnances,
        	"medecin" => $medecin
		);
		echo json_encode($return);
	}

?>
