import { isEscapeEvent } from './utils.js';

const body = document.querySelector('body');

const successPopupTemplate = document.querySelector('#success').content;
const successPopupMessage = successPopupTemplate.querySelector('.success');

const errorPopupTemplate = document.querySelector('#error').content;
const errorPopupMessage = errorPopupTemplate.querySelector('.error');

const success = successPopupMessage.cloneNode(true);
const error = errorPopupMessage.cloneNode(true);

const createPopupMessage = (messageType) => {
  body.appendChild(messageType);
  messageType.addEventListener(
    'click',
    () => {
      messageType.remove();
    },
    { once: true }
  );
};
document.addEventListener('keydown', (evt) => {
  if (isEscapeEvent(evt)) {
    if (success) {
      success.remove();
    }
    if (error) {
      error.remove();
    }
  }
});

const createDownloadMessage = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '50px 50px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'yellow';
  alertContainer.style.color = 'blue';
  alertContainer.textContent =
    'К сожалению, не удалось загрузить данные. Пожалуйста, попробуйте перезагрузить страницу';

  document.body.append(alertContainer);

  alertContainer.addEventListener(
    'click',
    () => {
      location.reload();
      return false;
    },
    { once: true }
  );
};

export { createPopupMessage, success, error, createDownloadMessage };
