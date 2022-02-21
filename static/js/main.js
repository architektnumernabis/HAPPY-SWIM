//script closing mobile menu after click on nav-link
const navItems = document.querySelectorAll('.nav-link')
const navBrand = document.querySelectorAll('.navbar__img')
const navList = document.querySelector('.navbar-collapse')

navItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
navBrand.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))



