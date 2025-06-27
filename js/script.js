// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger Menu di Klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// KLik di Luar Sidebar Untuk Menghilangkan Menu
const hambuarger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hambuarger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
