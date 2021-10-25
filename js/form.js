const advertisementForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

const setFormStatus = (isActive) => {
  advertisementForm.classList.toggle('ad-form--disabled', !isActive);
  mapFiltersForm.classList.toggle('map__filters--disabled', !isActive);

  [...advertisementForm.children, ...mapFiltersForm.children].forEach(
    (element) => (element.disabled = !isActive)
  );
};

const unactivateForm = () => setFormStatus(false);
const activateForm = () => setFormStatus(true);

export { unactivateForm, activateForm };
