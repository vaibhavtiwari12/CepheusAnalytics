var portfolio = angular.module("portfolio", []);

portfolio.controller("portfolioController", [
  "$scope",
  function($scope) {
    $(".fab-cont,.about").click(function() {
      $("#one").toggleClass("expand1");
      $("#two").toggleClass("expand2");
      $("#three").toggleClass("expand3");
      $("#top-menu").toggleClass("show");
    });
    $scope.hideMenu = function() {
      $("#top-menu").toggleClass("show");
    };
    $scope.scroller = function(elementName) {
      $("html, body").animate(
        {
          scrollTop: $(elementName).offset().top
        },
        700
      );
    };
    $scope.scrollerByClass = function(elementName) {
      $("html, body").animate(
        {
          scrollTop: $("." + elementName).offset().top
        },
        700
      );
    };
    $scope.scrollerById = function(elementName) {
      $("html, body").animate(
        {
          scrollTop: $("#" + elementName).offset().top
        },
        700
      );
    };
  }
]);

jQuery(function($) {
  $(window).on("load", function() {
    console.log("inside the fade out function");
    console.log($("#pageloaddiv"));
    $("#loader-div").addClass("loader-show");
  });
  

  
  $(document).ready(function() {
    $(window).on("scroll", doAnimations);
    $(window).trigger("scroll");
    $(this).scrollTop(0);
    $(".title_logo").hide();
    if ($(window).height() < 425) {
      $(".header").addClass("height-adjuster");
    }
    if (jQuery(window).width() < 960) {
      $(".fab-cont").slideDown("fast");
      $(".logo-container").hide();
      $(".head-main").hide();
      $(".title_logo").show();
      $(".top-menu").addClass("animation");
    }
    $(window).scroll(function() {
      if ($(this).scrollTop() > 150) {
        $(".go-to-top").fadeIn();
      } else {
        $(".go-to-top").fadeOut();
      }
    });

    $(window).scroll(function() {
      if (jQuery(window).width() > 960) {
        if ($(this).scrollTop() > 100 && $("#top-menu").hasClass("show")) {
          $("#top-menu").removeClass("show");
          $("#one").toggleClass("expand1");
          $("#two").toggleClass("expand2");
          $("#three").toggleClass("expand3");
          $(".fab-cont").slideDown("fast");
          $(".top-menu").slideUp("fast");
        } else if ($(this).scrollTop() > 100) {
          $(".fab-cont").slideDown("fast");
          $(".top-menu").slideUp("fast");
        } else {
          $(".fab-cont").slideUp("fast");
          $(".top-menu").slideDown("fast");
        }
      } else {
      }
    });

    $(".go-to-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
  /*******SCROLL TO TOP -- END********/
  /****************Slider -- Start***************/
    var siteCarousel = function () {
    		if ( $('.nonloop-block-13').length > 0 ) {
    			$('.nonloop-block-13').owlCarousel({
    		    center: false,
    		    items: 1,
    		    loop: true,
    				stagePadding: 0,
    		    margin: 0,
    		    autoplay: true,
    		    nav: true,
    				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
    		    responsive:{
    	        600:{
    	        	margin: 0,
    	        	nav: true,
    	          items: 2
    	        },
    	        1000:{
    	        	margin: 0,
    	        	stagePadding: 0,
    	        	nav: true,
    	          items: 3
    	        },
    	        1200:{
    	        	margin: 0,
    	        	stagePadding: 0,
    	        	nav: true,
    	          items: 4
    	        }
    		    }
    			});
    		}

    		$('.slide-one-item').owlCarousel({
    	    center: false,
    	    items: 1,
    	    loop: true,
    			stagePadding: 0,
    	    margin: 0,
          autoplay: true,
          autoplaySpeed:1000,
    	    pauseOnHover: false,
    	    nav: true,
    	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    	  });
      };
      if($(".slider-body").length>0){
        siteCarousel();
      }
    /****************Slider -- End***************/
});

/********************* MAPS API - START **********************************/
// window.onload = function() {
//   L.mapquest.key = "s5m3mAVCtI7YCRAlwtVRSYewJdNPh9RY";

//   var map = L.mapquest.map("map", {
//     center: [19.00917, 73.011266],
//     layers: L.mapquest.tileLayer("map"),
//     dragging: false,
//     zoom: 14
//   });
//   L.marker([19.00917, 73.011266], {
//     icon: L.mapquest.icons.marker(),
//     draggable: false,
//     scrollWheelZoom: false
//   }).addTo(map);
// };
/********************* MAPS API - END **********************************/
$(window).resize(function() {
  if ($(window).width() < 960) {
    $(".fab-cont").slideDown("fast");
    $(".title_logo").show();
    $(".head-main").hide();
    $(".logo-container").hide();
  }
  if ($(window).height() < 425) {
    $(".header").addClass("height-adjuster");
  } else {
    $(".header").removeClass("height-adjuster");
  }
  if ($(window).width() > 960) {
    $(".logo-container").show();
    $(".fab-cont").slideUp("fast");
    $(".head-main").show();
    $(".title_logo").hide();
  }
});

// Function which adds the 'animated' class to any '.animatable' in view
var doAnimations = function() {
  // Calc current offset and get all animatables
  var offset = $(window).scrollTop() + $(window).height(),
    $animatables = $(".animatable");

  // Unbind scroll handler if we have no animatables
  if ($animatables.length == 0) {
    $(window).off("scroll", doAnimations);
  }

  // Check all animatables and animate them if necessary
  $animatables.each(function(i) {
    var $animatable = $(this);
    if ($animatable.offset().top + $animatable.height() - 20 < offset) {
      $animatable.removeClass("animatable").addClass("animated");
    }
  });
};

// Hook doAnimations on scroll, and trigger a scroll

function isTouchDevice() {
  var prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-", ""];
   var mq = function(query) {
     window.matchMedia(query).matches;
   }; 

  if (
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch)
  ) {
    return true;
  }
  return mq(["(", prefixes.join("touch-enabled),("), "heartz", ")"].join(""));
}

if (isTouchDevice()) {
console.log("ishere");
  /*Show #filter1 drop-down and hide #filter2 drop-down if it was open*/
  $(".solutionClick").bind("click", function(e) {
    console.log("Coming inside");
    if ($("#resources ul").hasClass("show-submenu")) {
      $("#resources ul").toggleClass("show-submenu");
      $("#resources li").toggleClass("show-submenu-li");
      $("#resources .fa-angle-right").toggleClass("dropdown-rotate");
    }
    $("#solutions ul").toggleClass("show-submenu");
    $("#solutions li").toggleClass("show-submenu-li");
    $("#solutions .fa-angle-right").toggleClass("dropdown-rotate");
    /* $("#filter2 ul.children").css("display", "none"); */
    e.stopPropagation(); /*Make all touch events stop at the #filter1 container element*/
  });
  $(".resourcesClick").bind("click", function(e) {
    if ($("#solutions ul").hasClass("show-submenu")) {
      $("#solutions ul").toggleClass("show-submenu");
      $("#solutions li").toggleClass("show-submenu-li");
      $("#solutions .fa-angle-right").toggleClass("dropdown-rotate");
    }
    $("#resources ul").toggleClass("show-submenu");
    $("#resources li").toggleClass("show-submenu-li");
    $("#resources .fa-angle-right").toggleClass("dropdown-rotate");
    /* $("#filter2 ul.children").css("display", "none"); */
    e.stopPropagation(); /*Make all touch events stop at the #filter1 container element*/
  });
  /*Show #filter2 drop-down and hide #filter1 drop-down if it was open*/
  // $("#filter2").bind("touchstart", function(e) {
  //   $("#filter2 ul.children").toggle();
  //   $("#filter1 ul.children").css("display", "none");
  //   e.stopPropagation(); /*Make all touch events stop at the #filter2 container element*/
  // });

  /* $(document).bind("touchstart", function(e) {
    $("#solutions ul").removeClass("show-submenu");
    $("#solutions li").removeClass("show-submenu-li");
    $("#resources ul").removeClass("show-submenu");
    $("#resources li").removeClass("show-submenu-li");
  }); */

  // $(".filters ul.children").bind("touchstart", function(event) {
  //   event.stopPropagation(); /*Make all touch events stop at the #filter1 ul.children container element*/
  // });

  // $(".filters ul.children a").click(function() {
  //   $(".filters ul.children").fadeOut(
  //     300
  //   ); /*Close filters drop-downs if user taps on any link in drop-down*/
  // });
}
