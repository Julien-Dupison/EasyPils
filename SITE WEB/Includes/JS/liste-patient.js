var patients;
var page_patient = 0;
var nb_patient_par_page = 5;
var nb_total_patients;
var nb_pages_patients;

$(document).ready(function(){
	load_patients();
});

$('#patient-search').on('keyup',function(){
	load_patients();
});

function load_patients(){
	var recherche = $('#patient-search').val();
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_patients.php',
		type:'GET',
		data:'nom_patient='+recherche,
		dataType : 'json'
	});
	request.done(function(data){
		patients = data;
		nb_total_patients = data.length;
		set_nb_pages_patients();
		affiche_patients();
	});
	request.fail(function(){
		customtoast("Erreur : Impossible de se connecter à la base",false);
	});
}

function set_nb_pages_patients(){
 	nb_pages_patients = Math.ceil(nb_total_patients/nb_patient_par_page)-1;
}

function affiche_patients(){
	$('#table-patient').html('<tr><th style="border-top:none;">Nom</th><th style="border-top:none;">Prénom</th><th style="border-top:none;">Naissance</th></tr>');
	for(var i=page_patient*nb_patient_par_page;i<page_patient*nb_patient_par_page+nb_patient_par_page;i++){
		if(patients[i]){
			$('#table-patient').append('<tr class="patient_row" id_patient="'+patients[i].id_pat+'"><td>'+patients[i].nom_pat+'</td><td>'+patients[i].prenom_pat+'</td><td>'+patients[i].dob_pat+'</td></tr>');
		}
	}
}

$('.patient-qte').click(function(){
	page_patient = 0;
	nb_patient_par_page = parseInt($(this).attr('value'));
	set_nb_pages_patients();
	affiche_patients();
});

$('#patient-moins').click(function(){
	if(page_patient > 0){
		page_patient--;
	}
	affiche_patients();
})

$('#patient-plus').click(function(){
	if(page_patient < nb_pages_patients){
		page_patient++;
	}
	affiche_patients();
})
