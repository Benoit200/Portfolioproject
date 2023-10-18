const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", wndow.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const scr = scrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

scr.reveal('.home-text', {delay:350, origin:'left'});
scr.reveal('.home-img', {delay:350, origin:'right'});