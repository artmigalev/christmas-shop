import { handleBurger, burger, item, closeMenu } from './components/burger.js';
import {sliderBtns,sliderMove } from './components/slider.js';

const mediaQuery = window.matchMedia('(min-width:769px)');
//* --------------burger and burger-menu----------------- */
mediaQuery.addEventListener('change',(event) => {
  if (event.matches) {
    if (burger.classList.contains('burger-icon-active')) {
      closeMenu();
    }
  }
});

burger.addEventListener('click', handleBurger);
item.addEventListener('click', closeMenu);

//* --------------slider----------------- */

sliderBtns.addEventListener('click', sliderMove);