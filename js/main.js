// import { getRandomInt, getRandomFloat, getShuffleArray } from './utils.js';
// import { createAdvertisement } from './data.js';

// import {  setFormSubmit } from './form.js';

import { createMarkers } from './map.js';

import { getData } from './api.js';

// import { createDownloadMessage } from './popup.js';

const ADVERTISEMENT_COUNT = 10;

// const advertisements = Array.from(
//   { length: ADVERTISEMENT_COUNT },
//   createAdvertisement
// );

// createMarkers(advertisements);

// unactivateForm();
// activateForm();

getData((advertisements) => {
  createMarkers(advertisements.slice(0, ADVERTISEMENT_COUNT));
});
