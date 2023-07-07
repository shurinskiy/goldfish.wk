import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

(() => {
	document.querySelectorAll('.service__slider')?.forEach(($slider, i) => {
		const swiper = new Swiper($slider, {
			slidesPerView: 1,
			loop: true,
			modules: [Navigation, Pagination],
			navigation: {
				nextEl: `.service__s-navi_${i} .service__s-next`,
				prevEl: `.service__s-navi_${i} .service__s-prev`,
			},
			pagination: {
				el: `.service__s-pagn_${i}`,
				bulletActiveClass: 'active',
				clickable: true
			},
			on: {	
				beforeInit: function(el) {
					$slider
					.querySelector('.service__s-navi')
					?.classList
					.add(`service__s-navi_${i}`);

					$slider
					.querySelector('.service__s-pagn')
					?.classList
					.add(`service__s-pagn_${i}`);
				},
			},
		});
	});

})();