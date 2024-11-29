// JavaScript Document
console.log("hi");


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

const outPutCc = document.querySelector('fieldset:nth-of-type(3) output');
const outPutEuro = document.querySelector('fieldset:nth-of-type(4) output');
const inPutCc = document.querySelector('fieldset:nth-of-type(3) input');
const inPutEuro = document.querySelector('fieldset:nth-of-type(4) input');



// Hulp van broer
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




// Hulp van sanne
inPutCc.addEventListener('input', updateCc);
function updateCc(){
    outPutCc.textContent = inPutCc.value
}


inPutEuro.addEventListener('input', updateEuro);
function updateEuro(){
    outPutEuro.textContent = inPutEuro.value
}




