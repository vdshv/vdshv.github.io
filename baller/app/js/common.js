history.scrollRestoration = "manual";

var isTouchDevice = (('ontouchstart' in window)
         || (navigator.MaxTouchPoints > 0)
         || (navigator.msMaxTouchPoints > 0));
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
isTouchDevice = true;
} else {
isTouchDevice = false;
}

document.addEventListener("DOMContentLoaded", function() {

	var mobSize = window.innerWidth < 768 ? true : false;
	let hero = document.querySelector('.hero');

	if(mobSize) {
		hero.style.height = window.innerHeight + 'px';
	} else {
		hero.style.height = `calc(100vh - ${ document.querySelector('.header').clientHeight }px)`;
	}

	document.body.classList.remove('blocked');

	let questions = qsa('.faq__question');

	questions.forEach(el => {
		el.onclick = (e) => {
			let answer = el.nextElementSibling;
			if(el.classList.contains('active')) {
				el.classList.remove('active');
				answer.style.height = '0px';
			} else {
				el.classList.add('active');
				answer.style.height = answer.scrollHeight + 'px';
			}
		};
	})

	let video = qs('.about__video');
	if(video) {
		const player = new Plyr('#player');

		if(isTouchDevice) {
			video.classList.remove('cursor');

			video.onclick = () => {
				if(video.classList.contains('playing') && !video.classList.contains('clicked')) {
					video.classList.add('clicked');

					setTimeout(()=> {
						video.classList.remove('clicked');
					}, 1000)
				}
			}
		}

		qs('.play').onclick = () => {
			player.play();
			qs('.about__video').classList.add('playing');
		}
		qs('.pause').onclick = () => {
			player.pause();
			qs('.about__video').classList.remove('playing');
		}

		player.on('ended', (event) => {
		  	qs('.about__video').classList.remove('playing');
		});


		var glide = new Glide('.slider__glide', {
		  type: 'carousel',
		  animationDuration: 1200,
		  perView: 6,
		  autoplay: 5000,
		  swipeThreshold: 30,
		  hoverpause: false,
		  focusAt: 'center',
		  gap: 30,
		  breakpoints: {
		    767: {
		      gap: 25,
		      touchAngle: 60
		    },
		    500: {
		      perView: 2.3,
		      gap: 15,
		      touchAngle: 60
		    }
		  }
		})
		glide.on(['run'], function() {
		  qsa('.glide__slide').forEach((el,ind) => {
		  	el.classList.remove('shifted');

		  	if(glide.index % 2 && ind % 2 == 0) {
	  			el.classList.add('shifted');
		  	} else if (glide.index % 2 == 0 && ind % 2) {
		  		el.classList.add('shifted');
		  	}
		  });
		})
		glide.mount();

		glide.go('=0');

		qsa('.slider__arrows div').forEach(el => {
			el.onclick = () => {
				glide.go(el.dataset.glideDir)
			}
		})


		var glideRarity = new Glide('.rarity__glide', {
		  type: 'slider',
		  animationDuration: 1200,
		  perView: 1,
		  autoplay: 5000,
		  swipeThreshold: 30,
		  hoverpause: false,
		  focusAt: 'center',
		  gap: 0
		  
		})

		glideRarity.mount();

		glideRarity.go('=0');

		qsa('.rarity__arrows div').forEach(el => {
			el.onclick = () => {
				glideRarity.go(el.dataset.glideDir)
			}
		})
	}



	const scrollRaf = window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    window.mozRequestAnimationFrame ||
	    window.oRequestAnimationFrame ||
	    window.msRequestAnimationFrame;

	function scrollTo(to) {
	    const start = window.scrollY || window.pageYOffset;
	    const time = Date.now();
	    const duration = Math.abs(start - to) / 2;

	    (function step() {
	        var dx = Math.min(1, (Date.now() - time) / duration)
	        var pos = start + (to - start) * easeInOutCubic(dx)

	        window.scrollTo(0, pos)

	        if (dx < 1) {
	            scrollRaf(step);
	        }
	    })()
	}
	function easeInOutCubic(x) {
		return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
	}
	function offsetTop(el) {
	    var rect = el.getBoundingClientRect(),
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    return rect.top + scrollTop;
	}

	function scrollFunc(scrTo) {
		if(window.innerWidth < 768) {
			document.scrollingElement.style.height = 'auto';
			document.scrollingElement.style.overflow = 'unset';
			document.body.style.height = 'auto';
			document.body.style.overflow = 'unset';

			scrollToY = offsetTop(qs(scrTo)) - qs('.header').clientHeight;
			qs('.header__nav-mob').classList.remove('active');
		} else {
			scrollToY = offsetTop(qs(scrTo)) - qs('.header').clientHeight;

			if(scrTo == '#Rarity') {
				scrollToY = offsetTop(qs(scrTo)) - qs('.header').clientHeight - 30;
			}
		}
		scrollTo(scrollToY);
	}


	let scrollToY;

	qsa('a[data-scroll]').forEach(el => {
		el.onclick = (e) => {

			e.preventDefault();

			if(window.location.href.indexOf('whitelist') !== -1 ) {
				localStorage.setItem('scrollTo', el.dataset.scroll);
				window.location.href = "/";
			}

			scrollFunc(el.dataset.scroll);
		}
	})

	if(localStorage.getItem('scrollTo')) {
		setTimeout(() => {
			scrollFunc(localStorage.getItem('scrollTo'));

			localStorage.removeItem('scrollTo');
		}, 500)
	}

	// qsa('a').forEach(el => {
	// 	el.onclick = (e) => {
	// 		if(el.href.indexOf('http') == -1) {
	// 			document.body.classList.add('leaving');
	// 			setTimeout(() => {
	// 				// window.open(el.href);
	// 			}, 200)
	// 		}
	// 	}
	// })

	let hamb = qs('.header__hamb'),
		menu = qs('.header__nav-mob'),
		close = qs('.header__close');

	var scrolled;

	hamb.onclick = () => {
		scrolled = document.documentElement.scrollTop;

		setTimeout(() => {
			document.scrollingElement.style.height = '100vh';
			document.scrollingElement.style.overflow = 'hidden';
			document.body.style.height = '100vh';
			document.body.style.overflow = 'hidden';
		}, 300)
		menu.classList.add('active');
	}
	close.onclick = () => {
		document.scrollingElement.style.height = 'auto';
		document.scrollingElement.style.overflow = 'unset';
		document.body.style.height = 'auto';
		document.body.style.overflow = 'unset';

		document.documentElement.scrollTop = scrolled;
		menu.classList.remove('active');
	}
	
});

function qs (selector, searchIn) {
	return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
}
function qsa (selector, searchIn) {
	return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
}
