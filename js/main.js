/* 
    Editor: zhao
    Time: 2018.10.18
*/

new WOW().init();

{
  let visualWidth = document.documentElement.clientWidth;
  let visualHeight = document.documentElement.clientHeight;
  // $(".js-heightAuto").css("height", (visualHeight - 100) +"px");
  if (visualWidth < 767) {
    $(".js-heightAuto").css("height", (visualHeight - 60) +"px");
  }else if (visualWidth < 991) {
    $(".js-heightAuto").css("height", (visualHeight - 80) +"px");
  }else{
    $(".js-heightAuto").css("height", (visualHeight - 100) +"px");
  }

  $(window).resize(function(){
    visualWidth = document.documentElement.clientWidth;
    visualHeight = document.documentElement.clientHeight;
    if (visualWidth < 767) {
      $(".js-heightAuto").css("height", (visualHeight - 60) +"px");
    }else if (visualWidth < 991) {
      $(".js-heightAuto").css("height", (visualHeight - 80) +"px");
    }else{
      $(".js-heightAuto").css("height", (visualHeight - 100) +"px");
    }
  })
}

// Back to top
function goTop() {
  $('html,body').animate({ 'scrollTop': 0 }, 1000);
}
$(window).scroll(function(){
  if ($(document).scrollTop() >= 200) {
    $('#backtop').addClass("on");
  } else {
    $('#backtop').removeClass("on");
  }
});
// Mobile header nav dropdown-menu

$(".app-navmenu-btn").on("click", function (e) {
  $(".navmenu").toggleClass("on");
  e.stopPropagation();
  $(".navmenu").on("click", function (e) {
    e.stopPropagation();
  })
  $(document).on("click", function (e) {
    $(".navmenu").removeClass("on");
    e.stopPropagation();
  })
});
$(".app-navmenu-btn").on("click", function (e) {
  $(".app-navmenu-mask").toggleClass("on");
  e.stopPropagation();
  $(".app-navmenu-mask").on("click", function (e) {
    e.stopPropagation();
  })
  $(".app-navmenu-close").on("click", function (e) {
    $(".app-navmenu-mask").removeClass("on");
    e.stopPropagation();
  })
});
$(".app-search").on("click", function(e){
  e = e||event;
  $("#app-top-search").toggleClass("on");
  $("#app-top-search .tsw-inner input").focus()
  e.stopPropagation();
  $(".tsw-inner input").on("click", function(e){
    e.stopPropagation();
  })
  $(document).on("click", function(e){
    $("#app-top-search").removeClass("on");
    e.stopPropagation();
  })
});
$(document).on("click", ".mouse" ,function (){
  $('html,body').animate({ 'scrollTop': ($(".home-section1").height() + 120)}, 1000);
})
$('.anchor-point-tabs a[href*=#]').click(function() {  
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {  
      var $target = $(this.hash);  
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');  
      if ($target.length) {  
        var targetOffset = $target.offset().top;  
        $('html,body').animate({  
          scrollTop: targetOffset  
        },700);  
        return false;  
      }  
  }  
});
$(".about-section7 .prev-next .about-section7-prev").hover(function(){
  $(this).addClass("on");
  $(".about-section7 .prev-next .about-section7-next").removeClass("on");
},function () {

})
$(".about-section7 .prev-next .about-section7-next").hover(function(){
  $(this).addClass("on");
  $(".about-section7 .prev-next .about-section7-prev").removeClass("on");
},function () {

})


{
  let visualWidth = document.documentElement.clientWidth;
  let visualHeight = document.documentElement.clientHeight;

  if (visualWidth < "1200") {
    $(".location-list .item .lhead").on("click", function () {
      if ($(this).parent().hasClass("on")) {
        $(".location-list .lbody").slideUp();
        $(this).parent().removeClass("on");
        $(this).find(".toggle").html("+").css("margin-right", "0");
      }else{
        $(".location-list .lbody").slideUp();
        $(".location-list .item").removeClass("on");
        $(this).parent().addClass("on");
        $(this).parent().find(".lbody").slideToggle();
        $(this).find(".toggle").html("-").css("margin-right", "4px");
      }
    })
  }
}

