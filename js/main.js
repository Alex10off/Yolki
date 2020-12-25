$(window).load(function () {
    $('.menu-button').on('click', function () {
        $('.menu').toggleClass('menu_active');
    });

    $('.menu__link').on('click', function () {
        $('.menu').toggleClass('menu_active');
    })

    /*select*/
    $('.select').on('click', function () {
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function () {
        let value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        //$('.select__dropdown').toggleClass('select__dropdown_open');
    });

    $('.flag').click(function () {
        let _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top - 100 + "px"
        });
        return false;
    });
    $('.price-card__link').click(function (e) {
        let link = $(this).attr("href");
        console.log(link);
        window.open(link);
        return false
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
});