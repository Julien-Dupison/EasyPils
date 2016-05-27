<div id="patients" style="display:none;" class="container-fluid pane">
	<div class="row">
		<div class="col-lg-12">
			<h1>Patients</h1>
			<p>Gestion des patients, ajout, suppression, édition et consultation</p>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-8">
			<div class="custom-panel">
				<div class="custom-panel-header">
					Liste des patients
					<input id="patient-search" class="custom-searchinput2 pull-right" style="font-weight:normal;font-size:15px;color:#000000;" placeholder="Recherche..."></input>
				</div>
				<div class="custom-panel-content" style="padding:0;">
					<table id="table-patient" class="table table-hover" style="margin-bottom:0;">
						<tr>
							<th style="border-top:none;">Nom</th>
							<th style="border-top:none;">Prénom</th>
							<th style="border-top:none;">Naissance</th>
						</tr>
					</table>
				</div>
				<div class="custom-panel-footer">
					<div style="float:left;">
						<button value="5" class="patient-qte btn btn-danger-custom">5</button>
						<button value="10" class="patient-qte btn btn-danger-custom">10</button>
						<button value="15" class="patient-qte btn btn-danger-custom">15</button>
					</div>
					<div style="text-align:right;">
						<button id="patient-moins" class="btn btn-accent"><</button>
						<button id="patient-plus" class="btn btn-accent">></button>
					</div>
				</div>
			</div>
			<div class="custom-panel">
				<div class="custom-panel-header">
					Fiche patient <button data-toggle="modal" data-target="#info-modal" id="edit-modal-button" class="btn btn-accent pull-right">Editer&nbsp;&nbsp;&nbsp;<i class="fa fa-pencil"></i></button>
				</div>
				<div class="custom-panel-content"  style="padding:0;border-top:transparent;">
					<ul class="nav nav-tabs" style="margin-top:3px;" role="tablist">
						<li class="nav-tab pat-tab active"><a href="#info" aria-controls="info" role="tab" data-toggle="tab">Informations</a></li>
						<li class="nav-tab pat-tab"><a href="#medecin" aria-controls="medecin" role="tab" data-toggle="tab">Medecin</a></li>
						<li class="nav-tab pat-tab"><a href="#ordo" aria-controls="ordo" role="tab" data-toggle="tab">Ordonnances <div id="badge_nb_ordo" class="badge"></div></a></li>
						<li class="nav-tab pat-tab"><a href="#alergies" aria-controls="alergies" role="tab" data-toggle="tab">Allergies</a></li>
						<li class="nav-tab pat-tab"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
					</ul>

					<div id="tabs-container" class="tab-content" style="padding:0px;">

						<div role="tabpanel" style="padding:13px;" class="tab-pane fade in active" id="info">
							<p><b>Nom : </b><span id="info_nom"></span></p>
							<p><b>Prenom : </b><span id="info_prenom"></span></p>
							<p><b>Date de naissance : </b><span id="info_age"></span></p>
							<p><b>Adresse : </b><span id="info_adresse"></span></p>
						</div>

						<div role="tabpanel" style="padding:13px;" class="tab-pane fade in" id="medecin">
							<p><b>Nom : </b><span id="medecin_nom"></span></p>
							<p><b>Adresse : </b><span id="medecin_adresse"></span></p>
							<p><b>Telephone : </b><span id="medecin_telephone"></span></p>
						</div>

						<div role="tabpanel" class="tab-pane fade in" id="ordo">
							<table id="table-ordo" class="table table-hover" style="margin-bottom:0;">
								<tr>
									<th style="border-top:none;">Date prescription</th>
									<th style="border-top:none;">Renouvelée</th>
								</tr>
							</table>
							<div class="custom-panel-footer">
								<div style="float:left;">
									<button value="5" class="btn btn-danger-custom ordo-qte">5</button>
									<button value="10" class="btn btn-danger-custom ordo-qte">10</button>
									<button value="15" class="btn btn-danger-custom ordo-qte">15</button>
								</div>
								<div style="text-align:right;">
									<button id="ordomoins" class="btn btn-accent"><</button>
									<button id="ordoplus"class="btn btn-accent">></button>
								</div>
							</div>
						</div>

						<div role="tabpanel" style="padding:13px;" class="tab-pane fade in" id="alergies">
							<ul id="ul_alergies">
							</ul>
						</div>

						<div role="tabpanel" style="padding:13px;" class="tab-pane fade in" id="messages">
							<div class="chat-content">
							</div>
							<br>
							<input id="send-message" type="text" class="input-message"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="custom-panel">
				<div class="custom-panel-header">
					Ajout de patient
				</div>
				<div id="panel-content-patient-form" class="custom-panel-content panel-collapse collapse in">
					<form method="post">
						<label>Nom :</label>
						<input type="text" id="new-patient-nom" class="form-control"><br>
						<label>Prenom :</label>
						<input type="text" id="new-patient-prenom" class="form-control"><br>
						<label>Mail :</label>
						<input type="text" id="new-patient-mail" class="form-control"><br>
						<label>Date de naissance :</label>
						<input type="date" id="new-patient-dob" class="form-control"><br>
						<label>Adresse :</label>
						<input type="text" id="new-patient-rue" class="form-control" placeholder="Rue..."><br>
						<label>Ville :</label>
						<div class="form-inline">
							<input type="text" id="new-patient-ville" class="form-control" style="width:65%;" placeholder="Ville...">
							<input type="text" id="new-patient-CP" class="form-control" style="width:34%;" placeholder="Code Postal...">
						</div><br>
						<label>Medecin :</label>
						<select id="new-patient-medecin" class="form-control">
							<option style="display:none;">Medecin</option>
						</select>
					</form>
				</div>
				<div id="panel-content-patient-form" class="custom-panel-footer">
					<div style="text-align:right;">
						<button id="button_add_patient" class="btn btn-accent">Ajouter&nbsp;&nbsp;&nbsp;<i class="fa fa-plus"></i></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
