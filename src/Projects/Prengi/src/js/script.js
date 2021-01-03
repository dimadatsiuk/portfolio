$(document).ready(function($) {
    var $window = $(window), $element = $('.nav');

    function resize() {
      if ($window.width() < 768) {
        return $element.addClass('header');
      }    
      $element.removeClass('header');     /* поключить херобору к класу который добавляет стики а это отключить */
    }

    $window.resize(resize).trigger('resize');
});



$(document).ready(function(){
    $('.carousel').slick({
        dots: false,
        speed: 0,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/decisions/decisions_arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/decisions/decisions_arrow_right.svg"></button>',

    });



    /* Modal */
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay_modal, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay_modal, #consultation, #thanks').fadeOut('slow');
    });


    /* mail */

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    

    /* pageuo */

    $(window).scroll(function() {
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });




    $('.german').on('click', function() {
        $('#ru' ).fadeOut('fast')
    });
    $('.german').on('click', function() {
        $('#de' ).fadeIn('fast')
    });
    $('.russian').on('click', function() {
        $('#de' ).fadeOut('fast')
    });
    $('.russian').on('click', function() {
        $('#ru' ).fadeIn('fast')
    });



   



    
  });
  