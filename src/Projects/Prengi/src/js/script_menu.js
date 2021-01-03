window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    menu_de = document.querySelector('.menu_de'),
    menuItem_de = document.querySelectorAll('.menu__item_de'),
    hamburger_de = document.querySelector('.hamburger_de');


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });




    hamburger_de.addEventListener('click', () => {
        hamburger_de.classList.toggle('hamburger_active');
        menu_de.classList.toggle('menu_active');
    });

    menuItem_de.forEach(item => {
        item.addEventListener('click', () => {
            hamburger_de.classList.toggle('hamburger_active');
            menu_de.classList.toggle('menu_active');
        })
    })

});