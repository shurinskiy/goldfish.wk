import scrollLock from 'scroll-lock';
import { selectTweaker } from "../../js/libs/selectTweaker";
import { makeModalFrame } from "../../js/libs/modal";

(() => {
	const modal = makeModalFrame({ 
		select: '.hero__title button, .card-b__button, .card-s__button, .card-a__button', 
		scrollLock,
		open: function({ modal }, button) {
			const info = this.querySelector('.form__field_info');
			const video = this.querySelector('video');

			if (info) {
				info.value ??= button.dataset?.info;
			}

			if (video && !!video.canPlayType) {
				const play = document.createElement('button');

				play.className = 'modal__play';
				play.addEventListener('click', (e) => video.play());
				this.append(play);
				
				['pause', 'ended', 'playing'].forEach((event) => {
					video.addEventListener(event, (e) => {
						play.classList.toggle('playing', !(video.paused || video.ended));
					});
				});
			}

			selectTweaker(this.querySelectorAll('.form__field_sect'));
		}
	});
})();