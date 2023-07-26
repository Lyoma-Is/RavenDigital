
const menuBtn = document.querySelector('.menu__btn');
const menuNav = document.querySelector('.navbar-menu');

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('menu--open');
    menuNav.classList.toggle('menu--open');
});


$('.team-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
