<?php
	include "../../database.php";

	$id_pat = $_POST['id_pat'];
	$sql = "SELECT P.nom_pat, P.prenom_pat, P.mail_pat, P.dob_pat, P.adresse_pat, P.postal_pat, P.ville_pat, M.nom_med, M.adresse_med, M.postal_med, M.ville_med, M.telephone_med FROM patients P, medecins M WHERE P.id_med = M.id_med AND P.id_pat = $id_pat";
	$profil = $db->query($sql)->fetch(PDO::FETCH_ASSOC);

	$reponse = array();
	$code = "profil_success";
	array_push($reponse,array("code"=>$code,"message"=>$profil));

	echo json_encode(array("server_response"=>$reponse));
?>
