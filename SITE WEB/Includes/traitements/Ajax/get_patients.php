<?php
	header('Content-Type: application/json');
	include "../../database.php";

	if(!isset($_GET['nom_patient'])||$_GET['nom_patient'] == ""){
		$sql = "SELECT id_pat, nom_pat, prenom_pat, dob_pat FROM patients WHERE visibilite = 1 ORDER BY nom_pat ASC";
	} else {
		$nompat = $_GET['nom_patient'];
		$sql = "SELECT id_pat, nom_pat, prenom_pat, dob_pat FROM patients WHERE visibilite = 1 AND nom_pat LIKE '%$nompat%'  ORDER BY nom_pat ASC";
	}
	$patients = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
	$patientreturn = array();
	foreach ($patients as $patient) {
			$dateformat = date_create($patient['dob_pat']);
			$patient['dob_pat'] = date_format($dateformat, 'd/m/Y');
			array_push($patientreturn, $patient);
	}
	echo json_encode($patientreturn);
	
?>
