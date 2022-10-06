const $ = document;
let opModal = $.getElementsByClassName("opModal")[0];
let closeModal = $.getElementsByClassName("film-card__close")[0];
let modal = $.getElementsByClassName("film-card__modal")[0];

opModal.addEventListener("click", () => {
  modal.classList.toggle("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});
