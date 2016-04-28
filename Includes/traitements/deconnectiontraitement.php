<?php
	session_start();
	if(isset($_SESSION['id_pharm_easypils'])){
		session_destroy();
		header('Location: ../../connection.php');
	}
?>
