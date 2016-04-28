//init
var medics;
var page_medic= 0;
var nb_medic_par_page = 5;
var nb_total_medic;
var nb_pages_medic;

$(document).ready(function(){
	load_medics();
	load_volume();
})


$('#medic-search').on('keyup',function(){
	load_medics();
})

function load_medics(){
	var recherche = $('#medic-search').val();
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_medics.php',
		type:'GET',
		data:'nom_medic='+recherche,
		dataType : 'json'
	});
	request.done(function(data){
		medics = data;
		nb_total_medic = data.length;
		set_nb_total_medic();
		affiche_medics();
	});
	request.fail(function(data){
		console.log('erreur');
	});
}

function set_nb_total_medic(){
 	nb_pages_medic = Math.ceil(nb_total_medic/nb_medic_par_page)-1;
}

function affiche_medics(){
	$('#table-medic').html('<tr><th style="border-top:none;">Nom</th><th style="border-top:none;">Dosage</th><th style="border-top:none;">Type</th></tr>');
	for(var i=page_medic*nb_medic_par_page;i<page_medic*nb_medic_par_page+nb_medic_par_page;i++){
		if(medics[i]){
			$('#table-medic').append('<tr class="row_medic" id_medic='+medics[i].id_medic+'><td>'+medics[i].nom_medic+'</td><td>'+medics[i].dosage_medic+'</td><td>'+medics[i].nom_vol+'</td></tr>');
		}
	}
}

function load_volume(){
	$('#new-medic-volume').html('<option style="display:none;">Volume</option><option></option>');
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_volume.php',
		type:'GET',
		dataType : 'json'
	});
	request.done(function(data){
		$.each(data, function(key, value){
			$('#new-medic-volume').append('<option value="'+value.id_vol+'">'+value.nom_vol+'</option>');
		});
	});
}


$('.medic-qte').click(function(){
	page_medic = 0;
	nb_medic_par_page = parseInt($(this).attr('value'));
	set_nb_total_medic();
	affiche_medics();
});

$('#medic-moins').click(function(){
	if(page_medic > 0){
		page_medic--;
	}
	affiche_medics();
})

$('#medic-plus').click(function(){
	if(page_medic < nb_pages_medic){
		page_medic++;
	}
	affiche_medics();
});
