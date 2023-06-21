(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  
  Array.from(refs.openModalBtn).forEach(function (btn) {
    btn.addEventListener("click", toggleModal);
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--is-hidden");
    document.body.classList.toggle("modal-open");
  }
})();
