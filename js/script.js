// Секція features
$('.items__row > div').on('click', function () {
	$(this).children('.items__row-title').toggleClass('items__row-title-js');
	$(this).parent('.items__row').toggleClass('items__row-js');
	$(this).next('.items__row-text').slideToggle(300);
});
// Секція about
$('.about_items > div').on('click', function () {
	$(this).children('.about_items_right').toggleClass('about_rotate_icon');
	$(this).parent('.about_items').toggleClass('change_color');
	$(this).next('.about_items_text').slideToggle(300);
});
// Модальне вікно(Pop-up)
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
// Кнопка до гори
$(window).on('scroll', function (){
	if($(this).scrollTop() > 500){
		$('#up').fadeIn()
	}else{
		$('#up').fadeOut()
	}
})
$('#up').on('click', function () {
	$('html, body').animate({ scrollTop: 0 }, 500)
})
// Слайдер
$(document).ready(function(){
	$('.slider').bxSlider({
		controls: false
	});
});