var pharm;

var nb_ordos_pharm_par_page = 5;
var nb_total_ordos_pharm;
var nb_pages_ordos_pharm;
var page_ordos_pharm = 0;

$(document).ready(function(){
	load_pharm();
})

function load_pharm(){
	page_ordos_pharm = 0;
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_pharm.php',
		type:'GET',
		data:"id_pharm=<?php echo $_SESSION['id_pharm_easypils'] ?>",
		dataType : 'json'
	});
	request.done(function(data){
		ordos_pharm = data.ordonnances;
		nb_total_ordos_pharm = ordos_pharm.length;
	    set_nb_pages_ordos_pharm();
	    affiche_ordos_pharm();

		//Pane info pharmacien
		$('#info_nom_pharm').html(data.pharmacien.prenom_pharm+" "+data.pharmacien.nom_pharm);
		$('#info_emb_pharm').html(data.pharmacien.embauche_pharm);
		$('#info_adresse_pharm').html(data.pharmacien.adresse_pharm+", "+data.pharmacien.postal_pharm+" "+data.pharmacien.ville_pharm);
	});

	request.fail(function(err){
		customtoast("Erreur : Pharmacien inconnu",false);
    console.log(err);
	});
}

//Affichage des ordonnaces du pharmacien connecté

//Paramètre le nombre de pages dans la navigation du tableau contenant les ordonnances du pharmacien
function set_nb_pages_ordos_pharm(){
 	nb_pages_ordos_pharm = Math.ceil(nb_total_ordos_pharm/nb_ordos_pharm_par_page)-1;
}

function affiche_ordos_pharm(){
	$('#table-ordos-pharm').html('<tr><th style="border-top:none;">Nom patient</th><th style="border-top:none;">Nombre de renouvellement (Actuel/Prescrit)</th></tr>');
	for(var i=page_ordos_pharm*nb_ordos_pharm_par_page;i<page_ordos_pharm*nb_ordos_pharm_par_page+nb_ordos_pharm_par_page;i++){
		if(ordos_pharm[i]){
			$('#table-ordos-pharm').append('<tr class="click_ordo" id_ordo="'+ordos_pharm[i].num_ord+'"><td>'+ordos_pharm[i].nom_pat+'</td><td>'+ordos_pharm[i].nb_renouv_ord+'/'+ordos_pharm[i].renouv_ord+'</td></tr>');
		}
	}
}

$("#table-ordos-pharm").on('click','.click_ordo',function(){
	var id_ordo = $(this).attr('id_ordo');
	change_page('ordonnances');
	load_ordonnance(id_ordo);
});

$('.ordos-pharm-qte').click(function(){
	page_ordos_pharm = 0;
	nb_ordos_pharm_par_page = parseInt($(this).attr('value'));
	set_nb_pages_ordos_pharm();
	affiche_ordos_pharm();
});

$('#ordos-pharm-moins').click(function(){
	if(page_ordos_pharm > 0){
		page_ordos_pharm--;
	}
	affiche_ordos_pharm();
})

$('#ordos-pharm-plus').click(function(){
	if(page_ordos_pharm < nb_pages_ordos_pharm){
		page_ordos_pharm++;
	}
	affiche_ordos_pharm();
})
