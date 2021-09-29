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
			el.classList.remove('animated');
			el.classList.add('in-view');
		}
		
	});
	// END SCROLLING ANIM

	// MOB MENU
	qs('.header__hamb').onclick = () => {
		qs('.header__nav').classList.add('active');
	}
	qs('.header__nav-close').onclick = () => {
		qs('.header__nav').classList.remove('active');
	}

	var href = window.location.href,
		links = links = Array(...qsa('.header__nav a')).map(el => el.getAttribute('href'));

	links.forEach((link) => {
		if(href.indexOf(link) !== -1) {
			qs(`a[href*="${link}"]`).classList.add('active');
		}
	})
	

	if(window.innerWidth < 767) {
		var lines = qsa('.line:not(.acc)');
		console.log(lines);
		lines.forEach(line => {
			if(line.querySelector('.btn')) {
				line.classList.add('line-hidden');
			}
		})
	}

	// END MOB MENU

	var arrow = qs('.hero__arrow');
	if(arrow) {
		arrow.classList.add('animate');
		arrow.onclick = () => {
			window.scrollTo({
			    top: offsetTop(qs('.hero+.text-block')),
			    behavior: "smooth"
			});
		}
	}

	
	
	var form = qs('#form1'),
		formCont = qs('.contact.form'),
		error = qs('.contact__error'),
		errorText = qs('.contact__error p');

    if(form) {
	    form.onsubmit = (e) => {
	    	e.preventDefault();

	    	var canSend = false,
	    		dialog = '',
				email = qs('[type=email]').value,
	        	name = qs('[type=text]').value,
	        	comment = qs('textarea').value;

	        if (email.length == 0) {
	            dialog = "Please, fill in your email.";
	        } else {
	            var validation = isMailValid(email);

	            if (!validation) {
	                dialog = "You have entered an invalid e-mail address. Please try again.";
	            } else if (!name.length) {
	                dialog = "Please, fill in your name/company.";
	            } else if (!comment.length) {
	                dialog = "Please, fill in your message to us.";
	            } else {
	                canSend = true;
	            }
	        }

	        if (canSend) {
	            var jsonItem = {};
	            jsonItem["name"] = name;
	            jsonItem["email"] = email;
	            jsonItem["comment"] = comment;

	            var form = qs('.contact.form #comp-4');
	            var formHeight = qs('.contact.form #comp-4').clientHeight;
	            qs('.contact.form #comp-4').style.height = formHeight + 'px';

	            fetch('https://pdconn.magnusco.net/api/IncomingMessages', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(jsonItem),
	            })
	            .then(response => {
	            	dialog = "Thank you for getting in touch! We appreciate you contacting Consovenio. One of our colleagues will get back in touch with you soon! Have a great day!";
	            	error.classList.add('active');
	            	errorText.innerHTML = dialog;
	            	let height = errorText.scrollHeight;
	            	error.style.height = height + 30 + 'px';

	            	form.style.height = '0px';
	            	form.style.transform = 'scaleY(0.2)';
	            	form.style.opacity = '0';
	            	form.style.visibility = 'hidden';

	            	window.scrollTo({
	            	    top: offsetTop(error) - 50,
	            	    behavior: "smooth"
	            	});
	            })
	            .catch((error) => {
	              console.error('Error:', error);
	            });

	        } else {
	        	error.classList.add('active');
	        	errorText.innerHTML = dialog;
	        	let height = errorText.scrollHeight;
	        	error.style.height = height + 30 + 'px';
	        	window.scrollTo({
	        	    top: offsetTop(error) - 50,
	        	    behavior: "smooth"
	        	});
	        }
	    }
    }
   

    function offsetTop(el) {
        var rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }
	function isMailValid(email) {
	    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	    return emailReg.test(email);
	}


	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}
});