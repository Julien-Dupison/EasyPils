$('#add_patient').click(function(){
	var nom = $('#new-patient-nom').val().trim();
	var prenom = $('#new-patient-prenom').val().trim();
	var dob = $('#new-patient-dob').val().trim();
	var rue = $('#new-patient-rue').val().trim();
	var ville = $('#new-patient-ville').val().trim();
	var cp = $('#new-patient-CP').val().trim();
	var med = $('#new-patient-medecin').val().trim();

	var nom_value = true;
	var prenom_value = true;
	var dob_value = true;
	var rue_value = true;
	var ville_value = true;
	var cp_value = true;
	var med_value = true;

	if(!nom){
		nom_value = false;
		$('#new-patient-nom').addClass('custom-warning');
	} else {
		$('#new-patient-nom').removeClass('custom-warning');
	}

	if(!prenom){
		prenom_value = false;
		$('#new-patient-prenom').addClass('custom-warning');
	} else {
		$('#new-patient-prenom').removeClass('custom-warning');
	}

	if(!dob){
		dob_value = false;
		$('#new-patient-dob').addClass('custom-warning');
	} else {
		$('#new-patient-dob').removeClass('custom-warning');
	}

	if(!rue){
		rue_value = false;
		$('#new-patient-rue').addClass('custom-warning');
	} else {
		$('#new-patient-rue').removeClass('custom-warning');
	}

	if(!ville || ville == 'Ville'){
		ville_value = false;
		$('#new-patient-ville').addClass('custom-warning');
	} else {
		$('#new-patient-ville').removeClass('custom-warning');
	}

	if(!cp){
		cp_value = false;
		$('#new-patient-CP').addClass('custom-warning');
	} else {
		$('#new-patient-CP').removeClass('custom-warning');
	}

	if(!med || med == 'Medecin'){
		med_value = false;
		$('#new-patient-medecin').addClass('custom-warning');
	} else {
		$('#new-patient-medecin').removeClass('custom-warning');
	}

	if(nom_value && prenom_value && dob_value && rue_value && ville_value && cp_value && med_value){
		var request = $.ajax({
			url:'Includes/traitements/Ajax/add_patient.php',
			type:'POST',
			data: {
				'nom':nom,
				'prenom':prenom,
				'dob':dob,
				'rue':rue,
				'ville':ville,
				'cp':cp,
				'med':med,
			},

		});
		request.done(function(data){
			$('#new-patient-nom').val('');
			$('#new-patient-prenom').val('');
			$('#new-patient-dob').val('');
			$('#new-patient-rue').val('');
			$('#new-patient-ville').val('');
			$('#new-patient-CP').val('');
			$('#new-patient-medecin').val('');
			customtoast("Patient Ajouté avec succes",false);
			load_patients();
		});
		request.fail(function(){
			customtoast("Erreur lors de l'ajout du patient",false);
		});
	}
});
