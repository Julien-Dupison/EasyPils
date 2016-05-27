<div id="medecins" style="display:none;" class="container-fluid pane">
	<div class="row">
		<div class="col-lg-12">
			<h1>Médecins</h1>
			<p>Gestion des médecins, ajout et édition</p>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-8">
			<div class="custom-panel">
				<div class="custom-panel-header">
					Liste des médecins
					<input id="medecin-search" onkeyup="load_medecins();" class="custom-searchinput2 pull-right" style="font-weight:normal;font-size:15px;color:#000000;" placeholder="Recherche..."></input>

				</div>
				<div class="custom-panel-content" style="padding:0;">
					<table id="table-medecin" class="table table-hover" style="margin-bottom:0;">
						<tr>
							<th style="border-top:none;">Nom</th>
      						<th style="border-top:none;">Spécialité</th>
							<th style="border-top:none;">Adresse</th>
							<th style="border-top:none;">Téléphone</th>
						</tr>
					</table>
				</div>
				<div class="custom-panel-footer">
					<div style="float:left;">
						<button value="5" class="medecin-qte btn btn-danger-custom">5</button>
						<button value="10" class="medecin-qte btn btn-danger-custom">10</button>
						<button value="15" class="medecin-qte btn btn-danger-custom">15</button>
					</div>
					<div style="text-align:right;">
						<button id="medecin-moins" class="btn btn-accent"><</button>
						<button id="medecin-plus" class="btn btn-accent">></button>
					</div>
				</div>
			</div>
			<div class="custom-panel">
				<div class="custom-panel-header">
					Fiche médecin <button data-toggle="modal" data-target="#info-med-modal" id="edit-modal-button-med" class="btn btn-accent pull-right">Editer&nbsp;&nbsp;&nbsp;<i class="fa fa-pencil"></i></button>
				</div>
				<div class="custom-panel-content"  style="padding:0;border-top:transparent;">
					<ul class="nav nav-tabs" style="margin-top:3px;" role="tablist">
						<li class="nav-tab med-tab active"><a href="#info-med" aria-controls="info-med" role="tab" data-toggle="tab">Informations</a></li>
						<li class="nav-tab med-tab"><a href="#liste-patients-med" aria-controls="liste-patients-med" role="tab" data-toggle="tab">Patient <div id="badge_pat_med" class="badge"></div></a></li>
						<li class="nav-tab med-tab"><a href="#ordos-med" aria-controls="ordos-med" role="tab" data-toggle="tab">Ordonnances <div id="badge_ordo_med" class="badge"></div></a></li>
					</ul>

					<div id="tabs-container" class="tab-content fade in" style="padding:0px;">

						<div role="tabpanel" style="padding:13px;" class="tab-pane active" id="info-med">
							<p><b>Nom : </b><span id="info_nom_med"></span></p>
							<p><b>Spécialité : </b><span id="info_spe_med"></span></p>
							<p><b>Adresse : </b><span id="info_adresse_med"></span></p>
						</div>

						<div role="tabpanel" class="tab-pane fade in" id="liste-patients-med">
							<table id="table-patient-med" class="table table-hover" style="margin-bottom:0;">
								<tr>
									<th style="border-top:none;">Prénom</th>
									<th style="border-top:none;">Nom</th>
									<th style="border-top:none;">Adresse</th>
								</tr>
							</table>
							<div class="custom-panel-footer">
								<div style="float:left;">
									<button value="5" class="btn btn-danger-custom patient-med-qte">5</button>
									<button value="10" class="btn btn-danger-custom patient-med-qte">10</button>
									<button value="15" class="btn btn-danger-custom patient-med-qte">15</button>
								</div>
								<div style="text-align:right;">
									<button id="patient-med-moins" class="btn btn-accent"><</button>
									<button id="patient-med-plus"class="btn btn-accent">></button>
								</div>
							</div>
						</div>

						<div role="tabpanel" class="tab-pane fade in" id="ordos-med">
							<table id="table-ordos-med" class="table table-hover" style="margin-bottom:0;">
								<tr>
									<th style="border-top:none;">Nom patient</th>
									<th style="border-top:none;">Nombre de renouvellement (Actuel/Prescrit)</th>
								</tr>
							</table>
							<div class="custom-panel-footer">
								<div style="float:left;">
									<button value="5" class="btn btn-danger-custom ordos-med-qte">5</button>
									<button value="10" class="btn btn-danger-custom ordos-med-qte">10</button>
									<button value="15" class="btn btn-danger-custom ordos-med-qte">15</button>
								</div>
								<div style="text-align:right;">
									<button id="ordos-med-moins" class="btn btn-accent"><</button>
									<button id="ordos-med-plus"class="btn btn-accent">></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="custom-panel">
				<div class="custom-panel-header">
					Ajout d'un médecin
					<i class="fa fa-caret-up pull-right hideshow" data-toggle="collapse" data-target="#panel-content-medecin-form"></i>
				</div>
				<div id="panel-content-medecin-form" class="custom-panel-content panel-collapse collapse in">
					<form method="post">
						<label>Nom :</label>
						<input type="text" id="new-medecin-nom" class="form-control"><br>
			            <label>Spécialité :</label>
			            <select id="new-medecin-spe" class="form-control"></select>
			            <br>
						<label>Adresse :</label>
						<input type="text" id="new-medecin-rue" class="form-control" placeholder="Rue..."><br>
						<label>Ville :</label>
						<div class="form-inline">
							<input type="text" id="new-medecin-ville" class="form-control" style="width:65%;" placeholder="Ville...">
							<input type="text" id="new-medecin-CP" class="form-control" style="width:34%;" placeholder="Code Postal...">
						</div><br>
            			<label>Téléphone :</label>
						<input type="text" id="new-medecin-tel" class="form-control"><br>
					</form>
				</div>
				<div id="panel-content-medecin-form" class="custom-panel-footer">
					<div style="text-align:right;">
						<button id="add_medecin" class="btn btn-accent">Ajouter&nbsp;&nbsp;&nbsp;<i class="fa fa-plus"></i></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
