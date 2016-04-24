var wedding = new Date('2017-03-18').getTime();
var today = new Date().getTime();
var daysleft = Math.ceil((wedding - today) / (1000 * 60 * 60 * 24));
$('#days-left').text(daysleft);

var buttons = ['home', 'aboutus', 'gallery', 'details', 'travel', 'registry'];

buttons.forEach(function (name) {
	$('#' + name).click(function () {
		console.log(name);
		$('html,body').animate({
			scrollTop: $('#tile-' + name).offset().top - 64
		}, 'slow');
	});
});


$(document).ready(function(){
	$('.carousel').carousel({ materialboxed: true });
	$(".button-collapse").sideNav();
});
