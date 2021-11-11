import { getRandomInt, getRandomFloat, getShuffleArray } from './utils.js';
const TITLES = [
  'Гостевой дом',
  'Oтель Modart',
  'Студия "Варварская',
  'Palace Living Gold',
  'Дом у озера',
];

const DESCRIPTIONS = [
  'Гостевой дом с садом и принадлежностями для барбекю',
  'Oтель Modart расположен рядом с пляжем в Олимпийском парке',
  'Апартаменты-студио «Варварская» расположены в самом центре Нижнего Новгорода',
  'Дворец с уникальным дизайном',
  'Загородный комплекс «Лесные пруды» подарит возможность насладиться природой и свежим воздухом',
];

const ACCOMODATIONS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TIMES = ['12:00', '13:00', '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createAdvertisement = (item, index) => {
  const locationLat = getRandomFloat(35.65, 35.7, 5);
  const locationLng = getRandomFloat(139.7, 139.8, 5);

  getShuffleArray(FEATURES);
  getShuffleArray(PHOTOS);

  let avatarIndex = String(index + 1);
  if (avatarIndex.length < 2) {
    avatarIndex = `0${avatarIndex}`;
  }

  return {
    author: {
      avatar: `img/avatars/user${avatarIndex}.png`,
    },
    offer: {
      title: TITLES[getRandomInt(0, TITLES.length - 1)],
      address: `${locationLat}, ${locationLng}`,
      price: getRandomInt(0, 3000),
      type: ACCOMODATIONS[getRandomInt(0, ACCOMODATIONS.length - 1)],
      rooms: getRandomInt(0, 10),
      guests: getRandomInt(0, 100),
      checkin: TIMES[getRandomInt(0, TIMES.length - 1)],
      checkout: TIMES[getRandomInt(0, TIMES.length - 1)],
      features: FEATURES.slice(0, getRandomInt(0, FEATURES.length)),
      description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
      photos: PHOTOS.slice(0, getRandomInt(0, PHOTOS.length)),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

export { createAdvertisement };
