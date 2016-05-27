$('#table-medic').on('click','.delete-medic', function(){
	var id_medic = $(this).parent().parent().attr('id_medic');
	$('#delete-medic-modal').modal('toggle');
	$('#button-delete-medic').attr('id_medic',id_medic);
});

$('#button-delete-medic').click(function(){
	var id_medic = $(this).attr('id_medic');
	var request = $.ajax({
		url:'Includes/traitements/Ajax/delete_medic.php',
		type:'GET',
		data:'id_medic='+id_medic,
	});
	request.done(function(data){
		load_medics();
		customtoast('Medicament supprimé avec succes', true);
		$('#custom-toast').attr('action','delete-medic');
		$('#custom-toast').attr('id-action',data);
	});
});
