<?php
	include "../../database.php";

	$date = $_POST['date'];
	$id_medecin = $_POST['id_medecin'];
	$id_patient = $_POST['id_patient'];
	$id_pharm = $_POST['id_pharm'];
	$nb_renouv = $_POST['nb_renouv'];
	$medics = $_POST['medics'];

	$sql = "INSERT INTO ordonnances (id_pat, id_phar, id_med, date_ord, renouv_ord, nb_renouv_ord) VALUES (?,?,?,?,?,0)";
	$req = $db->prepare($sql);
	$req->execute(array($id_patient,$id_pharm,$id_medecin,$date,$nb_renouv));

	$sql = "SELECT MAX(num_ord) as max FROM ordonnances";
	$id = $db->query($sql)->fetch(PDO::FETCH_ASSOC);
	$id = $id['max'];

	foreach($medics as $key => $value){
		if($value != ""){
			$sql = "INSERT INTO ordo_medic (id_ord, id_medic, qte_mat, qte_midi, qte_soir, qte_nuit, duree) VALUES (?,?,?,?,?,?,?)";
			$req = $db->prepare($sql);
			$req->execute(array($id,$key,$value[0],$value[1],$value[2],$value[3],$value[4]));
		}
	}
?>
