<!DOCTYPE HTML>

<html>
	<head>
		<?php include "Includes/Parts/header.php"; ?>
	</head>
	<body>

		<?php include "Includes/Parts/navbar.php"; ?>

		<div id="wrapper">
			<?php include "Includes/Parts/sidebar.php"; ?>
			<div id="page-content-wrapper">
				<?php
					include "Includes/Parts/page/pharmaciens.php";
				 	include "Includes/Parts/page/patients.php";
				 	include "Includes/Parts/page/ordonnances.php";
					include "Includes/Parts/page/medicaments.php";
				 	include "Includes/Parts/page/medecins.php";
					include "Includes/Parts/page/renouvellements.php";
				?>
			</div>
		</div>

		<?php
			include "Includes/Parts/toast.php";
			include "Includes/Parts/modal/allergies-modal.html";
			include "Includes/Parts/modal/info-pat-modal.html";
			include "Includes/Parts/modal/medecin-modal.html";
			include "Includes/Parts/modal/info-med-modal.html";
			include "Includes/Parts/modal/delete-patient-modal.html";
			include "Includes/Parts/modal/delete-medecin-modal.html";
			include "Includes/Parts/modal/delete-medic-modal.html";
			include "Includes/Parts/modal/delete-ordonnance-modal.html";
			include "Includes/Parts/modal/delete-pharmacien-modal.html";
			include "Includes/Parts/modal/edit-medic-modal.html";
			include "Includes/Parts/modal/ordonnance-add-medecin-modal.html";
			include "Includes/Parts/modal/ordonnance-add-patient-modal.html";
			include "Includes/Parts/modal/edit-pharm-modal.html";
			include "Includes/Parts/modal/edit-pharm-modal2.html";
			include "Includes/Parts/modal/delete-demande-modal.html";
		?>

		<script>
			<?php
				include "Includes/JS/index.js";

				include "Includes/JS/fiche-pharm.js";
				include "Includes/JS/add-pharm.js";
				include "Includes/JS/edit-pharm.js";
				include "Includes/JS/liste-pharm.js";
				include "Includes/JS/delete-pharm.js";

				include "Includes/JS/fiche-patient.js";
				include "Includes/JS/liste-patient.js";
				include "Includes/JS/messages-patient.js";
				include "Includes/JS/add-patient.js";
				include "Includes/JS/delete-patient.js";

				include "Includes/JS/liste-medic.js";
				include "Includes/JS/add-medic.js";
				include "Includes/JS/delete-medic.js";
				include "Includes/JS/add-volume.js";
				include "Includes/JS/edit-medic.js";

				include "Includes/JS/liste-ordonnance.js";
				include "Includes/JS/fiche-ordonnance.js";
				include "Includes/JS/add-ordonnance.js";
				include "Includes/JS/delete-ordonnance.js";

				include "Includes/JS/liste-medecin.js";
				include "Includes/JS/add-medecin.js";
				include "Includes/JS/delete-medecin.js";

				include "Includes/JS/liste-demandes.js";
				include "Includes/JS/delete-demande.js";

				include "Includes/JS/renouv-ordo.js";

				include "Includes/JS/restore.js";
			?>
		</script>

	</body>
</html>
