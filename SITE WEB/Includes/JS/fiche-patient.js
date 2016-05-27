//init
var ordonnances;
var pageordo = 0;
var nbordoparpage = 5;
var nb_total_ordo;
var nb_pages_ordo;

var messages_patient;

$('#table-patient').on("click", ".patient_row", function(){
	load_patient($(this).attr('id_patient'));
	$(".patient_row").removeClass('selected_row');
	$(this).addClass('selected_row');
	$('.chat-content').html('');
	$('#ul_alergies').html('');
});

function load_patient(id_patient){
	pageordo = 0;
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_patient.php',
		type:'GET',
		data:'id_patient='+id_patient,
		dataType : 'json'
	});
	request.done(function(data){

		//pane-info du patient
		$('#info_nom').html(data.patient.nom_pat);
		$('#info_prenom').html(data.patient.prenom_pat);
		$('#info_age').html(data.patient.dob_pat);
		$('#info_adresse').html(data.patient.adresse_pat+", "+data.patient.postal_pat+" "+data.patient.ville_pat);

		//pane-medecin
		$('#medecin_nom').html(data.medecin.nom_med);
		$('#medecin_adresse').html(data.medecin.adresse_med+", "+data.medecin.postal_med+" "+data.medecin.ville_med);
		$('#medecin_telephone').html(data.medecin.telephone_med);

		//pane-ordo
		$('#table-ordo').html('<tr><th style="border-top:none;">Date prescription</th><th style="border-top:none;">Renouvelée</th></tr>');
		ordonnances = data.ordonnances;
		nb_total_ordo = ordonnances.length;
		set_nb_pages_ordo();
		affiche_ordo();

		//pane-alergies
		$('#ul_alergies').html('');
		$.each(data.alergies, function(key, value){
			$('#ul_alergies').append('<li>'+value.libellé+'</li>');
		});


		$('#badge_nb_ordo').html(nb_total_ordo);

		//pane-messages
		messages_patient = id_patient;

		//INFO des fenêtres modals

		//Info
		$('#change-patient-nom').val(data.patient.nom_pat);
		$('#change-patient-prenom').val(data.patient.prenom_pat);
		$('#change-patient-dob').val(data.patient.dob_pat);
		$('#change-patient-rue').val(data.patient.adresse_pat);
		$('#change-patient-ville').val(data.patient.ville_pat);
		$('#change-patient-CP').val(data.patient.postal_pat);

		//Allergie
		$('#liste-patient-allergie').html('');
		$.each(data.alergies, function(key, value){
			$('#liste-patient-allergie').append('<li style="margin-bottom: 2px" class="list-group-item">'+value.libellé+'<a class="delete-patient-allergie" id='+value.id_alerg+' href=""><i class="fa fa-times pull-right"></i></a></li>');
		});



	});

	request.fail(function(){
		customtoast("Erreur : Patient Inconnu",false);
	});
}

//Modification du médecin après traitement
$('#change-medecin-patient').click(function(){
	var id_medecin = $('#change-patient-medecin').val();
	var request = $.ajax({
		url:'Includes/traitements/Ajax/change_patient_medecin.php',
		type:'POST',
		data:{
				'id_medecin':id_medecin,
				'patient': messages_patient
		}
	});
	request.done(function(data){
		$('#medecin-modal').modal('toggle');
		load_patient(messages_patient);
		$('#change-patient-medecin').val('');

	});
});

//Modification info patient
$('#change-info-patient').click(function(){

	var nom = $('#change-patient-nom').val();
	var prenom = $('#change-patient-prenom').val();
	var dob = $('#change-patient-dob').val();
	var rue = $('#change-patient-rue').val();
	var ville = $('#change-patient-ville').val();
	var cp = $('#change-patient-CP').val();

	var request = $.ajax({
		url:'Includes/traitements/Ajax/change_patient.php',
		type:'POST',
		data:{
				'patient': messages_patient,
				'nom': nom,
				'prenom': prenom,
				'dob': dob,
				'rue': rue,
				'ville': ville,
				'cp': cp
		}
	});
	request.done(function(data){
		$('#info-modal').modal('toggle');
		load_patient(messages_patient);
		load_patients();
	});
});


//Ajouter un input de saisie d'allergie
$('#ajout-allergie').click(function(){

	var input_allergie = '<input style="margin-bottom: 2px" class="form-control ajout-patient-allergie" placeholder="Allergie" type="text">';
	$(input_allergie).appendTo('.input-ajout-allergie');

});

//Ajout après traitement d'un/des allergie(s)
$('#button-envoi-allergie').click(function(){
	var array_allergie = [];
	$('.ajout-patient-allergie').each(function(){
		if($(this).val().trim() != '' ){
			array_allergie.push($(this).val().trim());
		}
	});
	var request = $.ajax({
		url:'Includes/traitements/Ajax/add_allergie.php',
		type:'POST',
		data:{
				'allergies':array_allergie,
				'patient': messages_patient
		}
	});
	request.done(function(data){
		$('.input-ajout-allergie').html('<input class="form-control ajout-patient-allergie" placeholder="Allergie" type="text">');
		$('#alergies-modal').modal('toggle');
		load_patient(messages_patient);
	});
	request.fail(function(){

	});

});

//Suppresion d'une allergie
$('#liste-patient-allergie').on('click','.delete-patient-allergie',function(e){
	e.preventDefault();
	var id_allergie = $(this).attr('id');
	$(this).parent().css({display :"none"});
	var request = $.ajax({
		url:'Includes/traitements/Ajax/delete_allergie.php',
		type:'POST',
		data:{
				'allergie':id_allergie
		}
	});
	request.done(function(){
		load_patient(messages_patient);
	});
});


$(".ordo-qte").click(function(){
	if(ordonnances){
		pageordo = 0;
		nbordoparpage = parseInt($(this).attr('value'));
		set_nb_pages_ordo();
		affiche_ordo();
	}
});

$("#ordoplus").click(function(){
	if(pageordo < nb_pages_ordo){
		pageordo++;
	}
	affiche_ordo();
});

$("#ordomoins").click(function(){
	if(pageordo > 0){
		pageordo--;
	}
	affiche_ordo();
});

function set_nb_pages_ordo(){
 	nb_pages_ordo = Math.ceil(nb_total_ordo/nbordoparpage)-1;
}

function affiche_ordo(){
	$('#table-ordo').html('<tr><th style="border-top:none;">Date prescription</th><th style="border-top:none;">Renouvelée</th></tr>');
	for(var i=pageordo*nbordoparpage;i<pageordo*nbordoparpage+nbordoparpage;i++){
		if(ordonnances[i]){
			affiche_row_ordo(ordonnances[i]);
		}
	}
}

function affiche_row_ordo(ordo){
	$('#table-ordo').append('<tr class="click_ordo" id_ordo="'+ordo.num_ord+'"><td>'+ordo.date_ord+'</td><td>'+ordo.nb_renouv_ord+'/'+ordo.renouv_ord+'</td></tr>');
}

$("#table-ordo").on('click','.click_ordo',function(){
	var id_ordo = $(this).attr('id_ordo');
	change_page('ordonnances');
	load_ordonnance(id_ordo);
});
