$('#add_medecin').click(function(){
	var nom = $('#new-medecin-nom').val().trim();
	var rue = $('#new-medecin-rue').val().trim();
	var ville = $('#new-medecin-ville').val().trim();
	var cp = $('#new-medecin-CP').val().trim();
  	var tel = $('#new-medecin-tel').val().trim();
  	var spe = $('#new-medecin-spe').val().trim();

	var nom_value = true;
	var rue_value = true;
	var ville_value = true;
	var cp_value = true;
	var tel_value = true;
  	var spe_value = true;

	if(!nom){
		nom_value = false;
		$('#new-medecin-nom').addClass('custom-warning');
	} else {
		$('#new-medecin-nom').removeClass('custom-warning');
	}

	if(!rue){
		rue_value = false;
		$('#new-medecin-rue').addClass('custom-warning');
	} else {
		$('#new-medecin-rue').removeClass('custom-warning');
	}

	if(!ville){
		ville_value = false;
		$('#new-medecin-ville').addClass('custom-warning');
	} else {
		$('#new-medecin-ville').removeClass('custom-warning');
	}

	if(!cp){
		cp_value = false;
		$('#new-medecin-CP').addClass('custom-warning');
	} else {
		$('#new-medecin-CP').removeClass('custom-warning');
	}

	if(!tel){
		tel_value = false;
		$('#new-medecin-tel').addClass('custom-warning');
	} else {
		$('#new-medecin-tel').removeClass('custom-warning');
	}


	if(nom_value  && rue_value && ville_value && cp_value && tel_value && spe_value){
		var request = $.ajax({
			url:'Includes/traitements/Ajax/add_medecin.php',
			type:'POST',
			data: {
				'nom':nom,
        'spe':spe,
				'rue':rue,
				'ville':ville,
				'cp':cp,
				'tel':tel
			},

		});
		request.done(function(data){
			$('#new-medecin-nom').val('');
      $('#new-medecin-spe').val('');
			$('#new-medecin-rue').val('');
			$('#new-medecin-ville').val('');
			$('#new-medecin-CP').val('');
			$('#new-medecin-tel').val('');
			customtoast("Médecin ajouté avec succès",false);
			load_medecins();
		});
		request.fail(function(){
			customtoast("Erreur lors de l'ajout du médecin",false);
		});
	}
});
