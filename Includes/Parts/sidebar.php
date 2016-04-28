<div id="sidebar-wrapper">
	<div class="sidebar-profile">
		<div class="sidebar-profile-centent">
			<img src="<?php echo $_SESSION['img_pharm_easypils'] ?>" style="float:left;" alt="image de profil" class="img-circle">
			<div class="sidebar-profile-text">
				<b><u><?php echo $_SESSION['prenom_pharm_easypils']." ".$_SESSION['nom_pharm_easypils'] ?></u></b>
				pharmacien
			</div>
		</div>
	</div>
	<ul class="sidebar-nav">
		<li>
			<a id="butpharmacien" class="butpane" showing="pharmaciens" href="#pharmaciens"><i class="fa fa-plus"></i>&nbsp;&nbsp;&nbsp;Pharmaciens</a>
		</li>
		<li>
			<a id="butpatients" class="butpane" showing="patients" href="#patients"><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;Patients</a>
		</li>
		<li>
			<a id="butordonnances" class="butpane" showing="ordonnances" href="#ordonnances"><i class="fa fa-file-text-o"></i>&nbsp;&nbsp;&nbsp;Ordonnances</a>
		</li>
		<li>
			<a id="butmedicaments" class="butpane" showing="medicaments" href="#medicaments"><i class="fa fa-medkit"></i>&nbsp;&nbsp;&nbsp;Medicaments</a>
		</li>
		<li>
			<a id="butmedecin" class="butpane" showing="medecins" href="#medecins"><i class="fa fa-user-md"></i>&nbsp;&nbsp;&nbsp;Medecins</a>
		</li>
	</ul>
</div>
