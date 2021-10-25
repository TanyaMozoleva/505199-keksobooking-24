const advertisementForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

const toggleFormStatus = (isActive, forms) => {
  forms.forEach((form) => {
    form.classList.toggle('ad-form--disabled');

    //если форма активна- метод toggle добавит класс 'ad-form--disabled',
    // если форма неактивна- данный класс удалится, так как он уже есть в элементе
    //но класс не добавляется, изменений нет
    form.children.forEach((element) => (element.disabled = !isActive));
  });
};

const unactivateForm = () =>
  toggleFormStatus(true, advertisementForm, mapFiltersForm);
const activateForm = () =>
  toggleFormStatus(false, advertisementForm, mapFiltersForm);

export { unactivateForm, activateForm };
