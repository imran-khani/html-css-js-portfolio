//  navbar toggle

const navLinks = document.querySelector("nav .nav-links");
const toggleBtn = document.querySelector(".hamburger-menu");

toggleBtn.addEventListener("click", function () {
  navLinks.style.right = "0";
  let link = document.querySelectorAll(".nav-links a");
  link.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

// Close the menu on mobile

function closeMenu() {
  navLinks.style.right = "-100%";
}

// Select the container where the stars will be appended
let reviewContainer = document.querySelectorAll(".reviewStars");

// Create a new array of length 5 and fill it with undefined values
Array(5)
  .fill()
  .forEach(() => {
    // Create a new img element
    let star = document.createElement("img");

    // Set the src attribute to the star image path
    star.src = "img/Star.svg";

    // Append the star image to the review container
    reviewContainer.forEach((container) => {
      container.appendChild(star.cloneNode(true));
    });
  });

// prevent form default action

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
