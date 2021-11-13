const API_ADDRESS = 'https://24.javascript.pages.academy/keksobooking';

const getData = () => {
  fetch(`${API_ADDRESS}/data.`, { method: 'GET' })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(response.status);
    })
    .then((response) => response.json());
  // .then((advertisements) => {
  //   onSuccess(advertisements);
  // });
};

const sendData = (advertisementForm) => {
  fetch(`${API_ADDRESS}`, {
    method: 'POST',
    body: new FormData(advertisementForm),
  }).then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(response.status);
  });
};
export { getData, sendData, API_ADDRESS };
