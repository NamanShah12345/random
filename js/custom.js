jQuery(function () {
    $('.gt-quality-gift-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        // centerMode: true,
        centerPadding: '60px',
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
    $('.gt-gift-popup-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    $('.modal').on('shown.bs.modal', function (e) {
        $('.gt-gift-popup-slider').slick('setPosition');
    });

    $('.from-select2').select2({
        placeholder: 'This is my placeholder',
        // allowClear: true
    });


    $('.gift-toggler').on('click', function () {
        $('.gifts-collapse').toggleClass('show');
    });

    $('.exchange-search-btn').on('clcik', function () {
        $('.gifts-items-header').toggleClass('show');
    });

    var datascroll = $('div[data-scrollbar]').length;

    if (datascroll > 0) {
        Scrollbar.initAll();
    }
});