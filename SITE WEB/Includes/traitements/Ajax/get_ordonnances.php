<?php
	header('Content-Type: application/json');
	include "../../database.php";

	$sql = "SELECT O.num_ord, O.date_ord, O.nb_renouv_ord, O.renouv_ord, PH.prenom_pharm, PH.nom_pharm, M.nom_med, PA.nom_pat, PA.prenom_pat
			FROM ordonnances O, pharmaciens PH, medecins M, patients PA
			WHERE O.id_phar = PH.id_pharm
			AND O.id_med = M.id_med
			AND O.id_pat = PA.id_pat
			AND O.visibilite = 1
			ORDER BY O.num_ord DESC;";
	$ordonnances = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
	$ordosreturn = array();
	foreach ($ordonnances as $ordonnance) {
			$dateformat = date_create($ordonnance['date_ord']);
			$ordonnance['date_ord'] = date_format($dateformat, 'd/m/Y');
			array_push($ordosreturn, $ordonnance);
	}

	echo json_encode($ordosreturn);
?>
