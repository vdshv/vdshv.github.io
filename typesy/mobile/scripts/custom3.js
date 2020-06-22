$(document).ready(function () {      
            
    function init_template(){
        //Class is vital to run AJAX Pages 
        
        var scroll_animations = 1; //1 = Auatomatic //2 = Disabled //3 = Manual Classes
        var sidebar_left_width = 250
        var sidebar_right_width = 90
        var transition_speed = 500 
        var position_closed = 0 
        var position_hidden_left = -50
        var position_hidden_right = 50
        
        $('.toggle-image').click(function(){
           $('#sidebar-left, #sidebar-right').toggleClass('sidebar-image'); 
        });
        
        $('.hide-left-sidebar, .hide-right-sidebar').addClass('reject-touch');
        $('#sidebar-left').css({"width": sidebar_left_width});
        $('#sidebar-right').css({"width": sidebar_right_width});
        
        $('.sidebar-item, .sidebar-menu a, #sidebar-left, #sidebar-right, #page-content, #header, #header a .active-sidebar, .active-content').css({
            "transition": "all "+transition_speed+"ms ease", 
            "-webkit-transition": "all "+transition_speed+"ms ease",  
            "-moz-transition": "all "+transition_speed+"ms ease", 
            "-o-transition": "all "+transition_speed+"ms ease", 
            "-ms-transition": "all "+transition_speed+"ms ease", 
        });
        
        $('#sidebar-left').css({
            "transform": "translateX("+sidebar_left_width *(-1)+"px)", 
            "-webkit-transform": "translateX("+sidebar_left_width *(-1)+"px)", 
            "-moz-transform": "translateX("+sidebar_left_width *(-1)+"px)", 
            "-o-transform": "translateX("+sidebar_left_width *(-1)+"px)",
            "-ms-transform": "translateX("+sidebar_left_width *(-1)+"px)",
            "opacity":"1"
        });
        
        $('#sidebar-right').css({
            "transform": "translateX("+sidebar_right_width *(1)+"px)", 
            "-webkit-transform": "translateX("+sidebar_right_width *(1)+"px)", 
            "-moz-transform": "translateX("+sidebar_right_width *(1)+"px)", 
            "-o-transform": "translateX("+sidebar_right_width *(1)+"px)",
            "-ms-transform": "translateX("+sidebar_right_width *(1)+"px)",
            "opacity":"1"
        });
                
        $('.open-left-sidebar').click(function(){
            $('#sidebar-tap-close, .hide-left-sidebar').addClass('allow-touch');
            $('.back-to-top-badge').removeClass('back-to-top-badge-visible');            
            $('#sidebar-left').addClass('active-sidebar');
            $('#page-content, #sidebar-tap-close, #header').css({
                "transform": "translateX("+sidebar_left_width *(1)+"px)", 
                "-webkit-transform": "translateX("+sidebar_left_width *(1)+"px)", 
                "-moz-transform": "translateX("+sidebar_left_width *(1)+"px)", 
                "-o-transform": "translateX("+sidebar_left_width *(1)+"px)",
                "-ms-transform": "translateX("+sidebar_left_width *(1)+"px)",
                "opacity":"1"
            });
            setTimeout(function(){
                $('.sidebar-scroll .sidebar-item').css({
                    "transform": "translateX("+position_closed+"px)", 
                    "-webkit-transform": "translateX("+position_closed+"px)", 
                    "-moz-transform": "translateX("+position_closed+"px)", 
                    "-o-transform": "translateX("+position_closed+"px)",
                    "-ms-transform": "translateX("+position_closed+"px)",
                    "opacity":"1"
                });
            },200);
            return false;
        });
        
            
        $('.open-right-sidebar').click(function(){
            $('#sidebar-tap-close, .hide-right-sidebar').addClass('allow-touch');
            $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
            $('#sidebar-right').addClass('active-sidebar');
            $('#page-content, #sidebar-tap-close, #header').css({
                "transform": "translateX("+sidebar_right_width*(-1)+"px)", 
                "-webkit-transform": "translateX("+sidebar_right_width*(-1)+"px)", 
                "-moz-transform": "translateX("+sidebar_right_width*(-1)+"px)", 
                "-o-transform": "translateX("+sidebar_right_width*(-1)+"px)", 
                "-ms-transform": "translateX("+sidebar_right_width*(-1)+"px)"
            });
                $('.sidebar-small-menu a').each(function(i){
                var row = $(this);
                setTimeout(function() {
                    row.css({
                        "transform": "translateX("+position_closed+"px)", 
                        "-webkit-transform": "translateX("+position_closed+"px)", 
                        "-moz-transform": "translateX("+position_closed+"px)", 
                        "-o-transform": "translateX("+position_closed+"px)",
                        "-ms-transform": "translateX("+position_closed+"px)",
                        "opacity":"1"
                    });
                }, 45*i);
            });
            setTimeout(function(){
                $('.sidebar-scroll .sidebar-item').css({
                    "transform": "translateX("+position_closed+"px)", 
                    "-webkit-transform": "translateX("+position_closed+"px)", 
                    "-moz-transform": "translateX("+position_closed+"px)", 
                    "-o-transform": "translateX("+position_closed+"px)",
                    "-ms-transform": "translateX("+position_closed+"px)",
                    "opacity":"1"
                });
            },200);
            return false;
        });
        
                
        $('#sidebar-tap-close, .sidebar-close').click(function(){
            $('#sidebar-tap-close, .hide-left-sidebar, .hide-right-sidebar').removeClass('allow-touch');
            $('#sidebar-tap-close, .hide-left-sidebar, .hide-right-sidebar').addClass('reject-touch');
            $('.open-left-sidebar, .open-right-sidebar').addClass('allow-touch');
            
            $('#sidebar-left').removeClass('active-sidebar');
            $('#sidebar-right').removeClass('active-sidebar');
            $('#page-content, #sidebar-tap-close, #header').css({
                "transform": "translateX("+0+"px)", 
                "-webkit-transform": "translateX("+0+"px)", 
                "-moz-transform": "translateX("+0+"px)", 
                "-o-transform": "translateX("+0+"px)", 
                "-ms-transform": "translateX("+0+"px)", 
                "opacity":"1"
            });
            $('#sidebar-left .sidebar-scroll .sidebar-item').css({
                "transform": "translateX("+position_hidden_left+"px)", 
                "-webkit-transform": "translateX("+position_hidden_left+"px)", 
                "-moz-transform": "translateX("+position_hidden_left+"px)", 
                "-o-transform": "translateX("+position_hidden_left+"px)",
                "-ms-transform": "translateX("+position_hidden_left+"px)",
                "opacity":"1"
            });
            $('#sidebar-right .sidebar-scroll .sidebar-item').css({
                "transform": "translateX("+position_hidden_right+"px)", 
                "-webkit-transform": "translateX("+position_hidden_right+"px)", 
                "-moz-transform": "translateX("+position_hidden_right+"px)", 
                "-o-transform": "translateX("+position_hidden_right+"px)",
                "-ms-transform": "translateX("+position_hidden_right+"px)",
                "opacity":"1"
            });
            return false;
        });
            
        $('a[data-sub]').click(function() {
            $('a[data-sub]').removeClass('active-item');
            $(this).find('.line-1').toggleClass('active-line-1');
            $(this).find('.line-2').toggleClass('active-line-2');
            var detect_submenu = $(this).data('sub'); 
            var submenu_items = $('#'+detect_submenu+' a').length
            var submenu_height = $('#'+detect_submenu).height();
            if(submenu_height > 0){
                $(this).find('.line-1').removeClass('active-line-1');
                $(this).find('.line-2').removeClass('active-line-2');
                $('#'+detect_submenu).css({"height":"0px"});
                $(this).removeClass('active-item');
            }
            if(submenu_height == 0){
                $('.submenu').css({"height":"0px"});
                $('.sidebar-item').find('.line-1').removeClass('active-line-1');
                $('.sidebar-item').find('.line-2').removeClass('active-line-2');
                $(this).find('.line-1').addClass('active-line-1');
                $(this).find('.line-2').addClass('active-line-2');
                $('#'+detect_submenu).css({'height': (submenu_items * 55)+10 +'px'});
                $(this).addClass('active-item');
            }            
            return false;
        });
        
         $('a[data-sub]').append('<em class="line-1"></em><em class="line-2"></em>');
         $('.submenu a').append('<i class="ion-ios-arrow-right"></i><i class="ion-record"></i>');
   
        if($('.submenu').hasClass('active-submenu')){
            var find_active_trigger = $('.active-submenu').prop('id');
            $(".sidebar-menu").find("[data-sub='" + find_active_trigger + "']").addClass('active-submenu-toggle');
            
            $('.active-submenu-toggle').find('.line-1').addClass('active-line-1');
            $('.active-submenu-toggle').find('.line-2').addClass('active-line-2');

            var detect_submenu = $('.active-submenu').data('sub'); 
            var submenu_items = $('.active-submenu a').length
            var submenu_height = $('.active-submenu').height();
            $('.active-submenu').css({'height': (submenu_items * 55)+10 +'px'});
        }
        
        
        $('.footer-menu a').click(function(){
           $('.footer-menu a').removeClass('active-menu');
            $(this).addClass('active-menu');
        });
        
        $('.show-page-2').click(function(){
           $('.page-2').addClass('scale-page'); 
           $('.page-1').addClass('scale-down'); 
        });
        
        //Tabs
        $('tabs a').click(function(){
            preventDefault();
            return false;
        });
        
        //FastClick
        $(function() {FastClick.attach(document.body);});

        //Preload Image
        $(function() {
            $(".preload-image").lazyload({
                threshold : 2000
            });
        });
        
        $('.hide-notification').click(function(){
            $(this).parent().slideUp(); 
            return false;
        });        
        $('.tap-hide').click(function(){
            $(this).slideUp(); 
            return false;
        });
        
        $('.activate-toggle').click(function(){
            $(this).parent().find('.toggle-content').slideToggle(250);
            $(this).parent().find('input').each(function () { this.checked = !this.checked; });
            $(this).parent().find('.toggle-45').toggleClass('rotate-45 color-red-dark');
            $(this).parent().find('.toggle-180').toggleClass('rotate-180 color-red-dark');
            return false;
        });
        
        $('.accordion-item').click(function(){
            $(this).find('.accordion-content').slideToggle(250);
            $(this).find('i').toggleClass('rotate-135 color-red-dark');
            return false;
        });
        
        $('.dropdown-toggle').click(function(){
            $(this).parent().find('.dropdown-content').slideToggle(250); 
            $(this).find('i:last-child').toggleClass('rotate-135');
            return false;
        });
        
        //Portfolio Wide
        
        $('.portfolio-wide-caption a').click(function(){
           $(this).parent().parent().find('.portfolio-wide-content').slideToggle(250);
            return false;
        });
                
        //Detect if iOS WebApp Engaged and permit navigation without deploying Safari
        (function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")

        //Detecting Mobiles//
        var isMobile = {
            Android: function() {return navigator.userAgent.match(/Android/i);},
            BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
            iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
            Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
            Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
            any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
        };

        if( !isMobile.any() ){
            $('.show-blackberry, .show-ios, .show-windows, .show-android').addClass('disabled');
            $('.show-no-detection').removeClass('disabled');
        }
        if(isMobile.Android()) {
            //Status Bar Color for Android
            $('head').append('<meta name="theme-color" content="#000000"> />');
            $('.show-android').removeClass('disabled');
            $('.show-blackberry, .show-ios, .show-windows, .show-download').addClass('disabled');
            $('.sidebar-scroll').css('right', '0px');
            $('.set-today').addClass('mobile-date-correction');
        }
        if(isMobile.BlackBerry()) {
            $('.show-blackberry').removeClass('disabled');
            $('.show-android, .show-ios, .show-windows, .show-download').addClass('disabled');
            $('.sidebar-scroll').css('right', '0px');
        }   
        if(isMobile.iOS()) {
            $('.show-ios').removeClass('disabled');
            $('.show-blackberry, .show-android, .show-windows, .show-download').addClass('disabled');
            $('.sidebar-scroll').css('right', '0px');
            $('.set-today').addClass('mobile-date-correction');
        }
        if(isMobile.Windows()) {
            $('.show-windows').removeClass('disabled');
            $('.show-blackberry, .show-ios, .show-android, .show-download').addClass('disabled');
            $('.sidebar-scroll').css('right', '0px');
        }
        
        //These are the splash images that show when adding to the homescreen, we're
        //delaying these to load only after the page loads to increase load speed and it's
        //also easier to generally edit them by only editing this area instead of each HTML file
        //This will also put a lower request rate on the page increasing it's load speed.
        $('head').prepend('<link rel="icon" type="image/png" href="images/splash/android-chrome-192x192.png" sizes="192x192">');
        $('head').prepend('<link rel="apple-touch-icon" sizes="180x180" href="images/splash/apple-touch-icon-180x180.png">');
        $('head').prepend('<link rel="apple-touch-icon" sizes="152x152" href="images/splash/apple-touch-icon-152x152.png">');
        $('head').prepend('<link rel="apple-touch-icon" sizes="144x144" href="images/splash/apple-touch-icon-144x144.png">');
        $('head').prepend('<link rel="apple-touch-icon" sizes="120x120" href="images/splash/apple-touch-icon-120x120.png">');
        $('head').prepend('<link rel="apple-touch-icon" sizes="114x114" href="images/splash/apple-touch-icon-114x114.png">');
        $('head').prepend('<link rel="apple-touch-icon" sizes="76x76" href="images/splash/apple-touch-icon-76x76.png">');
        $('head').prepend('<link rel="apple-touch-icon" sizes="72x72" href="images/splash/apple-touch-icon-72x72.png">');
        $('head').prepend('<link rel="apple-touch-icon" sizes="60x60" href="images/splash/apple-touch-icon-60x60.png">');
        $('head').prepend('<link rel="apple-touch-icon" sizes="57x57" href="images/splash/apple-touch-icon-57x57.png">');
        $('head').prepend('<link rel="icon" type="image/png" href="images/splash/favicon-96x96.png" sizes="96x96">');
        $('head').prepend('<link rel="icon" type="image/png" href="images/splash/favicon-32x32.png" sizes="32x32">');
        $('head').prepend('<link rel="icon" type="image/png" href="images/splash/favicon-16x16.png" sizes="16x16">');
        $('head').prepend('<link rel="shortcut icon" href="images/splash/favicon.ico" type="image/x-icon"/>');

        function animation_settings(){
            window.sr = ScrollReveal();
            //General Classes
            sr.reveal('.animate-left',  {origin:'left',  distance:'100%', easing:'cubic-bezier(0.1, 0.2, 0.1, 1)'  });
            sr.reveal('.animate-right', {origin:'right', distance:'100%', easing:'cubic-bezier(0.1, 0.2, 0.1, 1)'  });
            sr.reveal('.animate-top',   {origin:'top',   distance:'100%', easing:'cubic-bezier(0.1, 0.2, 0.1, 1)'  });
            sr.reveal('.animate-bottom',{origin:'bottom',distance:'100%', easing:'cubic-bezier(0.1, 0.2, 0.1, 1)'  });
            sr.reveal('.animate-fade',  {origin:'top',   easing:'ease-in-out'  });
            sr.reveal('.animate-zoom',  {origin:'top',   scale: 1.3, easing:'cubic-bezier(0.1, 0.2, 0.1, 1)'  });

            sr.reveal('.animate-time-500',  {duration: 500 });
            sr.reveal('.animate-time-1000',  {duration: 1000 });
            sr.reveal('.animate-time-2000',  {duration: 2000 });
            sr.reveal('.animate-time-3000',  {duration: 3000 });
            sr.reveal('.animate-time-4000',  {duration: 4000 });
            sr.reveal('.animate-time-5000',  {duration: 5000 });
            sr.reveal('.animate-time-6000',  {duration: 6000 });     

            sr.reveal('.animate-delay-50',  {delay: 50 });
            sr.reveal('.animate-delay-100',  {delay: 100 });
            sr.reveal('.animate-delay-150',  {delay: 150 });
            sr.reveal('.animate-delay-200',  {delay: 200 });
            sr.reveal('.animate-delay-250',  {delay: 250 });
            sr.reveal('.animate-delay-300',  {delay: 300 });
            sr.reveal('.animate-delay-350',  {delay: 350 });
            sr.reveal('.animate-delay-400',  {delay: 400 });
            sr.reveal('.animate-delay-450',  {delay: 450 });
            sr.reveal('.animate-delay-500',  {delay: 500 });
            sr.reveal('.animate-delay-550',  {delay: 550 });
            sr.reveal('.animate-delay-600',  {delay: 600 });
            sr.reveal('.animate-delay-650',  {delay: 650 });
            sr.reveal('.animate-delay-700',  {delay: 700 });
            sr.reveal('.animate-delay-750',  {delay: 750 });
            sr.reveal('.animate-delay-800',  {delay: 800 });
            sr.reveal('.animate-delay-850',  {delay: 850 });
            sr.reveal('.animate-delay-900',  {delay: 900 });
            sr.reveal('.animate-delay-950',  {delay: 950 });
            sr.reveal('.animate-delay-1000',  {delay: 1000 });   
            sr.reveal('.animate-delay-1050',  {delay: 1050 });   
            sr.reveal('.animate-delay-1100',  {delay: 1100 });   
            sr.reveal('.animate-delay-1150',  {delay: 1150 });   
            sr.reveal('.animate-delay-1200',  {delay: 1200 });   
            sr.reveal('.animate-delay-1250',  {delay: 1250 });   
            sr.reveal('.animate-delay-1300',  {delay: 1300 });   
            sr.reveal('.animate-delay-1350',  {delay: 1350 });   
            sr.reveal('.animate-delay-1400',  {delay: 1400 });   
            sr.reveal('.animate-delay-1450',  {delay: 1450 });   
            sr.reveal('.animate-delay-1500',  {delay: 1500 });  
        };
        
        //Page Animations 
        if(scroll_animations == 1){
            animation_settings();
            //Top Animations
            sr.reveal('.heading-strip h4, .heading-strip h3, .heading-block h4',{origin:'top',   distance:'100%', easing:'cubic-bezier(0.1, 0.2, 0.1, 1)'  });
            //Bottom Animations
            sr.reveal('.heading-strip p, .heading-block p',{origin:'bottom',distance:'100%', easing:'cubic-bezier(0.1, 0.2, 0.1, 1)'  });
            //Left Animations
            sr.reveal('.heading-line-1, .column-icon, .column-half-image-left',{origin:'left',  distance:'100%', easing:'cubic-bezier(0.1, 0.2, 0.1, 1)'  });
            //Right Animations
            sr.reveal('.heading-line-2, .column-half-image-right, .heading-strip i',{origin:'right', distance:'100%', easing:'cubic-bezier(0.1, 0.2, 0.1, 1)'  });
            //Zoom Animations
            sr.reveal('.heading-text i, .heading-block .button, .footer-logo', {origin:'center',   scale: 2.1, easing:'cubic-bezier(0.1, 0.2, 0.1, 1)'  }); 
            //Fade Animations
            sr.reveal('.center-socials a, .footer-socials, .footer p',  {origin:'top',   easing:'ease-in-out'  });
        }
        
        if(scroll_animations == 2){
            $('.animate-top, .animate-bottom, .animate-left, .animate-right, .animate-fade, .animate-zoom, .heading-strip h4, .heading-strip p').css({"visibility": "visible"});
            $('.heading-strip h4, .heading-strip p, .heading-strip i, .heading-strip h3, .heading-line-1, .heading-line-2').css({"visibility": "visible"});
            $('.heading-block h4, .heading-block p, .heading-text i, .center-socials a').css({"visibility": "visible"});
            $('.heading-block img, .footer-socials, .footer-logo, .footer p, .footer-socials').css({"visibility": "visible"});
        }
        
        if(scroll_animations == 3){
            animation_settings();
            $('.heading-strip h4, .heading-strip p, .heading-strip i, .heading-strip h3, .heading-line-1, .heading-line-2').css({"visibility": "visible"});
            $('.heading-block h4, .heading-block p, .heading-text i, .center-socials a').css({"visibility": "visible"});
            $('.heading-block img .footer-socials, .footer-logo, .footer p, .footer-socials').css({"visibility": "visible"});
        }
        
        //Galleries
        $(".gallery a, .show-gallery").swipebox();
        
        function apply_gallery_justification(){
            var screen_widths = $(window).width();
            if( screen_widths < 768){ 
                $('.gallery-justified').justifiedGallery({
                    rowHeight : 70,
                    maxRowHeight : 370,
                    margins : 5,
                    fixedHeight:false
                });
            };

            if( screen_widths > 768){
                $('.gallery-justified').justifiedGallery({
                    rowHeight : 150,
                    maxRowHeight : 370,
                    margins : 5,
                    fixedHeight:false
                });
            };
        };
        apply_gallery_justification();

        //Adaptive Folios
        $('.adaptive-one').click(function(){
            $('.portfolio-switch').removeClass('active-adaptive');
            $(this).addClass('active-adaptive');
            $('.portfolio-adaptive').removeClass('portfolio-adaptive-two portfolio-adaptive-three');
            $('.portfolio-adaptive').addClass('portfolio-adaptive-one');
            return false;
        });    
        $('.adaptive-two').click(function(){
            $('.portfolio-switch').removeClass('active-adaptive');
            $(this).addClass('active-adaptive');
            $('.portfolio-adaptive').removeClass('portfolio-adaptive-one portfolio-adaptive-three');
            $('.portfolio-adaptive').addClass('portfolio-adaptive-two'); 
            return false;
        });    
        $('.adaptive-three').click(function(){
            $('.portfolio-switch').removeClass('active-adaptive');
            $(this).addClass('active-adaptive');
            $('.portfolio-adaptive').removeClass('portfolio-adaptive-two portfolio-adaptive-one');
            $('.portfolio-adaptive').addClass('portfolio-adaptive-three'); 
            return false;
        });

        //Show Back To Home When Scrolling
        $(window).on('scroll', function () {
            var total_scroll_height = $(window)[0].scrollHeight
            var inside_header = ($(this).scrollTop() <= 200);
            var passed_header = ($(this).scrollTop() >= 0); //250
            var passed_header2 = ($(this).scrollTop() >= 150); //250
            var footer_reached = ($(this).scrollTop() >= (total_scroll_height - ($(window).height() +100 )));

            if (inside_header == true) {
                $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
                
            } else if (passed_header == true)  {
                $('.back-to-top-badge').addClass('back-to-top-badge-visible');
            } 
            if (footer_reached == true){            
                //$('.back-to-top-badge').removeClass('back-to-top-badge-visible');
            }
        });
                
        //Back to top Badge
        $('.back-to-top-badge, .back-to-top').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });
        
        //Back to top Badge
        $('.back-to-top-menu').click(function (e) {
            e.preventDefault();
            $('.landing-menu-scroll').animate({
                scrollTop: 0
            }, 1000);
        });     
                
        //Bottom Share Fly-up    
        $('body').append('<div class="share-bottom-tap-close"></div>');
        $('.show-share-bottom, .show-share-box').click(function(){
            $('.share-bottom-tap-close').addClass('share-bottom-tap-close-active');
            $('.share-bottom').toggleClass('active-share-bottom'); 
            return false;
        });    
        $('.close-share-bottom, .share-bottom-tap-close').click(function(){
           $('.share-bottom-tap-close').removeClass('share-bottom-tap-close-active');
           $('.share-bottom').removeClass('active-share-bottom'); 
            return false;
        });

        //Set inputs to today's date by adding class set-day
        var set_input_now = new Date();
        var set_input_month = (set_input_now.getMonth() + 1);               
        var set_input_day = set_input_now.getDate();
        if(set_input_month < 10) 
            set_input_month = "0" + set_input_month;
        if(set_input_day < 10) 
            set_input_day = "0" + set_input_day;
        var set_input_today = set_input_now.getFullYear() + '-' + set_input_month + '-' + set_input_day;
        $('.set-today').val(set_input_today);

        //Countdown Timer
        $(function() {$('.countdown-class').countdown({ date: "June 7, 2087 15:03:26"});});

        //Copyright Year 
        var dteNow = new Date();
        var intYear = dteNow.getFullYear();
        $('#copyright-year, .copyright-year').html(intYear);
        
        //Contact Form
        var formSubmitted="false";jQuery(document).ready(function(e){function t(t,n){formSubmitted="true";var r=e("#"+t).serialize();e.post(e("#"+t).attr("action"),r,function(n){e("#"+t).hide();e("#formSuccessMessageWrap").fadeIn(500)})}function n(n,r){e(".formValidationError").hide();e(".fieldHasError").removeClass("fieldHasError");e("#"+n+" .requiredField").each(function(i){if(e(this).val()==""||e(this).val()==e(this).attr("data-dummy")){e(this).val(e(this).attr("data-dummy"));e(this).focus();e(this).addClass("fieldHasError");e("#"+e(this).attr("id")+"Error").fadeIn(300);return false}if(e(this).hasClass("requiredEmailField")){var s=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;var o="#"+e(this).attr("id");if(!s.test(e(o).val())){e(o).focus();e(o).addClass("fieldHasError");e(o+"Error2").fadeIn(300);return false}}if(formSubmitted=="false"&&i==e("#"+n+" .requiredField").length-1){t(n,r)}})}e("#formSuccessMessageWrap").hide(0);e(".formValidationError").fadeOut(0);e('input[type="text"], input[type="password"], textarea').focus(function(){if(e(this).val()==e(this).attr("data-dummy")){e(this).val("")}});e("input, textarea").blur(function(){if(e(this).val()==""){e(this).val(e(this).attr("data-dummy"))}});e("#contactSubmitButton").click(function(){n(e(this).attr("data-formId"));return false})})

        // Image Sliders
        var pricing_table = new Swiper('.pricing-table-slider', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 3,
            nextButton: '.pricing-table-next',
            prevButton: '.pricing-table-prev',
            spaceBetween: 50,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
        
        var scrolling_menu = new Swiper('.scrolling-menu', {
            //scrollbar: '.swiper-scrollbar',
            scrollbarHide: true,
            freeMode:true,
            freeModeMomentum:true,
            freeModeMomentumRatio:1,
            slidesPerView: 11,
            spaceBetween: 0,
            grabCursor: true,
            breakpoints: {
                1280: {
                    slidesPerView: 8,
                    spaceBetween: 40
                },                
                1024: {
                    slidesPerView: 7,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                350:{
                    slidesPerView:3,
                    spaceBetween:10
                },
                320: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }
            }

        });
        
        if($('.scrolling-menu a').hasClass('active-menu-item')){
            var selectedIndex = $(".active-menu-item").index();
            scrolling_menu.slideTo(selectedIndex, 250);
        }

        
        var swiper = new Swiper('.coverpage-cube', {
            pagination: '.coverpage-slider .swiper-pagination',
            paginationClickable: true,
            loop:true,
            effect: 'cube',
            grabCursor: true,
            cube: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            }
        });
        
        var swiper_coverpage = new Swiper('.coverpage-classic', {
            pagination: '.coverpage-slider .swiper-pagination',
            nextButton:'.flashing-arrows-1',
            prevButton:'.flashing-arrows-2',
            paginationClickable: true
        });
        
        var swiper_category_slider = new Swiper('.category-slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 20,
        breakpoints: {
            1024: {
                slidesPerView: 6,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            320: {
                slidesPerView: 3,
                spaceBetween: 5
            }
        }
        });
   
        setTimeout(function(){
        var swiper_coverflow_thumbnails = new Swiper('.coverflow-thumbnails', {
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            autoplay:false,
            autoplayDisableOnInteraction: false,
            spaceBetween:-60,
            loop:true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 35,
                stretch: -50,
                depth: -190,
                modifier:1,
                slideShadows : true
            }
        });      
        },300);
            
        
        var swiper_coverflow_slider = new Swiper('.coverflow-slider', {
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            autoplay:3000,
            autoplayDisableOnInteraction: false,
            loop:true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 60,
                stretch: -60,
                depth: 400,
                modifier: 1,
                slideShadows : false
            }
        });
        
        var swiper_staff_slider = new Swiper('.staff-slider', {
            nextButton: '.next-staff-slider',
            prevButton: '.prev-staff-slider',
            autoplay:5000,
            loop:true,
            autoplayDisableOnInteraction: false,
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 5
                }
            }
        });        
        
        var expanding_slider = new Swiper('.expanding-slider', {
            autoplay:3000,
            autoplayDisableOnInteraction: false,
            slidesPerView: 4,
            spaceBetween: 20,
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 5
                },               
                0: {
                    slidesPerView: 1,
                    spaceBetween: 5
                }
            }
        });
        
        var swiper = new Swiper('.home-slider',{autoplay:4000, loop:true});
        var swiper = new Swiper('.home-round-slider',{autoplay:4000, loop:true});
        var swiper = new Swiper('.home-fader',{autoplay:400000,  autoHeight:true, loop:true, effect:'fade', preloadImages:true, lazyLoading:true});
        var swiper_news_slider = new Swiper('.news-slider',{autoplay:4000, loop:true});
        var swiper_single_item = new Swiper('.single-item',{autoplay:4000, loop:true});
        var swiper_quote_slider = new Swiper('.quote-slider',{autoplay:4000, loop:true, autoplay:false});
        var swiper_text_slider = new Swiper('.text-slider',{autoplay:2000, loop:true});
        var swiper_call_to_action = new Swiper('.call-to-action-slider',{autoplay:4000, slidesPerView:1, loop:true});
        
        //Aligning Elements & Resize Handlers//
        
        function center_content(){
            var screen_width = $(window).width();
            var screen_height = $(window).height();
            var content_width = $('.content-center').width();
            var content_height = $('.content-center').height();            
            var content_full_width = $('.page-fullscreen-content').outerWidth();
            var content_full_height = $('.page-fullscreen-content').outerHeight();
            
            var cover_center_height = $('.coverpage-center').outerHeight();
            var cover_center_width = $('.coverpage-center').outerWidth();

            $('.content-center').css({
                "left":"50%",
                "top":"50%",
                "margin-left": (content_width/2)*(-1),
                "margin-top": (content_height/2)*(-1) - ($('.outter-elements').height()/2)
            });
            
            $('.page-fullscreen').css({
                "width":screen_width,
                "height":screen_height 
            });
                        
            $('.page-fullscreen-content').css({
                "left":"50%",
                "top":"50%",
                "margin-left": (content_full_width/2)*(-1),
                "margin-top": (content_full_height/2)*(-1)
            });                       
            
            $('.coverpage-classic').css({"height": screen_height});           
            $('.coverpage-clear').css({"height": screen_height - 60});
            $('#page-content').css({"min-height": screen_height});
            
            $('.coverpage-center').css({
                "left":"50%",
                "top":"50%",
                "margin-left": (cover_center_width/2)*(-1),
                "margin-top": (cover_center_height/2)*(-1)
            });       
            
            $('.map-fullscreen iframe').css('width', screen_width);
            $('.map-fullscreen iframe').css('height', screen_height);
                        
        
            var mobileui_home = (screen_height - 100); 
        
            $('.mobileui-home').css('height', mobileui_home);
            $('.mobileui-home-5 a').css('height', mobileui_home/5);
            $('.mobileui-home-4 a').css('height', mobileui_home/4);
            $('.mobileui-home-3 a').css('height', mobileui_home/3);
        };

        center_content();
        $(window).resize(function() {
            center_content(); 
        });
            
        //Fullscreen Map
        $('.map-text, .overlay').click(function(){
            $('.map-text, .map-fullscreen .overlay').addClass('hide-map'); 
            $('.deactivate-map').removeClass('hide-map'); 
            return false;
        });   
        $('.deactivate-map').click(function(){
            $('.map-text, .map-fullscreen .overlay').removeClass('hide-map'); 
            $('.deactivate-map').addClass('hide-map'); 
            return false;
        });
        
        //Classic Toggles
        $('.toggle-title').click(function(){
            $(this).parent().find('.toggle-content').slideToggle(250); 
            $(this).find('i').toggleClass('rotate-toggle');
            return false;
        });
        
        //Checklist Item
        $('.checklist-item').click(function(){
           $(this).find('.ion-ios-circle-outline').toggle(250); 
           $(this).find('strong').toggleClass('completed-checklist');
           $(this).find('.ion-checkmark, .ion-android-close, .ion-ios-checkmark-outline, .ion-checkmark-circled, .ion-close-circled, .ion-ios-close-outline').toggle(250); 
        });
        
        if($('.checklist-item').hasClass('checklist-item-complete')){
           $('.checklist-item-complete').find('.ion-ios-circle-outline').toggle(250); 
           $('.checklist-item-complete').find('strong').toggleClass('completed-checklist');
           $('.checklist-item-complete').find('.ion-checkmark, .ion-android-close, .ion-ios-checkmark-outline, .ion-checkmark-circled, .ion-close-circled, .ion-ios-close-outline').toggle(250); 
        }
        
        //Tasklist Item
        $('.tasklist-incomplete').click(function(){
           $(this).removeClass('tasklist-incomplete'); 
           $(this).addClass('tasklist-completed'); 
            return false;
        });    
        $('.tasklist-item').click(function(){
           $(this).toggleClass('tasklist-completed'); 
            return false;
        });
        
        //Interests
        $('.interest-box').click(function(){
            $(this).toggleClass('transparent-background'); 
            $(this).find('.interest-first-icon, .interest-second-icon').toggleClass('hide-interest-icon');
            return false;
        });
        
        //Loading Thumb Layout for News, 10 articles at a time
        $(function(){
            $(".thumb-layout-page a").slice(0, 5).show(); // select the first ten
            $(".load-more-thumbs").click(function(e){ // click event for load more
                e.preventDefault();
                $(".thumb-layout-page a:hidden").slice(0, 5).show(0); // select next 10 hidden divs and show them
                if($(".thumb-layout-page a:hidden").length == 0){ // check if any hidden divs still exist
                    $(this).hide();
                }
            });
        });

        $(function(){
            $(".card-large-layout-page .card-large-layout").slice(0, 2).show(); // select the first ten
            $(".load-more-large-cards").click(function(e){ // click event for load more
                e.preventDefault();
                $(".card-large-layout-page .card-large-layout:hidden").slice(0, 2).show(0); // select next 10 hidden divs and show them
                if($(".card-large-layout-page div:hidden").length == 0){ // check if any hidden divs still exist
                    $(this).hide();
                }
            });
        });    

        $(function(){
            $(".card-small-layout-page .card-small-layout").slice(0, 3).show(); // select the first ten
            $(".load-more-small-cards").click(function(e){ // click event for load more
                e.preventDefault();
                $(".card-small-layout-page .card-small-layout:hidden").slice(0, 3).show(0); // select next 10 hidden divs and show them
                if($(".card-small-layout-page a:hidden").length == 0){ // check if any hidden divs still exist
                    $(this).hide();
                }
            });
        });

        //News Tabs
        $('.activate-tab-1').click(function(){
            $('#tab-2, #tab-3').slideUp(250); $('#tab-1').slideDown(250);
            $('.home-tabs a').removeClass('active-home-tab');
            $('.activate-tab-1').addClass('active-home-tab');
            return false;
        });    
        $('.activate-tab-2').click(function(){
            $('#tab-1, #tab-3').slideUp(250); $('#tab-2').slideDown(250);
            $('.home-tabs a').removeClass('active-home-tab');
            $('.activate-tab-2').addClass('active-home-tab');
            return false;
        });    
        $('.activate-tab-3').click(function(){
            $('#tab-1, #tab-2').slideUp(250); $('#tab-3').slideDown(250);
            $('.home-tabs a').removeClass('active-home-tab');
            $('.activate-tab-3').addClass('active-home-tab');
            return false;
        });  
        
        //Tabs
    	$('ul.tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');
            
            $(this).parent().parent().find('ul.tabs li').removeClass('current');
            $(this).parent().parent().find('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        })
		
		//switch screenshots
		$(function(){
			if((navigator.platform.indexOf("iPod") != -1  || navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPad") != -1) ||  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
			{
				$("img[src*='-electronwin.png']").each(function(){
					$(this).attr("src", $(this).attr("src").replace("electronwin", "electronmac"));  
				});
			}
		});
		
		//iframe common core
			$(function() {     
		  var iframe = $('<iframe />', {
			src: 'common-core-content.html'
		  });

		  $('.container-iframe-common').html(iframe);
		});
		
		//iframe about us
		$(function() {     
		  var iframe = $('<iframe />', {
			src: 'about-us-content.html'
		  });

		  $('.container-iframe-aboutus').html(iframe);
		});
		
		//iframe contact us us
		$(function() {     
		  var iframe = $('<iframe />', {
			src: 'contact-us-content.html'
		  });

		  $('.container-iframe-contactus').html(iframe);
		});
		
		//iframe customers
		$(function() {     
		  var iframe = $('<iframe />', {
			src: 'customers-content.html'
		  });

		  $('.container-iframe-customers').html(iframe);
		});
		
		//iframe academic faculty
		$(function() {     
		  var iframe = $('<iframe />', {
			src: 'staff-content.html'
		  });

		  $('.container-iframe-faculty').html(iframe);
		});
		
		//iframe  stories
		$(function() {     
		  var iframe = $('<iframe />', {
			src: 'stories-content.html'
		  });

		  $('.container-iframe-stories').html(iframe);
		});
		
		//iframe  team
		$(function() {     
		  var iframe = $('<iframe />', {
			src: 'team-content.html'
		  });

		  $('.container-iframe-team').html(iframe);
		});
		
	
		
		

			// price currency conversion
			
	function getPrice(oid,callback)
	{var query=$.ajax({url:'https://www.ereflect.com/PageHelper/json.rpc',type:'POST',data:JSON.stringify({jsonrpc:'2.0',method:'GetOfferPriceString',params:[oid],id:"1"}),success:function(data)
	{var jsonData=JSON.parse(data);if(jsonData.result!=null)
	callback(jsonData.result);else
	callback(null);},error:function(a,b,c)
	{callback(null);}});}

	function getSubPrice(oid,callback)
	{var query=$.ajax({url:'https://www.ereflect.com/PageHelper/json.rpc',type:'POST',data:JSON.stringify({jsonrpc:'2.0',method:'GetSubscriptionOfferPriceString',params:[oid],id:"1"}),success:function(data)
	{var jsonData=JSON.parse(data);if(jsonData.result!=null)
	callback(jsonData.result);else
	callback(null);},error:function(a,b,c)
	{callback(null);}});}
	
	$(function() {
		var offer = 871;
	    var orderlink = 'https://secure.typesy.com/Order2.aspx?offer='+ offer +'&tm=771&l=white-Typesy-logo.svg&style=100&ta=1'
		getPrice(offer, function (data) {
			if (data != null)
			{
				var price = data.price;
				var priceLabel1 = $(document.getElementById("priceLabel1"));

				if (priceLabel1 != null)
					priceLabel1.html(price);

				var messageLabel = $(document.getElementById("messageLabel"));
				if (data.message != null)
				{
					if (messageLabel != null)
					{
						messageLabel.html(data.message);
						messageLabel.show();
					}

				}
				else
				{
					if (messageLabel != null)
						messageLabel.hide();
				}
			}
		});
	
	});
		
	//redirect to desktop	
	(function(a,b){if(!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))))window.location.href='https://www.typesy.com/'; })(navigator.userAgent||navigator.vendor||window.opera,'http://detectmobilebrowser.com/mobile');//

		
		// display if android
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		if (/android/i.test(userAgent)){

			$('#android-content').show();
		}

		else{
			$('#android-content').hide();
		}

	//lazy loading
		!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).lozad=e()}(this,function(){"use strict";
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */var d="undefined"!=typeof document&&document.documentMode,c={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");d&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,a=void 0,o=0;o<=r.length-1;o++)(a=r[o].getAttribute("data-src"))&&(r[o].src=a);t.load()}if(t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(",").join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var i=t.getAttribute("data-background-image-set").split(","),n=i[0].substr(0,i[0].indexOf(" "))||i[0];// Substring before ... 1x
n=-1===n.indexOf("url(")?"url("+n+")":n,1===i.length?t.style.backgroundImage=n:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+n+"; background-image: -webkit-image-set("+i+"); background-image: image-set("+i+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function l(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},c,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,s=e.loaded,g=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver((r=u,a=s,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),b(t.target)||(r(t.target),l(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(o,i),e=0;e<t.length;e++)b(t[e])||(g?g.observe(t[e]):(u(t[e]),l(t[e]),s(t[e])))},triggerLoad:function(t){b(t)||(u(t),l(t),s(t))},observer:g}}});

