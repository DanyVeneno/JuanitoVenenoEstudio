/*let stars = document.getElementById("stars");*/
let world = document.getElementById("world");
let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");

let perspective = document.getElementById("perspect");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  //let value2 = window.scrollX;
  //starss.style.left = value * 0.1 + "px";
  world.style.marginTop = value * 1 + "px";
  text.style.marginRight = value * 6 + "px";
  text.style.marginTop = value * 1 + "px";
  text2.style.marginRight = value * 5 + "px";
  text2.style.marginTop = value * 2 + "px";
  text3.style.marginRight = value * 6 + "px";
  text3.style.marginTop = value * 3 + "px";
});
