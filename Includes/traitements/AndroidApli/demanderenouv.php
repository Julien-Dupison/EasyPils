<?php
	include "../../database.php";

	$id_ord = $_POST['id_ord'];
	$id_pat = $_POST['id_pat'];

	$date = getdate();
	if($date['mon'] <= 9){
		$date['mon'] = '0'.$date['mon'];
	}
	$date = $date['year'].'-'.$date['mon'].'-'.$date['mday'];

	$sql = "INSERT INTO demandes_renouv (date_drenouv, id_pat, id_ordo) VALUES (?,?,?)";
    $req = $db->prepare($sql);
    $req->execute(array($date,$id_pat,$id_ord));

	$reponse = array();
	$code = "demanderenouv_success";
	$return = "Demande envouyée avec succes !";
	array_push($reponse,array("code"=>$code,"message"=>$return));

	echo json_encode(array("server_response"=>$reponse));
?>
