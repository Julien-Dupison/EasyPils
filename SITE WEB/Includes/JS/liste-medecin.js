var medecins;
var page_medecin = 0;
var nb_medecin_par_page = 5;
var nb_total_medecins;
var nb_pages_medecins;

var nb_patient_med_par_page = 5;
var nb_total_patients_med;
var nb_pages_patients_med;
var page_patient_med = 0;

var nb_ordos_med_par_page = 5;
var nb_total_ordos_med;
var nb_pages_ordos_med;
var page_ordos_med = 0;

$(document).ready(function(){
	load_medecins();
  	load_spes();
})

$('#table-medecin').on("click", ".medecin_row", function(){
	load_medecin($(this).attr('id_medecin'));
	$(".medecin_row").removeClass('selected_row');
	$(this).addClass('selected_row');
});

function load_medecin(id_medecin){
	pageordo = 0;
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_medecin.php',
		type:'GET',
		data:'id_medecin='+id_medecin,
		dataType : 'json'
	});
	request.done(function(data){

		medecin_patients = data.patients;
		nb_total_patients_med = medecin_patients.length;
		set_nb_pages_patients_med();
		affiche_patients_med();

		medecin_ordos = data.ordonnances;
		nb_total_ordos_med = medecin_ordos.length;
		set_nb_pages_ordos_med();
		affiche_ordos_med();


		//pane-info du médecin
		$('#info_nom_med').html(data.medecin.nom_med);
		$('#info_spe_med').html(data.medecin.lib_spe);
		$('#info_adresse_med').html(data.medecin.adresse_med+", "+data.medecin.postal_med+" "+data.medecin.ville_med);

		$('#badge_ordo_med').html(medecin_ordos.length);
		$('#badge_pat_med').html(nb_total_patients_med);


		//INFO FENETRE modal

		//Info fenetre modal medecin
		$('#change-medecin-id').val(data.medecin.id_med);
		$('#change-medecin-nom').val(data.medecin.nom_med);
		$('#change-medecin-spe').val(data.medecin.id_spe);
		$('#change-medecin-rue').val(data.medecin.adresse_med);
		$('#change-medecin-ville').val(data.medecin.ville_med);
		$('#change-medecin-CP').val(data.medecin.postal_med);


	});

	request.fail(function(){
		customtoast("Erreur : Médecin inconnu",false);
	});
}

//Affichage des patients du médecin sélectionné

//Paramètre le nombre de pages dans la navigation du tableau contenant les patients d'un médecin
function set_nb_pages_patients_med(){
 	nb_pages_patients_med = Math.ceil(nb_total_patients_med/nb_patient_med_par_page)-1;
}

function affiche_patients_med(){
	$('#table-patient-med').html('<tr><th style="border-top:none;">Nom</th><th style="border-top:none;">Prénom</th><th style="border-top:none;">Naissance</th></tr>');
	for(var i=page_patient_med*nb_patient_med_par_page;i<page_patient_med*nb_patient_med_par_page+nb_patient_med_par_page;i++){
		if(medecin_patients[i]){
			$('#table-patient-med').append('<tr class="patient-med-row" id-patient-med="'+medecin_patients[i].id_pat+'"><td>'+medecin_patients[i].nom_pat+'</td><td>'+medecin_patients[i].prenom_pat+'</td><td>'+medecin_patients[i].dob_pat+'</td></tr>');
		}
	}
}

$('.patient-med-qte').click(function(){
	page_patient_med = 0;
	nb_patient_med_par_page = parseInt($(this).attr('value'));
	set_nb_pages_patients_med();
	affiche_patients_med();
});

$('#patient-med-moins').click(function(){
	if(page_patient_med > 0){
		page_patient_med--;
	}
	affiche_patients_med();
})

$('#patient-med-plus').click(function(){
	if(page_patient_med < nb_pages_patients_med){
		page_patient_med++;
	}
	affiche_patients_med();
})


//Affichage des ordonnances du médecin sélectionné

//Paramètre le nombre de pages dans la navigation du tableau contenant les ordonnances d'un médecin
function set_nb_pages_ordos_med(){
 	nb_pages_ordos_med = Math.ceil(nb_total_ordos_med/nb_ordos_med_par_page)-1;
}

function affiche_ordos_med(){
	$('#table-ordos-med').html('<tr><th style="border-top:none;">Nom patient</th><th style="border-top:none;">Nombre de renouvellement (Actuel/Prescrit)</th></tr>');
	for(var i=page_ordos_med*nb_ordos_med_par_page;i<page_ordos_med*nb_ordos_med_par_page+nb_ordos_med_par_page;i++){
		if(medecin_ordos[i]){
			$('#table-ordos-med').append('<tr class="click_ordo" id_ordo="'+medecin_ordos[i].num_ord+'"><td>'+medecin_ordos[i].nom_pat+'</td><td>'+medecin_ordos[i].nb_renouv_ord+'/'+medecin_ordos[i].renouv_ord+'</td></tr>');
		}
	}
}

