// Burger Menu --------------------------

const burger = document.querySelector('.menu__icon');
const menuContent = document.querySelector('.menu__content');

burger.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  burger.classList.toggle('_active');
  menuContent.classList.toggle('_active');
});

// Scroll Header ------------------------
window.onscroll = function () {
  myFunction();
};

const header = document.querySelector('header');
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
