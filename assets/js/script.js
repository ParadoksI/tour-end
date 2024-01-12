function togglePeople() {
    var menuPeople = document.querySelector('.search-turs__var__func__menu');
    var containerPeople = document.querySelector('.people__var');

    menuPeople.classList.toggle('active');
    containerPeople.classList.toggle('active');
}

function togglePrice() {
    var priceDrop = document.getElementById('priceDrop');

    // Добавляем или убираем класс active
    priceDrop.classList.toggle('active');

    // Проверяем, есть ли у блока класс active
    var isActive = priceDrop.classList.contains('active');

    // Если класс active есть, создаем checkbox'ы
    if (isActive) {
        createPriceCheckboxes();
    }
}

function createPriceCheckboxes() {
    var priceDrop = document.getElementById('priceDrop');

    // Убираем все дочерние элементы перед созданием новых
    priceDrop.innerHTML = '';

    // Массив с ценами (в тг)
    var prices = [5000, 10000, 20000, 30000, 50000, 100000, 200000];

    // Создаем div для каждой пары input и label и добавляем их в блок priceDrop
    prices.forEach(function (price) {
        var checkboxDiv = document.createElement('div');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = price;
        checkbox.id = 'priceCheckbox' + price; // Уникальный ID для каждого checkbox

        var label = document.createElement('label');
        label.textContent = price + ' тг';
        label.htmlFor = 'priceCheckbox' + price;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        priceDrop.appendChild(checkboxDiv);
    });
}

function updateStarCount(checkbox) {
    var starCountElement = document.getElementById('muchStar');
    var checkboxes = document.querySelectorAll('#starCheckboxes input[type="checkbox"]');

    if (checkbox.value === '11') {
        checkboxes.forEach(function (cb) {
            cb.checked = checkbox.checked;
        });
        starCountElement.textContent = 'Все';
    } else {
        var checkedCheckboxes = document.querySelectorAll('#starCheckboxes input[type="checkbox"]:checked');
        starCountElement.textContent = checkedCheckboxes.length > 0 ? checkedCheckboxes.length + ' категорий' : '';
    }
}

function toggleStar() {
    var star = document.querySelector('.list__star');

    star.classList.toggle('active');
}

function toggleDropdown() {
    var dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
}

function toggleDropdownRest() {
    var dropdown = document.getElementById('droprest');
    dropdown.classList.toggle('active');
}



function updateSelection() {
    var anyCheckbox = document.querySelector('#dropdown input[value="1"]');
    var checkboxes = document.querySelectorAll('#dropdown input[type="checkbox"]');
    var selectedCount = 0;

    anyCheckbox.addEventListener('change', function () {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = anyCheckbox.checked;
        });
        dropdown.classList.remove('active');

        updateSelection();
    });

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedCount++;
        }
    });

    var pElement = document.getElementById('eat__value');
    if (selectedCount == 1) {
        pElement.textContent = 'Выбран ' + selectedCount + ' тип';
    }
    else {
        pElement.textContent = 'Выбрано ' + selectedCount + ' типов';
    }

}

var selectedCount = 0;

function updateSelectionAir() {
    var pElement = document.getElementById('air__value');
    var selectedRadio = document.querySelector('#dropair input[name="air"]:checked');

    if (pElement && selectedRadio) {
        pElement.textContent = selectedRadio.parentElement.textContent.trim();
    } else if (pElement) {
        pElement.textContent = 'Туроператоры';
    }

    var dropdown = document.getElementById('dropair');
    dropdown.classList.remove('active');
}


