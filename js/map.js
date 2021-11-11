import { renderCards } from './card.js';

import { unactivateForm, activateForm } from './form.js';

const LOCATION_LAT_DEFAULT = 35.681729;
const LOCATION_LNG_DEFAULT = 139.753927;

const addressInput = document.querySelectorAll('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
    addressInput.value = `${LOCATION_LAT_DEFAULT}, ${LOCATION_LNG_DEFAULT}`;
  })
  .setView({ lat: LOCATION_LAT_DEFAULT, lng: LOCATION_LNG_DEFAULT }, 10);

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

mainPinMarker.on('moovend', (evt) => {
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
    10
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

const createMarker = (advertisements) => {
  advertisements.forEach((advertisement) => {
    const lat = advertisement.offer.location.lat;
    const lng = advertisement.offer.location.lng;
    const similarOfferIcon = L.icon({
      iconUrl: '/img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({ lat, lng }, { similarOfferIcon });
    marker.addTo(markerGroup).bindPopup(renderCards(advertisements));

    return marker;
  });
};
// const similarOfferIcon = L.icon({
//   iconUrl: '/img/pin.svg',
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
// });

// const markerGroup = L.layerGroup().addTo(map);

// const createMarker = (advertisements) => {
//   advertisements.forEach((advertisement) => {
//     const marker = L.marker(
//       {
//         lat: advertisement.offer.location.lat,
//         lng: advertisement.offer.location.lng,
//       },
//       { icon: similarOfferIcon }
//     );
//     marker.addTo(markerGroup).bindPopup(renderCards(advertisement));
//     return marker;
//   });
// };

// const deleteMarker = () => {
//   markerGroup.clearLayers();
// };

// export { createMarker, returnDefaultMapView };
