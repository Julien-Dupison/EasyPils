$('#button_add_pharmacien').click(function(){
	var nom = $('#new-pharm-nom').val().trim();
	var prenom = $('#new-pharm-prenom').val().trim();
	var mail = $('#new-pharm-mail').val().trim();
	var rue = $('#new-pharm-rue').val().trim();
	var ville = $('#new-pharm-ville').val().trim();
	var cp = $('#new-pharm-CP').val().trim();

	var nom_value = true;
	var prenom_value = true;
	var mail_value = true;
	var rue_value = true;
	var ville_value = true;
	var cp_value = true;

	if(!nom){
		nom_value = false;
		$('#new-pharm-nom').addClass('custom-warning');
	} else {
		$('#new-pharm-nom').removeClass('custom-warning');
	}

	if(!prenom){
		prenom_value = false;
		$('#new-pharm-prenom').addClass('custom-warning');
	} else {
		$('#new-pharm-prenom').removeClass('custom-warning');
	}

	if(!mail){
		mail_value = false;
		$('#new-pharm-mail').addClass('custom-warning');
	} else {
		$('#new-pharm-mail').removeClass('custom-warning');
	}

	if(!rue){
		rue_value = false;
		$('#new-pharm-rue').addClass('custom-warning');
	} else {
		$('#new-pharm-rue').removeClass('custom-warning');
	}

	if(!ville || ville == 'Ville'){
		ville_value = false;
		$('#new-pharm-ville').addClass('custom-warning');
	} else {
		$('#new-pharm-ville').removeClass('custom-warning');
	}

	if(!cp){
		cp_value = false;
		$('#new-pharm-CP').addClass('custom-warning');
	} else {
		$('#new-pharm-CP').removeClass('custom-warning');
	}

	if(nom_value && prenom_value && mail_value && rue_value && ville_value && cp_value){
		var request = $.ajax({
			url:'Includes/traitements/Ajax/add_pharm.php',
			type:'POST',
			data: {
				'nom':nom,
				'prenom':prenom,
				'mail':mail,
				'rue':rue,
				'ville':ville,
				'cp':cp,
			},
		});
		request.done(function(){
			$('#new-pharm-nom').val('');
			$('#new-pharm-prenom').val('');
			$('#new-pharm-mail').val('');
			$('#new-pharm-rue').val('');
			$('#new-pharm-ville').val('');
			$('#new-pharm-CP').val('');
			customtoast("Pharmacien Ajouté avec succes",false);
		});
		request.fail(function(){
			customtoast("Erreur lors de l'ajout du pharmacien",false);
		});
	}
});
