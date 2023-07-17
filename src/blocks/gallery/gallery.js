import { makeGallery } from "../../js/libs/makeGallery";

(() => {
	makeGallery(document.querySelectorAll('.gallery'), { 
		class: 'gallery',
		render: function() {
			this.querySelectorAll('.gallery__item').forEach((item) => {
				item.querySelector('video') && item.classList.add('gallery__item_video');
				item.setAttribute('rel', 'gallery');
				item.dataset.modal = '#';
			});
		}
	});
})();