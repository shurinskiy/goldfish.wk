import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

(() => {
	document.querySelectorAll('.banner__slider')?.forEach(($slider, i) => {
		const swiper = new Swiper($slider, {
			slidesPerView: 1,
			loop: true,
			modules: [Navigation, Pagination],
			navigation: {
				nextEl: `.banner__s-navi_${i} .banner__s-next`,
				prevEl: `.banner__s-navi_${i} .banner__s-prev`,
			},
			pagination: {
				el: `.banner__s-pagn_${i}`,
				bulletActiveClass: 'active',
				clickable: true
			},
			on: {	
				beforeInit: function(el) {
					$slider
					.querySelector('.banner__s-navi')
					?.classList
					.add(`banner__s-navi_${i}`);

					$slider
					.querySelector('.banner__s-pagn')
					?.classList
					.add(`banner__s-pagn_${i}`);
				},
			},
		});
	});

})();