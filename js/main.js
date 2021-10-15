import{getRandomInt, getRandomFloat, getShuffleArray} from './utils.js';
import{TITLES, DESCRIPTIONS, ACCOMODATIONS, TIMES, FEATURES, PHOTOS} from './data.js';

const ADVERTISEMENT_COUNT = 10;

const createAdvertisement = (item,index) => {

  const locationLat = getRandomFloat(35.65000, 35.70000, 5);
  const locationLng = getRandomFloat(139.70000, 139.80000, 5);

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
      title: TITLES[getRandomInt(0, TITLES.length-1)],
      adress: `${locationLat}, ${locationLng}`,
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

const advertisements = Array.from({length: ADVERTISEMENT_COUNT}, createAdvertisement);

