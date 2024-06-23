// function myFunction() {
//   let x = document.getElementById("menu-toggleIconId");
//   console.log(x);
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
// navbar
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggleIconId");
  const navMenuId = document.getElementById("nav-menuId");
  const navBtnId = document.getElementById("nav-btnId");
  const navBtn = document.getElementById("nav-bg");

  console.log(menuToggle);
  menuToggle.addEventListener("click", () => {
    navMenuId.classList.toggle("active");
    navBtnId.classList.toggle("activeBtn");
    navBtn.classList.toggle("activNav");
  });
});

//dark made
let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "image/moon.svg";
  } else {
    this.firstElementChild.src = "image/sun.svg";
  }
  document.body.classList.toggle("dark");
});
// navbar  shirink
window.addEventListener("scroll", function () {
  shrink();
});
let navbar = document.getElementById("navbar");
function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
//loading
const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

// scroll
$(".carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,

  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 1,
    },

    1060: {
      items: 2,
    },

    // 900: {
    //   items: 5,
    // },
  },
});
