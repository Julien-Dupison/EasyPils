$('#table-ordonnances').on('mouseenter','.ordonnance_row', function(){
	$(this).children().last().append('<span style="position:absolute;right:28px;" class="delete-ordonnance"><i style="color:#c92626;" class="fa fa-trash"></i></span>');
});

$('#table-ordonnances').on('mouseleave','.ordonnance_row', function(){
	$(this).children().last().children().last().remove();
});

$('#table-ordonnances').on('click','.delete-ordonnance', function(){
	var id_ordo = $(this).parent().parent().attr('id_ordonnance');
	$('#delete-ordonnance-modal').modal('toggle');
	$('#button-delete-ordonnance').attr('id_ordonnance',id_ordo);
});

$('#button-delete-ordonnance').click(function(){
	var id_ordo = $(this).attr('id_ordonnance');
	var request = $.ajax({
		url:'Includes/traitements/Ajax/delete_ordonnance.php',
		type:'GET',
		data:'id_ordonnance='+id_ordo,
	});
	request.done(function(){
		load_patients();
		load_ordonnances();
		customtoast('Ordonnance supprimée avec succes', true);
		$('#custom-toast').attr('action','delete-ordo');
	});
	request.fail(function(){
		customtoast('Erreur lors de la suppression', false);
	});
});
