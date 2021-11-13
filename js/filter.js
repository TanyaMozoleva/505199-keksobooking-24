import { mapFiltersForm } from './form.js';

const ANY_SELECT = 'any';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const DEFAULT_AMOUNT = 10;

const priceFilterRange = {
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
};

const filterSelects = mapFiltersForm.querySelectorAll('select');
const filterFeatures = mapFiltersForm.querySelector('.map__features');
const houseType = mapFiltersForm.querySelector('#housing-type');
const housePrice = mapFiltersForm.querySelector('#housing-price');
const houseRooms = mapFiltersForm.querySelector('#housing-rooms');
const houseGuests = mapFiltersForm.querySelector('#housing-guests');
const houseFeatures = mapFiltersForm.querySelector('#housing-features');
const checkboxFeatures = houseFeatures.querySelectorAll('.map__checkbox');

/// фильтр типа жилья

const filterHouseType = (advertisement) => {
  const filterValue = houseType.value;
  return filterValue === ANY_SELECT
    ? true
    : advertisement.offer.type === filterValue;
};

// фильтр цены жилья

const filterHousePrice = (advertisement) => {
  const filterValue = housePrice.value;
  switch (filterValue) {
    case priceFilterRange.LOW:
      return advertisement.offer.price <= MIN_PRICE;
    case priceFilterRange.MIDDLE:
      return (
        advertisement.offer.price >= MIN_PRICE &&
        advertisement.offer.price <= MAX_PRICE
      );
    case priceFilterRange.HIGH:
      return advertisement.offer.price >= MAX_PRICE;
  }
  return true;
};

/// фильт количество комнат

const filterHouseRooms = (advertisement) => {
  const filterValue = houseRooms.value;
  return filterValue === ANY_SELECT
    ? true
    : advertisement.offer.rooms === Number(filterValue);
};

/// фильтр количества гостей

const filterHouseGuests = (advertisement) => {
  const filterValue = houseGuests.value;
  return filterValue === ANY_SELECT
    ? true
    : advertisement.offer.guests === Number(filterValue);
};

// фильтр преимуществ жилья

const filterHouseFeatures = (advertisement) =>
  Array.from(checkboxFeatures).every((checkbox) => {
    if (!checkbox.checked) {
      return true;
    }
    if (!advertisement.offer.features) {
      return false;
    }
    return advertisement.offer.features.includes(checkbox.value);
  });

const getFilterAds = (advertisements) => {
  const filteredAds = [];
  for (let i = 0; i < advertisements.length; i++) {
    const advertisement = advertisements[i];
    if (
      filterHouseType(advertisement) &&
      filterHousePrice(advertisement) &&
      filterHouseRooms(advertisement) &&
      filterHouseGuests(advertisement) &&
      filterHouseFeatures(advertisement)
    ) {
      filteredAds.push(advertisement);
    }
  }
  return filteredAds;
};

export { getFilterAds };
