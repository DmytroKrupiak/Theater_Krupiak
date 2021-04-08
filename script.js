const menu = document.querySelector('.header');
const menuBtnClose = document.querySelector('.header__btn-close');
const menuBtnOpen = document.querySelector('.menu__btn-open');
const body = document.body;

menuBtnOpen.addEventListener('click', function(event) {
	event.stopPropagation();
	menu.classList.add('active');
});

menuBtnClose.addEventListener('click', function(event) {
	menu.classList.remove('active');
});

body.addEventListener('click', function(event) {
	menu.addEventListener('click', function(event){
		event.stopPropagation();
	});
	menu.classList.remove('active');
});


let projectsSlider = new Swiper('.projects-slider', {
  loop:true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  freeMode: true
});

let mainSlider = new Swiper('.main-slider', {
	loop: true,
	spaceBetween: 40,
	allowTouchMove: false,
	navigation: {
		nextEl: '.main-slider__next',
		prevEl: '.main-slider__prev',
	},
});

let partnersSlider = new Swiper('.first_block', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	freeMode: true,
});

let partnersSlider2 = new Swiper('.second_block', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	freeMode: true,
});