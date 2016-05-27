var ordonnances;
var page_ordonnance = 0;
var nb_ordonnance_par_page = 5;
var nb_total_ordonnances;
var nb_pages_ordonnances;

$(document).ready(function(){
	load_ordonnances();
});

function load_ordonnances(){
	$('#table-ordonnances').html('<tr><th style="border-top:none;">Date</th><th style="border-top:none;">Patient</th><th style="border-top:none;">Medecin</th><th style="border-top:none;">Préparateur</th><th style="border-top:none;">Renouvellement</th></tr>');
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_ordonnances.php',
		type:'GET',
		dataType : 'json'
	});
	request.done(function(data){
		ordonnances = data;
		nb_total_ordonnances = data.length;
		set_nb_pages_ordonnances();
		affiche_ordonnances();
	});
	request.fail(function(){
		customtoast("Erreur : Impossible de se connecter à la base",false);
	});
}

function set_nb_pages_ordonnances(){
 	nb_pages_ordonnances = Math.ceil(nb_total_ordonnances/nb_ordonnance_par_page)-1;
}

function affiche_ordonnances(){
	$('#table-ordonnances').html('<tr><th>Date</th><th>Patient</th><th>Medecin</th><th>Préparateur</th><th>Renouvellement</th></tr>');
	for(var i=page_ordonnance*nb_ordonnance_par_page;i<page_ordonnance*nb_ordonnance_par_page+nb_ordonnance_par_page;i++){
		if(ordonnances[i]){
			$('#table-ordonnances').append('<tr class="ordonnance_row" id_ordonnance="'+ordonnances[i].num_ord+'"><td>'+ordonnances[i].date_ord+'</td><td>'+ordonnances[i].prenom_pat+' '+ordonnances[i].nom_pat+'</td><td>'+ordonnances[i].nom_med+'</td><td>'+ordonnances[i].prenom_pharm+' '+ordonnances[i].nom_pharm+'</td><td>'+ordonnances[i].nb_renouv_ord+'/'+ordonnances[i].renouv_ord+'</td></tr>');

		}
	}
}

$('.ordonnances-qte').click(function(){
	page_ordonnance = 0;
	nb_ordonnance_par_page = parseInt($(this).attr('value'));
	 set_nb_pages_ordonnances();
	affiche_ordonnances();
});

$('#ordonnances-moins').click(function(){
	if(page_ordonnance > 0){
		page_ordonnance--;
	}
	affiche_ordonnances();
})

$('#ordonnances-plus').click(function(){
	if(page_ordonnance < nb_pages_ordonnances){
		page_ordonnance++;
	}
	affiche_ordonnances();
})
