history.scrollRestoration = "manual";
document.addEventListener("DOMContentLoaded", function() {

	// SCROLLING ANIM
	let options = {
	    threshold: 0
	}
	let callback = function(entries, observer) {
	    entries.forEach(entry => {
	    	if (entry.isIntersecting) entry.target.classList.add('in-view');
      	});
	};
	let observer = new IntersectionObserver(callback, options),
		animated = qsa('.animated');

	animated.forEach(el => {
		if (observer) {
			observer.observe(el)
		} else {
			el.classList.remove('animated');
		}
		
	});
	// END SCROLLING ANIM

	// MOB MENU
	// qs('.header__hamb').onclick = () => {
	// 	qs('.header__nav').classList.add('active');
	// }
	// qs('.header__nav-close').onclick = () => {
	// 	qs('.header__nav').classList.remove('active');
	// }
	// END MOB MENU

	
	// FAQ
	let questions = qsa('.question');

	questions.forEach(el => {
		el.onclick = (e) => {
			let answer = el.nextElementSibling;
			if(el.classList.contains('active')) {
				el.classList.remove('active');
				answer.style.height = '0px';
			} else {
				el.classList.add('active');
				if(window.innerWidth > 767) {
					answer.style.height = answer.scrollHeight + 60 + 'px';
				} else {
					answer.style.height = answer.scrollHeight + 30 + 'px';
				}
				
			}
		};
	})
	// END FAQ


	// TIMER

		// START DATE
	// var countDownDate = new Date("2021-09-10T18:00:00-07:00").getTime();

	// timerStep();
    // 	// Run every second
    // var myfunc = setInterval(function() {
    // 	timerStep();
    // }, 1000);

    // function padLeadingZeros(num, size) {
    //     var s = num+"";
    //     while (s.length < size) s = "0" + s;
    //     return s;
    // }
    // function timerStep() {
	//     let now = new Date().getTime(),
	//     	timeleft = countDownDate - now,
	//     	days = Math.floor(timeleft / (1000 * 60 * 60 * 24)),
	// 		hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
	// 		minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
	// 		seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
	        
	//     qs('.timer-days').innerHTML = padLeadingZeros(days, 2);
	//     qs('.timer-hours').innerHTML = padLeadingZeros(hours, 2);
	//     qs('.timer-minutes').innerHTML = padLeadingZeros(minutes, 2);
	//     qs('.timer-seconds').innerHTML = padLeadingZeros(seconds, 2);
	        
	//     // countdown is over
	//     if (timeleft < 0) {
	//         clearInterval(myfunc);
	//         qs('.timer-days').innerHTML = ""
	//         qs('.timer-hours').innerHTML = "" 
	//         qs('.timer-minutes').innerHTML = ""
	//         qs('.timer-seconds').innerHTML = ""
	//         // document.getElementById("end").innerHTML = "TIME UP!";
	//     }
    // }
    // END TIMER



	// ANCHORS HEADER
	qsa('a[data-scroll]').forEach(el => {
		el.onclick = (e) => {
			e.preventDefault();
			if(window.innerWidth < 768) {
				qs('.header__nav').classList.remove('active');
			}
			let scrollToY = offsetTop(qs(el.dataset.scroll));
			scrollTo(scrollToY);
		}
	})
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
	function offsetTop(el) {
	    var rect = el.getBoundingClientRect(),
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    return rect.top + scrollTop;
	}
	// ANCHORS HEADER

	
	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}

});