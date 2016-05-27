$(document).ready(function() {
	$(".pane").hide(); //hide every pane
	<?php  //recup the pane if set by GET else default is "accueil"
		if(isset($_GET['pane'])){
			$pane=$_GET['pane'];
		}else{
			$pane="patients";
		}
	?>
	$("#<?=$pane;?>").effect("slide", "slow"); //show selected pane
});

function change_page(nom_page){
	var selector = "#"+nom_page;
	$(".pane").hide();
	$(selector).effect("slide", "slow");
	location.hash = selector;
};

$(window).on('popstate', function() {
	var hashLocation = location.hash;
	$(".pane").hide();
	$(hashLocation).effect("slide", "slow");
});

$("#envoi").click(function(){
	$.post(
		'Includes/traitements/Ajax/ajout_patient.php', // Traitements pour ajout patient
		{
				Nom : $("#nom").val(),  // Nous récupérons la valeur de nos input que l'on fait passer à ajout_patient.php
				Prenom : $("#prenom").val(),
				DoB : $("#dob").val(),
				Adresse : $("#adresse").val(),
				Code_Postal : $("#cp").val(),
				Ville : $("#ville").val(),
				Medecin : $("#medecin").val()
		});
	});

$(".butpane").click(function(e) {  //clicking on a sidebar button trigger the function
	//e.preventDefault(); //prevent the "#" added to the url when clicking on the button
	var toshow = ($(this).attr("showing")); //recup the "showing" attribute of the button to know which pane to display
	$(".pane").hide(); //hide everything
	$("#"+toshow).effect("slide"); //show the selected pane
});

$(".menu-toggle").click(function(e) { //clicking on the menu icon triggers the function
	$(this).toggleClass('open');
	e.preventDefault(); //prevent the "#" added to the url when clicking on the button
	$("#wrapper").toggleClass("toggled"); //show/hide the sidebar
	if($('#menuicon').hasClass('fa-bars')){ //change the icon according to it's previous state
		$('#menuicon').removeClass('fa-bars').addClass('fa-times');
	} else if ($('#menuicon').hasClass('fa-times')){
		$('#menuicon').removeClass('fa-times').addClass('fa-bars');
	}
});

$(".hideshow").click(function(){ //clicking on a caret will trigger this function
	if($(this).hasClass("fa-caret-up")){ //if the caret is up
		$(this).removeClass("fa-caret-up").addClass("fa-caret-down"); //put it down
	} else if ($(this).hasClass("fa-caret-down")){ //else
		$(this).removeClass("fa-caret-down").addClass("fa-caret-up"); //put it up
	}
});

$('#myTabs a').click(function (e) { //clicking on a tab
	e.preventDefault() //won't show anything in the url
	$(this).tab('show') //will show the specified tab
});

$('#deco').click(function () {
	window.location.href = "Includes/traitements/deconnectiontraitement.php";
});

var parent, ink, d, x, y;
$(".butpane").click(function(e){
	$(".inkbtndanger" ).remove();
	$(".inkbtnaccent" ).remove();
	parent = $(this).parent();
	//create .ink element if it doesn't exist
	if(parent.find(".ink").length == 0){
		parent.prepend("<span class='ink'></span>");
	}
	ink = parent.find(".ink");
	//incase of quick double clicks stop the previous animation
	ink.removeClass("animate");

	//set size of .ink
	if(!ink.height() && !ink.width()){
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		d = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: d, width: d});
	}

	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - parent.offset().left - ink.width()/2;
	y = e.pageY - parent.offset().top - ink.height()/2;
	//set the position and add class .animate
	ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});

$(".btn").click(function(e){


	if($(this).hasClass("btn-danger-custom")){
		var btnstyle = "danger";
	}
	if($(this).hasClass("btn-accent")){
		var btnstyle = "accent";
	}


	if($(this).find(".inkbtn"+btnstyle).length == 0){
		$(this).prepend("<span class='inkbtn"+btnstyle+"'></span>");
	}
	var ink = $(this).find(".inkbtn"+btnstyle);
	ink.removeClass("animate");

	if(!ink.height() && !ink.width()){
		d = Math.max($(this).outerWidth(), $(this).outerHeight());
		ink.css({height: d, width: d});
	}

	x = e.pageX - $(this).offset().left - ink.width()/2;
	y = e.pageY - $(this).offset().top - ink.height()/2;

	ink.css({top: y+'px', left: x+'px'}).addClass("animate");


});

var editModalButtonPat = $("#edit-modal-button");
$(".pat-tab").click(function(){
	var target = $(this).children().eq(0).attr('aria-controls');
	if(target == "messages" || target == "ordo"){
		editModalButtonPat.css({display: 'none'});
	}
	else{
		editModalButtonPat.css({display: 'block'});
	}
	editModalButtonPat.attr('data-target',"#" + target + "-modal");
});

var editModalButtonMed = $("#edit-modal-button-med");
$(".med-tab").click(function(){
	var target = $(this).children().eq(0).attr('aria-controls');
	if(target == "ordos-med" || target == "liste-patients-med"){
		editModalButtonMed.css({display: 'none'});
	}
	else{
		editModalButtonMed.css({display: 'block'});
	}
	editModalButtonMed.attr('data-target',"#" + target + "-modal");
});

var toast = $("#custom-toast");
function customtoast(message, cancel){
	if(cancel){
		toast.html(message+'<button class="custom-toast-dismiss pull-right">ANNULER</button>');
	} else {
		toast.html(message);
	}
	toast.slideToggle().delay(2000).slideToggle();
}

setInterval(load_messages,100);

$(document).on('mouseenter','.fa-trash,.edit-icon',function(){
	$(this).css({
		'color':'#FFC107',
	})
});
$(document).on('mouseleave','.fa-trash,.edit-icon',function(){
	$(this).css({
		'color':'#c92626',
	})
});
