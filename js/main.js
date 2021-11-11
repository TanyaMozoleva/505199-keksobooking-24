// import { getRandomInt, getRandomFloat, getShuffleArray } from './utils.js';
import { createAdvertisement } from './data.js';

import { renderCards } from './card.js';

import { unactivateForm, activateForm } from './form.js';

// import { createMarker, returnDefaultMapView } from './map.js';
import './map.js';

const ADVERTISEMENT_COUNT = 10;

const advertisements = Array.from(
  { length: ADVERTISEMENT_COUNT },
  createAdvertisement
);

renderCards(advertisements);

unactivateForm();
activateForm();
