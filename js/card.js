const templateElement = document.querySelector('#card');

const houseType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const hide = (className, cardPopup) => {
  const element = cardPopup.querySelector(className);
  if (element.innerHTML === '' || element.src === '') {
    element.style.display = 'none';
  }
};

const renderFeatures = (offerFeatures, advertisement) => {
  const featuresList = offerFeatures.querySelectorAll('.popup__feature');

  featuresList.forEach((futuresListItem) => {
    const isNecessary = advertisement.offer.features.some((feature) =>
      futuresListItem.classList.contains(`popup__feature--${feature}`)
    );
    if (!isNecessary) {
      futuresListItem.remove();
    }
  });
};

const renderPhotos = (offerPhotos, advertisement, cardPopup) => {
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
};

const getAdvertisementCard = (advertisement) => {
  const cardPopup = templateElement.content.cloneNode(true);

  const offerTitle = cardPopup.querySelector('.popup__title');
  offerTitle.textContent = advertisement.offer.title;

  const offerAddress = cardPopup.querySelector('.popup__text--address');
  offerAddress.textContent = advertisement.offer.address;

  const offerPrice = cardPopup.querySelector('.popup__text--price');
  offerPrice.textContent = `${advertisement.offer.price} ₽/ночь`;

  const offerType = cardPopup.querySelector('.popup__type');
  offerType.textContent = houseType[advertisement.offer.type];

  const offerCapacity = cardPopup.querySelector('.popup__text--capacity');
  offerCapacity.textContent = `${advertisement.offer.rooms} комнаты для ${advertisement.offer.guests} гостей`;

  const offerTime = cardPopup.querySelector('.popup__text--time');
  offerTime.textContent = `Заезд после ${advertisement.offer.checkin}, выезд до ${advertisement.offer.checkout}`;

  const offerFeatures = cardPopup.querySelector('.popup__features');
  renderFeatures(offerFeatures, advertisement);

  const offerDescription = cardPopup.querySelector('.popup__description');
  offerDescription.textContent = advertisement.offer.description;

  const offerPhotos = cardPopup.querySelector('.popup__photos');
  renderPhotos(offerPhotos, advertisement, cardPopup);

  cardPopup.querySelector('.popup__avatar').src = advertisement.author.avatar;

  hide('.popup__avatar', cardPopup);
  hide('.popup__text', cardPopup);
  hide('.popup__features', cardPopup);
  hide('.popup__description', cardPopup);
  hide('.popup__photos', cardPopup);

  return cardPopup;
};

const renderCard = (advertisement) => {
  const mapCanvas = document.querySelector('#map-canvas');
  mapCanvas.appendChild(getAdvertisementCard(advertisement));
};

const renderCards = (advertisements) => {
  advertisements.forEach((advertisement) => {
    renderCard(advertisement);
  });
};

export { renderCards };
