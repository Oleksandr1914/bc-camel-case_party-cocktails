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

// Click letters ---------------

document.querySelector('.hero__box-lists').addEventListener('click', ev => {
  const elemLetter = document.querySelectorAll('.hero__box-letter');
  const arrLet = [...elemLetter].find(e => e.classList.contains('let'));
  const elemNumb = document.querySelectorAll('.hero__box-numb');
  const arrNumb = [...elemNumb].find(e => e.classList.contains('let'));
  if (arrLet) {
    arrLet.classList.remove('let');
  } else if (arrNumb) {
    arrNumb.classList.remove('let');
  }
  const targ = ev.target;
  targ.classList.add('let');
});
