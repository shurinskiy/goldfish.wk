import { makeGallery } from "../../js/libs/makeGallery";

(() => {
	makeGallery(document.querySelectorAll('.gallery'), { 
		class: 'gallery',
		render: function() {
			this.querySelectorAll('.gallery__item').forEach((item) => {
				item.dataset.modal = '#';
				item.setAttribute('rel', 'gallery');
			});
		}
	});
})();