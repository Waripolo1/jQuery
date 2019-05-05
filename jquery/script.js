$(document).ready(function () {
	$('.accordion li .title').click(function() {
		$(this).siblings().slideToggle(200, 'linear');
		$(this).children().html('-')

		var isOpen = $(this).parent('li').data('isOpen');
		$(this).parent('li').data('isOpen', !isOpen);

		console.log('isOpen', isOpen);
		if (isOpen) {
			$(this).children().html('+')
		}
		else{
			$(this).children().html('-')			
		}
		$(this).parent('li').data('isOpen', !isOpen);

		$(this).parent().siblings().find('.content').slideUp(200, 'linear');
		$(this).parent().siblings().find('.title span').html('+');

		$(this).parent().siblings().data('isOpen', false);
	});
});