!function(i){"use strict";i(window).on("load",function(){i(".loader-inner").fadeOut(),i(".loader").delay(200).fadeOut("slow")}),i(function(){i(window).scroll(function(){i(this).scrollTop()>100?i(".scroll-to-top").addClass("active"):i(".scroll-to-top").removeClass("active")})}),i("a.scroll").smoothScroll({speed:800,offset:0}),i(".main-slider").flexslider({animation:"slide",slideshow:!0,directionNav:!1,controlNav:!0,pauseOnAction:!1,animationSpeed:500}),i(".bg-review-slider").flexslider({animation:"slide",slideshow:!0,directionNav:!1,controlNav:!0,pauseOnAction:!1,animationSpeed:500}),i(".review-slider").flexslider({animation:"slide",slideshow:!0,directionNav:!0,controlNav:!1,pauseOnAction:!1,animationSpeed:500}),i(".clientSlider").flexslider({animation:"slide",slideshow:!0,directionNav:!1,itemWidth:53,itemMargin:0,minItems:2,maxItems:6,controlNav:!1}),i(".popup-image").magnificPopup({type:"image",fixedContentPos:!1,fixedBgPos:!1,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!0,duration:300}}),i(".popup-youtube, .popup-vimeo").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),i(".background-img").each(function(){var a=i(this).children("img").attr("src");i(this).css("background-image",'url("'+a+'")').css("background-position","initial")});var a=i(".video-cover .play-but");i(".video-cover").each(function(){i(this).find("iframe").length&&i(this).find("iframe").attr("data-src",i(this).find("iframe").attr("src"),i(this).find("iframe").attr("src",""))}),a.on("click",function(){var a=i(this).closest(".video-cover"),e=a.find("iframe");return a.addClass("show-video"),e.attr("src",e.attr("data-src")),!1}),i(".filter li a").on("click",function(a){a.preventDefault(),i(this).addClass("active"),i(this).parent().siblings().find("a").removeClass("active");var e=i(this).attr("data-filter");if(i(this).closest(".portfolio").find(".grid-item").removeClass("disable"),"all"!==e)for(var s=i(this).closest(".portfolio").find(".grid-item"),t=0;t<s.length;t++)s.eq(t).hasClass(e)||s.eq(t).addClass("disable")}),i(".countdown").countdown("2019/12/20").on("update.countdown",function(a){i(this).html(a.strftime('<div class="counter mr-5 mb-lg-0"><span class="counter">%d</span> <span class="label text-muted">day%!d</span></div> <div class="counter mr-5 mb-lg-0"><span class="counter">%H</span> <span class="label text-muted">hr%!H</span></div> <div class="counter mr-5 mb-lg-0"><span class="counter">%M</span> <span class="label text-muted">min%!M</span></div> <div class="counter"><span class="counter">%S</span> <span class="label text-muted">sec%!S</span></div>'))})}(jQuery);