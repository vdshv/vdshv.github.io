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

	let homeHeader = qs('.header.home'),
		headerLogo = qs('.header.home .header__logo'),
		bannerTitle = qs('.banner h1'),
		bannerText = qs('.banner p'),
		scrollEl = document.scrollingElement,

		searchBtn = qs('input.search'),
		searchFilters = qs('.filters'),
		searchBlock = qs('.search-block'),

		manualSeach = qs('.manual-search'),

		viewProduct = qsa('.s-search__results .view'),
		prodModal = qs('.s-product'),
		prodModals = qsa('.s-product'),
		prodClose = qsa('.s-product .close'),
		prodGalleryImg = qsa('.s-product__gallery ul img');

	// MOB MENU
	qs('.header__hamb').onclick = () => {
		qs('.header__links').classList.add('active');
	}
	qs('.header__links-close').onclick = () => {
		qs('.header__links').classList.remove('active');
	}
	// END MOB MENU


	if(qs('.xoo-wsc-cart-trigger')) {
		qs('.xoo-wsc-cart-trigger').onclick = () => {
			let href = qs('.xoo-wsc-ft-buttons-cont a').getAttribute('href').replace('?page_id=33', 'checkout');
			qs('.xoo-wsc-ft-buttons-cont a').setAttribute('href', href);
		}
	}

	let checkout = qs('form.woocommerce-checkout');
	if(checkout) {
		let fields = qsa('#billing_first_name_field, #billing_flast_name_field, #billing_email_field, #billing_last_name_field'),
			message = qs('#billing_Message_To_Recipient_field');
		qs('#billing_address_radio_two').onclick = (e) => {
			if (e.target.checked) {
				fields.forEach(el => el.classList.add('disabled'));
			} else {
				fields.forEach(el => el.classList.remove('disabled'));
			}
		}
		qs('#billing_address_radio').onclick = (e) => {
			fields.forEach(el => el.classList.remove('disabled'));
		}
	}


	if(prodGalleryImg) {
		prodGalleryImg.forEach(el => {
			el.onclick = (e) => {
				let newSrc = e.target.getAttribute('src');
				el.closest('.s-product').querySelector('.s-product__gallery img').setAttribute('src', newSrc);
				el.closest('.s-product').querySelector('.s-product__gallery img').setAttribute('srcset', newSrc);
			}
		})
	}


	if(homeHeader) {
		document.onscroll = () => {
		    if(bannerTitle.getBoundingClientRect().top < headerLogo.getBoundingClientRect().top) {
		    	homeHeader.classList.add('active');
		    	bannerTitle.classList.add('active');
		    } else {
		    	homeHeader.classList.remove('active');
		    	bannerTitle.classList.remove('active');
		    }
		}
	}
	if(searchBtn) searchBtn.onclick = () => {
		if(!searchBlock.classList.contains('active')) {
			searchBlock.classList.add('active');

			if(homeHeader) {
				bannerText.classList.add('search');
				bannerText.style.height = '0px';
				bannerText.style.marginBottom = '0px';
			}
		}
	}

	if(manualSeach) {
		manualSeach.onclick = () => {
			searchBlock.classList.add('active');
		}
	}

	if(prodModal) {
		viewProduct.forEach((viewBtn) => {
			viewBtn.onclick = (e) => {
				if(e.target.closest('.product').querySelector('.s-product .screen-reader-text')) {
					e.target.closest('.product').querySelector('.s-product .screen-reader-text').classList.remove('screen-reader-text');
				}
				
				e.target.closest('.product').querySelector('.s-product').classList.add('active');
				qs('.s-search').classList.add('z-ind');
			}
		})
		prodClose.forEach((close) => {
			close.onclick = (e) => {
				e.target.closest('.s-product').classList.remove('active');
				qs('.s-search').classList.remove('z-ind');
			}
		})
	}

	let moodsBtn = qs('.moods-btn'),
		moodsClose = qs('.moods-close');

	if(moodsBtn) {
		moodsBtn.onclick = () => {
			qs('.s-search__moods').classList.add('active');
			qs('.s-search').style.zIndex = '15';
		}
		moodsClose.onclick = () => {
			qs('.s-search__moods').classList.remove('active');
			qs('.s-search').style.zIndex = '2';
		}
	}

	let form = qs('.wpforms-field-container');
	if(form) form.appendChild(qs('.wpforms-submit-container'));

	let questions = qsa('.wpsm_panel-heading');
	if(questions) {
		qsa('.faq__width h3').forEach(el => el.removeAttribute('style'));
		qs('.faq__control').append(...Array.from(document.querySelectorAll('.faq__width h3')));

		qsa('.faq__control h3').forEach(el => {
			el.onclick = (e) => {
				let index = Array.from(qsa('.faq__control h3')).indexOf(el);
				let tabs = qsa('.faq__width > div');

				if(el.previousElementSibling) el.previousElementSibling.classList.remove('active');
				if(el.nextElementSibling) el.nextElementSibling.classList.remove('active');
				el.classList.add('active');

				if(tabs[index].previousElementSibling) tabs[index].previousElementSibling.classList.remove('active');
				if(tabs[index].nextElementSibling) tabs[index].nextElementSibling.classList.remove('active');
				tabs[index].classList.add('active');
			};
		})
		qsa('.faq__width > div')[0].classList.add('active');
		qsa('.faq__control h3')[0].classList.add('active');

		questions.forEach(el => {
			el.onclick = (e) => {
				let answer = el.nextElementSibling;
				if(el.classList.contains('active')) {
					el.classList.remove('active');
					answer.style.height = '0px';
				} else {
					el.classList.add('active');
					answer.style.height = answer.scrollHeight + 15 + 'px';
				}
			};
		})
	}

	var filtersCats = qsa('.filters h4');
	if(filtersCats && window.innerWidth < 768) {
		filtersCats.forEach(heading => {
			heading.onclick = (e) => {
				var list = e.target.nextElementSibling;
				if(!e.target.classList.contains('active')) {
					e.target.classList.add('active');
					list.classList.add('active');
					list.style.height = list.scrollHeight + 20 + 'px';
				} else {
					e.target.classList.remove('active');
					list.classList.remove('active');
					list.style.height = '0px';
				}
			}
		});
	}

	

	document.onclick = (e) => {
		if(searchBlock && searchBlock.classList.contains('active') 
			&& !e.target.closest('.search-block') 
			&& e.target !== manualSeach
			&& e.target !== searchFilters) {

			searchBlock.classList.remove('active');

			if(homeHeader) {
				bannerText.classList.remove('search');
				bannerText.style.height = bannerText.scrollHeight + 'px';
			}
		}
		if(prodModal && qs('.s-product.active')
			   && !e.target.closest('.s-product .xlg-width')
		   	   && !e.target.classList.contains('view')) {
			qs('.s-product.active').classList.remove('active');

			qs('.s-search').classList.remove('z-ind');
		}
	}

	if(qs('.search-block .btn')) {
		qs('.search-block .btn').onclick = () => {
			smartSearch();
		}
	}

	document.addEventListener("keyup", function(event) {
	    if (event.keyCode === 13) {
	        smartSearch();
	    }
	});
	// SUPER CUSTOM SEARCH
	function smartSearch(){
	    //parsing search
	    let search = document.querySelector('input.search').value;
	    if (!search){
	        search = '?s=';
	    } else {
	        search = '?s='+search;
	    }
	    
	    //parsing filters
	    let filters = [];
	    let filters_string='&product_cat=';
	    
	        let boxes = document.querySelectorAll('input[type=checkbox]:checked');
	        
	        for (var i = 0; i < boxes.length; i++) {
	          filters.push(boxes[i].value);
	        }
	        
	        if (filters.length<1){
	            filters_string='';
	        } else {
	            filters_string = filters_string + filters[0];
	            if(filters.length>1){
	                for(var z = 1; z < filters.length; z++){
	                    filters_string = filters_string + "," + filters[z];
	                }   
	            }
	        }
	    window.location = "http://box2325.temp.domains/~sendtost/"+search+ "&post_type=product"+filters_string;
	}

	let sendMeTooInputs = qsa('.s-product__checkbox input[type=checkbox]');

	if(sendMeTooInputs) {
		sendMeTooInputs.forEach(el => {
			el.onchange = (e) => {

				let currentQty = e.target.closest('.s-product').querySelector('input[type=number]');
				let currentQtyVal = e.target.closest('.s-product').querySelector('input[type=number]').value;
				
				if (!e.target.checked) {
		    	    currentQty.value = Number(currentQtyVal) - 1;
			    } else {
			        currentQty.value = Number(currentQtyVal) + 1;
			    }
			}
		})
	}

	// ANCHORS HEADER
	qsa('a[href="#faq"]').forEach(el => {
		el.onclick = (e) => {
			e.preventDefault();
			// if(window.innerWidth < 768) {
			// 	qs('.header__nav').classList.remove('active');
			// }
			let scrollToY = offsetTop(qs('.faq'));
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


	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}
});