$("#table-ordos-med").on('click','.click_ordo',function(){
	var id_ordo = $(this).attr('id_ordo');
	change_page('ordonnances');
	load_ordonnance(id_ordo);
});

$('.ordos-med-qte').click(function(){
	page_ordos_med = 0;
	nb_ordos_med_par_page = parseInt($(this).attr('value'));
	set_nb_pages_ordos_med();
	affiche_ordos_med();
});

$('#ordos-med-moins').click(function(){
	if(page_ordos_med > 0){
		page_ordos_med--;
	}
	affiche_ordos_med();
})

$('#ordos-med-plus').click(function(){
	if(page_ordos_med < nb_pages_ordos_med){
		page_ordos_med++;
	}
	affiche_ordos_med();
})

//Modification info patient
$('#change-info-med').click(function(){

	var id_medecin = $('#change-medecin-id').val();
	var nom = $('#change-medecin-nom').val();
	var spe = $('#change-medecin-spe').val();
	var rue = $('#change-medecin-rue').val();
	var ville = $('#change-medecin-ville').val();
	var cp = $('#change-medecin-CP').val();

	var request = $.ajax({
		url:'Includes/traitements/Ajax/change_medecin_info.php',
		type:'POST',
		data:{
				'medecin': id_medecin,
				'nom': nom,
				'spe': spe,
				'rue': rue,
				'ville': ville,
				'cp': cp
		}
	});
	request.done(function(data){
		$('#info-med-modal').modal('toggle');
		load_medecin(id_medecin);
		load_medecins();
	});
});


function load_spes(){
  $('#new-medecin-spe').html('<option style="display:none;">Spécialité</option><option></option>');
	$('#change-medecin-spe').html('<option style="display:none;">Spécialité</option><option></option>');
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_spe.php',
		type:'GET',
		dataType : 'json'
	});
	request.done(function(data){
		$.each(data, function(key, value){
			$('#new-medecin-spe').append('<option value="'+value.id_spe+'">'+value.lib_spe+'</option>');
			$('#change-medecin-spe').append('<option value="'+value.id_spe+'">'+value.lib_spe+'</option>');
		});
	});
}

function load_medecins(){
	var recherche = $('#medecin-search').val();
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_medecins.php',
		type:'GET',
		data:'rech_medecin='+recherche,
		dataType : 'json'
	});
	request.done(function(data){
		medecins = data;
		nb_total_medecins = data.length;
		$.each(data, function(key, value){
			$('#new-patient-medecin').append('<option value="'+value.id_med+'">'+value.nom_med+'</option>');
			$('#change-patient-medecin').append('<option value="'+value.id_med+'">'+value.nom_med+'</option>');
		});
		set_nb_pages_medecins();
		affiche_medecins();
	});
	request.fail(function(){
		customtoast("Erreur : Impossible de se connecter à la base",false);
	});
}

function set_nb_pages_medecins(){
 	nb_pages_medecins = Math.ceil(nb_total_medecins/nb_medecin_par_page)-1;
}

function affiche_medecins(){
	$('#table-medecin').html('<tr><th style="border-top:none;">Nom</th><th style="border-top:none;">Spécialité</th><th style="border-top:none;">Adresse</th><th style="border-top:none;">Téléphone</th></tr>');
	for(var i=page_medecin*nb_medecin_par_page;i<page_medecin*nb_medecin_par_page+nb_medecin_par_page;i++){
		if(medecins[i]){
			$('#table-medecin').append('<tr class="medecin_row" id_medecin="'+medecins[i].id_med+'"><td>'+medecins[i].nom_med+'</td><td>'+medecins[i].lib_spe+'</td><td>'+medecins[i].adresse_med+' '+medecins[i].postal_med+' '+medecins[i].ville_med+'</td><td>'+medecins[i].telephone_med+'</td></tr>');
		}
	}
}

$('.medecin-qte').click(function(){
	page_medecin = 0;
	nb_medecin_par_page = parseInt($(this).attr('value'));
	set_nb_pages_medecins();
	affiche_medecins();
});

$('#medecin-moins').click(function(){
	if(page_medecin > 0){
		page_medecin--;
	}
	affiche_medecins();
})

$('#medecin-plus').click(function(){
	if(page_medecin < nb_pages_medecins){
		page_medecin++;
	}
	affiche_medecins();
})

$('#table-patient-med').on('click','.patient-med-row',function(){
	var id_pat = $(this).attr('id-patient-med');
	change_page('patients');
	load_patient(id_pat);
});

$('#table-medecin').on('mouseenter','.medecin_row', function(){
	$(this).children().last().append('<span style="position:absolute;right:28px;" class="delete-medecin"><i style="color:#c92626;" class="fa fa-trash"></i></span>');
});

$('#table-medecin').on('mouseleave','.medecin_row', function(){
	$(this).children().last().children().last().remove();
});
