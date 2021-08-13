// =========================МОДАЛЬНЫЕ ОКНА========================================
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');
// Кнопки - Открыть Модалку
modalButtons.forEach(function (item) {
	item.addEventListener('click', function () {
		const modalId = this.dataset.modalButton;
		const modal = document.querySelector('#' + modalId);
		modal.classList.remove('hidden');
		modal.querySelector('.modal-window').addEventListener('click', function (e) {
			e.stopPropagation();
		});
	})
})
// Кнопки - Закрыть Модалку
modalClosebuttons.forEach(function (item) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const modal = this.closest('[data-modal]');
		modal.classList.add('hidden');
	})
})
// Закрытие модалок по фейду
allModals.forEach(function (item) {
	item.addEventListener('click', function () {
		console.log(item);
		this.classList.add('hidden');
	});
});

// ====================SWIPER=================================
const sliders = document.querySelectorAll('.slider__container');
sliders.forEach((el) => {
	let swiper = new Swiper(el, {
		effect: "slide",
		lazy: true,
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		speed: 800,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		navigation: {
			nextEl: el.querySelector('.swiper-button-next'),
			prevEl: el.querySelector('.swiper-button-prev'),
		},
		pagination: {
			el: el.querySelector('.swiper-pagination'),
			type: "fraction",
			formatFractionCurrent: addZero,
			formatFractionTotal: addZero
		},
		breakpoints: {
			320:{
				slidesPerView: 1,
				spaceBetween: 20,
				initialSlide: 0,
			},
			767: {
				spaceBetween: 20,
				slidesPerView: 1,
				initialSlide: 0,
			},
			992: {
				spaceBetween: 30,
				slidesPerView: 3,
				initialSlide: 1,
			},
			1280: {
				spaceBetween: 0,
				slidesPerView: 3,
				initialSlide: 1,
			},
			1500:{
				spaceBetween: 30,
				slidesPerView: 3,
				initialSlide: 1,
			},
			1800: {
				spaceBetween: -60,
				slidesPerView: 3,
				initialSlide: 1,
			}
		}
	});
});
function addZero(num){
	return (num > 9) ? num : '0' + num;
}