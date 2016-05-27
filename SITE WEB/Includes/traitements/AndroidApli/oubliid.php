<?php
	include "../../database.php";

	$mail = $_POST['mail'];

	$sql = "SELECT L.username_patient, L.password_patient FROM login_patient L, patients P WHERE P.id_pat = L.id_pat AND P.mail_pat = '$mail'";
	$res = $db->query($sql);

	$response = array();

	if($res = $res->fetch(PDO::FETCH_ASSOC)){
		$code = "oubli_success";
		$message = "Un e-mail contenant vos identifiants vous à été envoyé à l'adresse mail suivante : ".$mail;
		array_push($response,array("code"=>$code,"message"=>$message));
		echo json_encode(array("server_response"=>$response));

		$username = $res['username_patient'];
		$pass = $res['password_patient'];

		$message = "Suite à votre demande de rappel de vos identifiants, veuillez trouver les renseignement ci-dessous \n\n    username : $username\n    password : $pass\n\nCordialement. L'équipe d'EasyPils";
		$subject = "Identifiants EasyPils";
		mail($mail,$subject,$message);

	} else {
		$code = "oubli_fail";
		$message = "Cette adresse mail n'est pas valide";
		array_push($response,array("code"=>$code,"message"=>$message));
		echo json_encode(array("server_response"=>$response));
	}
