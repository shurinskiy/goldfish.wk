(() => {

	document.querySelectorAll('.video-b').forEach(block => {
		const video = block.querySelector('video');
		const play = document.createElement('button');
		const full = document.createElement('button');

		video.controls = false;
		video.muted = false;
		video.volume = 1;
		
		play.className = 'video-b__play';
		full.className = 'video-b__full';

		play.addEventListener('click', (e) => {
			let stopped = (video.paused || video.ended);
			stopped ? video.play() : video.pause();
			play.classList.toggle('playing', stopped);
		});

		full.addEventListener('click', (e) => {
			let cls = 'video-b_fullscreen';

			if (document.fullscreenElement) {
				document.exitFullscreen();
				block.classList.remove(cls);
			} else if (document.webkitFullscreenElement) {
				document.webkitExitFullscreen();
				block.classList.remove(cls);
			} else if (block.webkitRequestFullscreen) {
				block.webkitRequestFullscreen();
				block.classList.add(cls);
			} else {
				block.requestFullscreen();
				block.classList.add(cls);
			}					
		});
		
		block.append(play);
		block.append(full);
	});

})();
