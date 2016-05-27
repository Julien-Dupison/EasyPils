<?php
	header('Content-Type: application/json');
	include "../../database.php";

	if(isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST['id'])){
		$username = $_POST['username'];
		$password = $_POST['password'];
		$id = $_POST['id'];

		$sql = "SELECT id_pharm, nom_pharm, prenom_pharm, mail_pharm, login_pharm, password_pharm, adresse_pharm, postal_pharm, ville_pharm, img_pharm FROM pharmaciens WHERE login_pharm='$username' AND password_pharm='$password' AND id_pharm=$id";
		$sel = $db->query($sql)->fetch(PDO::FETCH_ASSOC);
		if($sel){
			$code = 'success';
			$return['code'] = $code;
			$return['message'] = $sel;
			echo json_encode($return);
		} else {
			$code = 'fail';
			$return['code'] = $code;
			$return['message'] = 'none';
			echo json_encode($return);
		}
	}


?>
