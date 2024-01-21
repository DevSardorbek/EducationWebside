window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 180) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.background = "rgba(0,0,0,.5)";
    // document.getElementById("homenav").style.padding = "20px 10px";
    // document.getElementById("navbarhome").style.background = "white";
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    // document.getElementById("navbarhome").style.padding = "40px 10px";
    document.getElementById("navbar").style.background = "transparent ";
  }
}

//

var navLinks = document.getElementById("nav-links");

function openNavLinks() {
  navLinks.style.left = "0";
}
function closeNavLinks() {
  navLinks.style.left = "-100%";
}
let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
