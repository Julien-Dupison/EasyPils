$('#ordo-medic-search').on('keyup',function(){
	load_ordo_medics();
})

$('#ordo-patient-search').on('keyup',function(){
	load_ordo_patients();
})

$('#ordo-medecin-search').on('keyup',function(){
	load_ordo_medecins();
})

function load_ordo_medics(){
	var recherche = $('#ordo-medic-search').val().trim();
	if(recherche != ""){
		var request = $.ajax({
			url:'Includes/traitements/Ajax/get_medics.php',
			type:'GET',
			data:'nom_medic='+recherche,
			dataType : 'json'
		});
		request.done(function(data){
			$('#table_add_ordo_medic').html('<tr><th>Nom</th><th>Dosage</th><th>Type</th></tr>');
			$.each(data,function(key,value){
				$('#table_add_ordo_medic').append('<tr class="add_ordo_medic_row" id_medic="'+value.id_medic+'"><th>'+value.nom_medic+'</th><th>'+value.dosage_medic+'</th><th>'+value.nom_vol+'</th></tr>');
			})
		});
	} else {
		$('#table_add_ordo_medic').html('<tr><th>Nom</th><th>Dosage</th><th>Type</th></tr>');
	}
}

$('#add_ordo_patient_block').click(function(){
	$('#ordonnance-add-patient-modal').modal('toggle');
});

$('#add_ordo_medecin_block').click(function(){
	$('#ordonnance-add-medecin-modal').modal('toggle');
});

function load_ordo_patients(){
	var recherche = $('#ordo-patient-search').val().trim();
	if(recherche != ""){
		var request = $.ajax({
			url:'Includes/traitements/Ajax/get_patients.php',
			type:'GET',
			data:'nom_patient='+recherche,
			dataType : 'json'
		});
		request.done(function(data){
			$('#table_add_ordo_patient').html('<tr><th>Nom</th><th>Prenom</th><th>Naissance</th></tr>');
			$.each(data,function(key,value){
				$('#table_add_ordo_patient').append('<tr class="add_ordo_patient_row" id_patient="'+value.id_pat+'"><th>'+value.nom_pat+'</th><th>'+value.prenom_pat+'</th><th>'+value.dob_pat+'</th></tr>');
			})
		});
	} else {
		$('#table_add_ordo_patient').html('<tr><th>Nom</th><th>Prenom</th><th>Naissance</th></tr>');
	}
}

function load_ordo_medecins(){
	var recherche = $('#ordo-medecin-search').val().trim();
	if(recherche != ""){
		var request = $.ajax({
			url:'Includes/traitements/Ajax/get_medecins.php',
			type:'GET',
			data:'rech_medecin='+recherche,
			dataType : 'json'
		});
		request.done(function(data){

			$('#table_add_ordo_medecin').html('<tr><th>Nom</th><th>Profession</th><th>Telephone</th></tr>');
			$.each(data,function(key,value){
				$('#table_add_ordo_medecin').append('<tr class="add_ordo_medecin_row" id_medecin="'+value.id_med+'"><th>'+value.nom_med+'</th><th>'+value.lib_spe+'</th><th>'+value.telephone_med+'</th></tr>');
			})
		});
	} else {
		$('#table_add_ordo_medecin').html('<tr><th>Nom</th><th>Profession</th><th>Telephone</th></tr>');
	}
}

$('#table_add_ordo_patient').on('click','.add_ordo_patient_row', function(){
	$('#ordonnance-add-patient-modal').modal('toggle');
	var id = $(this).attr('id_patient');
	new_ordo_patient(id);
	$('#ordo-patient-search').val('');
	load_ordo_patients();
});

$('#table_add_ordo_medecin').on('click','.add_ordo_medecin_row', function(){
	var id = $(this).attr('id_medecin');
	new_ordo_medecin(id);
	$('#ordo-medecin-search').val('');
	load_ordo_medecins();
	$('#ordonnance-add-medecin-modal').modal('toggle');
});
$('#table_add_ordo_medic').on('click','.add_ordo_medic_row', function(){
	var id = $(this).attr('id_medic');
	new_ordo_medic(id);
	$('#ordo-medic-search').val('');
	load_ordo_medics();
});

function new_ordo_patient(id_patient){
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_patient.php',
		type:'GET',
		data:'id_patient='+id_patient,
		dataType : 'json'
	});
	request.done(function(data){
		$('#add_ordo_patient_block_nom').html(data.patient.nom_pat+" "+data.patient.prenom_pat);
		$('#add_ordo_patient_block_adresse').html(data.patient.adresse_pat+' '+data.patient.ville_pat+', '+data.patient.postal_pat);
		$('#add_ordo_patient_block_medecin').html(data.medecin.nom_med);
		$('#add_ordo_id_patient').val(data.patient.id_pat);
	});
}

