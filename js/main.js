import { createMarkers } from './map.js';

import { getData } from './api.js';

import { createDownloadMessage } from './popup.js';

// import { onFilterChange } from './filter.js';

const ADVERTISEMENT_COUNT = 10;

// const advertisements = Array.from(
//   { length: ADVERTISEMENT_COUNT },
//   createAdvertisement
// );

// createMarkers(advertisements);

// unactivateForm();
// activateForm();

const onSuccessData = (advertisements) =>
  createMarkers(advertisements.slice(0, ADVERTISEMENT_COUNT));

const onErrorData = () => createDownloadMessage();

getData(onSuccessData, onErrorData);
