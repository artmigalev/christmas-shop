import { gifts,  wrapperGiftToHomePage,container } from './components/cards.js';
import { handleBurger, burger, item, closeMenu } from './components/burger.js';
import { slider, sliderBtns, sliderMove } from './components/slider.js';
import {  updateTimer } from './components/timer.js';
export const mediaQueryLaptop = window.matchMedia('(min-width:769px)');



window.onload = function () {
  const page = window.location.href;
  if(page.includes('home')){



    wrapperGiftToHomePage.appendChild(container)

  }
  if (page.includes('gifts')) {
    console.log(gifts);
  }

};






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

//** timer */
updateTimer();

//**Implementation of the Category switching for products on the gifts page */

