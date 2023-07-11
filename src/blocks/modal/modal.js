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
				const full = document.createElement('button');

				video.controls = false;
				video.muted = false;
				video.volume = 1;
				
				play.className = 'modal__play';
				full.className = 'modal__full';

				play.addEventListener('click', (e) => {
					let stopped = (video.paused || video.ended);
					stopped ? video.play() : video.pause();
					play.classList.toggle('playing', stopped);
				});

				full.addEventListener('click', (e) => {
					let cls = 'modal__content_fullscreen';

					if (document.fullscreenElement) {
						document.exitFullscreen();
						this.classList.remove(cls);
					} else if (document.webkitFullscreenElement) {
						document.webkitExitFullscreen();
						this.classList.remove(cls);
					} else if (this.webkitRequestFullscreen) {
						this.webkitRequestFullscreen();
						this.classList.add(cls);
					} else {
						this.requestFullscreen();
						this.classList.add(cls);
					}					
				});
				
				this.append(play);
				this.append(full);
			}

			selectTweaker(this.querySelectorAll('.form__field_sect'));
		}
	});
})();