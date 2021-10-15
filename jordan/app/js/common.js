// history.scrollRestoration = "manual";
document.addEventListener("DOMContentLoaded", function() {
	// DETECT TOUCH
	var isTouchDevice = (('ontouchstart' in window)
	         || (navigator.MaxTouchPoints > 0)
	         || (navigator.msMaxTouchPoints > 0));
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
	isTouchDevice = true;
	} else {
	isTouchDevice = false;
	}


	// SCROLLING ANIM
	let options = {
	    threshold: 0
	}
	let callback = function(entries, observer) {
	    entries.forEach(entry => {
	    	if (entry.isIntersecting){
	    		entry.target.classList.add('in-view');
	    	}  else {
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
			el.classList.remove('animated');
			el.classList.add('in-view');
		}
		
	});
	// END SCROLLING ANIM

	// MOB MENU
	if(qs('.nav-close')) {
		qs('.header__menu').onclick = () => {
			qs('.nav').classList.add('active');
		}
		qs('.nav-close').onclick = () => {
			qs('.nav').classList.remove('active');
		}
	}
	
	// END MOB MENU



	let glides = qsa('.glide');
	glides.forEach(glide => {
		let qty = glide.querySelectorAll('.glide__slide').length,
			bullets = glide.querySelector('.glide__bullets');
		if(glide.classList.contains('three-col')) {
			if(window.innerWidth > 1023) {
				qty = qty - 2;
			} else if (window.innerWidth > 600) {
				qty = qty - 1;
			}
		}
		for(let i = 0; i < qty; i++) {
			let bullet = document.createElement("button");
			bullet.classList.add('glide__bullet');
			bullet.dataset.glideDir = `=${i}`;
			bullets.appendChild(bullet);
		}
	})

	let activities = qsa('.activities__item'),
		activitiesGrid = qs('.activities__grid');
	if(activitiesGrid) {
		window.addEventListener('load', (event) => {
		   let arr = Array(...activities),
		   	   heights = arr.map(el=>el.scrollHeight),
		   	   max = Math.max(...heights),
		   	   min = Math.min(...heights),
		   	   avg = (max + min) / 2;
		   	arr.forEach(item => {
		   		if(item.scrollHeight > avg) {
		   			item.style.gridRowEnd = 'span 2';
		   		}
		   	})
		   	activitiesGrid.style.alignItems = 'stretch';
		});
	}
	let dropdowns = qsa('.dropdown-trigger');

	dropdowns.forEach(el => {
		el.onclick = (e) => {
			let answer = el.nextElementSibling;
			if(el.classList.contains('active')) {
				el.classList.remove('active');
				answer.style.height = '0px';
			} else {
				el.classList.add('active');
				if(answer.closest('.faq__item')){
					answer.style.height = answer.scrollHeight + 35 + 'px';
				} else {
					answer.style.height = answer.scrollHeight + 10 + 'px';
				}
				
			}
		};
	})

	let tabs = qsa('.tabs li'),
		tabsContent = qsa('.tab');

	if(tabs.length) tabs.forEach(tab => {
		tab.onclick = () => {
			if(tab.closest('.faq__tabs')) {
				let scrollToY = offsetScrollTop(qs('.faq__content'));
				scrollTo(scrollToY);
			}

			if(!tab.classList.contains('active')) {
				let curTabs = tab.closest('.tabs').querySelectorAll('li'),
					curContent = tab.closest('.tabs-cont').querySelectorAll('.tab'),
					curInd = Array(...curTabs).indexOf(tab);

					

				curTabs.forEach(el=>el.classList.remove('active'));
				tab.classList.add('active');

				curContent.forEach(el=>el.classList.remove('active'));
				curContent[curInd].classList.add('active');
			}
		}
	}) 


	let glidesCol1 = qsa('.glide.one-col');
	glidesCol1.forEach(glide => {
		new Glide(glide, {
		  type: 'carousel',
		  perView: 1,
		  gap: 0
		}).mount();
	});

	let glidesCol3 = qsa('.glide.three-col');
	glidesCol3.forEach(glide => {
		new Glide(glide, {
		  type: 'slider',
		  rewind: false,
		  bound: true,
		  perView: 3,
		  startAt: 0,
		  gap: 32,
		  breakpoints: {
		    1023: {
		      perView: 2,
		      gap: 20
		    },
		    600: {
		      perView: 1.05,
		      gap: 20,
		      focusAt: 'center'
		    }
		  }

		}).mount();
	})

	let pubs = qsa('.pubs__items'),
		pubsSlides = qsa('.pubs__items .glide__slide'),
		pubsQty = pubsSlides.length;

	if(pubsQty){
		calcLayers(2);

		let pubsGlide = new Glide('.glide.five-col', {
			type: 'slider',
			rewind: false,
			bound: true,
			focusAt: 'center',
			perView: 5,
			startAt: 2,
			gap: 0,
			breakpoints: {
				1023: {
				  perView: 4
				},
				767: {
				  perView: 3
				},
				550: {
					perView: 2
				}
			}
		})

		pubsSlides.forEach((slide,index) => slide.onclick = (e) => {
			if(!slide.classList.contains('glide__slide--active')) {
				pubsGlide.go(`=${index}`);
			}
		})

		pubsGlide.on('run', function(e) {
			var current = pubsGlide.index;
		
			calcLayers(current);
		})
		pubsGlide.mount();
	}

	function calcLayers(current) {
		for(let i = current - 1; i >= 0; i--) {
			if(current - i > 2) {
				pubsSlides[i].classList.add('hidden')
			} else {
				pubsSlides[i].classList.remove('hidden');
			}
			pubsSlides[i].style.zIndex = i + 1;
			 pubsSlides[i].style.transform = 'translate3d(0, 0, 0)';
		}
		for(let i = pubsQty - 1; i > current; i--) {
			if(i - current > 2) {
				pubsSlides[i].classList.add('hidden')
			} else {
				pubsSlides[i].classList.remove('hidden');
			}
			pubsSlides[i].style.zIndex = pubsQty - i;
			pubsSlides[i].style.transform = 'translate3d(0, 0, 0)';
		}
		let currentSlide = pubsSlides[current],
			prevSlide = currentSlide.previousElementSibling,
			nextSlide = currentSlide.nextElementSibling,
			mobScreen = window.innerWidth < 550;

		currentSlide.style.transform = 'translate3d(0, 0, 0)';
		
		setTimeout(()=>{
			pubsSlides[current].style.zIndex = 1000;
			if(prevSlide && !mobScreen) {
				prevSlide.style.transform = 'translate3d(-20%, 0, 0)';
			}
			if(nextSlide && !mobScreen) {
				nextSlide.style.transform = 'translate3d(20%, 0, 0)';
			}
		}, 600)
	}


	let closeBannerMessage = qs('.hero__message-close'),
		bannerMessage = qs('.hero__message'),
		heroRightExpand = qs('.hero__right-expand'),
		heroRight = qs('.hero__right'),
		heroLeft = qs('.hero__left'),
		player = qs('#player');


	if(closeBannerMessage) closeBannerMessage.onclick = () => {
		bannerMessage.classList.add('hidden');
		qs('.hero__right-scroll').style.paddingTop = "0";
	}
	if (heroRightExpand) heroRightExpand.onclick = (e) => {
		if(heroRightExpand.classList.contains('active')) {
			heroRight.classList.remove('hidden');
			heroRightExpand.classList.remove('active');
			heroLeft.style.transform = 'translate3d(0,0,0)';
		} else {
			heroRight.classList.add('hidden');
			heroRightExpand.classList.add('active');

			var shift = qs('.hero__right').clientWidth / 2;
			heroLeft.style.transform = `translate3d(${shift}px,0,0)`;
		}
	}
	if(player) {
		const player = new Plyr('#player', {
		  controls: false,
		  autoplay: true,
		  muted: true,
		  clickToPlay: false,
		  quality: { default: 1080 }
		});

		let controls = qs('.hero__title-btn'),
			play = qs('.hero__title-btn .play'),
			pause = qs('.hero__title-btn .pause'),
			replay = qs('.hero__title-btn .replay'),
			mute = qs('.hero__title-btn .mute-video');

		pause.onclick = (e) => {
			if(!e.target.closest('.mute-video')) {
				player.pause();
				pause.classList.remove('active');
				play.classList.add('active');
			} else {
				if(player.muted) {
					mute.classList.remove('active');
					player.muted = false;
				} else {
					mute.classList.add('active');
					player.muted = true;
				}
				
			}
			
		}
		play.onclick = () => {
			player.play();
			pause.classList.add('active');
			play.classList.remove('active');
		}
		replay.onclick = () => {
			player.play();
			pause.classList.add('active');
			replay.classList.remove('active');
		}
		
		player.on('timeupdate', event => {
			const instance = event.detail.plyr;
			if(instance.playing && instance.currentTime >= instance.duration - 1) {
				player.pause();
				player.currentTime = 0;
				pause.classList.remove('active');
				replay.classList.add('active');
			}
			if(instance.playing) {
				pause.classList.add('active');
				play.classList.remove('active');
			}
		});
		player.on('ready', event => {
			var heroHeight = qs('.hero-home').clientHeight,
				vpwidth = window.innerWidth,
				iframe = qs('.hero iframe');

			iframe.style.width = (heroHeight * 16 / 9) > vpwidth ? (heroHeight * 16 / 9) + 'px' : vpwidth + 'px';

			window.addEventListener('resize', () => {

			  heroHeight = qs('.hero-home').clientHeight;
			  vpwidth = window.innerWidth;

			  iframe.style.width = (heroHeight * 16 / 9) > vpwidth ? (heroHeight * 16 / 9) + 'px' : vpwidth + 'px';
			});


			const instance = event.detail.plyr;

			if(!instance.playing) {
				pause.classList.remove('active');
				play.classList.add('active');
			}

			if(instance.muted) {
				mute.classList.add('active');
			}

			controls.style.opacity = 1;
		});

		
	}
	
	let selectOptions = qsa('.c-select li'),
		selectButtons = qsa('.c-select button');
	if(selectOptions.length) {
		selectButtons.forEach(el => {
			el.onclick = e => e.target.focus(); 
		});
		selectOptions.forEach(el => {
			el.onclick = () => {
				let btn = el.closest('.c-select').querySelector('.c-select__value'),
					input = el.closest('.c-select').querySelector('input'),
					siblings = el.closest('.c-select').querySelectorAll('li');
				siblings.forEach(li => li.classList.remove('active'));

				el.classList.add('active');
				btn.innerHTML = el.innerHTML;
				input.value = el.innerHTML;
			}
		});
	}

	let headerSearch = qs('.header__search'),
		headerForm = qs('.header__search input'),
		headerLogo = qs('.header__logo');
	if(headerSearch) {
		headerSearch.onclick = (e) => {
			headerSearch.classList.add('active');
			headerForm.focus();
			headerLogo.classList.add('hidden');
		}
		document.onclick = (e) => {
			if(headerSearch.classList.contains('active')
			&& !e.target.closest('.header__search')) {
				headerSearch.classList.remove('active');
				headerLogo.classList.remove('hidden');
			}
		}
	} 


	let contactSelects = qsa('.contact select');
	if(contactSelects.length) {
		contactSelects.forEach(select => select.onchange = () => {
			if(!select.value) {
				select.classList.add('placeholder');
			} else {
				select.classList.remove('placeholder');
			}
		})
	}


	const requestAnimationFrame = window.requestAnimationFrame ||
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
	            requestAnimationFrame(step)
	        }
	    })()
	}
	function easeInOutCubic(x) {
		return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
	}
	function offsetScrollTop(el) {
	    var rect = el.getBoundingClientRect(),
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    return rect.top + scrollTop;
	}



	let social = qs('.social-cont'),
		socailBlock = qs('.social-cont__wrap');

	if(social) {
		const raf = window.requestAnimationFrame ||
		    window.webkitRequestAnimationFrame ||
		    window.mozRequestAnimationFrame ||
		    window.oRequestAnimationFrame ||
		    window.msRequestAnimationFrame;

		(function init() {

		    (function step() {
		    	if(offsetTop(social) <= 20) {
		    		socailBlock.style.position = "fixed";
		    		socailBlock.style.top = "20px";
		    	} else {
		    		socailBlock.style.position = "relative";
		    		socailBlock.style.top = "0px";
		    	}

	           	raf(step);
		    })();
		})();
	}

	function offsetTop(el) {
	    var rect = el.getBoundingClientRect(),
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    return rect.top;
	}

	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}
});