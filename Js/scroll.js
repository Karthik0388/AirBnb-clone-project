// Scroll
let targetElement = document.getElementById("_HeaderSection");

window.addEventListener("scroll", e => {
  if (window.scrollY >= 100) {
    targetElement.classList.add("scrolled");
    document.querySelector(".logoBlock a svg").style.fill = "red";
    document.querySelector(".hiddenBlock").style.display = "flex";
    document.querySelector("nav").style.display = "none";
    document.querySelector('')
  } else {
    targetElement.classList.remove("scrolled");
    document.querySelector(".logoBlock a svg").style.fill = "#fff";
    document.querySelector(".hiddenBlock").style.display = "none";
    document.querySelector("nav").style.display = "flex";
  }
});
