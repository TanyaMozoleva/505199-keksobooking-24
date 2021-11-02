const advertisementForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

// priceInput.style = 'border: 5px solid red'; стили для ошибки

const MIN_PRICES_OF_TYPES = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const typeInput = document.querySelector('#type');
const roomNumberInput = document.querySelector('#room_number');
const capacityGuestsInput = document.querySelector('#capacity');

const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

const addressInput = document.querySelector('#address');

const submitButton = document.querySelector('.ad-form__submit');
const resetButton = document.querySelector('.ad-form__reset');

const setFormStatus = (isActive) => {
  advertisementForm.classList.toggle('ad-form--disabled', !isActive);
  mapFiltersForm.classList.toggle('map__filters--disabled', !isActive);

  [...advertisementForm.children, ...mapFiltersForm.children].forEach(
    (element) => (element.disabled = !isActive)
  );
};

const unactivateForm = () => setFormStatus(false);
const activateForm = () => setFormStatus(true);

// Валидация заголовка объявления //

const onTitleInput = () => {
  titleInput.addEventListener('input', () => {
    const valueLength = titleInput.value.length;
    if (valueLength === 0) {
      titleInput.setCustomValidity(
        `Минимальное количество символов ${MIN_TITLE_LENGTH} симв.`
      );
    } else if (valueLength < MIN_TITLE_LENGTH) {
      titleInput.setCustomValidity(
        `Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`
      );
      titleInput.style = 'border: 5px solid red';
    } else if (valueLength > MAX_TITLE_LENGTH) {
      titleInput.setCustomValidity(
        `Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`
      );
      titleInput.style = 'border: 5px solid red';
    } else if (valueLength === MIN_TITLE_LENGTH) {
      titleInput.style = '';
    } else {
      titleInput.setCustomValidity('');
    }
    titleInput.reportValidity();
  });
};
onTitleInput();

//Валидация цены //

const onPriceInput = () => {
  priceInput.addEventListener('input', () => {
    const valuePrice = priceInput.value;
    if (valuePrice > MAX_PRICE_VALUE) {
      priceInput.setCustomValidity(
        `Указанная стоимость больше максимально допустимого значения: ${MAX_PRICE_VALUE}`
      );
    } else {
      priceInput.setCustomValidity('');
    }
    priceInput.reportValidity();
  });
};

onPriceInput();

const onValidatePrice = () => {
  priceInput.addEventListener('input', () => {
    if (priceInput.validity.valueMissing) {
      return priceInput.setCustomValidity('Пожалуйста, введите цену');
    } else if (priceInput.value < MIN_PRICES_OF_TYPES[typeInput.value]) {
      return priceInput.setCustomValidity(
        `Минимальная цена для выбранного типа жилья должна быть не меньше ${
          MIN_PRICES_OF_TYPES[typeInput.value]
        } руб. за ночь`
      );
    }
    return priceInput.setCustomValidity('');
  });
  priceInput.reportValidity();
};

onValidatePrice(priceInput);

//Валидация количества комнат и гостей//
const onRoomSelect = () => {
  capacityGuestsInput.addEventListener('change', () => {
    const roomAmount = Number(roomNumberInput.value);
    const guestsAmount = Number(capacityGuestsInput.value);

    if (roomAmount < guestsAmount) {
      capacityGuestsInput.setCustomValidity(
        'Количество комнат не может быть меньше количества гостей'
      );
    } else if (roomAmount === 100 && guestsAmount !== 0) {
      capacityGuestsInput.setCustomValidity('Доступно только: «не для гостей»');
    } else if (roomAmount !== 100 && guestsAmount === 0) {
      capacityGuestsInput.setCustomValidity(
        'Пожалуйста, введите количество гостей'
      );
    } else {
      capacityGuestsInput.setCustomValidity('');
    }
    capacityGuestsInput.reportValidity();
  });
};
onRoomSelect(roomNumberInput);

//Синхронизация времени заезда и выезда //

timeInSelect.addEventListener('change', () => {
  timeOutSelect.value = timeInSelect.value;
});

timeOutSelect.addEventListener('change', () => {
  timeInSelect.value = timeOutSelect.value;
});

submitButton.addEventListener('click', () => {
  onPriceInput();
  onRoomSelect();
});

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  advertisementForm.reset();
  // addressInput.value = `${locationLat}, ${locationLng}`;
  addressInput.value = advertisement.offer.address;
  mapFiltersForm.reset();
});

export { unactivateForm, activateForm };
