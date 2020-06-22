document.addEventListener("DOMContentLoaded", function() {
		// switch mac screenshots
	$(window).load(function() {
		$('html').css({"transition": ".3s"}).removeClass('async-hide');

		$("img[data-jpibfi-indexer]").each(function(index, element) {
			$(this).mouseenter();
	   	});

		if((navigator.platform.indexOf("iPod") != -1 || navigator.platform.indexOf("Mac") != -1 || navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPad") != -1))
		{
			$("img[src*='-electronwin.png']").each(function(){
				$(this).attr("src", $(this).attr("src").replace("electronwin", "electronmac"));  
			});
		}	
	});
		
	PostAffTracker.setAccountId('default1');
	try {
	PostAffTracker.disableTrackingMethod('F');

	PostAffTracker.track();

	} catch (err) { }

	// display form and try for free button and chat widget on specified countries only
	$.getJSON("https://ipapi.co/json/", function (data) {
	var country = data.country;
	if(country=="AU" || country=="US" || country=="GB" || country=="IE" || country=="CA" || country=="NZ" || country=="PH" )
	{
			
		
	    $('.form-column').removeClass('hidethis');
	    $('.headline-column').removeClass('adjustcol');
		$('.bullet-section').removeClass('adjustwidth');
	    
				injectStyles('.siq_bR, .siqtrans.siqanim { display: block !important; }');
					function injectStyles(rule) {
					  var div = $("<div />", {
						html: '&shy;<style>' + rule + '</style>'
					  }).appendTo(".section-9");    
					}
	        // show try for free on scroll
	        $(function() {
	            var layout = $(window);
	            var st = 0;
	            $( layout ).scroll(function() {
	                st = $(layout).scrollTop();

	           if ( st >= 100) {
	               $('.trial-btn').addClass('showthis');

	           }
	           else {
	               $('.trial-btn').removeClass('showthis');

	           }

	           });

	        });  
	}
		else{
			
			$('.form-column').addClass('hidethis');
			$('.headline-column').addClass('adjustcol');
			$('.bullet-section').addClass('adjustwidth');
	        $('.trial-btn').addClass('hidethis');
	        $('.trial-btn').removeClass('showthis');
	        $('.siq_bR').addClass('hidethis');
					injectStyles('.siq_bR, .siqtrans.siqanim { display: none !important; }');
					function injectStyles(rule) {
					  var div = $("<div />", {
						html: '&shy;<style>' + rule + '</style>'
					  }).appendTo(".section-9");    
					}	
		}
	});

		new Splide( '#image-slider', {
		type   : 'loop',
		padding: {
			right: '10rem',
			left : '10rem',
		},
	} ).mount();
			
		new Splide( '#image-slider2', {
		type   : 'loop',
		padding: {
			right: '10rem',
			left : '10rem',
		},
	} ).mount();
			
		new Splide( '#image-slider3', {
		type   : 'loop',
		padding: {
			right: '10rem',
			left : '10rem',
		},
	} ).mount();
			
		new Splide( '#image-slider4', {
		type   : 'loop',
		padding: {
			right: '10rem',
			left : '10rem',
		},
	} ).mount();
		new Splide( '#image-slider5', {
		type   : 'loop',
		padding: {
			right: '10rem',
			left : '10rem',
		},
	} ).mount();
		new Splide( '#image-slider6', {
		type   : 'loop',
		padding: {
			right: '10rem',
			left : '10rem',
		},
	} ).mount();
		new Splide( '#image-slider8', {
		type   : 'loop',
		padding: {
			right: '10rem',
			left : '10rem',
		},
	} ).mount();

	WebFont.load({
	    google: {
	        families: ["Fira Sans:regular,500,600,700", "Roboto:regular,500,700"]
	    }
	});
		
		
	// for pop up dialogs
	    
	$("#dialog4").dialog({
	    autoOpen: false,
	    modal: true,
	    height: 600,
	    open: function(ev, ui){
	             $('#myIframe4').attr('data-src','frameset-strat4.html');
	          }
	});

		
	$('.dialogbtn4').click(function(){
	    $('#dialog4').dialog('open');
		document.documentElement.style.overflow = "hidden";
	});	
		
	$('.close').click(function(){
	    $('#dialog4').dialog('close');
		document.documentElement.style.overflow = "auto";
	});	
		
	$('.ui-dialog').click(function(){
	    $('#dialog4').dialog('close');
		document.documentElement.style.overflow = "auto";
	});	
		
	$("#dialogCustomers").dialog({
	    autoOpen: false,
	    modal: true,
	    height: 600,
	    open: function(ev, ui){
	             $('#myIframeCustomers').attr('data-src','../frameset-customers.html');
	          }
	});
		
		
	$('.customers-btn').click(function(){
	    $('#dialogCustomers').dialog('open');
		document.documentElement.style.overflow = "hidden";
	});	
		
	$('.close').click(function(){
	    $('#dialogCustomers').dialog('close');
		document.documentElement.style.overflow = "auto";
	// this will renable the scroll when the dialog is closed

	});	
		
	$('.ui-dialog').click(function(){
	    $('#dialogCustomers').dialog('close');
		document.documentElement.style.overflow = "auto";
		// this will renable the scroll when the dialog is closed

	});
		
		
		$("#dialogStories").dialog({
	    autoOpen: false,
	    modal: true,
	    height: 600,
	    open: function(ev, ui){
	             $('#myIframeStories').attr('data-src','../frameset-stories.html');
	          }
	});

		
	$('.stories-btn').click(function(){
	    $('#dialogStories').dialog('open');
		document.documentElement.style.overflow = "hidden";
	});	
		
	$('.close').click(function(){
	    $('#dialogStories').dialog('close');
		document.documentElement.style.overflow = "auto";
	// this will renable the scroll when the dialog is closed
	});	
		
	$('.ui-dialog').click(function(){
	    $('#dialogStories').dialog('close');
		document.documentElement.style.overflow = "auto";
		// this will renable the scroll when the dialog is closed
	});
		
		
		$("#dialog9").dialog({
	    autoOpen: false,
	    modal: true,
	    height: 600,
	    open: function(ev, ui){
	             $('#myIframe9').attr('data-src','../frameset-contactus-indiego.html');
	          }
	});

		
	$('.contact-btn').click(function(){
	    $('#dialog9').dialog('open');
		document.documentElement.style.overflow = "hidden";
	});	
		
	$('.close').click(function(){
	    $('#dialog9').dialog('close');
		document.documentElement.style.overflow = "auto";
	// this will renable the scroll when the dialog is closed
	});	
		
	$('.ui-dialog').click(function(){
	    $('#dialog9').dialog('close');
		document.documentElement.style.overflow = "auto";
	// this will renable the scroll when the dialog is closed
	});
		
		
		
		$("#dialog10").dialog({
	    autoOpen: false,
	    modal: true,
	    height: 600,
	    open: function(ev, ui){
	             $('#myIframe10').attr('data-src','../frameset-aboutus-indiego.html');
	          }
	});

		
	$('.about-btn').click(function(){
	    $('#dialog10').dialog('open');
		document.documentElement.style.overflow = "hidden";
	// this will renable the scroll when the dialog is closed
	});	
		
	$('.close').click(function(){
	    $('#dialog10').dialog('close');
		document.documentElement.style.overflow = "auto";
	// this will renable the scroll when the dialog is closed
	});	
		
	$('.ui-dialog').click(function(){
	    $('#dialog10').dialog('close');
		document.documentElement.style.overflow = "auto";
	// this will renable the scroll when the dialog is closed
	});
		 
		 
	$("#dialog11").dialog({
	    autoOpen: false,
	    modal: true,
	    height: 600,
	    open: function(ev, ui){
	             $('#myIframe11').attr('data-src','../frameset-team-indiego.html');
	          }
	});

		
	$('.team-btn').click(function(){
	    $('#dialog11').dialog('open');
		document.documentElement.style.overflow = "hidden";
	// this will renable the scroll when the dialog is closed
	});	
		
	$('.close').click(function(){
	    $('#dialog11').dialog('close');
		document.documentElement.style.overflow = "auto";
	// this will renable the scroll when the dialog is closed
	});	
		
	$('.ui-dialog').click(function(){
	    $('#dialog11').dialog('close');
		document.documentElement.style.overflow = "auto";
	// this will renable the scroll when the dialog is closed
	});
		 
		 
	$("#dialog12").dialog({
	    autoOpen: false,
	    modal: true,
	    height: 600,
	    open: function(ev, ui){
	             $('#myIframe12').attr('data-src','../frameset-faculty-indiego.html');
	          }
	});

		
	$('.faculty-btn').click(function(){
	    $('#dialog12').dialog('open');
		document.documentElement.style.overflow = "hidden";
	// this will renable the scroll when the dialog is closed
	});	
		
	$('.close').click(function(){
	    $('#dialog12').dialog('close');
		document.documentElement.style.overflow = "auto";
	// this will renable the scroll when the dialog is closed
	});	
		
	$('.ui-dialog').click(function(){
	    $('#dialog12').dialog('close');
		document.documentElement.style.overflow = "auto";
	// this will renable the scroll when the dialog is closed
	});
		
		
	$("#dialogStandards").dialog({
	    autoOpen: false,
	    modal: true,
	    height: 600,
	    open: function(ev, ui){
	             $('#myIframeStandards').attr('data-src','../frameset-standards-indiego.html');
	          }
	});

		
	$('#standards-link').click(function(){
	    $('#dialogStandards').dialog('open');
		document.documentElement.style.overflow = "hidden";
	});	
		
	$('.close').click(function(){
	    $('#dialogStandards').dialog('close');
		document.documentElement.style.overflow = "auto";
	});	
		
	$('.ui-dialog').click(function(){
	    $('#dialogStandards').dialog('close');
		document.documentElement.style.overflow = "auto";
	});
	    
	

  var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

	
	var da = new Date();
    var ma = month[da.getMonth()];
    document.getElementById("montha").innerHTML = ma;
	

	
	var yz = new Date();
    var yyz = yz.getFullYear();
    document.getElementById("year2").innerHTML = yyz;
	
	
	var a = new Date();
    var ya = a.getFullYear();
    document.getElementById("yeara").innerHTML = ya;
	
	var a = new Date();
    var yb = a.getFullYear();
    document.getElementById("yearb").innerHTML = yb;
	
	var a = new Date();
    var yc = a.getFullYear();
    document.getElementById("yearc").innerHTML = yc;


});