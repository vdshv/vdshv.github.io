"use strict";

function email_test(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
} //BildSlider

var sliders = document.querySelectorAll('._swiper');

if (sliders.length > 0) {
  for (var index = 0; index < sliders.length; index++) {
    var slider = sliders[index];

    if (!slider.classList.contains('swiper-bild')) {
      var slider_items = slider.children;

      if (slider_items) {
        for (var _index = 0; _index < slider_items.length; _index++) {
          var el = slider_items[_index];
          el.classList.add('swiper-slide');
        }
      }

      var slider_content = slider.innerHTML;
      var slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-bild');
    }

    if (slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
    }
  }

  sliders_bild_callback();
}

function sliders_bild_callback(params) {}

var swiperContainer = document.querySelector('.main-home__slider');

if ( swiperContainer ) {
  var slider_thumbs_main = new Swiper('.thumbnails-home', {
    /*
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    */
    centeredSlides: true,
    direction: 'vertical',
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    //simulateTouch: false,
    touchRatio: 0,
    lazy: {
      loadOnTransitionStart: true
    },
    preloadImages: false,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows

    /*
    navigation: {
      nextEl: '.main-home__arrow_next',
      prevEl: '.main-home__arrow_prev',
    },
    */

    /*
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1268: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    */
    on: {
      lazyImageReady: function lazyImageReady() {
        ibg();
      }
    } // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},

  });

  var slider_main = new Swiper('.main-home__slider', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: true
    },
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 2166,
    loop: true,
    simulateTouch: false,
    lazy: {
      loadOnTransitionStart: true
    },
    thumbs: {
      swiper: slider_thumbs_main,
      multipleActiveThumbs: false
    },
    preloadImages: false,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    navigation: {
      nextEl: '.main-home__arrow_next',
      prevEl: '.main-home__arrow_prev'
    },

    /*
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1268: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    */
    on: {
      lazyImageReady: function lazyImageReady() {
        ibg();
      }
    } // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},

  });
  slider_main.on('transitionStart', function (e) {
    var home_main = document.querySelector('.main-home');
    var active_slide = document.querySelector('.main-home__slider .swiper-slide-active');

    if ( active_slide.classList.contains('slide-home_lite') ) {
      home_main.classList.add('_lite');

      if ( home_main.classList.contains('_active') ) {
        body.classList.add('_lite');
      }
    } else {
      home_main.classList.remove('_lite');

      if ( home_main.classList.contains('_active') ) {
        body.classList.remove('_lite');
      }
    }
  });
}

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}

if (isIE()) {
  document.querySelector('body').classList.add('_ie');
}

if (isMobile.any()) {
  document.querySelector('body').classList.add('_touch');
}

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }
});

function ibg() {
  if (isIE()) {
    var _ibg = document.querySelectorAll("._ibg");

    for (var i = 0; i < _ibg.length; i++) {
      if (_ibg[i].querySelector('img') && _ibg[i].querySelector('img').getAttribute('src') != null) {
        _ibg[i].style.backgroundImage = 'url(' + _ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }
}

ibg();

if (document.querySelector('.wrapper')) {
  document.addEventListener("DOMContentLoaded", function () {

    if (!document.querySelector('.preload') || localStorage.getItem('loader') == 1) {
      document.querySelector('.wrapper').classList.add('_loaded');

      if (document.querySelector('.preload')) {
        document.querySelector('.preload').classList.add('_hide');
      }
    } else {
      var counter = 0;
      var c = 0;

      var _i = setInterval(function () {
        document.querySelector('.preload__procent span').innerHTML = c;
        document.querySelector('.preload__line').style.width = c + '%';
        counter++;
        c++;

        if (counter == 101) {
          clearInterval(_i);
          document.querySelector('.preload').classList.add('_hide');
          document.querySelector('.wrapper').classList.add('_loaded');
        }
      }, 20);

      localStorage.setItem('loader', 1);
    }
  });
} //=================
//ActionsOnHash


if (location.hash) {
  var hsh = location.hash.replace('#', '');

  if (document.querySelector('.popup_' + hsh)) {
    popup_open(hsh);
  } else if (document.querySelector('div.' + hsh)) {
    _goto(document.querySelector('.' + hsh), 500, '');
  }
} //=================
//Menu


var iconMenu = document.querySelector(".icon-menu");
var whatPageIsOpen = window.location.pathname.split('/')
var isAddMenuListener = true;

window.location.pathname.split('/').forEach(function (el) {
  if ( el === 'branding' && whatPageIsOpen.length > 4 ) {
    isAddMenuListener = false;
  }
})
if (iconMenu != null && isAddMenuListener) {
  var delay = 500;

  var _body = document.querySelector("body");

  var menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    if (!_body.classList.contains('_wait')) {
      if (window.innerWidth < 992) {
        body_lock(delay);
      }

      if(!iconMenu.classList.contains("__active")){
        iconMenu.classList.add("__active");
        iconMenu.classList.add("_active");
        menuBody.classList.add("_active");
      }else{
        menuBody.classList.remove("_active");
        iconMenu.classList.remove("_active");
        iconMenu.classList.remove("__active");
      }

      // iconMenu.classList.toggle("_active");
      // menuBody.classList.toggle("_active");
    }

    e.preventDefault();
  });
}

;

function menu_open() {
  var iconMenu = document.querySelector(".icon-menu");
  var menuBody = document.querySelector(".menu__body");
  iconMenu.classList.add("_active");
  menuBody.classList.add("_active");
}

function menu_close() {
  var iconMenu = document.querySelector(".icon-menu");
  var menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
} //=================
//BodyLock


function body_lock(delay) {
  var body = document.querySelector("body");

  if (body.classList.contains('_lock')) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}

function body_lock_remove(delay) {
  var body = document.querySelector("body");

  if (!body.classList.contains('_wait')) {
    var lock_padding = document.querySelectorAll("._lp");
    setTimeout(function () {
      for (var _index2 = 0; _index2 < lock_padding.length; _index2++) {
        var _el = lock_padding[_index2];
        _el.style.paddingRight = '0px';
      }

      body.style.paddingRight = '0px';
      body.classList.remove("_lock");
    }, delay);
    body.classList.add("_wait");
    setTimeout(function () {
      body.classList.remove("_wait");
    }, delay);
  }
}

function body_lock_add(delay) {
  var body = document.querySelector("body");

  if (!body.classList.contains('_wait')) {
    var lock_padding = document.querySelectorAll("._lp");

    for (var _index3 = 0; _index3 < lock_padding.length; _index3++) {
      var _el2 = lock_padding[_index3];
      _el2.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }

    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.classList.add("_lock");
    body.classList.add("_wait");
    setTimeout(function () {
      body.classList.remove("_wait");
    }, delay);
  }
} //=================
// LettersAnimation


var letters = document.querySelectorAll('._letters');

if (letters.length > 0) {
  for (var _index4 = 0; _index4 < letters.length; _index4++) {
    var _el3 = letters[_index4];
    var txt = _el3.innerHTML;
    var txt_words = txt.replace('  ', ' ').split(' ');
    var new_title = '';
    var delay_option = parseInt(_el3.getAttribute('data-delay'));

    var transition = _el3.getAttribute('data-transition');

    for (var _index5 = 0; _index5 < txt_words.length; _index5++) {
      var txt_word = txt_words[_index5];
      var len = txt_word.length;
      new_title = new_title + '<p>';

      for (var _index6 = 0; _index6 < len; _index6++) {
        var it = txt_word.substr(_index6, 1);

        if (it == ' ') {
          it = '&nbsp;';
        }

        new_title = new_title + '<span>' + it + '</span>';
      }

      _el3.innerHTML = new_title;
      new_title = new_title + ' </p>';
    }

    var spans = _el3.querySelectorAll('span');

    for (var _index7 = 0; _index7 < spans.length; _index7++) {
      var _delay = delay_option + (_index7 + 1) * 0.05;

      var span = spans[_index7];
      span.style.cssText = "transition: transform " + transition + "s ease " + _delay + "s, opacity " + transition + "s ease " + _delay + "s;";
    }
  }
} //=================
//Tabs


var tabs = document.querySelectorAll("._tabs");

var _loop = function _loop(_index8) {
  var tab = tabs[_index8];
  var tabs_items = tab.querySelectorAll("._tabs-item");
  var tabs_blocks = tab.querySelectorAll("._tabs-block");

  var _loop17 = function _loop17(_index49) {
    var tabs_item = tabs_items[_index49];
    tabs_item.addEventListener("click", function (e) {
      for (var _index50 = 0; _index50 < tabs_items.length; _index50++) {
        var _tabs_item = tabs_items[_index50];

        _tabs_item.classList.remove('_active');
      }

      for (var _index51 = 0; _index51 < tabs_blocks.length; _index51++) {
        var tabs_block = tabs_blocks[_index51];
        tabs_block.classList.remove('_active');
      }

      tabs_item.classList.add('_active');

      tabs_blocks[_index49].classList.add('_active');
    });
  };

  for (var _index49 = 0; _index49 < tabs_items.length; _index49++) {
    _loop17(_index49);
  }
};

for (var _index8 = 0; _index8 < tabs.length; _index8++) {
  _loop(_index8);
} //=================
//Spollers


var spollers = document.querySelectorAll("._spoller");

if (spollers.length > 0) {
  var _loop2 = function _loop2(_index9) {
    var spoller = spollers[_index9];
    spoller.addEventListener("click", function (e) {
      if (spoller.closest('._spollers').classList.contains('_one')) {
        var curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');

        for (var _i2 = 0; _i2 < curent_spollers.length; _i2++) {
          var _el4 = curent_spollers[_i2];

          if (_el4 != spoller) {
            _el4.classList.remove('_active');

            slideUp(_el4.nextElementSibling);
          }
        }
      }

      spoller.classList.toggle('_active');
      slideToggle(spoller.nextElementSibling);
    });
  };

  for (var _index9 = 0; _index9 < spollers.length; _index9++) {
    _loop2(_index9);
  }
} //=================
//Gallery


var gallery = document.querySelectorAll('._gallery');

if (gallery) {
  gallery_init();
}

function gallery_init() {
  for (var _index10 = 0; _index10 < gallery.length; _index10++) {
    var _el5 = gallery[_index10];
    lightGallery(_el5, {
      counter: false,
      selector: 'a',
      download: false
    });
  }
} //=================
//SearchInList


