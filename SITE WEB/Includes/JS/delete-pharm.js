$('#table-pharmacien').on('click','.delete-pharmacien', function(){
	var id_pharm = $(this).parent().parent().attr('id_pharmacien');
	$('#delete-pharmacien-modal').modal('toggle');
	$('#button-delete-pharmacien').attr('id_pharm',id_pharm);
});

$('#button-delete-pharmacien').click(function(){
	var id_pharm = $(this).attr('id_pharm');
	var request = $.ajax({
		url:'Includes/traitements/Ajax/delete_pharmacien.php',
		type:'GET',
		data:'id_pharmacien='+id_pharm,
	});

	request.done(function(data){
		load_pharmaciens();
		customtoast('Pharmaciens Supprimé avec succes', true);
		$('#custom-toast').attr('action','delete-pharm');
		$('#custom-toast').attr('id-action',data);
	});

	request.fail(function(){
		customtoast('Erreur lors de la suppression', false);
	});
});
