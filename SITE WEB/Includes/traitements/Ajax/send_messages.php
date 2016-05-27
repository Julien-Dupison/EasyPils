<?php
	include "../../database.php";

	$message = $_POST['message'];
	$id = $_POST['id'];

	try{
		$sql = "INSERT INTO messages (contenu_msg, id_pat, auteur_msg) VALUES (?,?,1)";
		$req = $db->prepare($sql);
		$req->execute(array($message,$id));
	}
	catch(exception $e){
		echo $e;
	}

?>
