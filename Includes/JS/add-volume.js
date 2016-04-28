$('#add-volume').click(function(){

	var nom_volume = $('#new-volume-nom').val().trim();

	var nom_volume_value = true;

	if(!nom_volume){
		nom_volume_value = false;
		$('#new-volume-nom').addClass('custom-warning');
	} else {
		$('#new-volume-nom').removeClass('custom-warning');
	}

	if(nom_volume_value){
		var request = $.ajax({
			url:'Includes/traitements/Ajax/add_volume.php',
			type:'POST',
			data: {
				'nom_volume':nom_volume
			},
		});
		request.done(function(){
			$('#new-medic-volume').val('');
			customtoast("Volume ajouté avec succès",false);
			load_medics();
			load_volume();
		});
		request.fail(function(){
			customtoast("Erreur lors de l'ajout du volume",false);
		});
	}
});
