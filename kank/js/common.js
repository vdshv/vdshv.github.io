$(function() {
	$('.loading').addClass('hidden');
	// $('a[href*="#"]').click(function(e) {
	// 	e.preventDefault();
	// 	var src = $(this).attr('href')
	// 	$('body,html').animate({
	// 		scrollTop: $(src).offset().top
	// 	},500)
	// })
	/*! lazysizes - v5.2.0 */
	
	
	var height;
	$('.clothes__categories a').click(function(e) {
		var st = $('.categories__nav').offset().top;
        $('html, body').animate({
                'scrollTop' : st
        }, 200);
		// $('body,html').scrollTop($('.categories__nav').offset().top);
		// e.preventDefault();
		// var src = $(this).attr('href');
		// var category = $(this).attr('data-category');
		// height = $('.categories > li').eq($(this).parent().index()).css('height');
		// window.location.href = window.location.href + '#' + category;
		// console.log(height);
		// $('.categories > li').eq($(this).index()).addClass('active').siblings().removeClass('active');

		// $('.clothes__categories').removeClass('active');
		// $('.categories').addClass('active');
		
		// gtag('event', 'click', {
		//   'event_category' : 'Категория товара',
		//   'event_label' : category
		// });
		// dataLayer.push({'event': 'event-to-ga', 'eventCategory' : 'Jobs', 'eventAction' : 'clicked'});
	})
	window.addEventListener("hashchange", function(){
		var st = $('.categories__nav').offset().top;
        $('html, body').animate({
                'scrollTop' : st
        }, 200);
		var hash = location.hash;
		// $('body,html').animate({
		// 	scrollTop: $('.categories__nav').offset().top
		// },300)
		// $('body,html').scrollTop($('.categories__nav').offset().top);


		if (!hash) {
			$('.clothes__categories').addClass('active').siblings().removeClass('active');
			$('.clothes .wrapper').css({
				// "height": $('.clothes__categories').height() + 'px'
			})
		} else {
			$(window.location.hash).addClass('active').siblings().removeClass('active');
			$(window.location.hash).parents('.outer').addClass('active').siblings().removeClass('active');
			$('.clothes .wrapper').css({
				// "height": $(window.location.hash).height() + 'px'
			})
		}

		// if (window.location.hash.indexOf('art')) {}

	});


	// // $('.back-to-category').click(function() {
	// // 	height = $('.clothes__categories').css("height");
	// // 	$('.clothes__categories').addClass('active')
	// // 	$('.categories, .categories > li, .items, .items li').removeClass('active');
	// // 	$('.clothes .container').css({
	// // 		"height": height
	// // 	})
	// // })
	// var itemIndex,
	// 	categIndex;

	// $('.categories .flex-category li').click(function() {
	// 	itemIndex = $(this).index();
	// 	categIndex = $(this).parents('li').index();
	// 	height = $('.items > li').eq(categIndex).find('.items__list > li').eq(itemIndex).css('height');

	// 	$('.clothes__categories, .categories').removeClass('active');
	// 	$('.items').addClass('active');
	// 	$('.items > li').eq(categIndex).addClass('active').siblings().removeClass('active');
	// 	$('.items > li').eq(categIndex).find('.items__list > li').eq(itemIndex).addClass('active').siblings().removeClass('active');
	// 	$('.clothes .container').css({
	// 		"height": height
	// 	})
	// })

	// $('.back').click(function() {
	// 	height = $('.categories > li').eq(categIndex).css('height');
	// 	$('.items, .items li').removeClass('active');
	// 	$('.categories').addClass('active');
	// 	$('.categories > li').eq(categIndex).addClass('active').siblings().removeClass('active');
	// 	$('.clothes .container').css({
	// 		"height": height
	// 	})
	// });
	var cats = ["art", "classic", "mini", "bag", "case", "keyring"];
	for (var i = 0; i < $('.items > li').length; i++) {

		var a = $($('.items > li')[i]).find('.items__list > li');

		for (var k = 0; k < a.length; k++) {
			var b = $(a[k]).find('.img-wrap li');
			
			for (var j = 0; j < b.length; j++) {
				var itemIndex = k + 1;
				var imageIndex = j + 1;
				var bg = "url('img/" + cats[i] + "/" + itemIndex + "/" + imageIndex + ".jpg') center center/cover";

				$($(b[j])[0]).css({
					"background": bg
				})
			}
		}
		
	}
	// $('.img-wrap').owlCarousel({
	//     loop:true,
	//     // autoplay: true,
	//     dots: true,
	//     center: true,
	//     items: 1,
	//     autoplayHoverPause: true
	// });

	// $('.items1, .items2').owlCarousel({
	//     loop:true,
	//     autoplay: true,
	//     nav: true,
	//     dots: false,
	//     center: true,
	//     items: 1,
	//     autoplayHoverPause: true,
	//     responsiveClass:true,
	//     responsive:{
	//     	0: {
	//     		items: 1,
	//     		autoplay: false
	//     	},
	//     	768: {
	//     		autoplay: true
	//     	}
	//     }
	// });
	
	$('.reviews ul').owlCarousel({
	    loop:true,
	    autoplay: true,
	    nav: true,
	    center: true,
	    items: 4,
	    responsiveClass:true,
	    autoplayHoverPause: true,
	    responsive:{
	    	0: {
	    		items: 1,
	    		autoplay: false
	    	},
	    	768: {
	    		items: 3,
	    		autoplay: true
	    	}
	    }
	});

	$( ".tel-input, .tel-input1").keypress(function(evt) {
	  var charCode = (evt.which) ? evt.which : event.keyCode
	      if (charCode > 31 && (charCode < 48 || charCode > 57))
	          return false;
	      return true;
	});
	var cleave = new Cleave('.tel-input', {
	    blocks: [3, 3, 3, 2, 2],
	  	prefix: '+38',
	    delimeters: [' ', ' ', '-', '-'],
	   
	});
	$('.items__info .button').click(function () {
		$('.form-item').val($(this).attr('data-item'));
		$('body,html').animate({
			scrollTop: $('.header__order').offset().top
		},500)
	})
	$('form').submit(function(e) {
 		e.preventDefault();
 		formSubmit($(this));
 	});
	$('.header__banner').owlCarousel({
		autoplaySpeed: 1200,
		autoplayTimeout: 8000,
		loop:true,
		autoplay: true,
		dots: true,
		nav: false,
		items: 1,
		responsiveClass:true,
		autoplayHoverPause: true
	})
	setTimeout(function() {
		$('.second').css({'display': 'block'});
	}, 5000)
	
 	function formSubmit(form) {
			var $form = form,
	    	url = 'https://script.google.com/macros/s/AKfycbzbbKUQBzMNmTtZqQMyTOHI1zSNj1sXBPKY2u_0lDUdgaev_8Jp/exec';
			$.ajax({
			    url: url,
			    method: "GET",
			    dataType: "json",
			    data: $form.serialize(),
			    success: function(response) {
					$('.order__form button').addClass('sent');
					setTimeout(function() {
						$('.order__form button').removeClass('sent');
					}, 8000)
			    }
			})	
 	}
});