function search_in_list(input) {
  var ul = input.parentNode.querySelector('ul');
  var li = ul.querySelectorAll('li');
  var filter = input.value.toUpperCase();

  for (var i = 0; i < li.length; i++) {
    var _el6 = li[i];
    var item = _el6;
    var txtValue = item.textContent || item.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      _el6.style.display = "";
    } else {
      _el6.style.display = "none";
    }
  }
} //=================
//DigiFormat


function digi(str) {
  var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  return r;
} //=================
//DiGiAnimate


function digi_animate(digi_animate) {
  if (digi_animate.length > 0) {
    for (var _index11 = 0; _index11 < digi_animate.length; _index11++) {
      var _el7 = digi_animate[_index11];
      var el_to = parseInt(_el7.innerHTML.replace(' ', ''));

      if (!_el7.classList.contains('_done')) {
        digi_animate_value(_el7, 0, el_to, 1500);
      }
    }
  }
}

function digi_animate_value(el, start, end, duration) {
  var obj = el;
  var range = end - start; // no timer shorter than 50ms (not really visible any way)

  var minTimer = 50; // calc step time to show all interediate values

  var stepTime = Math.abs(Math.floor(duration / range)); // never go below minTimer

  stepTime = Math.max(stepTime, minTimer); // get current time and calculate desired end time

  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - remaining * range);
    obj.innerHTML = digi(value);

    if (value == end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();
  el.classList.add('_done');
} //=================
//Popups


var popup_link = document.querySelectorAll('._popup-link');

if (popup_link) {
  (function () {
    var body = document.querySelector("body");

    var _loop3 = function _loop3(_index12) {
      var el = popup_link[_index12];
      var item = el.getAttribute('href').replace('#', '');
      el.addEventListener('click', function (e) {
        if (!body.classList.contains('_wait')) {
          popup_open(item, '');
        }

        e.preventDefault;
      });
    };

    for (var _index12 = 0; _index12 < popup_link.length; _index12++) {
      _loop3(_index12);
    }
  })();
}

function popup_open(item) {
  var video = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var popup = document.querySelectorAll('.popup');

  if (popup) {
    popup_close();
    history.pushState('', '', '#' + item);
    var curent_popup = document.querySelector('.popup_' + item);

    if (curent_popup) {
      if (video != '' && video != null) {
        var popup_video = document.querySelector('.popup_video');
        popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      }

      if (!document.querySelector('.menu__body._active')) {
        body_lock_add(500);
      }

      curent_popup.classList.add('_active');
      curent_popup.addEventListener("click", function (e) {
        if (!e.target.closest('.popup__body')) {
          popup_close(e.target.closest('.popup'));
        }
      });
    }
  }
}

function popup_close(item) {
  var popup = document.querySelectorAll('.popup');
  var body = document.querySelector("body");

  if (!body.classList.contains('_wait')) {
    if (popup) {
      if (!item) {
        for (var _index13 = 0; _index13 < popup.length; _index13++) {
          var _el8 = popup[_index13];

          _el8.classList.remove('_active');
        }
      } else {
        if (!document.querySelector('.menu__body._active')) {
          body_lock_remove(500);
        }

        item.classList.remove('_active');
      }

      history.pushState('', '', window.location.href.split('#')[0]);
    }
  }
}

var popup_close_icon = document.querySelectorAll('.popup__close');

if (popup_close_icon) {
  var _loop4 = function _loop4(_index14) {
    var el = popup_close_icon[_index14];
    el.addEventListener('click', function () {
      popup_close(el.closest('.popup'));
    });
  };

  for (var _index14 = 0; _index14 < popup_close_icon.length; _index14++) {
    _loop4(_index14);
  }
}

document.addEventListener('keydown', function (e) {
  if (e.which == 27) {
    popup_close();
  }
}); //=================
//=================
//SlideToggle

var _slideUp = function _slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};

var _slideDown = function _slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};

var _slideToggle = function _slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');

    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  }
}; //========================================
//Wrap


function _wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
} //========================================
//RemoveClasses


function _removeClasses(el, class_name) {
  for (var i = 0; i < el.length; i++) {
    el[i].classList.remove(class_name);
  }
} //========================================
//animate


function animate(_ref) {
  var timing = _ref.timing,
      draw = _ref.draw,
      duration = _ref.duration;
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    var timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1; // вычисление текущего состояния анимации

    var progress = timing(timeFraction);
    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}

function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < .5) return timing(2 * timeFraction) / 2;else return (2 - timing(2 * (1 - timeFraction))) / 2;
  };
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/


function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}

function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
} //========================================


var cursor = document.querySelector('.cursor');
var cursor_show_text_timer = null;

function cursor_show_text() {
  if (cursor_show_text_timer) clearTimeout(cursor_show_text_timer);
  cursor.classList.remove('_show');

  if (!cursor.classList.contains('_link')) {
    cursor_show_text_timer = setTimeout(function () {
      cursor.classList.add('_show');
    }, 800);
  }
}

var btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');

if (btn) {
  for (var _index15 = 0; _index15 < btn.length; _index15++) {
    var _el9 = btn[_index15];

    _el9.addEventListener('click', form_submit);
  }
}

function form_submit() {
  var error = 0;
  var btn = event.target;
  var form = btn.closest('form');
  var form_req = form.querySelectorAll('._req');

  if (form_req) {
    for (var _index16 = 0; _index16 < form_req.length; _index16++) {
      var _el10 = form_req[_index16];
      error += form_validate(_el10);
    }
  }

  if (error == 0) {
    //SendForm
    form_clean(form);
    popup_close(); //popup_open('message');
    //event.preventDefault();
  } else {
    var form_error = form.querySelectorAll('._error');

    if (form_error && form.classList.contains('_goto-error')) {
      _goto(form_error[0], 1000, 50);
    }

    event.preventDefault();
  }
}

function form_validate(input) {
  var error = 0;
  var input_g_value = input.getAttribute('data-value');

  if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
    if (input.value != input_g_value) {
      var em = input.value.replace(" ", "");
      input.value = em;
    }

    if (email_test(input) || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
    form_add_error(input);
    error++;
  } else {
    if (input.value == '' || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  }

  return error;
}

function form_add_error(input) {
  input.classList.add('_error');
  input.parentElement.classList.add('_error');
  var input_error = input.parentElement.querySelector('.form__error');

  if (input_error) {
    input_error.remove();
  }

  var input_error_text = input.getAttribute('data-error');

  if (input_error_text && input_error_text != '') {
    input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
  }
}

function form_remove_error(input) {
  input.classList.remove('_error');
  input.parentElement.classList.remove('_error');
  var input_error = input.parentElement.querySelector('.form__error');

  if (input_error) {
    input_error.remove();
  }
}

function form_clean(form) {
  var inputs = form.querySelectorAll('input,textarea');

  for (var _index17 = 0; _index17 < inputs.length; _index17++) {
    var _el11 = inputs[_index17];

    _el11.parentElement.classList.remove('_focus');

    _el11.classList.remove('_focus');

    _el11.value = _el11.getAttribute('data-value');
  }

  var selects = form.querySelectorAll('select');

  if (inputs.length > 0) {
    for (var _index18 = 0; _index18 < selects.length; _index18++) {
      var select = selects[_index18];
      var select_default_value = select.getAttribute('data-default');
      select.value = select_default_value;
      select_item(select);
    }
  }
}

var selects = document.querySelectorAll('select');

if (selects.length > 0) {
  selects_init();
} //Select


function selects_init() {
  for (var _index19 = 0; _index19 < selects.length; _index19++) {
    var select = selects[_index19];
    select_init(select);
  } //select_callback();


  document.addEventListener('click', function (e) {
    selects_close(e);
  });
  document.addEventListener('keydown', function (e) {
    if (e.which == 27) {
      selects_close(e);
    }
  });
}

function selects_close(e) {
  var selects = document.querySelectorAll('.select');

  if (!e.target.closest('.select')) {
    for (var _index20 = 0; _index20 < selects.length; _index20++) {
      var select = selects[_index20];
      select.classList.remove('_active');
    }
  }
}

function select_init(select) {
  var select_parent = select.parentElement;
  var select_modifikator = select.getAttribute('class');
  var select_selected_option = select.querySelector('option:checked');
  if(select_selected_option){
    select.setAttribute('data-default', select_selected_option.value);
    select.style.display = 'none';
    select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');
    var new_select = select.parentElement.querySelector('.select');
    new_select.append(select);
    select_item(select);
  }
}

function select_item(select) {
  var select_parent = select.parentElement;
  var select_items = select_parent.querySelector('.select__item');
  var select_options = select.querySelectorAll('option');
  var select_selected_option = select.querySelector('option:checked');
  var select_selected_text = select_selected_option.text;
  var select_type = select.getAttribute('data-type');

  if (select_items) {
    select_items.remove();
  }

  var select_type_content = '';

  if (select_type == 'input') {
    select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
  } else {
    select_type_content = '<div class="select__value icon-select-arrow">' + select_selected_text + '</div>';
  }

  select_parent.insertAdjacentHTML('beforeend', '<div class="select__item">' + '<div class="select__title">' + select_type_content + '</div>' + '<div class="select__options">' + select_get_options(select_options) + '</div>' + '</div></div>');
  select_actions(select, select_parent);
}

function select_actions(original, select) {
  var select_item = select.querySelector('.select__item');
  var select_options = select.querySelectorAll('.select__option');
  var select_type = original.getAttribute('data-type');
  var select_input = select.querySelector('.select__input');
  select_item.addEventListener('click', function () {
    var selects = document.querySelectorAll('.select');

    for (var _index21 = 0; _index21 < selects.length; _index21++) {
      var _select = selects[_index21];

      if (_select != select_item.closest('.select')) {
        _select.classList.remove('_active');
      }
    }

    select.classList.toggle('_active');
  });

  var _loop5 = function _loop5(_index22) {
    var select_option = select_options[_index22];
    var select_option_value = select_option.getAttribute('data-value');
    var select_option_text = select_option.innerHTML;

    if (select_type == 'input') {
      select_input.addEventListener('keyup', select_search);
    } else {
      if (select_option.getAttribute('data-value') == original.value) {
        select_option.style.display = 'none';
      }
    }

    select_option.addEventListener('click', function () {
      if(original){
        original.value = select_option.getAttribute('data-value');
        original.dispatchEvent(new Event('change'));
      }
      for (var _index23 = 0; _index23 < select_options.length; _index23++) {
        var _el12 = select_options[_index23];
        _el12.style.display = 'block';
      }

      if (select_type == 'input') {
        select_input.value = select_option_text;
        original.value = select_option_value;
      } else {
        select.querySelector('.select__value').innerHTML = select_option_text;
        original.value = select_option_value;
        select_option.style.display = 'none';
      }
    });
  };

  for (var _index22 = 0; _index22 < select_options.length; _index22++) {
    _loop5(_index22);
  }
}

function select_get_options(select_options) {
  if (select_options) {
    var select_options_content = '';

    for (var _index24 = 0; _index24 < select_options.length; _index24++) {
      var select_option = select_options[_index24];
      var select_option_value = select_option.value;

      if (select_option_value != '') {
        var select_option_text = select_option.text;
        select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
      }
    }

    return select_options_content;
  }
}

function select_search(e) {
  var select_block = e.target.closest('.select ').querySelector('.select__options');
  var select_options = e.target.closest('.select ').querySelectorAll('.select__option');
  var select_search_text = e.target.value.toUpperCase();

  for (var _i3 = 0; _i3 < select_options.length; _i3++) {
    var select_option = select_options[_i3];
    var select_txt_value = select_option.textContent || select_option.innerText;

    if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
      select_option.style.display = "";
    } else {
      select_option.style.display = "none";
    }
  }
}

