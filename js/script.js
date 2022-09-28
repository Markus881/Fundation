$('.about__items > div').on('click', function (){
	$(this).next('.about-text').slideToggle(300);
})