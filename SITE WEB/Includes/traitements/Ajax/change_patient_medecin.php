<?php
	include "../../database.php";

  $id_med = $_POST['id_medecin'];
	$id_pat = $_POST['patient'];

	$sql = "UPDATE patients SET id_med = '$id_med' WHERE id_pat = $id_pat";
	$req = $db->prepare($sql);
	$req->execute();
?>
