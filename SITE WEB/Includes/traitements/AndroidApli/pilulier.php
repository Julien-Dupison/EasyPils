<?php
	include "../../database.php";

	$periode = $_POST['periode'];
	$id_pat = $_POST['id_pat'];

	$sql = "SELECT num_ord, date_ord FROM ordonnances WHERE id_pat = $id_pat";
	$ordonnances = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

	switch($periode){
		case 'matin' :
			$selqte = "qte_mat";
		break;

		case 'midi' :
			$selqte = "qte_midi";
		break;

		case 'soir' :
			$selqte = "qte_soir";
		break;

		case 'nuit' :
			$selqte = "qte_nuit";
		break;
	}

	$tabmedic = array();
	$tabmedic2 = array();

	foreach ($ordonnances as $ordonnance) {
		$id_ord = $ordonnance['num_ord'];
		$date_ord = $ordonnance['date_ord'];

		$sql = "SELECT $selqte, OM.id_medic, M.nom_medic, M.dosage_medic, VM.nom_vol FROM ordo_medic OM, medicaments M, volume_medic VM WHERE M.id_medic = OM.id_medic AND M.type_medic = VM.id_vol AND id_ord = $id_ord AND '$date_ord' <= CURDATE() AND CURDATE() <= DATE_ADD('$date_ord', INTERVAL OM.duree DAY)";
		$medicaments = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

		foreach ($medicaments as $medicament) {
			$id_medic = $medicament['id_medic'];

			$nom_medic = $medicament['nom_medic'];
			$nom_vol = $medicament['nom_vol'];
			$dosage_medic = $medicament['dosage_medic'];

			$designation = $nom_medic." ".$nom_vol." ".$dosage_medic;

			$qte = $medicament[$selqte];

			$tabmedic[$id_medic]['designation'] = $designation;
			$tabmedic[$id_medic]['quantite'] += $qte;
		}

	}

	foreach($tabmedic as $row){
		array_push($tabmedic2, $row);
	}

	$reponse = array();
	$code = "pilulier_success";
	array_push($reponse,array("code"=>$code,"message"=>$tabmedic2,"periode"=>$periode));
	echo json_encode(array("server_response"=>$reponse));
?>
