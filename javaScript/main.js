let header = document.getElementById("header");
let before = document.querySelector(".before");
// let all = document.querySelectorAll("*");
let hac = document.querySelector(".disclaimer");
let reSty = document.querySelector("style");

window.onload = function () {
  // hac.style.display="none";
  reSty.remove();
  hac.remove();
};

window.onscroll = function () {
  if (scrollY >= 222) {
    before.style.backgroundColor = "hsla(248, 86%, 8%, 0.900)";
  } else {
    before.style.backgroundColor = "";
  }
};


let icon = document.querySelector(".icon");
let linksPhone = document.getElementById("linksPhone");
let ul = document.getElementById("linksPhone");
let body = document.body;
icon.addEventListener("click", function () {
  body.addEventListener("click", function () {

  });
  ul.onclick = function () {
    linksPhone.classList.toggle("nono");
    setTimeout(() => {
      linksPhone.classList.toggle("nohid");
    }, 300);
  };
  if (linksPhone.classList[1] == "nohid") {
    linksPhone.classList.toggle("nono");
    setTimeout(() => {
      linksPhone.classList.toggle("nohid");
    }, 300);
  } else if (linksPhone.classList[1] == "nohid") {
    body.addEventListener("click", function () {
      linksPhone.classList.toggle("nono");
      setTimeout(() => {
        linksPhone.classList.toggle("nohid");
      }, 300);
    });
    linksPhone.classList.toggle("nono");
    setTimeout(() => {
      linksPhone.classList.toggle("nohid");
    }, 300);
  } else {
    linksPhone.classList.toggle("nohid");
    setTimeout(() => {
      linksPhone.classList.toggle("nono");
    }, 10);
  }
});
