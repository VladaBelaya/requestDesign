let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }
    }
});



window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__item'),
        menuItem = document.querySelectorAll('.header__item li'),
        humburger = document.querySelector('.burger'),
        showEmail = document.querySelector('.header__link'),
        logoMobile = document.querySelector('.logo'),
        copyBtn = document.querySelector('.copy__btn'),
        mobile = document.querySelector('.header__mobile'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close');


    mobile.addEventListener('mouseenter', () => {
        modal.classList.toggle('modal_active');
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal_active');
    });

    document.addEventListener('scroll', () => {
        if (window.pageYOffset > 100 && humburger.classList.contains('burger_active')) {
            humburger.classList.remove('burger_active')
            menu.classList.remove('header__item_active');
            logoMobile.classList.remove('logo-mobile');
        }
    })


    showEmail.addEventListener('click', () => {
        copyBtn.classList.toggle('copy__btn_active');
    });
    copyBtn.addEventListener('click', () => {
        copyBtn.classList.remove('copy__btn_active');
    });

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('burger_active');
        menu.classList.toggle('header__item_active');
        logoMobile.classList.toggle('logo-mobile');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            humburger.classList.toggle('burger_active');
            menu.classList.toggle('header__item_active');
            logoMobile.classList.toggle('logo-mobile');

        });
    });

});