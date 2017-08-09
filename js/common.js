// preload
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
// Адаптивное меню
$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".wrapp-mobile-menu").slideToggle();
  return false;
});
// Плавный скролл
$(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		let target = $(this).attr('href'),
        bl_top= $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top},800);
        return false;
    })
})

// липкая навигация
$(function(){
    var sticky = new Waypoint.Sticky({
        element: $('.navigation-wrap')[0]
    })
})
// Стрелочка вверх
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});
// Отслеживание скролла
$(window).scroll(function(){
   var $sections = $('section');
   $sections.each(function(i,el){
    var top  = $(el).offset().top-100;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if( scroll > top && scroll < bottom){
      $('a.active').removeClass('active');
      $('a[href="#'+id+'"]').addClass('active');
  }
})
});
// запуск сриптов когда они в зоне видимости
// круглый прогресс бар
$(function() {
    var blockTop = $('.demo-pie-3').offset().top;
    var CountUpFlag = 0;
    var $window = $(window);
    $window.on('load scroll', function() {
        var top = $window.scrollTop();
        var height = $window.height();
        if (top + height >= blockTop && CountUpFlag == 0) {
            CountUp();
            CountUpFlag = 1;
        }
    });

    function CountUp() {
        $('.demo-pie-3').pieChart({
            barColor: '#252525',
            trackColor: '#5F5F5F',
            lineCap: 'butt',
            lineWidth: 8,
            size: 135,
            animate: {
              duration: 3000, 
              enabled: true
          },
          onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text("English Intermediate");
        },

    });
    }
});
// круглый прогресс бар
$(function() {
    var blockTop = $('.demo-pie-2').offset().top;
    var CountUpFlag = 0;
    var $window = $(window);
    $window.on('load scroll', function() {
        var top = $window.scrollTop();
        var height = $window.height();
        if (top + height >= blockTop && CountUpFlag == 0) {
            CountUp();
            CountUpFlag = 1;
        }
    });
    function CountUp() {
        $('.demo-pie-2').pieChart({
            barColor: '#252525',
            trackColor: '#5F5F5F',
            lineCap: 'butt',
            lineWidth: 8,
             size: 135,
            animate: {
              duration: 3000, 
              enabled: true
          },
          onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text("Українська");
        }
    });
    }
});
// круглый прогресс бар
$(function() {
    var blockTop = $('.demo-pie-1').offset().top;
    var CountUpFlag = 0;
    var $window = $(window);
    $window.on('load scroll', function() {
        var top = $window.scrollTop();
        var height = $window.height();
        if (top + height >= blockTop && CountUpFlag == 0) {
            CountUp();
            CountUpFlag = 1;
        }
    });
    function CountUp() {
       $('.demo-pie-1').pieChart({
        barColor: '#252525',
        trackColor: '#5F5F5F',
        lineCap: 'butt',
        lineWidth: 8,
        size: 135,
        animate: {
          duration: 3000, 
          enabled: true
      },
      onStep: function (from, to, percent) {
        $(this.element).find('.pie-value').text("Русский");
    }
});
   }
});
    // Уведомление формы
     $(' .contacts-form-button').on('click', function () {
            swal('Сообщение отправлено').catch(swal.noop)
  })
