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
window.onload = function () {
  if (checkForJquery()) {
    jQuery(function ($) {
        $("#loader-div").addClass("loader-show");
        /****************Slider -- Start***************/
        var siteCarousel = function () {
          if ($(".nonloop-block-13").length > 0) {
            $(".nonloop-block-13").owlCarousel({
              center: false,
              items: 1,
              loop: true,
              stagePadding: 0,
              margin: 0,
              autoplay: true,
              nav: true,
              navText: [
                '<span class="icon-arrow_back">',
                '<span class="icon-arrow_forward">',
              ],
              responsive: {
                600: {
                  margin: 0,
                  nav: true,
                  items: 2,
                },
                1000: {
                  margin: 0,
                  stagePadding: 0,
                  nav: true,
                  items: 3,
                },
                1200: {
                  margin: 0,
                  stagePadding: 0,
                  nav: true,
                  items: 4,
                },
              },
            });
          }

          $(".slide-one-item").owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            autoplay: true,
            autoplaySpeed: 1000,
            pauseOnHover: false,
            nav: true,
            navText: [
              '<span class="icon-keyboard_arrow_left">',
              '<span class="icon-keyboard_arrow_right">',
            ],
          });
        };
        if ($(".slider-body").length > 0) {
          siteCarousel();
        }
        /****************Slider -- End***************/
         var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
         var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
         if (window.location.hash && (isChrome || iOS)) {
           setTimeout(function () {
             var hash = window.location.hash;
             window.location.hash = "";
             window.location.hash = hash;
           }, 300);
         }
        

        $(window).on("scroll", doAnimations);
        $(window).trigger("scroll");
        $(this).scrollTop(0);
        $(".title_logo").hide();
        if ($(window).height() < 425) {
          $(".header").addClass("height-adjuster");
        }
        if (window.innerHeight < window.innerWidth) {
          $(".header-sub").addClass("landscapeheight");
        }
        if (jQuery(window).width() < 960) {
          $(".fab-cont").slideDown("fast");
          $(".logo-container").hide();
          $(".head-main").hide();
          $(".title_logo").show();
          $(".top-menu").addClass("animation");
        }
        $(window).scroll(function () {
          if ($(this).scrollTop() > 150) {
            $(".go-to-top").fadeIn();
          } else {
            $(".go-to-top").fadeOut();
          }
        });

        $(window).scroll(function () {
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

        $(".go-to-top").click(function () {
          $("html, body").animate({ scrollTop: 0 }, 800);
          return false;
        });
      /*******SCROLL TO TOP -- END********/
    });
    $(window).resize(function () {
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

    window.addEventListener(
      "resize",
      function () {
        if (window.innerHeight < window.innerWidth) {
          $(".header-sub").addClass("landscapeheight");
        } else {
          $(".header-sub").removeClass("landscapeheight");
        }
      },
      false
    );
    var doAnimations = function () {
      var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $(".animatable");
      if ($animatables.length == 0) {
        $(window).off("scroll", doAnimations);
      }

      $animatables.each(function (i) {
        var $animatable = $(this);
        if ($animatable.offset().top + $animatable.height() - 20 < offset) {
          $animatable.removeClass("animatable").addClass("animated");
        }
      });
    };

    function isTouchDevice() {
      var prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-", ""];
      var mq = function (query) {
        window.matchMedia(query).matches;
      };

      if (
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)
      ) {
        return true;
      }
      return mq(
        ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("")
      );
    }

    if (isTouchDevice()) {
      $(".solutionClick").bind("click", function (e) {
        if ($("#resources ul").hasClass("show-submenu")) {
          $("#resources ul")
            .toggleClass("show-submenu")
            .toggleClass("height-mobile");
          $("#resources li").toggleClass("show-submenu-li");
          $("#resources .fa-angle-right").toggleClass("dropdown-rotate");
        }
        $("#solutions ul").toggleClass("show-submenu");
        $("#solutions li").toggleClass("show-submenu-li");
        $("#solutions .fa-angle-right").toggleClass("dropdown-rotate");
        e.stopPropagation();
      });
      $(".resourcesClick").bind("click", function (e) {
        if ($("#solutions ul").hasClass("show-submenu")) {
          $("#solutions ul").toggleClass("show-submenu");
          $("#solutions li").toggleClass("show-submenu-li");
          $("#solutions .fa-angle-right").toggleClass("dropdown-rotate");
        }
        $("#resources ul")
          .toggleClass("show-submenu")
          .toggleClass("height-mobile");
        $("#resources li").toggleClass("show-submenu-li");
        $("#resources .fa-angle-right").toggleClass("dropdown-rotate");
        e.stopPropagation();
      });
    }
  } else {
    checkForJquery();
  }
  
};
function checkForJquery() {
  if (window.jQuery) {
    return true;
  } 
  return false;
}

