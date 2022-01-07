const hamburger = document.querySelector(".hamburger");

const body = document.querySelector("body");

const navMenu = document.querySelector(".nav-links");

const navLinks = document.querySelectorAll(".nav-item");

const header = document.querySelector("#header");

const blurBg = document.querySelector(".bg-blur");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("hamburger-open");
  // body.classList.toggle("lock-scroll");
  // blurBg.classList.toggle("bg-blur-open");
  navMenu.classList.toggle("open");

  navLinks.forEach((navLinks) => {
    navLinks.classList.toggle("fade");
  });
  // navLinks.classList.add("active");
}

navLinks.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("hamburger-open");
  body.classList.remove("lock-scroll");
  navMenu.classList.remove("open");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("fade");
  });
}

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// document.querySelector(".test-btn").addEventListener("click", loadText);

// function loadText() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", ``, true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       console.log("123");
//     }
//   };
//   xhr.send();
// }

// const formInput = document.getElementByClassName("form-input");
// const formMessage = document.querySelector(".formMessage");
// const formBtn = document.querySelector(".formBtn");

// formBtn.addEventListener("click", validateInput);

// function validateInput(e) {
//   let output = "";
//   formInput.forEach(function () {
//     if (formInput.value === "") {
//       formInput.style.borderColor = "#ce1678";
//       output = `<h3>Please fill in the form correctly</h3>`;
//       formMessage.innerHTML = output;
//     }
//     e.preventDefault();
//   });
// }
