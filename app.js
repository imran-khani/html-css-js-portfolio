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

function closeMenu() {
  navLinks.style.right = "-100%";
}
