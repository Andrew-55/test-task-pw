document.querySelector('.header__burger').addEventListener('click', function () {
        document.querySelector('.header__burger,.menu').classList.toggle('menu__active');
        document.querySelector('.menu').classList.toggle('menu__active');
});