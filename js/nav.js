const navBar = document.querySelector('.nav-bar');
console.dir(navBar)
const navbarToggle = document.querySelector('.navbar-toggle');
console.dir(navbarToggle)

navbarToggle.addEventListener('click', () => {
    navBar.classList.toggle('nav-active');
})


const dropdown = document.querySelector('.dropdown')
console.dir(dropdown)

dropdown.addEventListener('click', () => {
    const dropdownContent = document.querySelector('.dropdown-content')
    console.dir(event)
})