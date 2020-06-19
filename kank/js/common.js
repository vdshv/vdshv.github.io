$(function() {
	$('.loading').addClass('hidden');
	
	var height;
	$('.clothes__categories a').click(function(e) {
		var st = $('.categories__nav').offset().top;
        $('html, body').animate({
                'scrollTop' : st
        }, 200);

	})
	var item;
	$('.categories .flex-category li').click(function() {
		item = $(this).index();
		console.log($(this).index());
		window.location.hash = window.location.hash + '-' + item;
	})

	var titles = ['Рюкзак Fjallraven Kanken Classic', 'Рюкзак Fjallraven Kanken Art', 'Рюкзак Fjallraven Kanken Mini', 'Поясная сумка Fjallraven Ulvo Hip Pack Medium', 'Пенал Fjallraven', 'Брелок Fjallraven'];
	var descr = ['Рюкзак вместителен, имеет 4 отделения: основное с внутренним защищенным карманом для ноутбука до 13" или документов формата А4, внешний карман для телефона и два боковых.', 'Рюкзак вместителен, имеет 4 отделения: основное с внутренним защищенным карманом для ноутбука до 13" или документов формата А4, внешний карман для телефона и два боковых.', 'Рюкзак вместителен, имеет 4 отделения: основное с внутренним защищенным карманом, внешний карман для телефона и два боковых.', 'Основное отделение дополнено небольшим защитным карманом на обратной стороне сумки, а также под сумкой есть компрессионные ремни с помощью которых можно прикрепить куртку или что-то подобное к сумке. Идеально подходит для коротких походов и путешествий.', 'Пенал вместителен, основное отделение на молнии, подходит для ручек длинной 18 см, рефлективный логотип.', 'Брелок для ключей с петлей из тесьмы, как в рюкзаке Kånken. Станет отличным дополнением и стильным аксесуаром.'];
	var info = [
		['Материал: Vinylon-F','Производитель: Китай','Замеры: 35 х 28 х 11','Объем: 16 л'],
		['Материал: Vinylon-F','Производитель: Китай','Замеры: 35 х 28 х 11','Объем: 16 л'],
		['Материал: Vinylon-F', 'Производитель: Китай.','Замеры: 29 х 20 х 13 см.','Объем: 7 л.'],
		['Материал: 100% polyamide.','Производитель: Китай.','Замеры: 28 x 12 x 10 см.','Объем: 2 л.'],
		['Материал: Vinylon-F.','Производитель: Китай.','Замеры: 19 х 2 х 7.'],
		['Материал: 100% polypropylene.','Замеры: 2 х 9,5 см.','Вес: 10 г.']
	];
	var prices = [649, 649, 599, 449, 299, 99];

	
	window.addEventListener("hashchange", function(){
		var st = $('.categories__nav').offset().top;
        $('html, body').animate({
                'scrollTop' : st
        }, 200);

        $('.categories__nav div').empty();

		var hash = window.location.hash;

		if (!hash) {
			$('.clothes__categories').addClass('active').siblings().removeClass('active');
		} else if(hash.split('-').length == 1) {
			$(window.location.hash).addClass('active').siblings().removeClass('active');
			$(window.location.hash).parents('.outer').addClass('active').siblings().removeClass('active');
			
			$('.categories__nav div').append(
				'<a>> ' + $('a[href="' + window.location.hash + '"]').find('h3').text() + '</a>'
			)
		} else if (hash.split('-').length == 2) {
			var cat = $(hash.split('-')[0]).index();
			var catName = hash.split('-')[0].slice(1, hash.split('-')[0].length);
			var item = hash.split('-')[1];

			$('.categories__nav div').append(
				'<a href="#' + catName + '">> ' + $('a[href="#' + catName + '"]').find('h3').text() + '</a>'
			)
			$('.categories__nav div').append(
				'<a>> ' + (+item+1) + '</a>'
			)

			$('.items').addClass('active').siblings().removeClass('active');
			$('.items__info h3').html(titles[cat]);
			$('.items__info .price').html(prices[cat] + ' ГРН');
			$('.items__info .sizes').html(descr[cat]);
			$('.items__info .button').attr('data-item', hash);
			$('.items__parameters').empty();
			for (var i = 0; i < info[cat].length; i++) {
				$('.items__parameters').append(
					'<li class="flex">' +
						'<span>' + info[cat][i].split(':')[0] + '</span>' +
						'<span>' + info[cat][i].split(':')[1] + '</span>' +
					'</li>');
			}
			$('.img-wrap, .img-thumbs').empty();
			for (var i = 0; i < 5; i++) {
				
				var imgUrl = 'img/' + catName + '/' + (+item+1) + '/' + (i+1) + '.jpg';
				if (!imageExists(imgUrl)) break;
				$('.img-wrap, .img-thumbs').append(
						'<img src="' + imgUrl + '" alt="">'
					);

			}
			
			$('.img-wrap').trigger('destroy.owl.carousel');
			$('.img-wrap').owlCarousel({
			    loop:true,
			    // autoplay: true,
			    dots: false,
			    center: true,
			    items: 1,
			    autoplayHoverPause: true
			});

		}

		// if (window.location.hash.indexOf('art')) {}

	});
	window.dispatchEvent(new Event("hashchange"));
	function imageExists(image_url){

	    var http = new XMLHttpRequest();

	    http.open('HEAD', window.location.origin + '/' + image_url, false);
	    http.send();

	    return http.status != 404;

	}
	$('.back-to-category').click(function() {
		$('.clothes__categories').addClass('active').siblings().removeClass('active');
		window.location.hash = '';
	})

	
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
	$('.header__text .button').click(function() {
		$('body,html').animate({
			scrollTop: $('.categories__nav').offset().top
		},500)
	})
	$(document).on('click', '.items__info .button', function () {
		$('.form-item').val(window.location.hash);
		$('body,html').animate({
			scrollTop: $('.header__promo').offset().top
		},500)
	})
	$(document).on('click', '.img-thumbs img', function () {
		var pos = $(this).index();
		$('.img-wrap').trigger('to.owl.carousel', [pos]);
	})
	$('form').submit(function(e) {
 		// e.preventDefault();
 		// formSubmit($(this));
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
	
 	// function formSubmit(form) {
		// 	var $form = form,
	 //    	url = 'https://script.google.com/macros/s/AKfycbzbbKUQBzMNmTtZqQMyTOHI1zSNj1sXBPKY2u_0lDUdgaev_8Jp/exec';
		// 	$.ajax({
		// 	    url: url,
		// 	    method: "GET",
		// 	    dataType: "json",
		// 	    data: $form.serialize(),
		// 	    success: function(response) {
		// 			$('.order__form button').addClass('sent');
		// 			setTimeout(function() {
		// 				$('.order__form button').removeClass('sent');
		// 			}, 8000)
		// 	    }
		// 	})	
 	// }
});
