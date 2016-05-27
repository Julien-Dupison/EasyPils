<?php
  header('Content-Type: application/json');
  include "../../database.php";

  $sql = "SELECT id_spe, lib_spe FROM specialite";
  $spes = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($spes);

?>
