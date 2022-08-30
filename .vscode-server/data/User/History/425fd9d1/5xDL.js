const menuEmail = document.querySelector ('.navbar-email')
const desktopMenu = document.querySelector ('.desktop-menu')
const menuHamIcon = document.querySelector ('.menu-Ham-Icon')
const mobileMenu = document.querySelector ('.mobile-menu')
const menuCarritoIcon = document.querySelector ('.navbar-shopping-card')
const aside = document.querySelector ('.product-detail')

menuEmail.addEventListener ('click', toggleDesktopMenu)
menuHamIcon.addEventListener ('click', toggleMobileMenu)

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive')
}