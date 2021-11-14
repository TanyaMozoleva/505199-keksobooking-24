import {
  createPopupMessage,
  createDownloadMessage,
  success,
  error,
} from './popup.js';

const API_ADDRESS = 'https://24.javascript.pages.academy/keksobooking';

// const getData = (onSuccess) => {
//   fetch(`${API_ADDRESS}/data.`, { method: 'GET' })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error();
//     })
//     .then((data) => onSuccess(data))
//     .catch(() => {
//       onFail();
//     });
// };

// const sendData = (onSuccess, onFail, body) => {
//   fetch(`${API_ADDRESS}`, {
//     method: 'POST',
//     body,
//   })
//     .then((response) => {
//       if (response.ok) {
//         onSuccess();
//       } else {
//         onFail();
//       }
//     })
//     .catch(() => {
//       onFail();
//     });
// };

// const getData = (onSuccess) => () => {
//   fetch(`${API_ADDRESS}/data`, { method: 'GET', credentials: 'same-origin' })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }

//       throw new Error(createDownloadMessage());
//     })
//     .then((data) => {
//       onSuccess(data);
//     })
//     .catch((err) => {
//       onError(err);
//     });
// };

const getData = (onSuccess, onError) => {
  fetch(`${API_ADDRESS}/data`, { method: 'GET' })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      createDownloadMessage();
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
