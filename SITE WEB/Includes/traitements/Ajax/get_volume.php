<?php
  header('Content-Type: application/json');
  include "../../database.php";

  $sql = "SELECT id_vol, nom_vol FROM volume_medic";
  $types = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($types);

?>
