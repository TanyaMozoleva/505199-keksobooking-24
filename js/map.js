import { getAdvertisementCard } from './card.js';

import { activateForm, unactivateForm } from './form.js';

const LOCATION_LAT_DEFAULT = 35.68172;
const LOCATION_LNG_DEFAULT = 139.75392;
const ZOOM_MAP = 10;

const addressInput = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
    addressInput.value = `${LOCATION_LAT_DEFAULT}, ${LOCATION_LNG_DEFAULT}`;
  })
  .setView({ lat: LOCATION_LAT_DEFAULT, lng: LOCATION_LNG_DEFAULT }, ZOOM_MAP);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

////// главная метка

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

//// добавление метки на карту и возможность ее перемещения

const mainPinMarker = L.marker(
  {
    lat: LOCATION_LAT_DEFAULT,
    lng: LOCATION_LNG_DEFAULT,
  },
  { draggable: true, icon: mainPinIcon }
);
mainPinMarker.addTo(map);

// обработчик - возвращает новые координаты

mainPinMarker.on('move', (evt) => {
  const mainPinCoordinates = evt.target.getLatLng();
  addressInput.value = `${mainPinCoordinates.lat.toFixed(
    5
  )}, ${mainPinCoordinates.lng.toFixed(5)}`;
});

// Возвращаем метку и карту к исходному состоянию

const returnDefaultMapView = () => {
  map.setView(
    {
      lat: LOCATION_LAT_DEFAULT,
      lng: LOCATION_LNG_DEFAULT,
    },
    ZOOM_MAP
  );

  mainPinMarker.setLatLng({
    lat: LOCATION_LAT_DEFAULT,
    lng: LOCATION_LNG_DEFAULT,
  });

  addressInput.value = `${LOCATION_LAT_DEFAULT}, ${LOCATION_LNG_DEFAULT}`;

  map.closePopup();
};

// отображение меток объявлений

const markerGroup = L.layerGroup().addTo(map);

const createMarkers = (advertisements) => {
  advertisements.forEach((advertisement) => {
    const lat = advertisement.location.lat;
    const lng = advertisement.location.lng;
    const similarOfferIcon = L.icon({
      iconUrl: '/img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({ lat, lng }, { similarOfferIcon });
    marker.addTo(markerGroup).bindPopup(getAdvertisementCard(advertisement));
  });
};

// const deleteMarkers = () => {
//   markerGroup.clearLayers();
// };

export { createMarkers, mainPinMarker };
