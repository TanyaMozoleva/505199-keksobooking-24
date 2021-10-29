// const renderCards = (advertisements) => {
//   advertisements.forEach((advertisement) => {
//     const templateElement = document.querySelector('#card');
//     const cardPopup = templateElement.content.cloneNode(true);

//     const offerTitle = cardPopup.querySelector('.popup__title');
//     offerTitle.textContent = advertisement.offer.title;

//     const offerAddress = cardPopup.querySelector('.popup__text--address');
//     offerAddress.textContent = advertisement.offer.address;

//     const offerPrice = cardPopup.querySelector('.popup__text--price');
//     offerPrice.textContent = `${advertisement.offer.price} ₽/ночь`;

//     const offerType = cardPopup.querySelector('.popup__type');

//     const houseType = {
//       flat: 'Квартира',
//       bungalow: 'Бунгало',
//       house: 'Дом',
//       palace: 'Дворец',
//       hotel: 'Отель',
//     };

//     console.log(Object.values(houseType));
//     console.log(Object.keys(houseType));

//     offerType.textContent = houseType[advertisement.offer.type];
//     console.log(offerType.textContent, advertisement.offer.type);

//     const offerCapacity = cardPopup.querySelector('.popup__text--capacity');
//     offerCapacity.textContent = `${advertisement.offer.rooms} комнаты для ${advertisement.offer.guests} гостей`;

//     const offerTime = cardPopup.querySelector('.popup__text--time');
//     offerTime.textContent = `Заезд после ${advertisement.offer.checkin}, выезд до ${advertisement.offer.checkout}`;

//     const offerFeatures = cardPopup.querySelector('.popup__features');
//     const featuresList = offerFeatures.querySelectorAll('.popup__feature');

//     featuresList.forEach((futuresListItem) => {
//       const isNecessary = advertisement.offer.features.some((feature) =>
//         futuresListItem.classList.contains(`popup__feature--${feature}`)
//       );
//       if (!isNecessary) {
//         futuresListItem.remove();
//       }
//     });

//     const offerDescription = cardPopup.querySelector('.popup__description');
//     offerDescription.textContent = advertisement.offer.description;

//     const offerPhotos = cardPopup.querySelector('.popup__photos');
//     const photoListFragment = document.createDocumentFragment();

//     advertisement.offer.photos.forEach((photoItem) => {
//       const photoElement = cardPopup
//         .querySelector('.popup__photo')
//         .cloneNode(true);
//       photoElement.src = photoItem;
//       photoListFragment.appendChild(photoElement);
//     });

//     offerPhotos.innerHTML = '';
//     offerPhotos.appendChild(photoListFragment);

//     cardPopup.querySelector('.popup__avatar').src = advertisement.author.avatar;

//     const hide = (className) => {
//       const element = cardPopup.querySelector(className);
//       if (element.innerHTML === '' || element.src === '') {
//         element.style.display = 'none';
//       }
//     };

//     hide('.popup__avatar');
//     hide('.popup__text');
//     hide('.popup__features');
//     hide('.popup__description');
//     hide('.popup__photos');

//     const mapCanvas = document.querySelector('#map-canvas');
//     mapCanvas.appendChild(cardPopup);
//   });
//   console.log(advertisements);
// };
// export { renderCards };

//////////////////////////////////////////

const createCardTemplate = () => {
  const templateElement = document.querySelector('#card');
  const cardPopup = templateElement.content.cloneNode(true);
  return cardPopup;
};

const renderCard = (cardPopup, advertisement) => {
  const offerTitle = cardPopup.querySelector('.popup__title');
  offerTitle.textContent = advertisement.offer.title;

  const offerAddress = cardPopup.querySelector('.popup__text--address');
  offerAddress.textContent = advertisement.offer.address;

  const offerPrice = cardPopup.querySelector('.popup__text--price');
  offerPrice.textContent = `${advertisement.offer.price} ₽/ночь`;

  const offerType = cardPopup.querySelector('.popup__type');

  const houseType = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель',
  };

  offerType.textContent = houseType[advertisement.offer.type];

  const offerCapacity = cardPopup.querySelector('.popup__text--capacity');
  offerCapacity.textContent = `${advertisement.offer.rooms} комнаты для ${advertisement.offer.guests} гостей`;

  const offerTime = cardPopup.querySelector('.popup__text--time');
  offerTime.textContent = `Заезд после ${advertisement.offer.checkin}, выезд до ${advertisement.offer.checkout}`;

  const offerFeatures = cardPopup.querySelector('.popup__features');
  const featuresList = offerFeatures.querySelectorAll('.popup__feature');

  featuresList.forEach((futuresListItem) => {
    const isNecessary = advertisement.offer.features.some((feature) =>
      futuresListItem.classList.contains(`popup__feature--${feature}`)
    );
    if (!isNecessary) {
      futuresListItem.remove();
    }
  });

  const offerDescription = cardPopup.querySelector('.popup__description');
  offerDescription.textContent = advertisement.offer.description;

  const offerPhotos = cardPopup.querySelector('.popup__photos');
  const photoListFragment = document.createDocumentFragment();

  advertisement.offer.photos.forEach((photoItem) => {
    const photoElement = cardPopup
      .querySelector('.popup__photo')
      .cloneNode(true);
    photoElement.src = photoItem;
    photoListFragment.appendChild(photoElement);
  });

  offerPhotos.innerHTML = '';
  offerPhotos.appendChild(photoListFragment);

  cardPopup.querySelector('.popup__avatar').src = advertisement.author.avatar;

  const hide = (className) => {
    const element = cardPopup.querySelector(className);
    if (element.innerHTML === '' || element.src === '') {
      element.style.display = 'none';
    }
  };

  hide('.popup__avatar');
  hide('.popup__text');
  hide('.popup__features');
  hide('.popup__description');
  hide('.popup__photos');

  const mapCanvas = document.querySelector('#map-canvas');
  mapCanvas.appendChild(cardPopup);
};

const renderCards = (advertisements) => {
  advertisements.forEach((advertisement) => {
    renderCard();
  });
};

export { renderCards };
