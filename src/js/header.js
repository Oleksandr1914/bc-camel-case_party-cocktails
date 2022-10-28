// Burger Menu --------------------------

const burger = document.querySelector('.menu__icon');
const menuContent = document.querySelector('.menu__content');

burger.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  burger.classList.toggle('_active');
  menuContent.classList.toggle('_active');
});

// Scroll Header ------------------------

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.querySelector('header');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
