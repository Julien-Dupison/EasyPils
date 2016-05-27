$('#btn-renouv-ordo').click(function(){
	var id_ordo = $(this).attr('id_ordo');
	var request = $.ajax({
		url:'Includes/traitements/Ajax/add_renouv_ordonnance.php',
		type:'POST',
		data: {
			'id_ordonnance':id_ordo,
			'id_pharm':<?=$_SESSION['id_pharm_easypils'];?>
		},
	});
	request.done(function(data){
		if(data.code == "success"){
			load_ordonnance(id_ordo);
			customtoast(data.message,false);
		} else if(data.code == "fail"){
			customtoast(data.message,false)
		}
	});
	request.fail(function(data){
		customtoast("Erreur lors de l'envoi de la demande",false);
	});
});
