document.addEventListener("DOMContentLoaded", function() {
	let checkableInputs = qsa('.checkable input'),
		tabs = qsa('.browse-sizes__menu button'),
		tabPanels = qsa('.browse-sizes__tabs .tab-panel'),
		searchInput = qs('.browse-sizes .search-input input'),
		searchTab = qs('.browse-sizes .search-tab'),
		scrollable = qs('.browse-sizes .simplebar-content-wrapper'),
		disabledButtons = qsa('.browse-sizes footer [disabled]'),
		resizeBtn = qs('.resize-btn')
		
	checkableInputs.forEach(el => {
		el.onchange = () => {
			if(Array(...checkableInputs).some(input => input.checked)) {
				disabledButtons.forEach(btn => btn.removeAttribute('disabled'));
			} else {
				disabledButtons.forEach(btn => btn.setAttribute('disabled', true));
			}
		}
	})

	tabs.forEach(tab => {
		tab.onclick = () => {
			if(!tab.classList.contains('active')) {
				scrollable.scrollTop = 0;

				let index = Array(...tabs).indexOf(tab);

				tabs.forEach(el=>el.classList.remove('active'));
				tab.classList.add('active');

				tabPanels.forEach(el=>el.classList.remove('show'));
				tabPanels[index].classList.add('show');

				searchInput.value = '';
			}
		}
	}) 

	searchInput.oninput = () => {
		scrollable.scrollTop = 0;

		tabPanels.forEach(el=>el.classList.remove('show'));
		tabs.forEach(el=>el.classList.remove('active'));
		searchTab.classList.add('show');
	}

	resizeBtn.onclick = () => {
		$('.modal.show').fadeOut().removeClass('show');
		$('#single-resize').fadeIn().addClass('show');
	}

	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}
});