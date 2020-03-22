const navBar = document.querySelector('.nav-bar');
console.dir(navBar)
const navbarToggle = document.querySelector('.navbar-toggle');
console.dir(navbarToggle)

navbarToggle.addEventListener('click', () => {
    navBar.classList.toggle('nav-active');
})