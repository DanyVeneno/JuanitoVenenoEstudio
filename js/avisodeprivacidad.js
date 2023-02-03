const dialogdos = document.querySelector("#privacidad");
const cancelar = document.querySelector("#cancelAviso");
const showthem = document.querySelector("#showAviso");

showthem.addEventListener("click", () => dialogdos.showModal());
cancelar.addEventListener("click", () => dialogdos.close());
