$(function () {
    $('.main_slide').slick({
        arrows: false,
        //autoplay: true,
    });

    $('.product_slide').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('#mainProduct .arrows i:first-child').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });
    $('#mainProduct .arrows i:last-child').on('click', function () {
        $('.product_slide').slick('slickNext')
    });
})