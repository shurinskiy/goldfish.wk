import ymaps from 'ymaps';

(() => {
	ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {

		const map = new maps.Map('map', {
			center: [12.9165, 100.8667],
			zoom: 16,
			controls: ['zoomControl'],
		},{
			zoomControlPosition: { right: '5%', top: 100 },
			zoomControlFloat: 'none'
		}),

		goldfish = new maps.GeoObject({
			geometry: {
				type: "Point",
				coordinates: [12.9165, 100.8667]
			},
			properties: {
				hintContent: 'Gold Fish',
				balloonContent: 'Мы оказываем <strong>консалтинговые услуги<br> в Таиланде</strong> для туристов, экспатов и бизнеса.<br>адрес: 352, Phratamnak 3, Pattaya City',
			}
		}, {
			preset: 'islands',
			iconColor: '#32BFC6'
		});

		map.behaviors.disable('scrollZoom');
		map.geoObjects.add(goldfish);

	})
	.catch(error => console.log('Failed to load Yandex Maps', error));

})();