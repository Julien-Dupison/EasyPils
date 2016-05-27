<?php
	header('Content-Type: application/json');
	include "../../database.php";

	$id_ordo = $_POST['id_ordonnance'];
	$id_pharm = $_POST['id_pharm'];
	$date = getdate();
	if($date['mon'] <= 9){
		$date['mon'] = '0'.$date['mon'];
	}
	$date = $date['year'].'-'.$date['mon'].'-'.$date['mday'];

	$ordonnance = "SELECT renouv_ord, nb_renouv_ord FROM ordonnances WHERE num_ord = $id_ordo";
	$ordonnance = $db->query($ordonnance)->fetch(PDO::FETCH_ASSOC);
	$nbtotalrenouv = $ordonnance['renouv_ord'];
	$nbrenouv = $ordonnance['nb_renouv_ord'];

	if($nbrenouv < $nbtotalrenouv){

		$ident = "UPDATE ordonnances SET nb_renouv_ord = nb_renouv_ord+1 WHERE num_ord = $id_ordo";
		$reqident = $db->prepare($ident);
		$reqident->execute();

		$sql = "INSERT INTO renouvellements (date_renouv, id_ordo, id_pharm) VALUES (?,?,?)";
	    $req = $db->prepare($sql);

	    $req->execute(array($date,$id_ordo,$id_pharm));

		$return['code'] = "success";
		$return['message'] = "Renouvellement effectué avec succes";
		echo json_encode($return);
	} else {
		$return['code'] = "fail";
		$return['message'] = "le nombre maximal de renouvellements est déjà atteint !";
		echo json_encode($return);
	}
?>
