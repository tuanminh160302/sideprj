$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleClass('open');
	});
});

var windowWidth = window.screen.width
if (windowWidth <= 600) {
	var menuTrigger = 0
	document.querySelector('#menu').addEventListener('click', () => {
		menuTrigger = 1 - menuTrigger
		if (menuTrigger === 1) {
			gsap.to('.menu-container', .9, {scaleX: 1, ease:'power4.inOut'})
			gsap.to('.nav-bar-elt-m', .2, {delay: .75, opacity: 1})
		} else if (menuTrigger === 0) {
			gsap.to('.nav-bar-elt-m', .3, {opacity: 0})
			gsap.to('.menu-container', .9, {delay: .2, scaleX: 0, ease:'power4.inOut'})
		}
	})
}