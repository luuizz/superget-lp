const btnMenu = document.getElementById("js-btn-menu");

btnMenu.addEventListener('click', () => {
    document.documentElement.classList.toggle('menu-opened');
    btnMenu.classList.toggle('is-active');
})