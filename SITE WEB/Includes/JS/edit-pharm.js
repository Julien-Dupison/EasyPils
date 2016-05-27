$('#opt-pharm').click(function(){
	$('#edit-pharm-modal').modal('toggle');
})

$('#edit-pharm-btn').click(function(){
	var username = $('#edit-pharm-username').val().trim();
	var password = $('#edit-pharm-password').val().trim();

	var request = $.ajax({
		url:'Includes/traitements/Ajax/confirm_edit_pharm.php',
		type:'POST',
		data: {
			'username':username,
			'password':password,
			'id':<?=$_SESSION['id_pharm_easypils'];?>
		},
	});
	request.done(function(data){
		if(data.code == 'success'){
			$('#edit-pharm-modal').modal('toggle');
			$('#edit-pharm-modal2').modal('toggle');

			$('#edit-pharm-username').val('');
			$('#edit-pharm-password').val('');

			$('#edit-pharm2-nom').val(data.message.nom_pharm);
			$('#edit-pharm2-prenom').val(data.message.prenom_pharm);
			$('#edit-pharm2-rue').val(data.message.adresse_pharm);
			$('#edit-pharm2-ville').val(data.message.ville_pharm);
			$('#edit-pharm2-cp').val(data.message.postal_pharm);
			$('#edit-pharm2-username').val(data.message.login_pharm);
			$('#edit-pharm2-password').val(data.message.password_pharm);

		} else if (data.code == 'fail'){
			customtoast("Les identifiants ne correspondent pas",false);
		}
	});
	request.fail(function(){
		customtoast("Erreur lors de l'identification",false);
	});
});

$('#edit-pharm2-btn').click(function(){
	var nom = $('#edit-pharm2-nom').val().trim();
	var prenom = $('#edit-pharm2-prenom').val().trim();
	var rue = $('#edit-pharm2-rue').val().trim();
	var ville = $('#edit-pharm2-ville').val().trim();
	var cp = $('#edit-pharm2-cp').val().trim();
	var username = $('#edit-pharm2-username').val().trim();
	var password = $('#edit-pharm2-password').val().trim();

	var request = $.ajax({
		url:'Includes/traitements/Ajax/edit_pharm.php',
		type:'POST',
		data: {
			'username':username,
			'password':password,
			'nom':nom,
			'prenom':prenom,
			'rue':rue,
			'ville':ville,
			'cp':cp,
			'id':<?=$_SESSION['id_pharm_easypils'];?>
		},
	});

	request.done(function(){
		$('#edit-pharm-modal2').modal('toggle');
		customtoast("Informations modifiées avec succès",false);
	});

	request.fail(function(){
		customtoast("Erreur lors de la modification des informations",false);
	});
});
