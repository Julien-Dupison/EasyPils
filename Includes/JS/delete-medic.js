$('#table-medic').on('mouseenter','.row_medic', function(){
	$(this).children().last().append('<span style="position:absolute;right:48px;" class="edit-medic"><i style="color:#c92626;" class="fa fa-pencil edit-icon"></i></span><span style="position:absolute;right:28px;" class="delete-medic"><i style="color:#c92626;" class="fa fa-trash"></i></span>');
});

$('#table-medic').on('mouseleave','.row_medic', function(){
	$(this).children().last().children().remove();
});

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

$('#table-medic').on('click','.edit-medic', function(){
	console.log('coucou');
});
