	$('.top').on('click', function(event) {
		event.preventDefault();
		var target = "#" + $(this).data('target');
		$('.top').each(function(index) {$(this).removeClass('active');});
		$('#rocket').addClass('liftOff');
		$('html, body').delay('1500').animate({scrollTop:0}, 2700);
	});

	$('body').on('mousewheel', function(event) {
		$('.scroll').each(function(index) {
			$(this).removeClass('active');
			$('#rocket').removeClass('liftOff');
		});
	});
