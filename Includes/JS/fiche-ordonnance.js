$('#table-ordonnances').on("click", ".ordonnance_row", function(){
	var id_ordo = $(this).attr('id_ordonnance');
	load_ordonnance(id_ordo);
	$(".ordonnance_row").removeClass('selected_row');
	$(this).addClass('selected_row');
});

function load_ordonnance(id){
	pageordo = 0;
	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_ordonnance.php',
		type:'GET',
		data:'id_ordonnance='+id,
		dataType : 'json'
	});
	request.done(function(data){
		//infos
		$('#ordonnance_id').html(data.ordonnance.num_ord);
		$('#ordonnance_patient').html(data.patient.nom_pat+" "+data.patient.prenom_pat);
		$('#ordonnance_medecin').html(data.medecin.nom_med);
		$('#ordonnance_pharmacien').html(data.pharmacien.nom_pharm+" "+data.pharmacien.prenom_pharm);
		$('#ordonnance_date').html(data.ordonnance.date_ord);
		//medics
		$('#ordonnance_liste_medics').html('');
		$.each(data.medicaments,function(key, value){
			$('#ordonnance_liste_medics').append('<li>'+value.nom_medic+' '+value.dosage_medic+' '+value.nom_vol+' Pendant '+value.duree+' Jours<ul><div class="pull-right"><li style="display:inline;margin:5px;">'+value.qte_mat+' Matin</li><li style="display:inline;margin:5px;">'+value.qte_midi+' Midi</li><li style="display:inline;margin:5px;">'+value.qte_soir+' Soir</li><li style="display:inline;margin:5px;">'+value.qte_nuit+' Nuit</li></div><div style="clear:both"></div></ul></li>');
		})
		//renouv
		$('#nb_renouv').html(data.ordonnance.nb_renouv_ord);
		$('#nb_renouv_total').html(data.ordonnance.renouv_ord);

		if(data.ordonnance.nb_renouv_ord == data.ordonnance.renouv_ord){
			$('#renouv_ordo').css({'display':'none'});
		} else {
			$('#renouv_ordo').css({'display':'block'});
		}
	});
	request.fail(function(){
		customtoast("Erreur : Ordonnance inconnue",false);
	});
}

$('#renouv_ordo').click(function(){
	console.log('coucou');
});
