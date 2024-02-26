export default function initForm() {
  const openButton = document.getElementById("contactButton");
  const closeButton = document.querySelector('[data-form="close"]');
  const containerForm = document.querySelector('[data-form="container"]');

  if (openButton && closeButton && containerForm) {
    function toggleModal(event) {
      event.preventDefault();
      containerForm.classList.toggle("active");
    }

    function clickOutsideForm(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    openButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    containerForm.addEventListener("click", clickOutsideForm);
  }
}