const observer = lozad();
observer.observe();	
		
    }//Init Template Function

    	
    setTimeout(init_template, 0);//Activating all the plugins
    $(function(){
      'use strict';
      var options = {
        prefetch: false,
        cacheLength: 0,
        blacklist: '.default-link',
        forms: 'contactForm',
        onStart: {
          duration:500, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');

            // Restart your animation
            smoothState.restartCSSAnimations();
            $('.page-preloader').addClass('show-preloader');
            $('#page-transitions').css({"opacity":"0", "transition":"all 500ms ease"});
            $('#sidebar-left').removeClass('active-sidebar');
            $('#sidebar-right').removeClass('active-sidebar');
            $('#page-content, #sidebar-tap-close, #header').css({
                "transform": "translateX("+0+"px)", 
                "-webkit-transform": "translateX("+0+"px)", 
                "-moz-transform": "translateX("+0+"px)", 
                "-o-transform": "translateX("+0+"px)", 
                "-ms-transform": "translateX("+0+"px)", 
                "opacity":"1"
            });

          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');

            // Inject the new content
            $container.html($newContent);
            $('html, body').animate({ scrollTop: 0 }, 0);
            $('.page-preloader').addClass('show-preloader');
            $('#page-transitions').css({"opacity":"1", "transition":"all 500ms ease"});
            $('#page-transitions').removeClass('page-fade');
            $('#sidebar-left').removeClass('active-sidebar');
            $('#sidebar-right').removeClass('active-sidebar');
            $('#page-content, #sidebar-tap-close, #header').css({
                "transform": "translateX("+0+"px)", 
                "-webkit-transform": "translateX("+0+"px)", 
                "-moz-transform": "translateX("+0+"px)", 
                "-o-transform": "translateX("+0+"px)", 
                "-ms-transform": "translateX("+0+"px)", 
                "opacity":"1"
            });

          }
        },

        onAfter: function($container, $newContent) {
            setTimeout(init_template, 0)//Timeout required to properly initiate all JS Functions. 
            $('.page-preloader').removeClass('show-preloader');
            $('#page-content').css({
                "opacity":"1",
                "transition":"all 250ms ease"
            });   
        }
      };
      var smoothState = $('#page-transitions').smoothState(options).data('smoothState');
			
	

		
    });
    
	
	
});