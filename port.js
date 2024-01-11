let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
         distace: '40px', 
         duration: 2500,
         reset: true

});

 sr.reaveal('.logo', {delay: 200, origin:  'left'});
 sr.reaveal('.navbar', {delay: 400, origin:  'top'});
 sr.reaveal('.menu-btn', {delay: 520, origin:  'right'});

 sr.reaveal('.home-text span', {delay: 600, origin: 'top'});
 sr.reaveal('.home-text h1', {delay: 680, origin:'left'});
 sr.reaveal('.home-text p', {delay: 750, origin:'right'});


 sr.reaveal('.main-btn', {delay: 860, origin:'left'});
 sr.reaveal('.share', {delay: 950, origin:'bottom'});
 sr.reaveal('.home-img', {delay: 1000, origin:'right'});

