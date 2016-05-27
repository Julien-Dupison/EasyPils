$('#table-demandes').on('click','.delete-demande', function(){
	var id_demande = $(this).parent().parent().attr('id-demande');
	$('#delete-demande-modal').modal('toggle');
	$('#button-delete-demande').attr('id_demande',id_demande);
});

$('#button-delete-demande').click(function(){
	var id_demande = $(this).attr('id_demande');
	var request = $.ajax({
		url:'Includes/traitements/Ajax/delete_demande.php',
		type:'GET',
		data:'id_demande='+id_demande,
	});
	request.done(function(data){
		load_demandes();
		customtoast('Demande supprimée avec succes', true);
		$('#custom-toast').attr('action','delete-demande');
		$('#custom-toast').attr('id-action',data);
	});
});
