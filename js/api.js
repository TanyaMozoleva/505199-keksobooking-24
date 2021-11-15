// import { createPopupMessage, success, error } from './popup.js';

const API_ADDRESS = 'https://24.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onError) => {
  fetch(`${API_ADDRESS}/data`, { method: 'GET' })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      onError();
    })
    .then((advertisements) => onSuccess(advertisements))
    .catch((err) => {
      onError(err);
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(API_ADDRESS, { method: 'POST', body })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch((err) => {
      onError(err);
    });
};

export { getData, sendData, API_ADDRESS };
