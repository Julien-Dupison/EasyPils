<?php
	include "../../database.php";

	$nom = $_POST['nom'];
	$prenom = $_POST['prenom'];
	$mail = $_POST['mail'];
	$rue = $_POST['rue'];
	$ville = $_POST['ville'];
	$cp = $_POST['cp'];

	$mdp = "";
	$chaine = "ABCDEFGHIJQLMNOPQRSTUVWXYZabcdefghijqlmnopqrstuvwxyz0123456789";
	srand((double)microtime()*1000000);
	for($i=0; $i<8; $i++){
		$mdp .= $chaine[rand()%strlen($chaine)];
	}
	$login = $nom.$prenom.rand(1,100);

	$date = getdate();
	if($date['mon'] <= 9){
		$date['mon'] = '0'.$date['mon'];
	}
	$deb = $date['year'].'-'.$date['mon'].'-'.$date['mday'];

	$sql = "INSERT INTO pharmaciens (nom_pharm, prenom_pharm, mail_pharm, login_pharm, password_pharm, embauche_pharm, adresse_pharm, postal_pharm, ville_pharm) VALUES (?,?,?,?,?,?,?,?,?)";
	$req = $db->prepare($sql);
	$req->execute(array($nom, $prenom, $mail, $login, $mdp, $deb, $rue, $cp, $ville));

	$message = "Suite à votre enregistrement, voici vos identifiants administrateurs pour l'application EasyPils : \n\n    username : $login \n    mot de passe : $mdp\n\nSoyez sûr de modifier ces identifiants selon votre convenance des que possible\n\nCordialement, L'équipe EasyPils";
	$subject = "Inscription EasyPils";
	mail($mail,$subject,$message);
?>
