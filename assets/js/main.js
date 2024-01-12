$(document).ready(function () {

    // Burger accordeon
    $('#burger').on('click', function () {
        $('#menu').slideToggle(500)
    });

    // main slider
    

    $('.offer__image').slick({
        // Здесь вы можете добавить настройки Slick Slider
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
    });

    $('.special__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
    });

    $('.famous__slider').slick({
        slidesToShow: 3,  // Количество отображаемых слайдов одновременно
        slidesToScroll: 1,  // Количество прокручиваемых слайдов за раз
        
        dots: false,  // Отображение точек навигации
        arrows: false,
        infinite: true,  // Бесконечная прокрутка
        
        autoplay: true,  // Автоматическая прокрутка
        autoplaySpeed: 2000  // Задержка между слайдами в миллисекундах
    });

    $('.famous__slider').on('beforeChange', function (event, slick, currentSlide) {
        // Определите ширину элемента прогресс-бара
        var progressBarWidth = $('.progress-bar').width();
    
        // Определите количество слайдов
        var totalSlides = slick.slideCount;
    
        // Вычислите новое положение элемента прогресс-бара
        var newPosition = (progressBarWidth / totalSlides) * currentSlide;
    
        // Примените смещение
        $('.progress-line').css('transform', 'translateX(' + newPosition + 'px)');
    });

    $('.about__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.reviews__slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
    });

    $('#phoneInput').inputmask('+7 (999) 999-99-99');
    $('#phoneInput1').inputmask('+7 (999) 999-99-99');
    $('#phoneInput2').inputmask('+7 (999) 999-99-99');

    // Список===================================================================

    $(".search-turs__input").on("focus", function () {
        showSuggestions($(this));
    });

    $(".search-turs__input").on("input", function () {
        showSuggestions($(this));
    });

    // Обработчик выбора подсказки
    $(".suggestions-list").on("click", "li", function () {
        var selectedValue = $(this).text();
        $(this).closest(".custom-select").find(".search-turs__input").val(selectedValue);
        $(this).closest(".suggestions-list").hide();
    });

    // Скрывать список подсказок при клике вне области
    $(document).on("click", function (event) {
        if (!$(event.target).closest(".custom-select").length) {
            $(".suggestions-list").hide();
        }
    });

    function showSuggestions(inputElement) {
        var inputValue = inputElement.val().toLowerCase();
        var suggestionsList = inputElement.siblings(".suggestions-list");

        // Очистка списка подсказок
        suggestionsList.empty();

        // Замените этот блок кода на ваш механизм получения подсказок
        var suggestions = ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4", "Вариант 5", "Вариант 6", "Вариант 7", "Вариант 8", "Вариант 9"];
        suggestions.forEach(function (suggestion) {
            suggestionsList.append("<li>" + suggestion + "</li>");
        });

        // Показать список подсказок
        suggestionsList.show();

        // Установить высоту списка и добавить прокрутку, если необходимо
        var maxHeight = 100;
        suggestionsList.css({ maxHeight: maxHeight }).addClass("scrollable");
    }

    // 
    

});

