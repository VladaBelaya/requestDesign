let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__item'),
        menuItem = document.querySelectorAll('.header__item li'),
        humburger = document.querySelector('.burger');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('burger_active');
        menu.classList.toggle('header__item_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            humburger.classList.toggle('burger_active');
            menu.classList.toggle('header__item_active');
        });
    });
});