function selects_update_all() {
  var selects = document.querySelectorAll('select');

  if (selects) {
    for (var _index25 = 0; _index25 < selects.length; _index25++) {
      var select = selects[_index25];
      select_item(select);
    }
  }
} //Placeholers


var inputs = document.querySelectorAll('input[data-value],textarea[data-value]');

if (inputs.length > 0) {
  var _loop6 = function _loop6(_index26) {
    var input = inputs[_index26];
    var input_g_value = input.getAttribute('data-value');

    if (input.value == '' && input_g_value != '') {
      input.value = input_g_value;
    }

    if (input.value != '' && input.value != input_g_value) {
      input_focus_add(input);
    }

    input.addEventListener('focus', function (e) {
      if (input.value == input_g_value) {
        input_focus_add(input);
        input.value = '';
      }

      if (input.classList.contains('_date')) {
        Inputmask("99-99-9999", {
          //"placeholder": '',
          clearIncomplete: true,
          clearMaskOnLostFocus: true,
          onincomplete: function onincomplete() {
            input_clear_mask(input, input_g_value);
          }
        }).mask(input);
      }

      if (input.classList.contains('_phone')) {
        //'+7(999) 999 9999'
        //'+38(999) 999 9999'
        //'+375(99)999-99-99'
        Inputmask("+375 (99) 9999999", {
          //"placeholder": '',
          clearIncomplete: true,
          clearMaskOnLostFocus: true,
          onincomplete: function onincomplete() {
            input_clear_mask(input, input_g_value);
          }
        }).mask(input);
      }

      if (input.classList.contains('_digital')) {
        Inputmask("9{1,}", {
          "placeholder": '',
          clearIncomplete: true,
          clearMaskOnLostFocus: true,
          onincomplete: function onincomplete() {
            input_clear_mask(input, input_g_value);
          }
        }).mask(input);
      }

      form_remove_error(input);
    });
    input.addEventListener('blur', function (e) {
      if (input.value == '') {
        if (input.classList.contains('_phone')) {
          if (input.inputmask) {
            input.inputmask.remove();
          }
        }

        if (input.classList.contains('_digital')) {
          if (input.inputmask) {
            input.inputmask.remove();
          }
        }

        input.value = input_g_value;
        input_focus_remove(input);
      }
    });

    if (input.classList.contains('_date')) {
      datepicker(input, {
        customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        formatter: function formatter(input, date, instance) {
          var value = date.toLocaleDateString();
          input.value = value;
        }
      });
    }
  };

  for (var _index26 = 0; _index26 < inputs.length; _index26++) {
    _loop6(_index26);
  }
}

function input_focus_add(input) {
  input.classList.add('focus');
  input.parentElement.classList.add('focus');
}

function input_focus_remove(input) {
  input.classList.remove('focus');
  input.parentElement.classList.remove('focus');
}

function input_clear_mask(input, input_g_value) {
  input.inputmask.remove();
  input.value = input_g_value;
  input_focus_remove(input);
} // Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle


"use strict";

(function () {
  var originalPositions = [];
  var daElements = document.querySelectorAll('[data-da]');
  var daElementsArray = [];
  var daMatchMedia = []; //Заполняем массивы

  if (daElements.length > 0) {
    var number = 0;

    for (var _index27 = 0; _index27 < daElements.length; _index27++) {
      var daElement = daElements[_index27];
      var daMove = daElement.getAttribute('data-da');

      if (daMove != '') {
        var daArray = daMove.split(',');
        var daPlace = daArray[1] ? daArray[1].trim() : 'last';
        var daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
        var daDestination = document.querySelector('.' + daArray[0].trim());

        if (daArray.length > 0 && daDestination) {
          daElement.setAttribute('data-da-index', number); //Заполняем массив первоначальных позиций

          originalPositions[number] = {
            "parent": daElement.parentNode,
            "index": indexInParent(daElement)
          }; //Заполняем массив элементов

          daElementsArray[number] = {
            "element": daElement,
            "destination": document.querySelector('.' + daArray[0].trim()),
            "place": daPlace,
            "breakpoint": daBreakpoint
          };
          number++;
        }
      }
    }

    dynamicAdaptSort(daElementsArray); //Создаем события в точке брейкпоинта

    for (var _index28 = 0; _index28 < daElementsArray.length; _index28++) {
      var _el13 = daElementsArray[_index28];
      var _daBreakpoint = _el13.breakpoint;
      var daType = "max"; //Для MobileFirst поменять на min

      daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + _daBreakpoint + "px)"));

      daMatchMedia[_index28].addListener(dynamicAdapt);
    }
  } //Основная функция


  function dynamicAdapt(e) {
    for (var _index29 = 0; _index29 < daElementsArray.length; _index29++) {
      var _el14 = daElementsArray[_index29];
      var _daElement = _el14.element;
      var _daDestination = _el14.destination;
      var _daPlace = _el14.place;
      var _daBreakpoint2 = _el14.breakpoint;
      var daClassname = "_dynamic_adapt_" + _daBreakpoint2;

      if (daMatchMedia[_index29].matches) {
        //Перебрасываем элементы
        if (!_daElement.classList.contains(daClassname)) {
          var actualIndex = indexOfElements(_daDestination)[_daPlace];

          if (_daPlace === 'first') {
            actualIndex = indexOfElements(_daDestination)[0];
          } else if (_daPlace === 'last') {
            actualIndex = indexOfElements(_daDestination)[indexOfElements(_daDestination).length];
          }

          _daDestination.insertBefore(_daElement, _daDestination.children[actualIndex]);

          _daElement.classList.add(daClassname);
        }
      } else {
        //Возвращаем на место
        if (_daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(_daElement);

          _daElement.classList.remove(daClassname);
        }
      }
    }

    customAdapt();
  } //Вызов основной функции


  dynamicAdapt(); //Функция возврата на место

  function dynamicAdaptBack(el) {
    var daIndex = el.getAttribute('data-da-index');
    var originalPlace = originalPositions[daIndex];
    var parentPlace = originalPlace['parent'];
    var indexPlace = originalPlace['index'];
    var actualIndex = indexOfElements(parentPlace, true)[indexPlace];
    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
  } //Функция получения индекса внутри родителя


  function indexInParent(el) {
    var children = Array.prototype.slice.call(el.parentNode.children);
    return children.indexOf(el);
  } //Функция получения массива индексов элементов внутри родителя


  function indexOfElements(parent, back) {
    var children = parent.children;
    var childrenArray = [];

    for (var _i4 = 0; _i4 < children.length; _i4++) {
      var childrenElement = children[_i4];

      if (back) {
        childrenArray.push(_i4);
      } else {
        //Исключая перенесенный элемент
        if (childrenElement.getAttribute('data-da') == null) {
          childrenArray.push(_i4);
        }
      }
    }

    return childrenArray;
  } //Сортировка объекта


  function dynamicAdaptSort(arr) {
    arr.sort(function (a, b) {
      if (a.breakpoint > b.breakpoint) {
        return -1;
      } else {
        return 1;
      } //Для MobileFirst поменять

    });
    arr.sort(function (a, b) {
      if (a.place > b.place) {
        return 1;
      } else {
        return -1;
      }
    });
  } //Дополнительные сценарии адаптации


  function customAdapt() {
    var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
})();

var scr_body = document.querySelector('body');
var scr_body_content = document.querySelector('main');
var scr_blocks = document.querySelectorAll('._scr-sector');
var scr_items = document.querySelectorAll('._scr-item');
var scr_fix_block = document.querySelectorAll('._side-wrapper');
var scr_min_height = 750;
var arrow = document.querySelector('.arrow');
var scrolling = true; //ScrollOnScroll
var timeScroll = false;

if (!isMobile.any()) {
  if (navigator.appVersion.indexOf("Mac") === -1) {
    custom_scroll();
    window.addEventListener('wheel', scroll_animate, {
      capture: true,
      passive: true
    });
    window.addEventListener('resize', custom_scroll, {
      capture: true,
      passive: true
    });
  }
}

function scroll_resize(params) {}

setTimeout(function () {
  scroll_resize();
}, 200);

function clickOnScrollWrapper (e) {
  if ( e.target.classList.contains('_custom-scroll__line') ) return;
  var window_height = window.innerHeight;
  var content_height = document.querySelector('.wrapper').offsetHeight;
  var ratio = content_height / window_height;
  var custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / content_height)));
  window.scrollTo(0, (ratio * e.screenY) - (custom_cursor_height * ratio));
  new_pos = pageYOffset;
}

function customScrollWrapperOnClick(_custom_scroll, custom_cursor_height) {
  _custom_scroll.addEventListener('mousedown', clickOnScrollWrapper)
}

var mousePrevPos = null;

function mouseMoveAction (e) {
  if ( !mousePrevPos ) {
    mousePrevPos = e.screenY;
    return;
  }
  var window_height = window.innerHeight;
  var content_height = document.querySelector('.wrapper').offsetHeight;
  var ratio = content_height / window_height;
  if ( mousePrevPos < e.screenY ) {
    window.scrollTo(0, window.scrollY + (ratio * (e.screenY - mousePrevPos)));
    mousePrevPos = e.screenY;
  } else {
    window.scrollTo(0, window.scrollY - (ratio * (mousePrevPos - e.screenY)));
    mousePrevPos = e.screenY;
  }
}

