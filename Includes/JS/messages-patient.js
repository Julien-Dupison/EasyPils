function load_messages(){
	if(messages_patient != undefined){
		var request = $.ajax({
			url:'Includes/traitements/Ajax/get_messages.php',
			type:'GET',
			data:'id_patient='+messages_patient,
			dataType : 'json'
		});
		request.done(function(data){
			$('.chat-content').html('');
			$.each(data, function(key, value){
				if(value.auteur_msg == 0){
					$('.chat-content').append('<p class="custom-bubble-client">'+value.contenu_msg+'</p><div style="clear:both"></div>');
				} else if(value.auteur_msg == 1){
					$('.chat-content').append('<p class="custom-bubble-phar">'+value.contenu_msg+'</p><div style="clear:both"></div>');
				}
			});
		});
	}
}

$('#send-message').keypress(function(e){
	if(e.keyCode == 13 && $('#send-message').val() != ''){
		var message = $('#send-message').val();
		$('#send-message').val('');
		var request = $.ajax({
			url:'Includes/traitements/Ajax/send_messages.php',
			type:'POST',
			data: {
				'message':message,
				'id':messages_patient,
			},
		});
		request.done(function(data){
			console.log(data);
			setTimeout(function(){
  				$('.chat-content').scrollTop(1000000000);
			},101);
		});
		request.fail(function(){
			customtoast("Erreur lors de l'envoi du message",false);
		});
	}
})
