










$('.about__items > div').on('click', function () {
	$(this).children('.about-click').toggleClass('about-rotate-icon');
	$(this).parent('.about__items').toggleClass('change-color');
	$(this).next('.about-text').slideToggle(300);
});




$('.modal-overlay').on('click', function (e) {
	if ($(e.target).closest('.modal').length == 0) {
		$(this).fadeOut();
	}
});

$('.modal__close').on('click', function () {
	$(this).parents('.modal-overlay').fadeOut()
})

$('#open-modal').on('click', function () {
	$('.modal-overlay').fadeIn()
})