function mouseUpAction (e) {
  var custom_scroll_line = document.querySelector('._custom-scroll__line');
  mousePrevPos = null;
  custom_scroll_line.style.userSelect = 'auto';
  custom_scroll_line.style.cursor = 'grab';
  window.removeEventListener('mousemove', mouseMoveAction);
  window.removeEventListener('mouseup', mouseUpAction);
  new_pos = pageYOffset;
}

function customScrollOnClick(custom_scroll_line) {
  custom_scroll_line.addEventListener('mousedown', mouseDownAction)
}

function mouseDownAction (e) {
  var custom_scroll_line = document.querySelector('._custom-scroll__line');
  custom_scroll_line.style.cursor = 'grabbing';
  custom_scroll_line.style.userSelect = 'none';
  window.addEventListener('mousemove', mouseMoveAction)
  window.addEventListener('mouseup', mouseUpAction)
}
var disable_custom_scroll = false;
window.addEventListener('DOMContentLoaded', function (e) {
  var window_height = window.innerHeight;
  var custom_scroll_line = document.querySelector('._custom-scroll__line');
  var custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
  var custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
  var _custom_scroll = document.querySelector('._custom-scroll');
  var country_list_element = document.querySelector('.iti__country-list');

  if (_custom_scroll) {
    _custom_scroll.removeEventListener('mousedown', clickOnScrollWrapper)
    customScrollWrapperOnClick(_custom_scroll, custom_cursor_height);
  }
  if (custom_scroll_line) {
    custom_scroll_line.removeEventListener('mousedown', mouseDownAction);
    customScrollOnClick(custom_scroll_line, custom_cursor_height);
  }
  if (country_list_element) {
    country_list_element.onmouseover = function(ev) {
      disable_custom_scroll = true;
    }
    country_list_element.onmouseout = function(ev) {
      disable_custom_scroll = false;
    }
  }

  var customSelectTime = document.querySelector('.bookACall__timepicker .custom-select-container.customSelect');

  if ( customSelectTime && (navigator.appVersion.indexOf("Mac") === -1) ) {
    var panel = customSelectTime.querySelector('.custom-select-panel'); // window_height

    var options = panel.querySelectorAll('.custom-select-option');
    var height = 0; //       content_height
    options.forEach(function (el) {
      height += el.clientHeight + 1;
    })

    var pos_add = panel.clientHeight / options.length;

    var customScrollWrapper = document.createElement('div');
    var customScroll = document.createElement('div');

    customScrollWrapper.classList.add('_custom-scroll-time');
    customScroll.classList.add('_custom-scroll__line-time');
    customScrollWrapper.style.height = panel.scrollHeight + 'px';
    customScroll.style.height = customSelectTime.clientHeight  + 'px';

    customScrollWrapper.appendChild(customScroll);
    panel.appendChild(customScrollWrapper);

    if (navigator.appVersion.indexOf("Mac") === -1) {
      panel.style.overflow = 'hidden';
      panel.addEventListener('mouseenter', function(e) {
        timeScroll = true;
      });
      panel.addEventListener('mouseleave', function(e) {
        timeScroll = false;
      });
    }
    if ( window.matchMedia('min-width: 768px') ) {
      console.log('media')
      panel.addEventListener('scroll', function (e) {
        var customScroll = document.querySelector('._custom-scroll__line-time');
        customScroll.style.transform = `translateY(${e.target.scrollTop}px)`;
        var options = panel.querySelectorAll('.custom-select-option');
        var count = 0;
        var heightItems = 0;
        options.forEach(function (el) {
          if ( heightItems < e.target.scrollTop) {
            count++;
            heightItems += el.clientHeight;
          }
        })
        var transformPosAdd = panel.clientHeight / options.length;

        customScroll.style.transform = `translateY(${e.target.scrollTop+(transformPosAdd*count)}px)`;

        if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
          count - 1 > 0 ? count-- : null;
        } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
          count++;
        }
      });
      customSelectTime.addEventListener('scroll',scroll_scroll);
    }
    // panel.addEventListener('scroll', function (e) {
    //   var customScroll = document.querySelector('._custom-scroll__line-time');
    //   customScroll.style.transform = `translateY(${e.target.scrollTop}px)`;
    //   var options = panel.querySelectorAll('.custom-select-option');
    //   var count = 0;
    //   var heightItems = 0;
    //   options.forEach(function (el) {
    //     if ( heightItems < e.target.scrollTop) {
    //       count++;
    //       heightItems += el.clientHeight;
    //     }
    //   })
    //   var transformPosAdd = panel.clientHeight / options.length;
    //
    //   customScroll.style.transform = `translateY(${e.target.scrollTop+(transformPosAdd*count)}px)`;
    //
    //   if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
    //     count - 1 > 0 ? count-- : null;
    //   } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
    //     count++;
    //   }
    // });
    // customSelectTime.addEventListener('scroll',scroll_scroll);
  }
})

function custom_scroll(event) {

  if (!disable_custom_scroll) {
    scr_body.style.overflow = 'hidden';
    var window_height = window.innerHeight;
    var custom_scroll_line = document.querySelector('._custom-scroll__line');
    var custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
    var custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));

    if (custom_scroll_content_height > window_height) {
      if (!custom_scroll_line) {
        var _custom_scroll = document.createElement('div');

        custom_scroll_line = document.createElement('div');

        _custom_scroll.setAttribute('class', '_custom-scroll');

        custom_scroll_line.setAttribute('class', '_custom-scroll__line');

        customScrollWrapperOnClick(_custom_scroll, custom_cursor_height);

        _custom_scroll.appendChild(custom_scroll_line);

        scr_body.appendChild(_custom_scroll);
      }

      custom_scroll_line.style.height = custom_cursor_height + 'px';
      custom_scroll_line.style.display = "block";
      if ( custom_scroll_line ) {
        customScrollOnClick(custom_scroll_line, custom_cursor_height);
      }
    } else {
      if (custom_scroll_line) {
        custom_scroll_line.style.display = "none";
      }
    }
  }


}
var new_pos = pageYOffset;

var eventStart = new Date().getTime();
var eventCount = 0;

var timeScrollCount = 0;
function scroll_animate(ev) {
  var customSelectTime = document.querySelector('.bookACall__timepicker .custom-select-container.customSelect');
  if (!disable_custom_scroll && !timeScroll) {
    var eventTime = new Date().getTime();
    if (!scr_body.classList.contains('_lock')) {
      var window_height = window.innerHeight;
      var content_height = document.querySelector('.wrapper').offsetHeight;
      /* TODO определяем дельту для следующего значения скролла в зависимости от того, как часто появляются события */
      var pos_add = 100;

      // var pos_add = eventTime - eventStart < 20 ? 15 : ((eventTime - eventStart > 20 && eventTime - eventStart < 40) ? 35 : ((eventTime - eventStart > 40 && eventTime - eventStart < 60) ? 50 : 100));

      eventStart = eventTime;
      eventCount++;
      console.log('scroll',new_pos)
      if (navigator.appVersion.indexOf("Mac") != -1) {
        pos_add = ev.deltaY;
        new_pos += pos_add;
      } else {
        if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
          new_pos = new_pos - pos_add;
        } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
          new_pos = new_pos + pos_add;
        }
      }

      if (new_pos > content_height - window_height) new_pos = content_height - window_height;
      if (new_pos < 0) new_pos = 0;


      if (scrolling) {
        scrolling = false;

        _goto(new_pos, 1000);

        var scr_pause = 100;

        if (navigator.appVersion.indexOf("Mac") != -1) {
          scr_pause = scr_pause * 2;
        }

        setTimeout(function () {
          scrolling = true;
          _goto(new_pos, 1000);
        }, scr_pause);
      } //disableScroll();


      cursor_show_text();
    }
  } else {
    var panel = customSelectTime.querySelector('.custom-select-panel'); // window_height
    var options = panel.querySelectorAll('.custom-select-option');
    var height = 0; //       content_height
    options.forEach(function (el) {
      height += el.clientHeight + 1;
    })
    var eventTime = new Date().getTime();
    var pos_add = panel.scrollHeight / options.length;
    var transformPosAdd = panel.clientHeight / options.length;
    eventStart = eventTime;
    eventCount++;

    if (navigator.appVersion.indexOf("Mac") != -1) {
      pos_add = ev.deltaY;
      panel.scrollTop += pos_add;
    } else {
      if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
        panel.scrollTop = panel.scrollTop - pos_add;
        timeScrollCount - 1 > 0 ? timeScrollCount-- : null;
      } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
        panel.scrollTop = panel.scrollTop + pos_add;
        timeScrollCount++;
      }
    }

    if (panel.scrollTop > height - panel.clientHeight) panel.scrollTop = height - panel.clientHeight;
    if (panel.scrollTop < 0) panel.scrollTop = 0;

    // var customScroll = document.querySelector('._custom-scroll__line-time');
    // if ( (panel.scrollTop + (transformPosAdd * timeScrollCount)) < panel.scrollHeight - (pos_add*2) ) {
    //   customScroll.style.transform = `translateY(${panel.scrollTop + (transformPosAdd * timeScrollCount)}px)`;
    // } else {
    //   timeScrollCount--;
    // }

  }
}

window.addEventListener('scroll', scroll_scroll);

