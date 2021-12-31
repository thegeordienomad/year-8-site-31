const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navbar-list');
const hamburgerIcon = document.querySelector('#icon-img');
const closeIcon = document.querySelector('#icon-img-2');

hamburger.addEventListener('click', ()=> {
    navUl.classList.toggle('show');
    hamburgerIcon.classList.toggle('off');
    closeIcon.classList.toggle('show');
})