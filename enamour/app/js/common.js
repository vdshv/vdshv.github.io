history.scrollRestoration = "manual";
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

	let header = qs('.header'),
			hamb = qs('.header__hamb'),
			menu = qs('.header__mob-nav'),
			close = qs('.header .close');

	hamb.onclick = () => {
		menu.classList.add('active');
	}
	close.onclick = () => {
		menu.classList.remove('active');
	}

	// SCROLLING ANIM

	let options = isTouchDevice ? { threshold: 0.4 } : { threshold: 0.7 };

	let callback = function(entries, observer) {
	    entries.forEach(entry => {
	    	if (entry.isIntersecting){
	    		entry.target.classList.add('in-view');
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
	// END SCROLLING ANIM

	if(qs('.glide')) {
		let glide = new Glide(qs('.glide.team'), {
		  type: 'carousel',
		  perView: 1,
		  gap: 0
		});

		const glideArrows = document.querySelectorAll('.glide__arrow')

		glideArrows.forEach(el => {
		  el.onclick = () => {
		    glide.go(el.dataset.glideDir)
		  };
		});

		glide.mount();

		let glide3col = new Glide(qs('.icons.desktop'), {
		  type: 'slider',
		  rewind: false,
		  bound: true,
		  perView: 1,
		  startAt: 0
		}).mount();

		let glideMob = new Glide(qs('.icons.tablet'), {
		  type: 'slider',
		  rewind: false,
		  bound: true,
		  perView: 1,
		  startAt: 0
		}).mount();
	}

	let questions = qsa('.question:not(.static)');

	if (questions.length) {
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
		qs('.answer').style.height = qs('.answer').scrollHeight + 'px';

		window.onresize = () => {
			qsa('.question.active:not(.static)').forEach(el => {
				let answer = el.nextElementSibling;
				answer.style.height = 'auto';
				setTimeout(() => {
					answer.style.height = answer.scrollHeight + 'px';
				}, 300)
			})
		}
	} 

	// LINE SCROLL ANIMATION
	let line = qs('.how__line'),
		lineHeight,
		lineActive = qs('.how__line-active'),
		scale = 0,
		numbers = qsa('.how__number');

	const raf = window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    window.mozRequestAnimationFrame ||
	    window.oRequestAnimationFrame ||
	    window.msRequestAnimationFrame;

	if (line) (function init() {

	    (function step() {
	    	lineHeight = qs('.how__line').clientHeight;
	    	scale = (rectBottom(line) - lineHeight - window.innerHeight/2) / -lineHeight;

	    	if(inViewport(line)) {
	    		lineActive.style.transform = `scaleY(${scale})`;
	    	} else {

	    	}
	    	numbers.forEach((num)=>{
	    		if(rectTop(num)<=0) {
	    			num.classList.add('active');
	    		} else {
	    			num.classList.remove('active');
	    		}
	    	})
	    	// console.log(rectTop(numbers[0]));
	    	
           	raf(step);
	    })();
	})();
	function rectBottom (el) {
		var rect = el.getBoundingClientRect();
		return rect.bottom;
	}
	function rectTop (el) {
		var rect = el.getBoundingClientRect();
		return rect.top - window.innerHeight/2;
	}
	function inViewport (el) {
		var rect = el.getBoundingClientRect();
		return rect.bottom >= 0 && rect.top - window.innerHeight <= 0;
	}

	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}

});