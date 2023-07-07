import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {

	let swiper = new Swiper('.reviews__slider', {
		modules: [Navigation],
		navigation: {
			nextEl: '.reviews__next',
			prevEl: '.reviews__prev',
		},
		breakpoints: {
			0: {
				spaceBetween: 14,
				slidesPerView: 1.2
			},
			480: {
				spaceBetween: 14,
				slidesPerView: 1.7
			},
			640: {
				spaceBetween: 16,
				slidesPerView: 2
			},
			780: {
				spaceBetween: 18,
				slidesPerView: 3
			},
			1100: {
				spaceBetween: 24,
				slidesPerView: 4
			},
			1280: {
				spaceBetween: 24,
				slidesPerView: 4
			}
		}
	});

})();