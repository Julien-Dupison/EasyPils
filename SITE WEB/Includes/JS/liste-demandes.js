var demandes;
var page_demande = 0;
var nb_demande_par_page = 5;
var nb_total_demandes;
var nb_pages_demandes;

$(document).ready(function(){
	load_demandes();
});

setInterval(function(){
	load_demandes();
}, 10000);

function load_demandes(){
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_demandes.php',
		type:'GET',
	});
	request.done(function(data){
		demandes = data;
		nb_total_demandes = data.length;
		set_nb_pages_demandes();
		affiche_demandes();
	});
	request.fail(function(){
		customtoast("Erreur : Impossible de se connecter à la base",false);
	});
}

function set_nb_pages_demandes(){
 	nb_pages_demandes = Math.ceil(nb_total_demandes/nb_demande_par_page)-1;
}

function affiche_demandes(){
	$('#table-demandes').html('<tr><th style="border-top:none;">Date</th><th style="border-top:none;">Patient</th><th style="border-top:none;">Ordonnance</th></tr>');
	for(var i=page_demande*nb_demande_par_page;i<page_demande*nb_demande_par_page+nb_demande_par_page;i++){
		if(demandes[i]){
			$('#table-demandes').append('<tr class="demande_row" id-demande="'+demandes[i].id_drenouv+'" id-ordo-demandes="'+demandes[i].id_ordo+'"><td>'+demandes[i].date_drenouv+'</td><td>'+demandes[i].nom_pat+'</td><td>'+demandes[i].id_ordo+'</td></tr>');
		}
	}
}

$('.demandes-qte').click(function(){
	page_demande = 0;
	nb_demande_par_page = parseInt($(this).attr('value'));
	set_nb_pages_demandes()
	affiche_demandes();
});

$('#demandes-moins').click(function(){
	if(page_demande > 0){
		page_demande--;
	}
	affiche_demandes();
});

$('#demandes-plus').click(function(){
	if(page_demande < nb_pages_pharmaciens){
		page_demande++;
	}
	affiche_demandes();
});

$('#table-demandes').on('mouseenter','.demande_row', function(){
	$(this).children().last().append('<span style="position:absolute;right:48px;" class="goto-ordo"><i style="color:#c92626;" class="fa fa-arrow-right edit-icon"></i></span><span style="position:absolute;right:28px;" class="delete-demande"><i style="color:#c92626;" class="fa fa-trash"></i></span>');
});

$('#table-demandes').on('mouseleave','.demande_row', function(){
	$(this).children().last().children().remove();
});

$('#table-demandes').on('click','.goto-ordo', function(){
	var id_ordo = $(this).parent().parent().attr('id-ordo-demandes');
	change_page('ordonnances');
	load_ordonnance(id_ordo);
});