function scroll_scroll(e) {
  var src_value = pageYOffset;
  //scr_body.setAttribute('data-scroll', src_value);
  // console.log('src_value',src_value)
  var hrader = document.querySelector('header.header');

  if (hrader) {
    if (src_value > 10) {
      hrader.classList.add('_scroll');
    } else {
      hrader.classList.remove('_scroll');
    }
  }

  if (scr_blocks.length > 0) {
    for (var _index30 = 0; _index30 < scr_blocks.length; _index30++) {
      var block = scr_blocks[_index30];
      var block_offset = offset(block).top;
      var block_height = block.offsetHeight;

      if (src_value > block_offset - window.innerHeight / 1.5 && src_value < block_offset + block_height - window.innerHeight / 1.5) {
        block.classList.add('_scr-sector_active');
      } else {
        if (block.classList.contains('_scr-sector_active')) {
          block.classList.remove('_scr-sector_active');
        }
      }

      if (src_value > block_offset - window.innerHeight / 2 && src_value < block_offset + block_height - window.innerHeight / 2) {
        if (!block.classList.contains('_scr-sector_current')) {
          block.classList.add('_scr-sector_current');
        }
      } else {
        if (block.classList.contains('_scr-sector_current')) {
          block.classList.remove('_scr-sector_current');
        }
      }
    }
  }

  if (scr_items.length > 0) {
    for (var _index31 = 0; _index31 < scr_items.length; _index31++) {
      var scr_item = scr_items[_index31];
      var scr_item_offset = offset(scr_item).top;
      var scr_item_height = scr_item.offsetHeight;
      var scr_header_height = document.querySelector('.header').offsetHeight;

      if (src_value > scr_item_offset - window.innerHeight / 2 && src_value < scr_item_offset + scr_item_height - window.innerHeight / 5) {
        scr_item.classList.add('_half');
      } else {
        scr_item.classList.remove('_half');
      }

      if (src_value > scr_item_offset - window.innerHeight / 1.5 && src_value < scr_item_offset + scr_item_height - window.innerHeight / 5) {
        scr_item.classList.add('_active');
        scroll_load_item(scr_item);
        scroll_scrolling_item(scr_item, (src_value - scr_item_offset) / (scr_item_height - window.innerHeight / 5) * 100);
      } else {
        if (!scr_item.classList.contains('_hold') && !scr_item.classList.contains('_hold-both')) {
          scr_item.classList.remove('_active');
        }
      }

      if (src_value < scr_item_offset - window.innerHeight / 1.5) {
        if (!scr_item.classList.contains('_hold-both')) {
          scr_item.classList.remove('_active');
        }
      }

      if (src_value > scr_item_offset - window.innerHeight) {
        scr_item.classList.add('_view');

        if (scr_item.querySelectorAll('._lazy').length > 0) {
          scroll_lazy(scr_item);
        }
      }

      if (src_value > scr_item_offset && src_value < scr_item_offset + scr_item_height) {
        scroll_top_item(scr_item, src_value, scr_item_offset);
      } else {
        scroll_bottom_item(scr_item, src_value, scr_item_offset);
      }

      if (src_value >= scr_item_offset - scr_header_height && src_value < scr_item_offset + scr_item_height) {
        if (scr_item.classList.contains('_lite')) {
          scr_body.classList.add('_lite');
        } else {
          scr_body.classList.remove('_lite');
        }
      }

      if (src_value > scr_item_offset - window.innerHeight && src_value < scr_item_offset + scr_item_height) {
        scroll_start_top_item(scr_item, src_value, scr_item_offset);
      } else {
        scroll_start_bottom_item(scr_item, src_value, scr_item_offset);
      }

      if (src_value > scr_item_offset + scr_item_height - window.innerHeight) {
        scroll_end_bottom_item(scr_item, src_value, scr_item_offset);
      }

      if (scr_item.classList.contains('main-home')) {
        // var image = scr_item.querySelector('.swiper-slide-active .slide-home__bg');
        if ( !window.matchMedia('(max-width: 768px)').matches ) {
          var imageList = scr_item.querySelectorAll('.swiper-slide .slide-home__bg');
          var image_position = (src_value - scr_item_offset) / 3;
          var image_scale = 1 + (src_value - scr_item_offset) / 9000;
          imageList.forEach(function (image) {
            image.style.cssText = "transform: translate(0px, " + image_position + "px) scale(" + image_scale + ")";
          })
        }
        // image.style.cssText = "transform: translate(0px, " + image_position + "px) scale(" + image_scale + ")";
      }

      if (scr_item.classList.contains('backwelle-block-1')) {
        if (src_value > 0) {
          document.querySelector('.backwelle__logo').classList.remove('_load');
          document.querySelector('.backwelle__logo').classList.add('_hide');
        }

        if (src_value < 200) {
          document.querySelector('.backwelle__logo').classList.remove('_hide');
        }
      }

      if (scr_item.classList.contains('sawa-block-1')) {
        if (src_value > 0) {
          document.querySelector('.logo-sawa').classList.remove('_load');
          document.querySelector('.logo-sawa').classList.add('_show');
        }

        if (src_value > window.innerHeight + window.innerHeight * 0.2) {
          document.querySelector('.logo-sawa').classList.add('_hide');
        }

        if (src_value < window.innerHeight + window.innerHeight * 0.2) {
          document.querySelector('.logo-sawa').classList.remove('_hide');
        }

        if (src_value < 200) {
          document.querySelector('.logo-sawa').classList.remove('_show');
        }
      }

      if (scr_item.classList.contains('turbane-block-1')) {
        if (src_value > 50) {
          document.querySelector('.turbane-block-1').classList.add('_hide');
        } else {
          document.querySelector('.turbane-block-1').classList.remove('_hide');
        }
      }

      if (scr_item.classList.contains('sawa-block-4-1')) {
        if (src_value > scr_item_offset + scr_item_height / 3) {
          scr_item.classList.add('_hide');
        } else {
          scr_item.classList.remove('_hide');
        }
      }
    }
  }

  if (scr_fix_block.length > 0 && window.innerWidth > 992) {
    fix_block(scr_fix_block, src_value);
  }

  var custom_scroll_line = document.querySelector('._custom-scroll__line');

  if (custom_scroll_line) {
    var window_height = window.innerHeight;
    var content_height = document.querySelector('.wrapper').offsetHeight;
    var scr_procent = src_value / (content_height - window_height) * 100;
    var custom_scroll_line_height = custom_scroll_line.offsetHeight;
    custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
  }

  if (arrow && window.innerWidth > 992) {
    arrow.style.opacity = (100 - src_value / window.innerHeight * 100) / 100;
  }
}

