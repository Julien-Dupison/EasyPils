<?php

	header('Content-Type: application/json');
	include "../../database.php";

	$id_pharm = $_GET['id_pharm'];

	$sql = "SELECT * FROM pharmaciens P WHERE id_pharm = $id_pharm";
	$pharmacien = $db->query($sql)->fetch(PDO::FETCH_ASSOC);

  $dateformat = date_create($pharmacien['embauche_pharm']);
  $pharmacien['embauche_pharm'] = date_format($dateformat, 'd/m/Y');


  if($pharmacien != null){

    $sql = "SELECT * FROM pharmaciens P, ordonnances O, patients Pat WHERE P.id_pharm = O.id_phar AND Pat.id_pat = O.id_pat AND id_pharm = $id_pharm";
    $ordonnances = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

    $return = array (
        "pharmacien" => $pharmacien,
      "ordonnances" => $ordonnances
    );
    
    echo json_encode($return);


}
?>
