// Scrool bar
window.onscroll=function() {
    const header=document.querySelector('header');
    const fnavbar=header.offsetTop;

    if (window.pageYOffset > fnavbar) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed')
    }
}


// Hamber-bar
const hambur=document.querySelector('#hamburger');
const navbar=document.querySelector('#nav-menu');

hambur.addEventListener('click',function () {
    hambur.classList.toggle('hambur-active');
    navbar.classList.toggle('hidden');
});