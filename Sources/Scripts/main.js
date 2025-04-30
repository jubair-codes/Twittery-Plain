const sideMenu = document.getElementById("side-menu");
const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");

menuBtn.addEventListener('click', () => {
    sideMenu.style.transform= "translateX(0%)";
});

closeMenuBtn.addEventListener('click', () => {
    sideMenu.style.transform= "translateX(100%)";
});


// faq container handler

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
