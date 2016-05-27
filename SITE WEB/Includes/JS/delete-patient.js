$('#table-patient').on('mouseenter','.patient_row', function(){
	$(this).children().last().append('<span style="position:absolute;right:28px;" class="delete-patient"><i style="color:#c92626;" class="fa fa-trash"></i></span>');
});

$('#table-patient').on('mouseleave','.patient_row', function(){
	$(this).children().last().children().last().remove();
});

$('#table-patient').on('click','.delete-patient', function(){
	var id_pat = $(this).parent().parent().attr('id_patient');
	$('#delete-patient-modal').modal('toggle');
	$('#button-delete-patient').attr('id_pat',id_pat);
});

$('#button-delete-patient').click(function(){
	var id_pat = $(this).attr('id_pat');
	var request = $.ajax({
		url:'Includes/traitements/Ajax/delete_patient.php',
		type:'GET',
		data:'id_patient='+id_pat,
	});
	request.done(function(data){
		load_patients();
		customtoast('Patient Supprimé avec succes', true);
		$('#custom-toast').attr('action','delete-pat');
		$('#custom-toast').attr('id-action',data);
	});
	request.fail(function(){
		customtoast('Erreur lors de la suppression', false);
	});
});
