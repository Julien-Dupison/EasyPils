<div id="pharmaciens" style="display:none;" class="container-fluid pane">
	<div class="row">
		<div class="col-lg-12">
			<h1>Pharmaciens</h1>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-8 col-sm-8">
			<div class="profile-container">
    		<div class="card hovercard">
        	<div class="card-background">
            <img class="card-bkimg" alt="" src="<?php echo $_SESSION['img_pharm_easypils'] ?>">
        	</div>
        	<div class="useravatar">
            <img alt="" src="<?php echo $_SESSION['img_pharm_easypils'] ?>">
        	</div>
	        <div class="card-info"> <span class="card-title"><?php echo $_SESSION['prenom_pharm_easypils']." ".$_SESSION['nom_pharm_easypils'] ?></span>

	        </div>
	    </div>
	    <div class="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
        <div class="btn-group" role="group">
            <button type="button" id="stars" class="btn btn-danger-custom" href="#tab1" data-toggle="tab"><i class="fa fa-user-md"></i>
          		<div class="hidden-xs">Information pharmacien</div>
            </button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" id="favorites" class="btn btn-danger-custom" href="#tab2" data-toggle="tab"><i class="fa fa-file-text"></i>
            <div class="hidden-xs">Ordonnances</div>
          </button>
    		</div>
	    </div>

      <div class="well-content">
	      <div class="tab-content">
	        <div class="tab-pane fade in active" id="tab1">
						<div role="tabpanel" style="padding:13px;" class="tab-pane active" id="info-pharm">
							<p><b>Nom : </b><span id="info_nom_pharm"></span></p>
							<p><b>Embauche : </b><span id="info_emb_pharm"></span></p>
							<p><b>Adresse : </b><span id="info_adresse_pharm"></span></p>
						</div>
	        </div>
	        <div class="tab-pane fade in" id="tab2">
						<table id="table-ordos-pharm" class="table table-hover" style="margin-bottom:0;">
							<tr>
								<th style="border-top:none;">Nom patient</th>
								<th style="border-top:none;">Nombre de renouvellement (Actuel/Prescrit)</th>
							</tr>
						</table>
						<div class="custom-panel-footer">
							<div style="float:left;">
								<button value="5" class="ordos-pharm-qte btn btn-danger-custom">5</button>
								<button value="10" class="ordos-pharm-qte btn btn-danger-custom">10</button>
								<button value="15" class="ordos-pharm-qte btn btn-danger-custom">15</button>
							</div>
							<div style="text-align:right;">
								<button id="ordos-pharm-moins" class="btn btn-accent"><</button>
								<button id="ordos-pharm-plus" class="btn btn-accent">></button>
							</div>
						</div>
	        </div>
	      </div>
			</div>
		</div>
  </div>

		<div class="col-lg-4 col-sm-4">
			<div class="custom-panel">
				<div class="custom-panel-header">
					Ajout d'un pharmacien
				</div>
				<div id="panel-content-pharm-form" class="custom-panel-content panel-collapse collapse in">
					<form method="post">
						<label>Nom :</label>
						<input type="text" id="new-pharm-nom" class="form-control"><br>
						<label>Prenom :</label>
						<input type="text" id="new-pharm-prenom" class="form-control"><br>
						<label>Adresse :</label>
						<input type="text" id="new-pharm-rue" class="form-control" placeholder="Rue..."><br>
						<label>Ville :</label>
						<div class="form-inline">
							<input type="text" id="new-pharm-ville" class="form-control" style="width:65%;" placeholder="Ville...">
							<input type="text" id="new-pharm-CP" class="form-control" style="width:34%;" placeholder="Code Postal...">
						</div><br>
					</form>
				</div>
				<div id="panel-content-pharm-form" class="custom-panel-footer">
					<div style="text-align:right;">
						<button id="add_patient" class="btn btn-accent">Ajouter&nbsp;&nbsp;&nbsp;<i class="fa fa-plus"></i></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