setTimeout(function () {
  scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
  var lazy_src = scr_item.querySelectorAll('*[data-src]');

  if (lazy_src.length > 0) {
    var _loop7 = function _loop7(_index32) {
      var el = lazy_src[_index32];

      if (!el.classList.contains('_loaded')) {
        el.setAttribute('src', el.getAttribute('data-src'));
        el.classList.add('_loaded');

        el.onload = function () {
          el.removeAttribute('data-src');

          if (!isMobile.any()) {
            if (navigator.appVersion.indexOf("Mac") === -1) {
              custom_scroll();
            }
          }

          if (document.querySelector('.packaging__items')) {
            msnry.reloadItems();
            msnry.layout();
          }
        };
      }
    };

    for (var _index32 = 0; _index32 < lazy_src.length; _index32++) {
      _loop7(_index32);
    }
  }

  var lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');

  if (lazy_srcset.length > 0) {
    var _loop8 = function _loop8(_index33) {
      var el = lazy_srcset[_index33];

      if (!el.classList.contains('_loaded')) {
        el.setAttribute('srcset', el.getAttribute('data-srcset'));
        el.classList.add('_loaded');

        el.onload = function () {
          el.removeAttribute('data-srcset');
          if (navigator.appVersion.indexOf("Mac") === -1) {
            custom_scroll();
          }

          if (document.querySelector('.packaging__items')) {
            msnry.reloadItems();
            msnry.layout();
          }
        };
      }
    };

    for (var _index33 = 0; _index33 < lazy_srcset.length; _index33++) {
      _loop8(_index33);
    }
  }
}

function scroll_load_item(scr_item) {
  if (scr_item.classList.contains('_load-map')) {
    var map_item = document.getElementById('map');

    if (map_item) {
      map();
    }
  }

  if (scr_item.querySelectorAll('._load-video').length > 0) {
    for (var _index34 = 0; _index34 < scr_item.querySelectorAll('._load-video').length; _index34++) {
      var _el15 = scr_item.querySelectorAll('._load-video')[_index34];

      if (!_el15.classList.contains('_loaded')) {
        _el15.setAttribute('src', _el15.getAttribute('data-src'));

        _el15.classList.add('_loaded');
      }
    }
  }
}

function scroll_scrolling_item(scr_item, src_value) {
  if (scr_item.classList.contains('_opacity')) {
    if (window.innerWidth > 992) {
      if (src_value > 50) {
        scr_item.style.opacity = (100 - src_value) / 50;
      } else {
        scr_item.style.opacity = 1;
      }
    }
  }

  if (scr_item.classList.contains('_parallax') && window.innerWidth > 992 && src_value > 0) {
    var block = scr_item.querySelector('._parallax-block');
    var block_position = src_value + src_value;
    block.style.cssText = "transform: translate(0px, " + block_position + "px)";
  }

  if (scr_item.classList.contains("_parallax-case") && window.innerWidth > 992 && src_value > 0) {
    scr_item.style.overflow = "hidden";
    var image = scr_item.querySelector("._parallax-case-block");
    var image_position = src_value + src_value * 0.5;
    var image_scale = 1 + src_value / 1500;
    image.style.cssText = "transform: translate(0px, " + image_position + "px) scale(" + image_scale + ")";
  }
}

function scroll_top_item(scr_item, src_value, scr_item_offset) {
  if (scr_item.classList.contains('sawa-block-4__images') || scr_item.classList.contains('turbane-block-3') || scr_item.classList.contains('turbane-block-4') || scr_item.classList.contains('turbane-block-5')) {
    scr_item.classList.add('_top');
  }

  if (scr_item.classList.contains('_top-fixed')) {
    if (window.innerWidth > 992) {
      scr_item.style.height = scr_item.querySelector('._top-fixed__body').offsetHeight + 'px';
      scr_item.classList.add('_fixed');
    } else {
      scr_item.style.height = 'auto';
    }
  }

  if (scr_item.classList.contains('aloelove-block-3')) {
    if (window.innerWidth > 992) {
      var item = document.querySelector('.aloelove-block-3__block._active');
      block3block(item, src_value, scr_item_offset);
    }
  }
}

function scroll_bottom_item(scr_item, src_value, scr_item_offset) {
  if (scr_item.classList.contains('_top-fixed')) {
    scr_item.classList.remove('_fixed');
  }
}

function scroll_start_top_item(scr_item, src_value, scr_item_offset) {
  if (scr_item.classList.contains('_just-fixed')) {
    if (window.innerWidth > 992) {
      scr_item.style.height = scr_item.querySelector('._just-fixed__body').offsetHeight + 'px';
      scr_item.classList.add('_fixed');
    } else {}
  }

  if (scr_item.classList.contains('aloelove-block-3')) {
    if (window.innerWidth > 992) {
      scr_item.style.height = document.querySelectorAll('.aloelove-block-3__block').length * window.innerHeight + 'px';
      scr_item.classList.add('_fixed');
    } else {
      var item = document.querySelectorAll('.aloelove-block-3__block');

      for (var _index35 = 0; _index35 < item.length; _index35++) {
        item[_index35].style.height = 'auto';
      }

      scr_item.style.height = 'auto';
    }
  }

  if (scr_item.previousElementSibling && scr_item.previousElementSibling.classList.contains('_bottom-fixed')) {
    if (window.innerWidth > 992) {
      if (!scr_item.previousElementSibling.classList.contains('_fixed')) {
        scr_item.previousElementSibling.style.height = document.querySelector('._bottom-fixed__body').offsetHeight + 'px';
        scr_item.previousElementSibling.classList.add('_fixed');
      }
    } else {
      scr_item.previousElementSibling.style.height = 'auto';
    }
  }

  if (scr_item.classList.contains('_phone-parallax') && window.innerWidth > 992) {
    var block = scr_item.querySelector('.digital__phone');
    var block_position = (scr_item_offset - (src_value + window.innerHeight)) / window.innerHeight * 100 / 5;
    block.style.cssText = "transform: translate(0px, " + block_position + "%)";
  }
}

function scroll_start_bottom_item(scr_item, src_value, scr_item_offset) {
  if (scr_item.classList.contains('_just-fixed')) {
    scr_item.classList.remove('_fixed');
  }

  if (scr_item.previousElementSibling && scr_item.previousElementSibling.classList.contains('_bottom-fixed')) {
    if (window.innerWidth > 992) {
      scr_item.previousElementSibling.classList.remove('_fixed');
    } else {
      scr_item.previousElementSibling.style.height = 'auto';
    }
  }
}

function scroll_end_bottom_item(scr_item, src_value, scr_item_offset) {
  if (scr_item.classList.contains('aloelove-block-3')) {
    scr_item.classList.remove('_fixed');
  }
}

function block3block(item, src_value, scr_item_offset) {
  var item_height = window.innerHeight - (src_value - window.innerHeight * indexInParent(item) - scr_item_offset);

  if (item_height >= window.innerHeight) {
    item_height = window.innerHeight;
    item.style.height = item_height + 'px';
    item = item.previousElementSibling;

    if (item) {
      _removeClasses(document.querySelectorAll('.aloelove-block-3__block'), '_active');

      item.classList.add('_active');
    }
  } else if (item_height < 0) {
    item_height = 0;
    item.style.height = item_height + 'px';
    item = item.nextElementSibling;

    if (item) {
      _removeClasses(document.querySelectorAll('.aloelove-block-3__block'), '_active');

      item.classList.add('_active');
    }
  } else {
    if (indexInParent(item) != document.querySelectorAll('.aloelove-block-3__block').length - 1) {
      item.style.height = item_height + 'px';
    }
  }
} //Функция получения индекса внутри родителя


function indexInParent(el) {
  var children = Array.prototype.slice.call(el.parentNode.children);
  return children.indexOf(el);
} //FullScreenScroll


if (scr_blocks.length > 0 && !isMobile.any()) {
  disableScroll();
  window.addEventListener('wheel', full_scroll);
}

function full_scroll(e) {
  var viewport_height = window.innerHeight;

  if (viewport_height >= scr_min_height) {
    if (scrolling) {
      // ВЫЧИСЛИТЬ!!!
      var current_scroll = pageYOffset; //parseInt(scr_body.getAttribute('data-scroll'));
      //

      var current_block = document.querySelector('._scr-sector._scr-sector_current');
      var current_block_pos = offset(current_block).top;
      var current_block_height = current_block.offsetHeight;
      var current_block_next = current_block.nextElementSibling;
      var current_block_prev = current_block.previousElementSibling;
      var block_pos;

      if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
        if (current_block_prev) {
          var current_block_prev_height = current_block_prev.offsetHeight;
          block_pos = offset(current_block_prev).top;

          if (current_block_height <= viewport_height) {
            if (current_block_prev_height >= viewport_height) {
              block_pos = block_pos + (current_block_prev_height - viewport_height);
              full_scroll_to_sector(block_pos);
            }
          } else {
            enableScroll();

            if (current_scroll <= current_block_pos) {
              full_scroll_to_sector(block_pos);
            }
          }
        } else {
          full_scroll_pagestart();
        }
      } else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
        if (current_block_next) {
          block_pos = offset(current_block_next).top;

          if (current_block_height <= viewport_height) {
            full_scroll_to_sector(block_pos);
          } else {
            enableScroll();

            if (current_scroll >= block_pos - viewport_height) {
              full_scroll_to_sector(block_pos);
            }
          }
        } else {
          full_scroll_pageend();
        }
      }
    } else {
      disableScroll();
    }
  } else {
    enableScroll();
  }
}

function full_scroll_to_sector(pos) {
  disableScroll();
  scrolling = false;

  _goto(pos, 800);

  var scr_pause = 500;

  if (navigator.appVersion.indexOf("Mac") != -1) {
    scr_pause = 1000;
  }

  ;
  setTimeout(function () {
    scrolling = true;
  }, scr_pause);
}

function full_scroll_pagestart() {}

function full_scroll_pageend() {} //ScrollOnClick (Navigation)


var link = document.querySelectorAll('._goto-block');

if (link) {
  var blocks = [];

  var _loop9 = function _loop9(_index36) {
    var el = link[_index36];
    var block_name = el.getAttribute('href').replace('#', '');

    if (block_name != '' && !~blocks.indexOf(block_name)) {
      blocks.push(block_name);
    }

    el.addEventListener('click', function (e) {
      if (document.querySelector('.menu__body._active')) {
        menu_close();
        body_lock_remove(500);
      }

      var target_block_class = el.getAttribute('href').replace('#', '');
      var target_block = document.querySelector('.' + target_block_class);

      _goto(target_block, 300);

      e.preventDefault();
    });
  };

  for (var _index36 = 0; _index36 < link.length; _index36++) {
    _loop9(_index36);
  }

  window.addEventListener('scroll', function (el) {
    var old_current_link = document.querySelectorAll('._goto-block._active');

    if (old_current_link) {
      for (var _index37 = 0; _index37 < old_current_link.length; _index37++) {
        var _el16 = old_current_link[_index37];

        _el16.classList.remove('_active');
      }
    }

    for (var _index38 = 0; _index38 < blocks.length; _index38++) {
      var block = blocks[_index38];
      var block_item = document.querySelector('.' + block);

      if (block_item) {
        var block_offset = offset(block_item).top;
        var block_height = block_item.offsetHeight;

        if (pageYOffset > block_offset - window.innerHeight / 3 && pageYOffset < block_offset + block_height - window.innerHeight / 3) {
          var current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');

          for (var _index39 = 0; _index39 < current_links.length; _index39++) {
            var current_link = current_links[_index39];
            current_link.classList.add('_active');
          }
        }
      }
    }
  });
} //ScrollOnClick (Simple)


var goto_links = document.querySelectorAll('._goto');

if (goto_links.length > 0) {
  var _loop10 = function _loop10(_index40) {
    var goto_link = goto_links[_index40];
    goto_link.addEventListener('click', function (e) {
      var target_block_class = goto_link.getAttribute('href').replace('#', '');
      var target_block = document.querySelector('.' + target_block_class);

      _goto(target_block, 300);

      e.preventDefault();
    });
  };

  for (var _index40 = 0; _index40 < goto_links.length; _index40++) {
    _loop10(_index40);
  }
}

function _goto(target_block, speed) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var header = ''; //OffsetHeader
  //if (window.innerWidth < 992) {
  //header = 'header';
  //}

  var options = {
    clip: false,
    speedAsDuration: true,
    speed: speed,
    header: header,
    offset: offset,
    easing: 'easeOutQuad'
  };
  var scr = new SmoothScroll();
  scr.animateScroll(target_block, '', options);
} //SameFunctions


function offset(el) {
  var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {
    passive: false
  }); // Disable scrolling in Chrome

  window.onwheel = preventDefault; // modern standard

  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE

  window.ontouchmove = preventDefault; // mobile

  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, {
    passive: false
  }); // Enable scrolling in Chrome

  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  /*if (keys[e.keyCode]) {
  	preventDefault(e);
  	return false;
  }*/
}

function fix_block(scr_fix_block, scr_value) {
  var window_width = parseInt(window.innerWidth);
  var window_height = parseInt(window.innerHeight);
  var header_height = 0; //parseInt(document.querySelector('header').offsetHeight) + 15;

  for (var _index41 = 0; _index41 < scr_fix_block.length; _index41++) {
    var block = scr_fix_block[_index41];
    var block_width = block.getAttribute('data-width');
    var item = block.querySelector('._side-block');

    if (!block_width) {
      block_width = 0;
    } //if (window_width > block_width) {


    if (item.offsetHeight <= window_height) {
      if (scr_value > offset(block).top) {
        item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
      } else {
        gotoRelative(item);
      }

      if (scr_value > block.offsetHeight + offset(block).top - item.offsetHeight) {
        block.style.cssText = "position:relative;";
        item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;";
      }
    } else {
      gotoRelative(item);
    } //}

  }

  function gotoRelative(item) {
    item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
  }
}

if (arrow) {
  arrow.addEventListener("click", function (e) {
    _goto(window.innerHeight, 1000);

    setTimeout(function () {
      new_pos = pageYOffset;
    }, 1000);
    e.preventDefault();
  });
}

