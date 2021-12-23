history.scrollRestoration = "manual";
document.addEventListener("DOMContentLoaded", function() {


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
			el.classList.add('in-view');
		}
		
	});

	let options_threshold = {
	    threshold: 0.4
	}
	let callback_threshold = function(entries, observer) {
	    entries.forEach(entry => {
	    	if (entry.isIntersecting){
	    		entry.target.classList.add('in-view');
	    	}  else {
	    		// entry.target.classList.remove('in-view');
	    	}
      	});
	};
	let observer_threshold = new IntersectionObserver(callback_threshold, options_threshold),
		animated_threshold = qsa('.animated_threshold');

	animated_threshold.forEach(el => {
		if (observer_threshold) {
			observer_threshold.observe(el)
		} else {
			el.classList.add('in-view');
		}
		
	});
	// END SCROLLING ANIM


	// TEAM HERO SCROLL ANIMATION
	let teamHero = qs('.team__hero'),
		teamHeroImg = qs('.team__hero-img'),
		scale = 0;

	const raf = window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    window.mozRequestAnimationFrame ||
	    window.oRequestAnimationFrame ||
	    window.msRequestAnimationFrame;

	(function init() {

	    (function step() {
	    	var heroHeight = teamHero.clientHeight;
	    	scale = 100 + (heroHeight - rectBottom(teamHero)) * 10 / heroHeight;

	    	if(rectBottom(teamHero) >= 0) {
	    		teamHeroImg.style.transform = `scale3d(${scale}%,${scale}%,1)`;
	    	} else {

	    	}

           	raf(step);
	    })();
	})();
	function rectBottom (el) {
		var rect = el.getBoundingClientRect();
		return rect.bottom;
	}
	// END TEAM HERO SCROLL ANIMATION


	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}

});