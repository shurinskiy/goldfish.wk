import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { scrollClassToggle } from "./libs/scroll";
import { selectTweaker } from "./libs/selectTweaker";
import { slideToggle } from "./libs/helpers.js";
import "../../node_modules/swiped-events/dist/swiped-events.min.js";
import "./polyfills.js";
import "./blocks.js";

/* Тут можно писать код общий для всего проекта и требующий единого пространства имен */
selectTweaker(document.querySelectorAll('.form__field_sect'));
scrollClassToggle({ class: 'showed' });

let $window = $(window);
let $container = $('.accordion__inner_ajax');
let $toggles = $('.toggles .toggles__button');
let $tab = $('.ajaxtab');

let accordionCardsInit = (accordion) => {
	accordion.addEventListener('click', ({target: t}) => {
		if (t.closest('.card-a__head') && !t.closest('.card-a__button')) {
			let card = t.closest('.card-a');
			slideToggle(card.querySelector('.card-a__content'), 300, () => card.classList.toggle('opened'));
		}
	});
}

let bannerInit = (slider, i) => {
	new Swiper(slider, {
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
				slider
				.querySelector('.banner__s-navi')
				?.classList
				.add(`banner__s-navi_${i}`);

				slider
				.querySelector('.banner__s-pagn')
				?.classList
				.add(`banner__s-pagn_${i}`);
			},
		},
	});
};

document.querySelectorAll('.banner__slider')?.forEach(bannerInit);
document.querySelectorAll('.accordion__inner')?.forEach(accordionCardsInit);

if ($toggles.length && $tab.length) {
	$toggles.on('click', ({target: t}) => {
		$tab.prepend('<img class="loader" src="'+props.images_url+'/loading.svg"/>');

		let data = {
			tab: t.dataset.tab, 
			action: 'tab', 
			nonce: props.nonce
		};

		$.ajax({
			url: 	props.ajax_url,
			data:	data,
			type:	'POST'
		}).done((response) => {
			if(response.success) {
				$tab.html(response.data);
				$toggles.removeClass('active').eq($(t).index()).addClass('active');
			}
		}).always(() => {
			// инициализация всей динамики в подгруженном контенте
			$tab.find('img.loader').remove();

			selectTweaker(document.querySelectorAll('.form__field_sect'));
			scrollClassToggle({ class: 'showed' });

			document.querySelectorAll('.accordion__inner')?.forEach(accordionCardsInit);
			document.querySelectorAll('.banner__slider')?.forEach(bannerInit);
		});
	});
}

if ($container.length) {
	$window.on('scroll', (e) => {
		let length_from_top = $container.offset().top + $container.height();
		let scroll_from_top = $window.scrollTop() + $window.height();

		if((scroll_from_top > length_from_top) && !$container.hasClass('loading')) {
			$container.addClass('loading');
			$container.append('<img class="loader" src="'+props.images_url+'/loading.svg"/>');

			let data = {
				action:		'more_search',
				nonce :		props.nonce,
				per_page:	4,
				offset:		$container.find('.accordion__card').length,
			};

			$.ajax({
				url: 	props.ajax_url,
				data:	data,
				type:	'POST'
			}).done((response) => {
				if(response.success) { 
					$container.append(response.data);
					$container.removeClass('loading');
				}
			}).always(() => {
				$container.find('img.loader').remove();
			});
		}
	});
}