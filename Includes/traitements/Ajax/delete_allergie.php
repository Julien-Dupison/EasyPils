<?php

  include "../../database.php";

  $allergie = $_POST['allergie'];

  $sql = "DELETE FROM alergies WHERE id_alerg = $allergie";
  $req = $db->prepare($sql);
  $req->execute();

?>
