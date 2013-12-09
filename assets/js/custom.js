// GRP Namespace
GRP = {};

jQuery(document).ready(function() {
	
	$('button.subscribe').bind('click', function (evt) {
		$.post(
			$(this.form)[0].action, 
			$(this.form).serialize(), 
			function (response) {
				if (true) {
					switch (response) {
						case 'Some fields are missing.':
							alert("Some fields are missing.");
							break;

						case 'Invalid email address.':
							alert("Invalid email address.");
							break;

						default:
							alert("You're subscribed!");
							break;
					}
				}
				else {
					alert("Sorry, unable to subscribe. Please try again later!");
				}			
			}
		);
	});

	$('button.unsubscribe').bind('click', function (evt) {
		$.post(
			$(this.form)[0].action, 
			$(this.form).serialize(), 
			function (response) {
				if (true) {
					switch (response) {
						case 'Some fields are missing.':
							alert("Some fields are missing.");
							break;

						case 'Invalid email address.':
							alert("Invalid email address.");
							break;

						default:
							alert("You're unsubscribed!");
							break;
					}
				}
				else {
					alert("Sorry, unable to subscribe. Please try again later!");
				}			
			}
		);
	});

});