// am4core.ready(function () {
//   // Themes begin
//   am4core.useTheme(am4themes_animated); // Themes end
//   // Create map instance
//
//   var chart = am4core.create("world", am4maps.MapChart); // Set map definition
//
//   chart.geodata = am4geodata_worldLow;
//   chart.minZoomLevel = 1.30;
//   chart.maxZoomLevel = 1.30;
//   chart.homeZoomLevel = 1.30;
//   chart.homeGeoPoint = {
//     latitude: 55,
//     longitude: -15
//   };
//   chart.seriesContainer.draggable = false;
//   chart.seriesContainer.resizable = false; // Set projection
//
//   chart.projection = new am4maps.projections.Miller(); // Create map polygon series
//
//   var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries()); // Exclude Antartica
//
//   polygonSeries.exclude = ["AQ"]; // Make map load polygon (like country names) data from GeoJSON
//
//   polygonSeries.useGeodata = true; // Configure series
//
//   var polygonTemplate = polygonSeries.mapPolygons.template;
//   polygonTemplate.tooltipText = "{name}";
//   polygonTemplate.polygon.fillOpacity = 0.6; // Create hover state and set alternative fill color
//
//   var hs = polygonTemplate.states.create("hover");
//   hs.properties.fill = am4core.color("#29272a"); //console.log(chart.colors);
//   // Add image series
//
//   var imageSeries = chart.series.push(new am4maps.MapImageSeries());
//   imageSeries.mapImages.template.propertyFields.longitude = "longitude";
//   imageSeries.mapImages.template.propertyFields.latitude = "latitude"; //imageSeries.mapImages.template.tooltipText = "{title}";
//   //imageSeries.mapImages.template.propertyFields.url = "url";
//
//   var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
//   circle.radius = 10;
//   circle.propertyFields.fill = "#29272a";
//   var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
//   circle2.radius = 10;
//   circle2.propertyFields.fill = "#29272a";
//   circle2.events.on("inited", function (event) {
//     animateBullet(event.target);
//   });
//
//   function animateBullet(circle) {
//     var animation = circle.animate([{
//       property: "scale",
//       from: 1,
//       to: 5
//     }, {
//       property: "opacity",
//       from: 1,
//       to: 0
//     }], 2000, am4core.ease.circleOut);
//     animation.events.on("animationended", function (event) {
//       animateBullet(event.target.object);
//     });
//   }
//
//   var colorSet = new am4core.ColorSet();
//   imageSeries.data = [{
//     "title": "655 Montgomery Street  \n New York, USA 94111",
//     "latitude": 40.7127753,
//     "longitude": -74.0059728,
//     "color": colorSet.next()
//   }, {
//     "title": "str. soborniy 143, 43 \n Zaporizhzhia, Ukraine 69035",
//     "latitude": 47.8388,
//     "longitude": 35.139567,
//     "color": colorSet.next()
//   }];
// }); // end am4core.ready()

var body = document.querySelector('body'); // Cursor

var links = document.querySelectorAll('a');
var videos = document.getElementsByTagName('video');

if (!isMobile.any()) {
  body.addEventListener("mousemove", function (e) {
    var cursor_x_position = e.clientX;
    var cursor_y_position = e.clientY;
    cursor.style.cssText = "transform: translate(" + cursor_x_position + "px," + cursor_y_position + "px);display:block;";
    cursor_show_text();
  });

  var _loop11 = function _loop11(_index42) {
    var link = links[_index42];
    link.addEventListener("mouseenter", function (e) {
      if (!link.classList.contains('_no-cursor')) {
        cursor.classList.add('_active');
      }

      cursor.classList.add('_link');
    });
    link.addEventListener("mouseleave", function (e) {
      if (!link.classList.contains('_no-cursor')) {
        cursor.classList.remove('_active');
      }

      cursor.classList.remove('_link');
    });
  };

  for (var _index42 = 0; _index42 < links.length; _index42++) {
    _loop11(_index42);
  }

  var _loop12 = function _loop12(_index43) {
    var video = videos[_index43];
    video.addEventListener("mouseenter", function (e) {
      if (!video.classList.contains('_no-cursor')) {
        cursor.classList.add('_active');
        cursor.classList.add('_link');

        if(cursor.querySelector('.cursor__text')){
          if (!video.paused) {
            cursor.querySelector('.cursor__text').innerHTML = 'Stop';
          } else {
            cursor.querySelector('.cursor__text').innerHTML = 'Play';
          }
        }
      }
    });
    video.addEventListener("mouseleave", function (e) {
      if (!video.classList.contains('_no-cursor')) {
        cursor.classList.remove('_active');
        cursor.classList.remove('_link');
      }

      if(cursor.querySelector('.cursor__text')){
        cursor.querySelector('.cursor__text').innerHTML = 'Scroll';
      }
    });
  };

  for (var _index43 = 0; _index43 < videos.length; _index43++) {
    _loop12(_index43);
  }
}

var textLink = document.querySelector('.text-block__link');

if (textLink) {
  textLink.addEventListener("click", function (e) {
    textLink.closest('.text-block__regular').add('_active');
    textLink.style.display = 'none';
    e.preventDefault();
  });
}

var block_8_items = document.querySelectorAll('.block-8-beejoya__column');

var _loop13 = function _loop13(_index44) {
  var element = block_8_items[_index44];
  element.addEventListener("mouseenter", function (e) {
    _removeClasses(block_8_items, '_active');

    element.classList.add('_active');
  });
  element.addEventListener("mouseleave", function (e) {
    element.classList.remove('_active');
  });
};

for (var _index44 = 0; _index44 < block_8_items.length; _index44++) {
  _loop13(_index44);
}

if (document.querySelector('.aloelove-block-3')) {
  var item = document.querySelectorAll('.aloelove-block-3__block');

  for (var _index45 = 0; _index45 < item.length; _index45++) {
    item[_index45].style.zIndex = item.length - _index45;
  }
}

var msnry;

var grid = document.querySelector('.packaging__items');
var gridInit;

function gridInitFunction() {
  gridInit = function gridInit(){};
  if (!window.matchMedia('(max-width: 992').matches) {
  // } else {
    // if (window.location.href.indexOf("product-line") != -1 && window.innerWidth <= 768) {
    //   gridInit = function gridInit(grid) {
    //     msnry = new Isotope(grid, {
    //       itemSelector: '.packaging__item',
    //       masonry: {
    //         columnWidth: '.packaging__sizer'
    //       },
    //       percentPosition: true
    //     });
    //
    //     msnry.arrange({
    //       filter: '*'
    //     });
    //
    //   };
    // } else {
      gridInit = function gridInit(grid) {
        msnry = new Isotope(grid, {
          itemSelector: '.packaging__item',
          masonry: {
            horizontalOrder: true,
            columnWidth: '.packaging__sizer'
          },
          percentPosition: true
        });

        msnry.arrange({
          filter: '*'
        });
      };
    // }
  }
}

if (grid && !window.matchMedia('(max-width: 992').matches) {
  gridInitFunction();


  setTimeout(function () {
    gridInit(grid);

    setTimeout(function () {
      gridInit(grid);
    }, 1000);
  }, 200);
}


window.addEventListener('load', function() {
  if(typeof gridInit === 'function' && !window.matchMedia('(max-width: 992').matches){
    gridInit(grid);
  }
});

window.addEventListener('resize', function() {
  // if (window.location.href.indexOf("product-line") != -1 && window.innerWidth <= 992) {
  //   if (msnry) {
  //     msnry.destroy();
  //   }
  // } else {
    if (msnry) {
      msnry.destroy();
    }
    if (grid && !window.matchMedia('(max-width: 992').matches) {
      gridInitFunction();

      setTimeout(function () {
        gridInit(grid);

        setTimeout(function () {
          gridInit(grid);
        }, 1000);
      }, 200);
    }
  // }
});

var videoPreview = document.querySelector('.video-home__preview');

if (videoPreview) {
  var mainVideo = document.querySelector('.video-home__main');
  videoPreview.addEventListener("click", function (e) {
    // testWebP(function (support) {
    //   if (support == true) {
    //     mainVideo.setAttribute('src', mainVideo.getAttribute('data-video') + '.mp4');
    //   } else {
    //     mainVideo.setAttribute('src', mainVideo.getAttribute('data-video') + '.mp4');
    //   }
    // });
    mainVideo.play();
    videoPreview.parentElement.classList.add('_video');
    cursor.classList.remove('_active');
    cursor.classList.remove('_link');
    cursor.classList.add('_show');
    setTimeout(function () {
      if(cursor.querySelector('.cursor__text')){
        cursor.querySelector('.cursor__text').innerHTML = 'Stop';
      }
    }, 100);
    e.preventDefault();
  });
  mainVideo.addEventListener("click", function (e) {
    if(cursor.querySelector('.cursor__text')){
      if (mainVideo.classList.contains('_pause')) {
        mainVideo.play();
        cursor.querySelector('.cursor__text').innerHTML = 'Stop';
      } else {
        mainVideo.pause();
        cursor.querySelector('.cursor__text').innerHTML = 'Play';
      }
    }

    mainVideo.classList.toggle('_pause');
  });
}

var teamItems = document.querySelectorAll('.item-team');

if (teamItems.length > 0 && !isMobile.any()) {
  var _loop14 = function _loop14(_index46) {
    var teamItem = teamItems[_index46];
    var teamContent = teamItem.querySelector('.item-team__content');
    var teamImage = teamItem.querySelector('.item-team__image');
    teamItem.addEventListener("mouseenter", function (e) {
      teamItem.classList.add('_active');
    });
    teamItem.addEventListener("mouseleave", function (e) {
      teamItem.classList.remove('_active');
    });
    teamContent.addEventListener("mousemove", function (e) {
      var cursor_x_position = 5 - (e.clientX - offset(teamContent).left) / teamContent.offsetWidth * 10;
      var cursor_y_position = 5 - (e.clientY - offset(teamContent).top) / teamContent.offsetHeight * 10;
      teamImage.style.cssText = "transform: translate(" + cursor_x_position + "%," + cursor_y_position + "%)";
    });
  };

  for (var _index46 = 0; _index46 < teamItems.length; _index46++) {
    _loop14(_index46);
  }
}

var brandingItems = document.querySelectorAll('.branding__item');

if (brandingItems.length > 0 && !isMobile.any()) {
  var _loop15 = function _loop15(_index47) {
    var brandingItem = brandingItems[_index47];
    var brandingVideo = brandingItem.querySelector('video');
    if ( brandingVideo ) {
      brandingItem.addEventListener("mouseenter", function (e) {
        brandingVideo.play();
      });
      brandingItem.addEventListener("mouseleave", function (e) {
        brandingVideo.pause();
      });
    }
  };

  for (var _index47 = 0; _index47 < brandingItems.length; _index47++) {
    _loop15(_index47);
  }
}

var more = document.querySelectorAll('.more');

var _loop16 = function _loop16(_index48) {
  var moreItem = more[_index48];
  moreItem.addEventListener("click", function (e) {
    moreItem.closest('._more-parent').querySelector('.more-text').classList.add('_active');
    moreItem.style.display = 'none';
    e.preventDefault();
  });
};

