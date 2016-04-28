<?php
	$id_pat = $_POST['id_pat'];

	$sql = "SELECT num_ord, date_ord FROM ordonnances WHERE id_pat = $id_pat";

	$reponse = array();
	$code = "ordonnances_success";
	array_push($reponse,array("code"=>$code,"message"=>$tabordo));
	echo json_encode(array("server_response"=>$reponse));
?>
