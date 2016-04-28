<!DOCTYPE HTML>

<html>
	<head>
		<?php session_start(); ?>
		<meta charset="utf-8">
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="Includes/JS/Bootstrap.js"></script>
		<link rel="stylesheet" href="Includes/CSS/bootstrap.css"/>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	</head>
	<body>
		<br><br>
		<img src="Includes/logo.png" alt="Logo" style="margin-left:auto;margin-right:auto;display:block">
		<div style="width:500px;margin-left:auto;margin-right:auto;">
			<form method="POST" action="Includes/traitements/connectiontraitement.php">
				<h2 class="form-signin-heading" style="text-align: center">Connectez-vous</h2><br>
				<input type="text" name="username" class="form-control input-lg" id="username" placeholder="Nom d'utilisateur" required=""><br>
				<input type="password" name="pass" class="form-control input-lg" id="pass" placeholder="Mot de passe" required=""><br>
				<input class="btn btn-lg btn-danger btn-block" type="submit" value="Connection">
			</form>
		</div>
	</body>
</html>
