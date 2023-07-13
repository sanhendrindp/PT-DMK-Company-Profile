"use strict";

// LOADING SCREEN
const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.classList.add("loader-hidden");
  }, 3000);

  // loader.addEventListener("transitionend", function () {
  //   document.body.removeChild("loader");
  // });
});

// HAMBURGER MENU OPEN/CLOSE
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {
  this.classList.toggle("fa-xmark");
  navbar.classList.toggle("nav-toggle");
});

// TYPED JS
// const typed = new Typed(".multiple-text", {
//   strings: ["IMAGE & DATA TAGGING", "CATEGORIZATION", "AUDIT"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 2000,
//   loop: true,
// });
