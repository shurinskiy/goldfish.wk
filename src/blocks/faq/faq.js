(() => {

	document.querySelectorAll('.faq_crop .faq__items').forEach(block => {
		const items = block.querySelectorAll('.faq__item');
		const count = +block.dataset.hidden || 6;
		const more = document.createElement('button');
		more.className = 'faq__more button button_outline-green';
		more.innerText = block.dataset.more || 'Показать еще';

		items.forEach((item, i) => {
			if (i >= count) {
				item.style.display = 'none';
			}
		});

		if (items.length > count) {
			block.after(more);
		
			more.addEventListener('click', (e) => {
				items.forEach(item => item.removeAttribute('style'));
				more.remove();
			});
		}
	});

})();