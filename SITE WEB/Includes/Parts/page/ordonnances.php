<div id="ordonnances" style="display:none;" class="container-fluid pane">
	<div class="row">
		<div class="col-lg-12">
			<h1>Ordonnances</h1>
			<p>Gestion des ordonnances, ajout, édition et consultation</p>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-8">
			<div class="custom-panel">
				<div style="padding:5px;line-height: 35px;" class="custom-panel-header">
					Liste des ordonnances
				</div>
				<div class="custom-panel-centent">
					<table id="table-ordonnances" class="table table-hover" style="margin-bottom:0;">
					</table>
				</div>
				<div class="custom-panel-footer">
					<div style="float:left;">
						<button value="5" class="ordonnances-qte btn btn-danger-custom">5</button>
						<button value="10" class="ordonnances-qte btn btn-danger-custom">10</button>
						<button value="15" class="ordonnances-qte btn btn-danger-custom">15</button>
					</div>
					<div style="text-align:right;">
						<button id="ordonnances-moins" class="btn btn-accent"><</button>
						<button id="ordonnances-plus" class="btn btn-accent">></button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="custom-panel">
				<div class="custom-panel-header">
					Fiche Ordonnance
				</div>
				<div class="custom-panel-content">
					<p style="font-weight:bold;">Ordonnance numéro : <span id="ordonnance_id"></span></p>
					<ul style="list-style:none;margin-left:0;padding-left:0;">
						<li>Dispensée à : <span id="ordonnance_patient"></span></li>
						<li>Par le medecin : <span id="ordonnance_medecin"></span></li>
						<li>Préparée par : <span id="ordonnance_pharmacien"></span></li>
						<li>Le : <span id="ordonnance_date"></span></li>
					</ul>
					<hr style="border-color:#EF9A9A;">
					<p style="font-weight:bold;">Liste Medicaments</p><br>
					<ul id="ordonnance_liste_medics" style="list-style:none;margin-left:0;padding-left:0;">
					</ul>
					<hr style="border-color:#EF9A9A;">
					<p style="font-weight:bold;">Renouvelée <span id="nb_renouv"></span>/<span id="nb_renouv_total"></span> fois</p>
					<ul id="ordonnance_liste_renouvelement" style="list-style:none;margin-left:0;padding-left:0;">
					</ul>
				</div>
				<div class="custom-panel-footer">

					<button id_ordo="" id='btn-renouv-ordo' style="margin-left:5px;" class="btn btn-accent pull-right">Renouveler&nbsp;&nbsp;&nbsp;<i class="fa fa-refresh"></i></button>

					<div style="clear:both"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-6">
			<div class="custom-panel">
				<div class="custom-panel-header">Ajouter une Ordonnance</div>
				<div style="min-height:800px;" class="custom-panel-content">
					<div id="add_ordo_patient_block">
						<h4 style="margin-top:0;"><u>Patient</u></h5>
						<input id="add_ordo_id_patient" type="hidden"/>
						<p>Nom : <span id="add_ordo_patient_block_nom"></span></p>
						<p>Adresse : <span id="add_ordo_patient_block_adresse"></p>
						<p>Medecin traitant : <span id="add_ordo_patient_block_medecin"></p>
					</div>

					<div id="add_ordo_medecin_block">
						<h4 style="margin-top:0;"><u>Medecin</u></h4>
						<input id="add_ordo_id_medecin" type="hidden"/>
						<p>Nom : <span id="add_ordo_medecin_block_nom"></span></p>
						<p>Spécialité : <span id="add_ordo_medecin_block_spe"></span></p>
						<p>Adresse : <span id="add_ordo_medecin_block_adresse"></span></p>
						<p>Telephone : <span id="add_ordo_medecin_block_tel"></p>
					</div>

					<div style="clear:both"></div>
					<h4 style="margin-top:0;"><u>Préparateur :</u></h4>
					<p>Nom : <?php echo $_SESSION['nom_pharm_easypils']." ".$_SESSION['prenom_pharm_easypils']?></p>
					<input id="add_ordo_id_pharm" value="<?=$_SESSION['id_pharm_easypils'];?>" type="hidden"/>
					<p>Date : <?php echo date('d/m/y'); ?></p>
					<input id="add_ordo_date" value="<?php echo date('y-m-d');?>" type="hidden"/><br>

					<h4 style="margin-top:0;"><u>Renouvelements :</u></h4>
					<p style="display:inline-block;">Renouvelable &nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</p>
					<div class="grp-select-nb-medic">
						<input id="add_ordo_nb_renouv" class="input-nb-medic" type="text" placeholder="..."/><span class="input-nb-medic-info">Fois</span>
					</div><br><br>

					<h4 style="margin-top:0;"><u>Medicaments :</u></h4>
					<div class="add-ordo-medic-container">
					</div>

				</div>
				<div class="custom-panel-footer">
					<button id="submit-new-ordo" class="btn btn-accent pull-right">Confirmer&nbsp;&nbsp;&nbsp;<i class="fa fa-check"></i></i></button>
					<div style="clear:both"></div>
				</div>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="custom-panel">
				<div class="custom-panel-header">
					Medicaments
					<input id="ordo-medic-search" class="custom-searchinput2 pull-right" style="font-weight:normal;font-size:15px;color:#000000;" placeholder="Recherche..."></input>
				</div>
				<div style="padding:0;" class="custom-panel-content">
					<table id="table_add_ordo_medic" class="table table-hover" style="margin-bottom:0;">
						<tr>
							<th>Nom</th>
							<th>Dosage</th>
							<th>Type</th>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
