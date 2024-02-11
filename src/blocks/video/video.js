(() => {

	document.querySelectorAll('.video').forEach(block => {
		const video = block.querySelector('video');

		if (video && !!video.canPlayType) {
			const play = document.createElement('button');
			
			video.controls = false;
			play.className = 'video__play';
			play.setAttribute('title', 'Play');
			play.addEventListener('click', (e) => video.play());
			block.append(play);
			
			['pause', 'ended', 'playing'].forEach((event) => {
				video.addEventListener(event, (e) => {
					let stopped = !(video.paused || video.ended);

					play.classList.toggle('playing', stopped);
					video.controls = stopped;
				});
			});
		}
	});

})();
