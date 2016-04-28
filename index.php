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
				<?php include "Includes/Parts/page/pharmaciens.php"; ?>
				<?php include "Includes/Parts/page/patients.php"; ?>
				<?php include "Includes/Parts/page/ordonnances.php"; ?>
				<?php include "Includes/Parts/page/medicaments.php"; ?>
				<?php include "Includes/Parts/page/medecins.php"; ?>
			</div>
		</div>
		<?php include "Includes/Parts/toast.php"; ?>

		<?php include "Includes/Parts/modal/alergies-modal.html"; ?>
		<?php include "Includes/Parts/modal/info-modal.html"; ?>
		<?php include "Includes/Parts/modal/medecin-modal.html"; ?>

		<?php include "Includes/Parts/modal/info-med-modal.html"; ?>

		<?php include "Includes/Parts/modal/delete-patient-modal.html"; ?>
		<?php include "Includes/Parts/modal/delete-medecin-modal.html"; ?>
		<?php include "Includes/Parts/modal/delete-medic-modal.html"; ?>

		<?php include "Includes/Parts/modal/delete-ordonnance-modal.html"; ?>

		<script>
			<?php include "Includes/JS/index.js"; ?>

			<?php include "Includes/JS/fiche-pharm.js"; ?>

			<?php include "Includes/JS/fiche-patient.js"; ?>
			<?php include "Includes/JS/liste-patient.js"; ?>
			<?php include "Includes/JS/messages-patient.js"; ?>
			<?php include "Includes/JS/add-patient.js"; ?>
			<?php include "Includes/JS/delete-patient.js"; ?>

			<?php include "Includes/JS/liste-medic.js"; ?>
			<?php include "Includes/JS/add-medic.js"; ?>
			<?php include "Includes/JS/delete-medic.js"; ?>
			<?php include "Includes/JS/add-volume.js"; ?>

			<?php include "Includes/JS/liste-ordonnance.js"; ?>
			<?php include "Includes/JS/fiche-ordonnance.js"; ?>
			<?php include "Includes/JS/add-ordonnance.js"; ?>
			<?php include "Includes/JS/delete-ordonnance.js"; ?>

			<?php include "Includes/JS/liste-medecin.js"; ?>
			<?php include "Includes/JS/add-medecin.js"; ?>
			<?php include "Includes/JS/delete-medecin.js"; ?>


			<?php include "Includes/JS/restore.js"; ?>
		</script>

	</body>
</html>
