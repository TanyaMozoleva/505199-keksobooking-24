import { sendData, API_ADDRESS } from './api.js';
import { returnDefaultMapView } from './map.js';
import { createPopupMessage, success, error } from './popup.js';

const advertisementForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

const MIN_PRICES_OF_TYPES = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const ROOMINESS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const typeInput = document.querySelector('#type');

const roomNumberInput = document.querySelector('#room_number');
const capacityGuestsInput = document.querySelector('#capacity');
const capacityGuestsOption = capacityGuestsInput.querySelectorAll('option');

const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

const addressInput = document.querySelector('#address');

const form = document.querySelector('.ad-form');
const submitButton = document.querySelector('.ad-form__submit');
const resetButton = form.querySelector('.ad-form__reset');

const setFormStatus = (isActive) => {
  advertisementForm.classList.toggle('ad-form--disabled', !isActive);
  mapFiltersForm.classList.toggle('map__filters--disabled', !isActive);

  [...advertisementForm.children, ...mapFiltersForm.children].forEach(
    (element) => (element.disabled = !isActive)
  );
};

const unactivateForm = () => setFormStatus(false);
const activateForm = () => setFormStatus(true);

const onErrorStyle = (element) => {
  if (element === true) {
    element.style = '';
  }
  element.style = 'border: 5px solid red';
};

// Валидация заголовка объявления //

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;
  if (valueLength === 0) {
    titleInput.setCustomValidity(
      `Минимальное количество символов ${MIN_TITLE_LENGTH} симв.`
    );
  } else if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
    onErrorStyle(titleInput);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(
      `Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`
    );
    onErrorStyle(titleInput);
  } else if (valueLength === MIN_TITLE_LENGTH) {
    titleInput.style = '';
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

//Валидация цены  //

typeInput.addEventListener('change', () => {
  const typeOfHouse = typeInput.value;
  priceInput.setAttribute('min', MIN_PRICES_OF_TYPES[typeOfHouse]);
  priceInput.setAttribute('max', MAX_PRICE_VALUE);
  priceInput.placeholder = MIN_PRICES_OF_TYPES[typeOfHouse];
});

//Валидация количества комнат и гостей  //

capacityGuestsInput.addEventListener('change', () => {
  const roomAmount = Number(roomNumberInput.value);
  const guestsAmount = Number(capacityGuestsInput.value);

  if (roomAmount < guestsAmount) {
    capacityGuestsInput.setCustomValidity(
      'Количество комнат не может быть меньше количества гостей'
    );
  } else if (
    roomAmount == Object.keys(ROOMINESS)[0] &&
    guestsAmount != Object.values(ROOMINESS)[0]
  ) {
    capacityGuestsInput.setCustomValidity(
      'Пожалуйста, введите количество гостей, не больше 1'
    );
  } else if (
    roomAmount == Object.keys(ROOMINESS)[1] &&
    guestsAmount != Object.values(ROOMINESS)[1]
  ) {
    capacityGuestsInput.setCustomValidity(
      'Пожалуйста, введите количество гостей.Доступно 1 или 2'
    );
  } else if (
    roomAmount == Object.keys(ROOMINESS)[2] &&
    guestsAmount != Object.values(ROOMINESS)[2]
  ) {
    capacityGuestsInput.setCustomValidity(
      'Пожалуйста, введите количество гостей.Доступно 1, 2, 3'
    );
  } else if (
    roomAmount == Object.keys(ROOMINESS)[3] &&
    guestsAmount != Object.values(ROOMINESS)[3]
  ) {
    capacityGuestsInput.setCustomValidity(
      'Пожалуйста, введите количество гостей. Доступно только: «не для гостей»'
    );
  } else {
    capacityGuestsInput.setCustomValidity('');
  }
  capacityGuestsInput.reportValidity();
});

//Синхронизация времени заезда и выезда //

timeInSelect.addEventListener('change', () => {
  timeOutSelect.value = timeInSelect.value;
});

timeOutSelect.addEventListener('change', () => {
  timeInSelect.value = timeOutSelect.value;
});

//координаты

addressInput.setAttribute('readonly', 'readonly');

// отправить форму

const setFormSubmit = () => {
  advertisementForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      API_ADDRESS,
      () => {
        createPopupMessage(success), returnDefaultMapView();
      },
      () => createPopupMessage(error),
      new FormData(evt.target)
    );
  });
};

setFormSubmit();

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  returnDefaultMapView();
});

export { unactivateForm, activateForm, setFormSubmit, form, mapFiltersForm };
