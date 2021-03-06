$('#custom-toast').on('click','.custom-toast-dismiss', function(){
	var action = $(this).parent().attr('action');
	var id = $(this).parent().attr('id-action');
	var script;
	var reload;

	switch(action){
		case 'delete-med' :
			script = 'Includes/traitements/Ajax/restore_medecin.php';
			reload = 'medecin';
			break;
		case 'delete-pat' :
			script = 'Includes/traitements/Ajax/restore_patient.php';
			reload = 'patient'
			break;
		case 'delete-medic' :
			script = 'Includes/traitements/Ajax/restore_medic.php'
			reload = 'medic'
			break;
		case 'delete-pharm' :
			script = 'Includes/traitements/Ajax/restore_pharm.php'
			reload = 'pharm'
			break;
		case 'delete-demande' :
			script = 'Includes/traitements/Ajax/restore_demande.php'
			reload = 'demande'
			break;
	}

	var request = $.ajax({
		url:script,
		type:'GET',
		data:'id='+id,
	});

	request.done(function(){
		switch(reload){
			case 'medecin' :
				load_medecins();
				break;
			case 'patient' :
				load_patients();
				break;
			case 'medic' :
				load_medics();
				break;
			case 'pharm' :
				load_pharmaciens();
				break;
			case 'demande' :
				load_demandes();
				break;
		}
	});
});
