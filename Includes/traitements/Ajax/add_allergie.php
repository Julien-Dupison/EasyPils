<?php

  include "../../database.php";

  $allergies = $_POST['allergies'];
  $id_pat = $_POST['patient'];

  foreach($allergies as $allergie){

    $sql = "INSERT INTO alergies (id_pat, libellé) VALUES (?,?)";
    $req = $db->prepare($sql);
    $req->execute(array($id_pat,$allergie));

  }

?>