try {
  //数字递增
  let wrapTop = $(".num-section").offset().top;
  let istrue = true;
  $(window).on("scroll",
  function() {
    var s = $(window).scrollTop();
    if (s > wrapTop - 600 && istrue) {
      $(".incrementing").each(count);
      function count(a) {
        var b = $(this);
        a = $.extend({},
        a || {},
        b.data("countToOptions") || {});
        b.countTo(a)
      };
      istrue = false;
    };
  })
  //设置计数
  $.fn.countTo = function (options) {
    options = options || {};
    return $(this).each(function () {
      //当前元素的选项
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
      }, options);
      //更新值
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;
      //更改应用和变量
      var self = this,
      $self = $(this),
      loopCount = 0,
      value = settings.from,
      data = $self.data('countTo') || {};
      $self.data('countTo', data);
      //如果有间断，找到并清除
      if (data.interval) {
        clearInterval(data.interval);
      };
      data.interval = setInterval(updateTimer, settings.refreshInterval);
      //初始化起始值
      render(value);
      function updateTimer() {
        value += increment;
        loopCount++;
        render(value);
        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }
        if (loopCount >= loops) {
          //移出间隔
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;
          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }
      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };
  $.fn.countTo.defaults={
    from:0,               //数字开始的值
    to:0,                 //数字结束的值
    speed:1000,           //设置步长的时间
    refreshInterval:100,  //隔间值
    decimals:0,           //显示小位数
    formatter: formatter, //渲染之前格式化
    onUpdate:null,        //每次更新前的回调方法
    onComplete:null       //完成更新的回调方法
  };
  function formatter(value, settings){
    return value.toFixed(settings.decimals);
  }
  //自定义格式
  $('.incrementing').data('countToOptions',{
    formmatter:function(value, options){
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
  });
} catch(e) {
  console.log(e);
}

//Swiper API move to -> http://www.swiper.com.cn/
{
  new Swiper('.home-section1-swiper', {
    speed: 700,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    autoHeight: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.home-section1-pagination',
      clickable :true
    },
    on: {
      init: function(){
        swiperAnimateCache(this);
        swiperAnimate(this);
        setTimeout(function () {
          $(".home-section1-pagination .swiper-pagination-bullet").each(function (index, value) {
            $(value).attr("data-content", "0"+(index+1));
          })
        },300)
      },
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this);
      } 
    }
  })

  let galleryThumbs = new Swiper('.home-section3-thumbs', {
    speed: 700,
    spaceBetween: 40,
    slidesPerView: 4,
    observer: true,
    observeParents: true,
    noSwiping : true,
    noSwipingClass : 'no-swiper',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      1440: {
        spaceBetween: 20
      },
      992: {
        spaceBetween: 15
      },
      576: {
        spaceBetween: 8
      }
    }
  });
  new Swiper('.home-section3-top', {
    speed: 700,
    autoHeight: true,
    observer: true,
    observeParents: true,
    noSwiping : true,
    noSwipingClass : 'no-swiper',
    thumbs: {
      swiper: galleryThumbs
    }
  });
  let home_section4_bgswiper =  new Swiper('.home-section4-bgswiper', {
    speed: 700,
    noSwiping : true,
    noSwipingClass : 'no-swiper',
    observer: true,
    observeParents: true,
  })
  new Swiper('.home-section4-swiper', {
    speed: 700,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 15,
    autoHeight: true,
    watchOverflow: true,
    noSwiping : true,
    noSwipingClass : 'no-swiper',
    observer: true,
    observeParents: true,
    pagination: {
      el: '.home-section4-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.home-section4-next',
      prevEl: '.home-section4-prev'
    },
    thumbs: {
      swiper: home_section4_bgswiper
    },
    on: {
      init: function(){
        setTimeout(function(){
          let current = $(".home-section4-pagination .swiper-pagination-current").text();
          let total = $(".home-section4-pagination .swiper-pagination-total").text();
          if ( parseInt(current) < 10) {
            $(".home-section4-pagination .swiper-pagination-current").text("0"+current);
          }
          if ( parseInt(total) < 10) {
            $(".home-section4-pagination .swiper-pagination-total").text("0"+total);
          }
        },300)
      },
      slideChangeTransitionStart: function(){
        let current = $(".home-section4-pagination .swiper-pagination-current").text();
        let total = $(".home-section4-pagination .swiper-pagination-total").text();
        if ( parseInt(current) < 10) {
          $(".home-section4-pagination .swiper-pagination-current").text("0"+current);
        }
        if ( parseInt(total) < 10) {
          $(".home-section4-pagination .swiper-pagination-total").text("0"+total);
        }
      },
    },
  })

  let home_section7_swiper = new Swiper('.home-section7-swiper', {
    speed: 700,
    slidesPerView: 1,
    autoHeight: true,
    observer: true,
    observeParents: true,
    noSwiping : true,
    noSwipingClass : 'no-swiper',
    on: {
      slideChangeTransitionStart: function() {
        $(".home-section7-tabs .active").removeClass('active');
        $(".home-section7-tabs a").eq(this.activeIndex).addClass('active');
      }
    }
  })
  $(".home-section7-tabs a").on('click', function(e) {
    e.preventDefault()
    $(".home-section7-tabs .active").removeClass('active')
    $(this).addClass('active')
    home_section7_swiper.slideTo($(this).index())
  })

  let productView_section1_swiper_thumbs = new Swiper('.productView-section1-swiper-thumbs', {
    speed: 700,
    slidesPerView: 4,
    spaceBetween: 20,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      767: {
        spaceBetween: 5,
      }
    }
  })
  new Swiper('.productView-section1-swiper', {
    speed: 700,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.productView-section1-next',
      prevEl: '.productView-section1-prev'
    },
    thumbs: {
      swiper: productView_section1_swiper_thumbs
    }
  })

  let solution_section5_swiper = new Swiper('.solution-section5-swiper', {
    speed: 700,
    autoHeight: true,
    observer: true,
    observeParents: true,
    on: {
      slideChangeTransitionStart: function() {
        $(".solution-section5-tabs .active").removeClass('active');
        $(".solution-section5-tabs a").eq(this.activeIndex).addClass('active');
      }
    }
  })
  $(".solution-section5-tabs a").on('click', function(e) {
    e.preventDefault()
    $(".solution-section5-tabs .active").removeClass('active')
    $(this).addClass('active')
    solution_section5_swiper.slideTo($(this).index())
  })

  new Swiper('.about-section6-swiper', {
    speed: 700,
    slidesPerView: 4,
    watchOverflow: true,
    autoHeight: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.about-section6-next',
      prevEl: '.about-section6-prev'
    },
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      }
    }
  })
  new Swiper('.about-section3-swiper', {
    speed: 700,
    slidesPerView: 3,
    spaceBetween: 46,
    watchOverflow: true,
    autoHeight: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.about-section3-pagination',
      clickable :true
    },
    breakpoints: {
      991: {
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      }
    }
  })
  new Swiper('.about-section7-swiper', {
    speed: 700,
    slidesPerView: 3,
    spaceBetween: 20,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.about-section7-pagination',
      clickable :true
    },
    navigation: {
      nextEl: '.about-section7-next',
      prevEl: '.about-section7-prev'
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      }
    }
  })
}
var fvw = $(window).width();
if(fvw<1000){
	console.log("手机");
	$(".f_menu li .tit i").click(function(){
		var _this = $(this);
		_this.parents("li").toggleClass("on");
		_this.parents("li").find(".cont").stop().slideToggle();
	});
}else{
	console.log("pc");
	$(".f_menu li").hover(function(){
			var _this = $(this);
			_this.find(".cont").stop().slideDown();
		},
		function(){
			var _this = $(this);
			_this.find(".cont").stop().slideUp();
		}
	);
}