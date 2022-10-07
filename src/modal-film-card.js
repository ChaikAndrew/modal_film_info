
let opModal = document.getElementsByClassName("opModal")[0];
let closeModal = document.getElementsByClassName("film-card__close")[0];
let modal = document.getElementsByClassName("film-card__modal")[0];

opModal.addEventListener("click", () => {
  modal.classList.toggle("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});
