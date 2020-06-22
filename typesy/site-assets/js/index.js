document.addEventListener("DOMContentLoaded", function() {
	// display EDU section and link only on specific countries (AU, US GB, IE ,CA, NZ ,PH)
    ! function(o, c) {
        var n = c.documentElement,
            t = " w-mod-";
        n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
    }(window, document);

    $.getJSON("https://ipapi.co/json/", function (data) {
    var country = data.country;
    if(country=="AU" || country=="US" || country=="GB" || country=="IE" || country=="CA" || country=="NZ" || country=="PH" )
    {


        $('.forschools').removeClass('hidethis');
        $('.benefits-section').removeClass('adjustcol');
    }
        else{

            $('.forschools').addClass('hidethis');
            $('.benefits-section').addClass('adjustcol');
        }
    });


    PostAffTracker.setAccountId('default1');
    try {
    PostAffTracker.disableTrackingMethod('F');
     
    PostAffTracker.track();
     
    } catch (err) { }

    
	var ck = "https://www.typesy.com/";

	jQuery(document).ready(function(){    
		var hasVisited = readCookie(ck); 
		if(hasVisited == null){
		     $("#cookie-message").show(); 
			createCookie(ck, "true"); }
		});
		
	function createCookie(name,value,days) {
		if (days) {	
			var date = new Date();	
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}else{
			var expires = "";
		}
		document.cookie = name+"="+value+expires+"; path=/";
	} 

	function readCookie(name){
		var nameEQ = name + "=";	
		var ca = document.cookie.split(';');	
		for(var i=0;i < ca.length;i++) {		
			var c = ca[i];		
			while (c.charAt(0)==' ') c = c.substring(1,c.length);		
			if (c.indexOf(nameEQ) == 0) { 
				return c.substring(nameEQ.length,c.length);
			}	
		}	
		
		return null; 
	}

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
	  document.getElementById("month").innerHTML = ma;
	
	  var yz = new Date();
	  var yyz = yz.getFullYear();
	  document.getElementById("year1").innerHTML = yyz;
	
	  var a = new Date();
	  var ya = a.getFullYear();
	  document.getElementById("year2").innerHTML = ya;

	  $(window).load(function() {
	  	
	  	// if ipad or mac display ipad app store dialog 	
	  	if (navigator.platform.indexOf("iPad") != -1 || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)){
	  	

	  		$("#ipadPrompt").dialog({
	  			autoOpen: true,
	  			modal: true,
	  			height: 600,
	  			open: function(ev, ui){
	  					 $('#myIframe14').attr('data-src','frameset-ipad.html');
	  				  }
	  		});


	  		$('.close').click(function(){
	  			$('#ipadPrompt').dialog('close');
	  		});	

	  		$('.ui-dialog').click(function(){
	  			$('#ipadPrompt').dialog('close');
	  		});
	  		$('#ipad-content').show();
	  	}
	  	
	      // if android display play store dialog 
	      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	  	if (/android/i.test(userAgent)){
	  	
	  		$("#androidPrompt").dialog({
	  			autoOpen: true,
	  			modal: true,
	  			height: 600,
	  			open: function(ev, ui){
	  					 $('#myIframe15').attr('data-src','frameset-android.html');
	  				  }
	  		});

	  		$('.close').click(function(){
	  			$('#androidPrompt').dialog('close');
	  		});	

	  		$('.ui-dialog').click(function(){
	  			$('#androidPrompt').dialog('close');
	  		});
	  	}
	           
	  	else{
	  		$('#ipad-content').hide();
	  	}
	  	
	  });
	  	
	  // dialogs for pop ups
	      
	  $("#dialogCustomers").dialog({
	      autoOpen: false,
	      modal: true,
	      height: 600,
	      open: function(ev, ui){
	               $('#myIframeCustomers').attr('data-src','frameset-customers.html');
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
	               $('#myIframeStories').attr('data-src','frameset-stories.html');
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
	               $('#myIframe9').attr('data-src','frameset-contactus-indiego.html');
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
	               $('#myIframe10').attr('data-src','frameset-aboutus-indiego.html');
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
	               $('#myIframe11').attr('data-src','frameset-team-indiego.html');
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
	               $('#myIframe12').attr('data-src','frameset-faculty-indiego.html');
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
	  	
	  $("#dialog13").dialog({
	      autoOpen: false,
	      modal: true,
	      height: 600,
	      open: function(ev, ui){
	               $('#myIframe13').attr('data-src','frameset-privacy-indiego.html');
	            }
	  });

	  	
	  $('.privacy-btn').click(function(){
	      $('#dialog13').dialog('open');
	  	document.documentElement.style.overflow = "hidden";
	  });	
	  	
	  $('.close').click(function(){
	      $('#dialog13').dialog('close');
	  	document.documentElement.style.overflow = "auto";
	  });	
	  	
	  $('.ui-dialog').click(function(){
	      $('#dialog13').dialog('close');
	  	document.documentElement.style.overflow = "auto";
	  });
	  	
	  
});