function toggleDropdownAir() {
    var dropdown = document.getElementById('dropair');
    dropdown.classList.toggle('active');
}
// Закрываем список при клике в любое место документа
document.addEventListener('click', function (event) {
    var dropdown = document.getElementById('dropdown');
    var dropdownToggle = document.querySelector('.search-turs__var__func');
    var priceDrop = document.getElementById('priceDrop');
    var priceToggle = document.getElementById('priceToggle');

    if (dropdown.classList == 'active') {
        if (!event.target.closest('.var__eat') && !event.target.closest('.search__eat label') && !event.target.closest('.search__eat') && !event.target.closest('.search__eat input')) {
            dropdown.classList.remove('active');
        }
    }
    else {
        if (!event.target.closest('.var__eat') && !event.target.closest('.search__eat label') && !event.target.closest('.search__eat') && !event.target.closest('.search__eat input')) {
            dropdown.classList.remove('active');
        }
    }
    var isClickInsideMenu = priceDrop.contains(event.target) || priceToggle.contains(event.target);


    if (!isClickInsideMenu) {
        priceDrop.classList.remove('active');
    }

    var listStar = document.getElementById('starCheckboxes');
    var starCountElement = document.getElementById('muchStar');
    var starCountsElement = document.getElementById('muchsStars');

    // Проверяем, является ли элемент, по которому произошел клик, частью меню
    var isClickInsideMenu1 = listStar.contains(event.target) || starCountElement.contains(event.target) || starCountsElement.contains(event.target);

    // Если клик был вне меню, убираем класс active и сбрасываем текст
    if (!isClickInsideMenu1) {
        listStar.classList.remove('active');
    }

    var tourOperator = document.querySelector('.tour__operator');
    var dropair = document.getElementById('dropair');

    var isClickInsideMenu2 = tourOperator.contains(event.target) || dropair.contains(event.target);

    if (!isClickInsideMenu2) {
        dropair.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var restTypeRadios = document.getElementsByName('restType');
    var restVarElement = document.querySelector('.rest__var');
    var dropdown = document.getElementById('droprest');

    restTypeRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            restVarElement.textContent = this.value.charAt(0).toUpperCase() + this.value.slice(1);
            dropdown.classList.remove('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Обработчик изменения значения

    var hidenSerch = document.querySelector(".search-turs__hide");
    var searchForm = document.querySelector(".search-turs__form");
    var funcForm = document.querySelector(".search__func");
    var showButton = document.getElementById("show__search");

    showButton.addEventListener("click", function () {
        hidenSerch.classList.toggle("active");
        searchForm.classList.toggle("active");
        funcForm.classList.toggle("active");

        var buttonText = hidenSerch.classList.contains("active") ? "Скрыть" : "Еще фильтры";
        showButton.textContent = buttonText;
    });

    var calendarElement = document.querySelector(".calendar");
    var selectedDates = [];

    // Устанавливаем текущую дату в поле "calendar"
    var currentDate = new Date();
    calendarElement.textContent = currentDate.toLocaleDateString();

    // Инициализируем календарь при клике на "calendar"
    flatpickr(calendarElement, {
        mode: "range",
        onChange: function (selected, dateStr, instance) {
            // Обновляем выбранные даты
            selectedDates = selected;

            // Если выбрана одна и та же дата дважды, отображаем только ее
            if (selectedDates.length === 2 && selectedDates[0].getTime() === selectedDates[1].getTime()) {
                calendarElement.textContent = selectedDates[0].toLocaleDateString();
                return;
            }

            // Если уже выбраны две даты, обновляем текст в поле "calendar"
            if (selectedDates.length === 2) {
                var startDate = selectedDates[0].toLocaleDateString();
                var endDate = selectedDates[0].addDays(13).toLocaleDateString();

                // Проверяем, если вторая дата находится в пределах двух недель, то добавляем класс "endRange" только ей
                if (selectedDates[1].getTime() >= selectedDates[0].getTime() && selectedDates[1].getTime() <= selectedDates[0].addDays(13).getTime()) {
                    endDate = selectedDates[1].toLocaleDateString();
                }

                calendarElement.textContent = startDate + " - " + endDate;
            } else if (selectedDates.length === 1) {
                // Если выбрана только одна дата, обновляем текст в поле "calendar" на две недели вперед
                var startDate = selectedDates[0].toLocaleDateString();
                var endDate = selectedDates[0].addDays(13).toLocaleDateString();
                calendarElement.textContent = startDate + " - " + endDate;
            }

            // Подсвечиваем и добавляем класс "endRange" к второй дате, если она находится в пределах двух недель
            var flatpickrInstance = instance;

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

    // ======================================================


    var decrementBtn = document.getElementById('decrementBtn');
    var incrementBtn = document.getElementById('incrementBtn');

    // Элемент, отображающий количество взрослых
    var varPeopleElement = document.getElementById('varPeople');

    // Текущее количество взрослых
    var varPeopleCount = 1;

    // Обработчик события для уменьшения количества взрослых
    decrementBtn.addEventListener('click', function () {
        if (varPeopleCount > 1) {
            varPeopleCount--;
            updateVarPeopleElement();
        }
    });

    // Обработчик события для увеличения количества взрослых
    incrementBtn.addEventListener('click', function () {
        varPeopleCount++;
        updateVarPeopleElement();
    });

    // Функция обновления текста с количеством взрослых
    function updateVarPeopleElement() {
        varPeopleElement.textContent = varPeopleCount + ' взрослых';
    }

    var optionsContainer = document.getElementById('optionsContainer');
    var childrenSelect = document.getElementById('childrenSelect');
    var selectedOptionContainer = document.getElementById('selectedOptionContainer');

    childrenSelect.addEventListener('change', function () {
        var selectedOption = childrenSelect.options[childrenSelect.selectedIndex];

        if (selectedOption.value !== '') {
            displaySelectedOption(selectedOption.text);
        }
    });

    function displaySelectedOption(text) {
        var pTag = document.createElement('p');
        pTag.textContent = text;

        // Добавить стили к pTag
        pTag.style.border = '1px solid #C2A97D'; // Цвет границы
        pTag.style.borderRadius = '5px'; // Border-radius
        pTag.style.padding = '5px 20px'; // Padding

        // Добавить pTag в контейнер
        optionsContainer.appendChild(pTag);

        // Скрыть select
        childrenSelect.style.display = 'none';

        // Переместить select ниже
        selectedOptionContainer.appendChild(childrenSelect.cloneNode(true));

        // Очистить значение выбора в исходном select
        childrenSelect.value = '';

        // Показать select
        childrenSelect.style.display = 'block';
    }

});

// Добавим метод addDays к объекту Date
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};
