
$(document).ready(function () {
    // menu
    $('.header__mob-menu').click(function () {
        $('.header__mob-menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
        $('.menu').toggleClass('open');
        if ($('body').hasClass('fixed-page')) {
            $('.menu').removeClass('open');
            $('.menu').css('display', 'none');
        }
        else{
            $('.menu').addClass('open');
            $('.menu').css('display', 'flex');
        }
    });

    $(window).resize(function () {
        if ($(window).width() >= 768) {
            $('.header__mob-menu').removeClass('open-menu');
            $('body').removeClass('fixed-page');
            $('.menu').removeClass('open');
        };
    })

    $(window).scroll(function () {
        let header = $('.header');
        if ($(this).scrollTop() > 1) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });

    $(document).click(function (e) {
        if (!$('.header__mob-menu span').is(e.target) && !$('.menu').is(e.target) && $('.menu').hasClass('open') && $('.menu__link').has(e.target).length === 0) {
            $('.header__mob-menu').removeClass('open-menu');
            $('body').removeClass('fixed-page');
            $('.menu').removeClass('open');
        };
    });
    // end menu block

    //slick slider
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
    });
    // end slick slider

    // tabs
    $(function () {
        var tab = $('#tabsServis .tabs-items > div');
        tab.hide().filter(':first').show();

        // Клики по вкладкам.
        $('#tabsServis .tabs-nav a').click(function () {
            tab.hide();
            tab.filter(this.hash).show();
            $('#tabsServis .tabs-nav a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();

        // Клики по якорным ссылкам.
        $('.tabs-target').click(function () {
            $('#tabsServis .tabs-nav a[href=' + $(this).attr('href') + ']').click();
        });

        // Отрытие вкладки из хеша URL
        if (window.location.hash) {
            $('#tabs-nav a[href=' + window.location.hash + ']').click();
            window.scrollTo(0, $("#".window.location.hash).offset().top);
        }
    });
    $(function () {
        var tab = $('#tabsPrice .tabs-items > div');
        tab.hide().filter(':first').show();

        // Клики по вкладкам.
        $('#tabsPrice .tabs-nav a').click(function () {
            tab.hide();
            tab.filter(this.hash).show();
            $('#tabsPrice .tabs-nav a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();

        // Клики по якорным ссылкам.
        $('.tabs-target').click(function () {
            $('#tabsPrice .tabs-nav a[href=' + $(this).attr('href') + ']').click();
        });

        // Отрытие вкладки из хеша URL
        if (window.location.hash) {
            $('#tabs-nav a[href=' + window.location.hash + ']').click();
            window.scrollTo(0, $("#".window.location.hash).offset().top);
        }
    });
    // end tabs

    $(function () {
        $('#GET-phone').mask('+00 (000) 000-00-00');
    });


    $('.about__statistics').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(function () {
        $("[data-fancybox]").fancybox();
    });


});

