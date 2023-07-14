import { makeGallery } from "../../js/libs/makeGallery";

(() => {
	makeGallery(document.querySelectorAll('.gallery'), { 
		class: 'gallery'
	});
})();