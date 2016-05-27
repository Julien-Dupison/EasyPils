var pharmaciens;
var page_pharmacien = 0;
var nb_pharmacien_par_page = 5;
var nb_total_pharmaciens;
var nb_pages_pharmaciens;

$(document).ready(function(){
	load_pharmaciens();
});

function load_pharmaciens(){
	var recherche = $('#pharmacien-search').val();
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_pharmaciens.php',
		type:'GET',
		data:'rech_pharmacien='+recherche,
		dataType : 'json'
	});
	request.done(function(data){
		pharmaciens = data;
		nb_total_pharmaciens = data.length;
		set_nb_pages_pharmaciens();
		affiche_pharmaciens();
	});
	request.fail(function(){
		customtoast("Erreur : Impossible de se connecter à la base",false);
	});
}

function set_nb_pages_pharmaciens(){
 	nb_pages_pharmaciens = Math.ceil(nb_total_pharmaciens/nb_pharmacien_par_page)-1;
}

function affiche_pharmaciens(){
	$('#table-pharmacien').html('<tr><th style="border-top:none;">Nom</th><th style="border-top:none;">Prenom</th><th style="border-top:none;">Embauche</th></tr>');
	for(var i=page_pharmacien*nb_pharmacien_par_page;i<page_pharmacien*nb_pharmacien_par_page+nb_pharmacien_par_page;i++){
		if(pharmaciens[i]){
			$('#table-pharmacien').append('<tr class="pharmacien_row" id_pharmacien="'+pharmaciens[i].id_pharm+'"><td>'+pharmaciens[i].nom_pharm+'</td><td>'+pharmaciens[i].prenom_pharm+'</td><td>'+pharmaciens[i].embauche_pharm+'</td></tr>');
		}
	}
}

$('.pharmacien-qte').click(function(){
	page_pharmacien = 0;
	nb_pharmacien_par_page = parseInt($(this).attr('value'));
	set_nb_pages_pharmaciens();
	affiche_pharmaciens();
});

$('#pharmacien-moins').click(function(){
	if(page_pharmacien > 0){
		page_pharmacien--;
	}
	affiche_pharmaciens();
});

$('#pharmacien-plus').click(function(){
	if(page_pharmacien < nb_pages_pharmaciens){
		page_pharmacien++;
	}
	affiche_pharmaciens();
});


$('#pharmacien-search').on('keyup',function(){
	load_pharmaciens();
});

$('#table-pharmacien').on('mouseenter','.pharmacien_row', function(){
	$(this).children().last().append('<span style="position:absolute;right:28px;" class="delete-pharmacien"><i style="color:#c92626;" class="fa fa-trash"></i></span>');
});

$('#table-pharmacien').on('mouseleave','.pharmacien_row', function(){
	$(this).children().last().children().last().remove();
});
