var sliderContainer = document.getElementById("sliderContainer");
var calendarElement = document.querySelector(".cfilter__calendar p");
var selectedDate;

// Устанавливаем текущую дату в поле "calendar"
var currentDate = new Date();
calendarElement.textContent = "Отобразить весь календарь";

// Инициализируем календарь при клике на "calendar"
flatpickr(calendarElement, {
    mode: "single",
    onChange: function (selectedDates) {
        // Обновляем выбранную дату
        selectedDate = selectedDates[0];

        // Обновляем слайдер с новыми датами
        updateSlider(selectedDate);
    },
    onOpen: function () {
        calendarElement.classList.add("animate");
    },
    onClose: function () {
        calendarElement.classList.add("animate");
        // Добавьте задержку перед удалением класса для полного завершения анимации
        setTimeout(function () {
            calendarElement.classList.remove("animate");
        }, 300);
    }
});

// Инициализируем слайдер с текущей датой
initializeSlider(currentDate);

function initializeSlider(currentDate) {
    for (var i = 0; i < 30; i++) {
        var date = new Date(currentDate);
        date.setDate(date.getDate() + i);
        var slide = createSlide(date);
        sliderContainer.appendChild(slide);
    }

    // Инициализируем слайдер
    slick = $('.cfilter__dates').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true
    });
}

$(sliderContainer).on('click', '.cfilter__dates__slide', function (event) {
    var clickedIndex = $(this).attr("data-slick-index");
    slick.slick('slickGoTo', clickedIndex, false);
});

function updateSlider(selectedDate) {
    // Удалить старые слайды
    $('.cfilter__dates').slick('unslick');
    sliderContainer.innerHTML = '';

    // Генерировать новые слайды относительно выбранной даты
    initializeSlider(selectedDate);
}

function createSlide(date) {
    var daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    var dayOfWeek = daysOfWeek[date.getDay()];
    var dayOfMonth = date.getDate();
    var month = date.toLocaleString("ru-RU", { month: "long" });

    var slide = document.createElement("div");
    slide.classList.add("cfilter__dates__slide");

    slide.innerHTML = `
        <div class="cfilter__dates__week">${dayOfWeek}</div>
        <div class="cfilter__dates__day">${dayOfMonth}</div>
        <div class="cfilter__dates__month">${month}</div>
    `;

    return slide;
}

$('.cfilter__dates').on('afterChange', function (event, slick, currentSlide) {
    $('.cfilter__dates__slide').removeClass('active');
    $('.cfilter__dates__slide').eq(currentSlide).addClass('active');
});
