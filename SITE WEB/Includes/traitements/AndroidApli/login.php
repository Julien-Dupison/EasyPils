<?php
	include "../../database.php";

	$username = $_POST['username'];
	$password = $_POST['password'];

	$sql = "SELECT id_pat FROM login_patient WHERE username_patient = '$username' AND password_patient = '$password'";
	$res = $db->query($sql);

	$response = array();

	if($res = $res->fetch(PDO::FETCH_ASSOC)){
		$code = "login_success";
		$id_pat = $res['id_pat'];
		$message = $id_pat;
		array_push($response,array("code"=>$code,"message"=>$message));
		echo json_encode(array("server_response"=>$response));
	} else {
		$code = "login_fail";
		$message = "Identification ratee, veuillez reessayer";
		array_push($response,array("code"=>$code,"message"=>$message));
		echo json_encode(array("server_response"=>$response));
	}

?>
