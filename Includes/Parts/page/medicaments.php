<div id="medicaments" style="display:none;" class="container-fluid pane">
	<div class="row">
		<div class="col-lg-12">
			<h1>Medicaments</h1>
			<p>Gestion des patients, ajout, édition et consultation</p>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-8">
			<div class="custom-panel">
				<div class="custom-panel-header">
					Liste des médicaments
					<input id="medic-search" class="custom-searchinput2 pull-right" style="font-weight:normal;font-size:15px;color:#000000;" placeholder="Recherche..."></input>
				</div>
				<div class="custom-panel-content" style="padding:0;">
					<table id="table-medic" class="table table-hover" style="margin-bottom:0;">
					</table>
				</div>
				<div class="custom-panel-footer">
					<div style="float:left;">
						<button value="5" class="medic-qte btn btn-danger-custom">5</button>
						<button value="10" class="medic-qte btn btn-danger-custom">10</button>
						<button value="15" class="medic-qte btn btn-danger-custom">15</button>
					</div>
					<div style="text-align:right;">
						<button id="medic-moins" class="btn btn-accent"><</button>
						<button id="medic-plus" class="btn btn-accent">></button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="custom-panel">
				<div class="custom-panel-header">
					Ajout de médicaments
				</div>
				<div id="panel-content-medicament-form" class="custom-panel-content panel-collapse collapse in">
					<form>
						<input type="text" id="new-medic-nom" class="form-control" placeholder="Nom du médicaments"><br>
						<input type="text" id="new-medic-dosage" class="form-control" placeholder="Dosage"><br>
						<select id="new-medic-volume" class="form-control"></select>
					</form>
				</div>
				<div class="custom-panel-footer">
					<div style="text-align:right;">
						<button id="add-medic" class="btn btn-accent">Ajouter&nbsp;&nbsp;&nbsp;<i class="fa fa-plus"></i></button>
					</div>
				</div>
			</div>
			<div class="custom-panel">
				<div class="custom-panel-header">
					Ajout d'un volume
				</div>
				<div id="panel-content-medicament-form" class="custom-panel-content panel-collapse collapse in">
					<form>
						<input type="text" id="new-volume-nom" class="form-control" placeholder="Libellé du volume"><br>
					</form>
				</div>
				<div class="custom-panel-footer">
					<div style="text-align:right;">
						<button id="add-volume" class="btn btn-accent">Ajouter&nbsp;&nbsp;&nbsp;<i class="fa fa-plus"></i></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
