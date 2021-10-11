const getRandomInt = function (min, max) {
  if (min >= 0 && min < max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  throw new Error('Переданный диапазон чисел введен некорректно');
};

getRandomInt(20, 30);

const getRandomFloat = function (min, max, accuracy) {
  if (min >= 0 && min < max) {
    const floatNumber = Math.random() * (max - min) + min;
    return Number(floatNumber.toFixed(accuracy));
  }
  throw new Error('Переданный диапазон чисел введен некорректно');
};

getRandomFloat(20.5, 35.5, 6);


const getShuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const getAvatarUrl = (item, number) => {
  number++;
  if (number < 10) {
    return `img/avatars/user0${number}.png`;
  }
  return `img/avatars/user${number}.png`;
};

const ADVERTISEMENT_COUNT = 10;

// author
const AVATARS = Array.from({length: ADVERTISEMENT_COUNT}, getAvatarUrl);

// offer
const TITLES = [
  'Гостевой дом',
  'Oтель Modart',
  'Студия "Варварская"',
  'Palace Living Gold',
  'Дом у озера'
];

const DESCRIPTIONS = [
  'Гостевой дом с садом и принадлежностями для барбекю',
  'Oтель Modart расположен рядом с пляжем в Олимпийском парке',
  'Апартаменты-студио «Варварская» расположены в самом центре Нижнего Новгорода',
  'Дворец с уникальным дизайном',
  'Загородный комплекс «Лесные пруды» подарит возможность насладиться природой и свежим воздухом'
];

const ACCOMODATIONS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TIMES = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createAdvertisement = (item,index) => {

  const locationLat = getRandomFloat (35.65000, 35.70000, 5);
  const locationLng = getRandomFloat (139.70000, 139.80000, 5);

  getShuffleArray(AVATARS);
  getShuffleArray(FEATURES);
  getShuffleArray(PHOTOS);

  return {
    author: {
      avatar: AVATARS[index],
    },
    offer: {
      title: TITLES[getRandomInt(0, TITLES.length-1)],
      adress: String($ {locationLat }, $ { locationLng}),
      price: getRandomInt(0, 3000),
      type: ACCOMODATIONS[getRandomInt(0, ACCOMODATIONS.length-1)],
      rooms: getRandomInt(0, 10),
      guests: getRandomInt(0, 100),
      checkin: TIMES[getRandomInt(0, TIMES.length-1)],
      checkout: TIMES[getRandomInt(0, TIMES.length-1)],
      features: FEATURES.slice(0, getRandomInt(0, FEATURES.length)),
      description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length-1)],
      photos: PHOTOS.slice(0, getRandomInt(0, PHOTOS.length)),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const Advertisements = Array.from({length: ADVERTISEMENT_COUNT}, createAdvertisement);

