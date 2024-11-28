import { handleBurger, burger, item, closeMenu } from './components/burger.js';
import { slider, sliderBtns, sliderMove } from './components/slider.js';
export const mediaQueryLaptop = window.matchMedia('(min-width:769px)');
//* --------------burger and burger-menu----------------- */
mediaQueryLaptop.addEventListener('change', (event) => {
  if (event.matches) {
    if (burger.classList.contains('burger-icon-active')) {
      closeMenu();
    }
  }else{
  }

});

burger.addEventListener('click', handleBurger);
item.addEventListener('click', closeMenu);

//* --------------slider----------------- */

sliderBtns.addEventListener('click', sliderMove);


//**-----------------resize window------- */
window.addEventListener('resize', () => {
  slider.style.left = 0;
})