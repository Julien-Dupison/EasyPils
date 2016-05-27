<?php
	session_start();
	include "../database.php";

	if(isset($_POST["username"]) && isset($_POST["pass"])){
		$username = $_POST["username"];
		$pass = $_POST["pass"];

		$sql = "SELECT nom_pharm, id_pharm, prenom_pharm, img_pharm FROM pharmaciens WHERE login_pharm='$username' AND password_pharm='$pass'";
		$sel = $db->query($sql)->fetch(PDO::FETCH_ASSOC);
		if($sel){
			$_SESSION['id_pharm_easypils'] = $sel['id_pharm'];
			$_SESSION['nom_pharm_easypils'] = $sel['nom_pharm'];
			$_SESSION['prenom_pharm_easypils'] = $sel['prenom_pharm'];
			$_SESSION['img_pharm_easypils'] = $sel['img_pharm'];

			header('Location: ../../index.php#patients');
		} else {
			header('Location: ../../connection.php');
		}
	} else {
		header('Location: ../../connection.php');
	}
?>
