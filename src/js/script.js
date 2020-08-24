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
        phone = document.querySelector('#phone');
    // mobile.addEventListener('mouseover', () => {
    //     modal.classList.toggle('modal_active');
    // });
    // modal.addEventListener('mousemove', () => {
    //     modal.classList.toggle('modal_active');
    // });
    // // modal.addEventListener('mouseout', () => {
    // //     modal.classList.remove('modal_active');
    // // });

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