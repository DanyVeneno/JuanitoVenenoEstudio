const dialog = document.querySelector("#disrupcionque");
const cancelado = document.querySelector("#cancelado");
const showme = document.querySelector("#expand");

showme.addEventListener("click", () => dialog.showModal());
cancelado.addEventListener("click", () => dialog.close());
