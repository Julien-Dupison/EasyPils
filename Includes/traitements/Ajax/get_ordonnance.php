<?php
	header('Content-Type: application/json');
	include "../../database.php";

	$id_ordo = $_GET['id_ordonnance'];
	$sql = "SELECT * FROM ordonnances WHERE num_ord = $id_ordo";
	$ordonnance = $db->query($sql)->fetch(PDO::FETCH_ASSOC);

	$dateformat = date_create($ordonnance['date_ord']);
	$ordonnance['date_ord'] = date_format($dateformat, 'd/m/Y');

	$id_med = $ordonnance['id_med'];
	$id_pat = $ordonnance['id_pat'];
	$id_phar = $ordonnance['id_phar'];

	if($ordonnance != null){
		$sql = "SELECT id_med, nom_med FROM medecins WHERE id_med = $id_med";
		$medecin = $db->query($sql)->fetch(PDO::FETCH_ASSOC);

		$sql = "SELECT id_pat, nom_pat, prenom_pat FROM patients WHERE id_pat = $id_pat";
		$patient = $db->query($sql)->fetch(PDO::FETCH_ASSOC);

		$sql = "SELECT id_pharm, nom_pharm, prenom_pharm FROM pharmaciens WHERE id_pharm = $id_phar";
		$pharmacien =  $db->query($sql)->fetch(PDO::FETCH_ASSOC);

		$sql = "SELECT OM.qte_mat, OM.qte_midi, OM.qte_soir, OM.qte_nuit, OM.duree, MED.nom_medic,  MED.dosage_medic, VOL.nom_vol
				FROM ordo_medic OM, medicaments MED, volume_medic VOL
				WHERE id_ord = $id_ordo
				AND OM.id_medic = MED.id_medic
				AND MED.type_medic = VOL.id_vol";
		$medicaments =  $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

		$return = array (
		    "ordonnance" => $ordonnance,
		    "medecin" => $medecin,
			"patient" => $patient,
			"pharmacien" => $pharmacien,
			"medicaments" => $medicaments,
		);
		echo json_encode($return);
	}
?>
