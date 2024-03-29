history.scrollRestoration = "manual";
document.addEventListener("DOMContentLoaded", function() {
	// DETECT TOUCH
	// var isTouchDevice = (('ontouchstart' in window)
	//          || (navigator.MaxTouchPoints > 0)
	//          || (navigator.msMaxTouchPoints > 0));
	// if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	// || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
	// isTouchDevice = true;
	// } else {
	// isTouchDevice = false;
	// }

	const cartTrigger = qs('.header__cart'),
		cart = qs('.sidecart'),
		cartClose = qs('.sidecart__close');
		cartOverlay = qs('.sidecart__overlay');
	
	window.onclick = (e) => {
		if(cart.classList.contains('open') &&
			e.target.closest('.sidecart__overlay')) {
			cart.classList.remove('open');
		}
	}
	
	cartTrigger.onclick = (e) => {
		e.preventDefault();
		e.stopImmediatePropagation();
		cart.classList.add('open');
	};
	cartClose.onclick = (e) => {
		cart.classList.remove('open');
	};
	cartOverlay.onclick = (e) => {
		cart.classList.remove('open');
	};


	let tabs = qsa('.tab__title');

	tabs.forEach(el => {
		el.onclick = (e) => {
			let tabContent = el.nextElementSibling;

			if(el.classList.contains('active')) {
				el.classList.remove('active');
				tabContent.style.height = '0px';
			} else {
				el.classList.add('active');
				tabContent.style.height = tabContent.scrollHeight + 'px';
			}

			setTimeout(() => {
				setTabsTop();
			}, 300);
		};
	});
	

	function animateLines(elems) {
		let lines = Array(...elems).map(el => new SplitType(el, { types: 'lines', lineClass: 'lines__line' }).lines).flat();

		lines.forEach((line, ind) => {
			line.innerHTML = `<div class="lines__line-wrap">${line.innerHTML}</div>`;
			
			line.firstChild.style.transitionDelay = (.5 + (0.1 * ind)) + 's';
		})
	}

	qsa('.lines').forEach(lines => animateLines(lines.children));

// SCROLLING ANIM
	// let options = isTouchDevice ? { threshold: 0 } : { threshold: 0 };
	let options = { threshold: 0 };

	let callback = function(entries, observer) {
	    entries.forEach(entry => {
	    	if (entry.isIntersecting){

				if(entry.target.classList.contains('hero__title')) {
					entry.target.classList.add('visible');
				}

				if(entry.target.classList.contains('lines')) {
					if(entry.target.querySelector('.lines__line-wrap')) {
						entry.target.classList.add('in-view');
					}
				} else {
					entry.target.classList.add('in-view');
				}
	    	} else {
	    		entry.target.classList.remove('in-view');
	    	}
      	});
	};
	let observer = new IntersectionObserver(callback, options),
		animated = qsa('.animated');

	animated.forEach(el => {
		if (observer) {
			observer.observe(el)
		} else {
			el.classList.add('in-view');
		}
		
	});


	let segments = qsa('.commitments-sticky > .text-image'),
		segmentsOverlay = qsa('.commitments-sticky .text-image__overlay'),
		rectEl = {};

	let parallax = [...qsa('.parallax img')].map(el => {
						return {
							el: el,
							scroll: el.dataset.scroll
						}
					}),
		scrollTop = 0,
		scrollModified = 0;

	const raf = window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    window.mozRequestAnimationFrame ||
	    window.oRequestAnimationFrame ||
	    window.msRequestAnimationFrame;

	if (segments || parallax) (function init() {

	    (function step() {
			segments.forEach((el, ind) => {
				rectEl = rect(el);

				if(rectEl.inView && segmentsOverlay[ind - 1]) {
					segmentsOverlay[ind - 1].style.opacity = rectEl.offset * 100 / rectEl.base + '%';
				}
			});

			scrollTop = document.scrollingElement.scrollTop;
			parallax.forEach(el => {
				scrollModified = scrollTop * el.scroll;
				el.el.style.transform = `translate3d(0, ${scrollModified}px, 0)`;
			})
	    	
           	raf(step);
	    })();
	})();

	function rect (el) {
		var rect = el.getBoundingClientRect();

		return {
			inView: rect.top > qs('.header').clientHeight && rect.top < window.innerHeight,
			offset: window.innerHeight - rect.top,
			base: window.innerHeight - qs('.header').clientHeight
		}
	}
// END SCROLLING ANIM


// HOME
	if(qs('.bags__slider')) {
		
		let titleArr = [],
			title = qs('.hero h1');
		title.childNodes.forEach(el => {
			if(el.nodeName == '#text') {
				titleArr.push(...wrapEach(el.data.split(''), 'span'));
			} else {
				titleArr.push(`<${el.localName}>`, ...wrapEach(el.innerText.split(''), 'span'), `</${el.localName}>`);
			}
		})
		function wrapEach(arr, tag) {
			return arr.map(el => {
				return el == ' ' ? `<${tag} class="inline">${el}</${tag}>` : `<${tag}>${el}</${tag}>`;
			});
		}
		title.innerHTML = titleArr.join('');
		qsa('.hero__title span:not(.inline)').forEach((el, ind) => {
			el.style.animationDelay = (0 + (0.05 * ind)) + 's';
			el.style.transitionDelay = (.3 + (0.06 * ind)) + 's';
		})


		var glide = new Glide('.glide', {
			focusAt: 0,
			perView: 3,
			type: 'carousel',
			peek: {
				before: 0,
				after: 60
			}
		})
		glide.mount()


		qsa('.home-commitments__image-title img').forEach((letter, ind) => {
			letter.style.transitionDelay = (0.5 + (0.08 * ind)) + 's';
		})
	}

// END HOME

// PRODUCTS
	if(qs('.prod')) {
		const buttons = qs('.prod__buttons'),
		prodTabs = qs('.prod__tabs'),
		header = qs('.header');

		buttons.style.top = header.clientHeight + 'px';

		setTabsTop();

		function setTabsTop () {
			prodTabs.style.top = `${buttons.clientHeight + header.clientHeight}px`;
		}

		let oldScrollY = window.scrollY;

		window.onscroll = (e) => {
			if(oldScrollY < window.scrollY){
				if(window.innerHeight - header.clientHeight - buttons.clientHeight < prodTabs.clientHeight) {
					let gap = window.innerHeight - prodTabs.clientHeight;;
					prodTabs.style.top = `${gap}px`;
				}
			} else {
				setTabsTop ();
			}

			oldScrollY = window.scrollY;
		}
	}
// END PRODUCTS

});

function qs (selector, searchIn) {
	return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
}
function qsa (selector, searchIn) {
	return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
}