function new_ordo_medecin(id_medecin){
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_medecin.php',
		type:'GET',
		data:'id_medecin='+id_medecin,
		dataType : 'json'
	});
	request.done(function(data){
		$('#add_ordo_medecin_block_nom').html(data.medecin.nom_med);
		$('#add_ordo_medecin_block_spe').html(data.medecin.lib_spe);
		$('#add_ordo_medecin_block_adresse').html(data.medecin.adresse_med+' '+data.medecin.postal_med+', '+data.medecin.ville_med);
		$('#add_ordo_medecin_block_tel').html(data.medecin.telephone_med);
		$('#add_ordo_id_medecin').val(data.medecin.id_med);
	})
}
var i=0;
var medic_absent;
function new_ordo_medic(id_medic){
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_medic.php',
		type:'GET',
		data:'id_medic='+id_medic,
		dataType : 'json'
	});
	request.done(function(data){
		medic_absent = true;
		$("div[id^='medic-']").each(function(){
			if(data.id_medic == $(this).attr('id_medic')){
				medic_absent = false;
			}
		});
		if(medic_absent){
			$('.add-ordo-medic-container').append('<div id="medic-'+i+'" id_medic="'+data.id_medic+'" class="add-ordo-medic"><p class="add-ordo-medic-nommed">'+data.nom_medic+' '+data.dosage_medic+' '+data.nom_vol+'</p><div class="grp-select-nb-medic"><input class="input-nb-medic" type="text" placeholder="..."/><span class="input-nb-medic-info">Matin</span></div><div class="grp-select-nb-medic"><input class="input-nb-medic" type="text" placeholder="..."/><span class="input-nb-medic-info">Midi</span></div><div class="grp-select-nb-medic"><input class="input-nb-medic" type="text" placeholder="..."/><span class="input-nb-medic-info">Soir</span></div><div class="grp-select-nb-medic"><input class="input-nb-medic" type="text" placeholder="..."/><span class="input-nb-medic-info">Nuit</span></div><button class="dismiss-add-ordo-medic btn pull-right btn-sm btn-accent"><i class="fa fa-times"></i></button><br><br><div class=" pull-right grp-select-nb-medic"><input id="add_ordo_nb_renouv" class="input-nb-medic nb_jours" type="text" placeholder="..."/><span class="input-nb-medic-info">Jours</span></div></div><div style="clear:both;"></div>');
			i++;
		} else {
			customtoast('Ce medicament est déjà présent',false);
		}
	});
	request.fail(function(){
		customtoast("Pas de correspondance en base de données",false)
	});
}

$('.add-ordo-medic-container').on('click','.dismiss-add-ordo-medic', function(){
	$(this).parent().remove();
})


$('#submit-new-ordo').click(function(){
	var check_medics = true;
	var row_medic = [];
	var table_medic = [];
	$("div[id^='medic-']").each(function(){
		var nbvalid = 0;
		$(this).children(".grp-select-nb-medic").each(function(){
			var search = $(this).children().eq(0).val().match(/[A-Za-z]/g);
			if(search != null || $(this).children().eq(0).val() == ""){
				$(this).addClass('custom-warning');
				table_medic = [];
			} else {
				if($(this).hasClass('custom-warning')){
					$(this).removeClass('custom-warning');
				}
				nbvalid++;
			}
		});
		if(nbvalid == 5){
			row_medic = [];
			$(this).children(".grp-select-nb-medic").each(function(){
				row_medic.push($(this).children().eq(0).val());
			});
			console.log(row_medic);
			table_medic[$(this).attr('id_medic')] = row_medic;
		} else {
			check_medics = false;
		}
	});

	var id_patient = $('#add_ordo_id_patient').val();
	var check_id_patient = true;
	if(id_patient == ""){
		check_id_patient = false;
	}

	var id_medecin = $('#add_ordo_id_medecin').val();
	var check_id_medecin = true;
	if(id_medecin == ""){
		check_id_medecin = false;
	}

	var nb_renouv = $('#add_ordo_nb_renouv').val();
	var check_nb_renouv = true;
	if(nb_renouv.match(/[A-Za-z]/g) != null || nb_renouv == ""){
		$('#add_ordo_nb_renouv').parent().addClass('custom-warning');
		check_nb_renouv = false;
	} else {
		if($('#add_ordo_nb_renouv').parent().hasClass('custom-warning')){
			$('#add_ordo_nb_renouv').parent().removeClass('custom-warning');
		}
	}



	var id_pharm = $('#add_ordo_id_pharm').val();
	var date = $('#add_ordo_date').val();

	var data = {};
	if(check_id_medecin && check_id_patient && check_nb_renouv && check_medics){
		var request = $.ajax({
			url:'Includes/traitements/Ajax/add_ordo.php',
			type:'POST',
			data: {
				'id_patient':id_patient,
				'id_medecin':id_medecin,
				'id_pharm':id_pharm,
				'date':date,
				'nb_renouv':nb_renouv,
				'medics':table_medic,
			},
		});

		request.done(function(){
			customtoast('Ordonnance ajoutée avec succes',false);
			load_ordonnances();

			$('#add_ordo_patient_block_nom').html('');
			$('#add_ordo_patient_block_adresse').html('');
			$('#add_ordo_patient_block_medecin').html('');
			$('#add_ordo_id_patient').val('');

			$('#add_ordo_medecin_block_nom').html('');
			$('#add_ordo_medecin_block_spe').html('');
			$('#add_ordo_medecin_block_adresse').html('');
			$('#add_ordo_medecin_block_tel').html('');
			$('#add_ordo_id_medecin').val('');

			$('.add-ordo-medic-container').html('');

			$('#add_ordo_nb_renouv').val('');
		});

		request.fail(function(){
			customtoast('Erreur',false);
		});

	} else {
		customtoast('Veuillez renseigner tous les champs',false);
	}
});
