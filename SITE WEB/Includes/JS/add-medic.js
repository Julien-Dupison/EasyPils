$('#add-medic').click(function(){

	var nom_medic = $('#new-medic-nom').val().trim();
	var dosage_medic = $('#new-medic-dosage').val().trim();
	var volume_medic = $('#new-medic-volume').val().trim();

	var nom_medic_value = true;
	var dosage_medic_value = true;
	var volume_medic_value = true;

	if(!nom_medic){
		nom_medic_value = false;
		$('#new-medic-nom').addClass('custom-warning');
	} else {
		$('#new-medic-nom').removeClass('custom-warning');
	}

	if(!dosage_medic){
		dosage_medic_value = false;
		$('#new-medic-dosage').addClass('custom-warning');
	} else {
		$('#new-medic-dosage').removeClass('custom-warning');
	}

	if(!volume_medic || volume_medic == 'Volume' || volume_medic == ''){
		volume_medic_value = false;
		$('#new-medic-volume').addClass('custom-warning');
	} else {
		$('#new-medic-volume').removeClass('custom-warning');
	}

	if(nom_medic_value && dosage_medic_value && volume_medic_value){
		var request = $.ajax({
			url:'Includes/traitements/Ajax/add_medic.php',
			type:'POST',
			data: {
				'nom_medic':nom_medic,
				'dosage_medic':dosage_medic,
				'volume_medic':volume_medic
			},
		});
		request.done(function(){
			$('#new-medic-volume').val('');
			$('#new-medic-dosage').val('');
			$('#new-medic-nom').val('');
			customtoast("Medicament Ajouté avec succes",false);
			load_medics();
		});
		request.fail(function(){
			customtoast("Erreur lors de l'ajout du medicament",false);
		});
	}
});
