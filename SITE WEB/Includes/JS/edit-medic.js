$('#table-medic').on('click','.edit-medic', function(){
	var id_medic = $(this).parent().parent().attr('id_medic');

	var request = $.ajax({
		url:'Includes/traitements/Ajax/get_medic.php',
		type:'GET',
		data:'id_medic='+id_medic,
	});
	request.done(function(data){
		$('#edit-medic-nom').val(data.nom_medic);
		$('#edit-medic-dosage').val(data.dosage_medic);

		$("#edit-medic-volume option").filter(function() {
		    return $(this).text() == data.nom_vol;
		}).prop('selected', true);

		$('#edit-medic-patient').attr('id_med',id_medic)
		$('#edit-medic-modal').modal('toggle');
	});
	request.fail(function(){
		customtoast('Erreur de connection', false);
	});
});

$('#edit-medic-patient').click(function(){
	var id_medic = $(this).attr('id_med');
	var nom_medic = $('#edit-medic-nom').val();
	var dosage_medic = $('#edit-medic-dosage').val();
	var volume_medic = $("#edit-medic-volume").val();

	var request = $.ajax({
		url:'Includes/traitements/Ajax/edit_medic.php',
		type:'POST',
		data: {
			'id_medic':id_medic,
			'nom_medic':nom_medic,
			'dosage_medic':dosage_medic,
			'volume_medic':volume_medic
		},
	});
	request.done(function(){
		customtoast('Edition réussie', false);
		load_medics();
	});
	request.fail(function(){
		customtoast('Erreur de connection', false);
	});
});
