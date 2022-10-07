
let opModalTeam = document.getElementsByClassName("opModalTeam")[0];
let closeModalTeam = document.getElementsByClassName("film-card__closeTeam")[0];
let modalTeam = document.getElementsByClassName("film-card__modalTeam")[0];

opModalTeam .addEventListener("click", () => {
  modalTeam.classList.toggle("active");
});

closeModalTeam.addEventListener("click", () => {
  modalTeam.classList.remove("active");
});
