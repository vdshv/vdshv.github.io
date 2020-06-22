// JavaScript Document


$(function () {
        $('.mdl-navigation__link.scroll-menu').click(function () {
            //removing the previous selected menu state
             $('#scroll-menu-nav').find('.mdl-navigation__link.scroll-menu.activeMenu').removeClass('activeMenu');
            //adding the state for this parent menu
            $(this).parents(".mdl-navigation__link.scroll-menu").addClass('activeMenu');

        });
      
        var timeoutVar;
        this.addEventListener('scroll', function (event, test) {
            clearTimeout(timeoutVar);
            timeoutVar = setTimeout(function(){
                    var scrollPosition = event.target.scrollTop;
                    $("a.mdl-navigation__link.scroll-menu").each(function() {
                        var href= $(this).attr("href");
                        var elemPosition = $(href).get(0).offsetTop;
                        var elemHeight = $(href).get(0).offsetHeight;
                        if(scrollPosition >= elemPosition && scrollPosition <= (elemHeight + elemPosition))
                        {
                            $('#scroll-menu-nav').find('.mdl-navigation__link.scroll-menu.activeMenu').removeClass('activeMenu');
                            $(this).parents(".mdl-navigation__link.scroll-menu").addClass('activeMenu');
                        }
                    });
            }, 50);
 }, true); });
	  
		$(function(){
            $(".mdl-navigation__link.scroll-menu").parent().click(function(e){
                e.preventDefault();
                var speed = 500;
                var anchor = $($(this)[0].firstChild);
                var href= anchor.attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var nav_height = $("#scroll-menu-nav").height();
                var position = target.get( 0 ).offsetTop - 0;
                $(".mdl-layout__content").animate({scrollTop:position}, speed, "swing");
                return false;
            });
       
            });