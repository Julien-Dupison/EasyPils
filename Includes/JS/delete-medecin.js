$('#table-medecin').on('mouseenter','.medecin_row', function(){
	$(this).children().last().append('<span style="position:absolute;right:28px;" class="delete-medecin"><i style="color:#c92626;" class="fa fa-trash"></i></span>');
});

$('#table-medecin').on('mouseleave','.medecin_row', function(){
	$(this).children().last().children().last().remove();
});

$('#table-medecin').on('click','.delete-medecin', function(){
	var id_med = $(this).parent().parent().attr('id_medecin');
	$('#delete-medecin-modal').modal('toggle');
	$('#button-delete-medecin').attr('id_med',id_med);
});

$('#button-delete-medecin').click(function(){
	var id_med = $(this).attr('id_med');
	var request = $.ajax({
		url:'Includes/traitements/Ajax/delete_medecin.php',
		type:'GET',
		data:'id_medecin='+id_med,
	});
	request.done(function(data){
		load_medecins();
		customtoast('Medecin Supprimé avec succes', true);
		$('#custom-toast').attr('action','delete-med');
		$('#custom-toast').attr('id-action',data);
	});
	request.fail(function(){
		customtoast('Erreur lors de la suppression', false);
	});
});
