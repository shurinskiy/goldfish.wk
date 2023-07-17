import scrollLock from 'scroll-lock';
import { selectTweaker } from "../../js/libs/selectTweaker";
import { makeModalFrame } from "../../js/libs/modal";

(() => {
	const setPlayButton = (content, video) => {
		let play = content.querySelector('.modal__play');

		if (!! video?.canPlayType) {
			play ||= document.createElement('button');
			play.className = 'modal__play';
			play.addEventListener('click', (e) => video.play());
			content.append(play);

			['pause', 'ended', 'playing'].forEach((event) => {
				video.addEventListener(event, (e) => {
					let stopped = video.paused || video.ended;

					play.classList.toggle('playing', !stopped);
					video.controls = !stopped;
				});
			});
		} else {
			content.querySelectorAll('video').forEach((video) => video.pause());
			play?.remove();
		}
	}

	const modal = makeModalFrame({ 
		select: '.hero__title button, .card-b__button, .card-s__button, .card-a__button, .gallery__item', 
		scrollLock,
		open: function({ slideshow }, button) {
			const info = this.querySelector('.form__field_info');
			const active = slideshow ? '.active': '';

			if (info) {
				info.value ??= button.dataset?.info;
			}

			selectTweaker(this.querySelectorAll('.form__field_sect'));
			setPlayButton(this, this.querySelector(`video${active}`));
		},
		move: function() {
			setPlayButton(this, this.querySelector('video.active'));
		}
	});
})();