for (var _index48 = 0; _index48 < more.length; _index48++) {
  _loop16(_index48);
}

var accordionControls = document.querySelectorAll('.accordion .accordion-title');

if ( accordionControls ) {
  accordionControls.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var item = e.currentTarget.closest('.item');
      // var text = item.querySelector('.accordion-text');
      var controls = e.currentTarget.querySelector('.accordion-controls');
      accordionControls.forEach(function (element) {
        var block = element.closest('.item');
        var control = element.querySelector('.accordion-controls');
        if ( block.classList.contains('open') && block !== item) {
          block.classList.remove('open');
          block.classList.add('open-up')
          control.innerText = '+';
        }
      });
      if ( !item.classList.contains('open') ) {
        // text.style.height = text.scrollHeight + 'px';
        // text.style.display = 'flex';
        controls.innerText = '-';
        item.classList.add('open');
        item.classList.remove('open-up')
      } else {
        // text.style.height = '0';
        // text.style.display = 'none';
        controls.innerText = '+';
        item.classList.remove('open');
        item.classList.add('open-up')
      }
    })
  })
}

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function(){
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
  );
}

function playPauseAllVideos() {
  var videos = document.querySelectorAll('video'), video, i;

  for(i in videos){
    if(!videos.hasOwnProperty(i)) continue;

    video = videos[i];
    if(!!video.getAttribute('data-video-preload')) continue;
    if(video.readyState === 4){
      if(!elementInViewport(video)) {
        if(video.playing){
          video.pause();
        }
      }else{
        if(!video.playing) {
          video.play();
        }
      }
    }
  }
}

window.addEventListener('scroll', function() {
  playPauseAllVideos();
});

var isHomePage = false;

function mainPageChangeHeader() {
  var header = document.querySelector('header.header');
  if ( isHomePage && window.matchMedia('(max-width: 768px)').matches ) {
    if ( !header.classList.contains('header-mobile') ) {
      header.classList.add('header-mobile');
    }
  } else {
    if ( header.classList.contains('header-mobile') ) {
      header.classList.remove('header-mobile');
    }
  }
}


var slideWithWhiteMenu = document.querySelectorAll('.main-home .main-home__slider .slide-home.slide-home_black');

function changeHeaderColor() {
  if ( window.matchMedia('(max-width: 768px)').matches ) {
    slideWithWhiteMenu.forEach(function (el) {
      if ( el.classList.contains('slide-home_lite') ) {
        el.classList.remove('slide-home_lite');
      }
    })
  } else {
    slideWithWhiteMenu.forEach(function (el) {
      if ( !el.classList.contains('slide-home_lite') ) {
        el.classList.add('slide-home_lite');
      }
    })
  }
}

document.addEventListener("DOMContentLoaded", function () {
  playPauseAllVideos();
  var textToLink = document.querySelectorAll('.tell-us-home .accordion .item .accordion-text .list');
  textToLink.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var link = el.closest('.accordion-text').querySelector('a.works-link');
      link.click();
    })
  })

  isHomePage = !!document.querySelector('.page.home .home__main');
  isHomePage = isHomePage ? true : !!document.querySelector('.page.page_works .works');

  mainPageChangeHeader();
  changeHeaderColor();
});

window.addEventListener('resize', function (e) {
  mainPageChangeHeader();
  changeHeaderColor();
})

function ref( referer ) {
  document.querySelectorAll('.packaging__items a').forEach(function (k, v) {
    k.setAttribute('href', k.getAttribute('href') + '?ref=' + referer)
  });
}

function paginationRef( referer ){
  document.querySelectorAll('.footer-case__navigation a').forEach(function (k, v) {
    k.setAttribute('href', k.getAttribute('href') + '?ref=' + referer)
  });
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var blogSearchMobile = document.querySelector('.blog .filters label img');
var blogHeaderBlock = document.querySelector('header.header');
var blogDetailContentBlock = document.querySelector('.wrapper .blog-detail-content');
var blogStickySideNav = blogDetailContentBlock ? blogDetailContentBlock.querySelector('.side-nav__sticky') : null;
// var blogDetailContentWrapper = blogDetailContentBlock.querySelector('.content');
var navList = blogStickySideNav ? blogStickySideNav.querySelector('ul') : null;
var infelicity = 0;

if (blogSearchMobile) {
  blogSearchMobile.addEventListener('click', function (e) {
    if (window.matchMedia('(max-width: 768px').matches) {
      var container = e.currentTarget.closest('label');
      if (container.classList.contains('active')) {
        container.classList.remove('active');
      } else {
        container.classList.add('active');
      }
    }
  })
}

function setStickyBlogDetailSidenav () {
  var allHeaders = document.querySelectorAll('.blog-detail .blog-detail-content .content h2'),
      blogStickySideNavCoords = blogStickySideNav ? blogStickySideNav.getBoundingClientRect() : {},
      firstHeaderCoords = allHeaders[0].getBoundingClientRect(),
      bannerSection = document.querySelector('.blog-detail .banner'),
      bannerCoords = bannerSection ? bannerSection.getBoundingClientRect() : {},
      lastHeaderCoords = allHeaders[allHeaders.length - 1].getBoundingClientRect(),
      blogHeaderBlockCoords = blogHeaderBlock ? blogHeaderBlock.getBoundingClientRect() : {},
      blogDetailContentBlockCoords = blogDetailContentBlock ? blogDetailContentBlock.getBoundingClientRect() : {},
      paragraph = document.querySelector('.blog-detail .blog-detail-content .content  p'),
      style = paragraph.currentStyle || window.getComputedStyle(paragraph),
      styleStickyNav = blogStickySideNav.currentStyle || window.getComputedStyle(blogStickySideNav),
      styleHeader = allHeaders[allHeaders.length - 1].currentStyle || window.getComputedStyle(allHeaders[allHeaders.length - 1]);

  // console.log('bannerCoords.bottom', bannerCoords.bottom)
  // console.log('blogHeaderBlockCoords.top', blogHeaderBlockCoords.top)
  if (blogHeaderBlockCoords.top > bannerCoords.bottom && // blogDetailContentBlockCoords.top
      (blogStickySideNavCoords.height + blogHeaderBlockCoords.top) < blogDetailContentBlockCoords.bottom &&
      (blogHeaderBlockCoords.bottom + blogStickySideNavCoords.height) < blogDetailContentBlockCoords.bottom) {
    if (!blogStickySideNav.classList.contains('sticky')) {
      blogStickySideNav.classList.add('sticky');
    }
  } else {
    if (blogStickySideNav.classList.contains('sticky')) {
      blogStickySideNav.classList.remove('sticky');
      if (blogStickySideNav.style.removeProperty) {
        blogStickySideNav.style.removeProperty('top');
      } else {
        blogStickySideNav.style.removeAttribute('top');
      }
    }
  }
  if ( //(firstHeaderCoords.top - (blogStickySideNav.clientHeight)) < blogStickySideNavCoords.top &&
      // blogDetailContentBlock.getBoundingClientRect().top < 0) { // new string to show only of in block content
      bannerCoords.bottom < 0) { // new string to show only of in block content
    blogStickySideNav.classList.add('show');
  } else {
    blogStickySideNav.classList.remove('show');
  }
  if ((lastHeaderCoords.top) < 0 && !blogStickySideNav.classList.contains('bottom')) {
    blogStickySideNav.classList.add('bottom');
    blogStickySideNav.style.top =
        ((allHeaders[allHeaders.length - 1].offsetTop + allHeaders[allHeaders.length - 1].clientHeight + parseInt(styleStickyNav.top) + parseInt(styleHeader.marginBottom)) -
            blogStickySideNav.clientHeight - (parseInt(style.marginBottom) * infelicity)) + 'px';
    // blogStickySideNav.style.top =
    //     ((allHeaders[allHeaders.length - 1].offsetTop + allHeaders[allHeaders.length - 1].clientHeight) + parseInt(styleStickyNav.top) - // + parseInt(styleHeader.marginBottom)) -
    //         blogStickySideNav.clientHeight - (parseInt(style.marginBottom) * infelicity)) + 'px';
  } else if ((lastHeaderCoords.top) > 0) {
    blogStickySideNav.classList.remove('bottom');
    if (blogStickySideNav.style.removeProperty) {
      blogStickySideNav.style.removeProperty('top');
    } else {
      blogStickySideNav.style.removeAttribute('top');
    }
  }
}

function showCursorText(link) {
  link.addEventListener("mouseenter", function (e) {
    cursor.classList.add('_blog');
  });
  link.addEventListener("mouseleave", function (e) {
    cursor.classList.remove('_blog');
  });
};

if (blogDetailContentBlock) {
  window.addEventListener('scroll', function(e){
    var allHeaders = document.querySelectorAll('.blog-detail .blog-detail-content .content h2');
    var blogStickySideNavCoords = blogStickySideNav ? blogStickySideNav.getBoundingClientRect() : {};
    setStickyBlogDetailSidenav();
    allHeaders.forEach(function (el) {
      var headerCoords = el.getBoundingClientRect();
      if ((headerCoords.top - 10) < blogStickySideNavCoords.top ) {
        blogStickySideNav.querySelectorAll('a').forEach(function (element) {
          if (element.innerText === el.textContent) {
            element.classList.add('active');
          } else if (element.classList.contains('active')) {
            element.classList.remove('active');
          }
        })
      }
    })
  });
  document.addEventListener('DOMContentLoaded', function(e) {
    setStickyBlogDetailSidenav();
    var allHeaders = document.querySelectorAll('.blog-detail .blog-detail-content .content h2');
    var allImages = document.querySelectorAll('.blog-detail .blog-detail-content .content img:not(.emoji)');

    allHeaders.forEach(function (el) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.innerText = el.innerText;
      a.setAttribute('itemprop', 'url');
      a.addEventListener('click', function (e) {
        e.preventDefault();
        new_pos = el.offsetTop; // This line set new scroll position for custom scroll
        el.scrollIntoView({
          behavior: 'smooth'
        });
      })
      li.appendChild(a);
      navList.appendChild(li);
    });

    allImages.forEach(function (el) {
      // console.log(el.closest('p'))
      if (el.parentNode.tagName === 'P' || el.parentNode.parentNode.tagName === 'P') {
        infelicity++;
        el.closest('p').style.marginBottom = '0';
      }
      var link = el.closest('a');
      if (link) {
        showCursorText(link);
      }
    })
  });
}