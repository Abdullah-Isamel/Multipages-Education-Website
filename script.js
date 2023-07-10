let menuBtn = document.getElementById("menu-btn");
let menuClose = document.getElementById("menu-close");
let links = document.querySelector("#navbar .links");

menuBtn.onclick = function () {
  links.classList.add("active");
};

menuClose.onclick = function () {
  links.classList.remove("active");
};
