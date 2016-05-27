<?php
	include "../../database.php";

	$nom = $_POST['nom'];
	$prenom = $_POST['prenom'];
	$mail = $_POST['mail'];
	$dob = $_POST['dob'];
	$rue = $_POST['rue'];
	$ville = $_POST['ville'];
	$cp = $_POST['cp'];
	$med = $_POST['med'];

	$sql = "INSERT INTO patients (nom_pat, prenom_pat, mail_pat, dob_pat, adresse_pat, postal_pat, ville_pat, id_med) VALUES (?,?,?,?,?,?,?,?)";
	$req = $db->prepare($sql);
	$req->execute(array($nom,$prenom,$mail,$dob,$rue,$cp,$ville,$med));

	$mdp = "";
	$chaine = "ABCDEFGHIJQLMNOPQRSTUVWXYZabcdefghijqlmnopqrstuvwxyz0123456789";
	srand((double)microtime()*1000000);
	for($i=0; $i<8; $i++){
		$mdp .= $chaine[rand()%strlen($chaine)];
	}

	$login = $nom.$prenom.rand(1,100);

	$id_pat = $db->query("SELECT MAX(id_pat) as max FROM patients")->fetch(PDO::FETCH_ASSOC);
	$id_pat = $id_pat['max'];

	$sql2 = "INSERT INTO login_patient (username_patient, password_patient, id_pat) VALUES (?,?,?)";
	$req = $db->prepare($sql2);
	$req->execute(array($login,$mdp,$id_pat));

	$message = "Suite à votre enregistrement au pres de votre pharmacien, voici vos identifiants pour l'application EasyPils : \n\n    username : $login \n    mot de passe : $mdp\n\nSoyez sûr de modifier ces identifiants selon votre convenance des que possible\n\nCordialement, L'équipe EasyPils";
	$subject = "Inscription EasyPils";
	mail($mail,$subject,$message);

?>
