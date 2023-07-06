import { slideToggle } from "../../js/libs/helpers.js";

(() => {
	document.querySelectorAll('.card-a').forEach((card) => {
		const hidden = card.querySelector('.card-a__content');
		
		card.querySelector('.card-a__head').addEventListener('click', ({target: t}) => {
			if (! t.closest('.card-a__button'))
				slideToggle(hidden, 500, () => card.classList.toggle('opened'));
		});
	});

})();