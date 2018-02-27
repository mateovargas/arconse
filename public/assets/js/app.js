var main = function(){

	//dropdown men toggle

	$('.dropdown-toggle').click(function(){
		$('.dropdown-menu').toggle();
	});


	//click the right arrow to make next slide appear
	$('.arrow-next').click(function(){
		
		var currentSlide = $('.active-slide');
		var nextSlide = $('.active-slide').next();
		var currentDot = $('.active-dot');
		var nextDot = $('.active-dot').next();

		//checks if slide is last slide and shifts to beginning
		if(nextSlide.length === 0) {
						
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		};

		//fades out current slide+dot and fades in next slide+dot
		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot')
	});

	//click the left arrow to slide to previous slide
	$('.arrow-prev').click(function(){
		var currentSlide = $('.active-slide');
		var prevSlide = $('.active-slide').prev();
		var currentDot = $('.active-dot');
		var prevDot = $('.active-dot').prev();

		//check if at the first slide and shifts to last
		if(prevSlide.length === 0) {
			prevSlide = $('.slide').last();
			prevDot = $('.dot').last();
		};

		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	});

};

$(document).ready(main);