// import { getRandomInt, getRandomFloat, getShuffleArray } from './utils.js';
import { createAdvertisement } from './data.js';

import { unactivateForm, activateForm } from './form.js';

import { createMarkers } from './map.js';

const ADVERTISEMENT_COUNT = 10;

const advertisements = Array.from(
  { length: ADVERTISEMENT_COUNT },
  createAdvertisement
);

createMarkers(advertisements);

unactivateForm();
activateForm();
