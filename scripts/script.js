// JavaScript Document
console.log("hi");


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');


function toggleMenu() {
    
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    } else {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
    }
}

hamburger.addEventListener('click', toggleMenu);


