document.addEventListener("DOMContentLoaded", function() {
	let tabs = qsa('.browse-sizes__menu button'),
		tabPanels = qsa('.browse-sizes__tabs .tab-panel');

	tabs.forEach(tab => {
		tab.onclick = () => {
			if(!tab.classList.contains('active')) {
				// let curTabs = tab.closest('.tabs').querySelectorAll('li'),
					// curContent = tab.closest('.tabs-cont').querySelectorAll('.tab'),
					let index = Array(...tabs).indexOf(tab);

					console.log(tabPanels[index]);

					

				tabs.forEach(el=>el.classList.remove('active'));
				tab.classList.add('active');

				tabPanels.forEach(el=>el.classList.remove('show'));
				tabPanels[index].classList.add('show');
			}
		}
	}) 

	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}
});