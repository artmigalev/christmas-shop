import {
  gifts,
  renderAllGifts,
  renderCategoryGifts,
} from './components/cards.js';
import { handleBurger, burger, item, closeMenu } from './components/burger.js';
export const mediaQueryLaptop = window.matchMedia('(min-width:769px)');
export const tabContainer = document.querySelector('.tabs-container');

const giftsWrapper = document.querySelector('.gifts .gifts-wrapper');




//* --------------burger and burger-menu----------------- */
mediaQueryLaptop.addEventListener('change', (event) => {
  if (event.matches) {
    if (burger.classList.contains('burger-icon-active')) {
      closeMenu();
    }
  } else {
  }
});

burger.addEventListener('click', handleBurger);
item.addEventListener('click', closeMenu);



giftsWrapper.appendChild(renderAllGifts(gifts));
tabContainer.addEventListener('click', renderCategoryGifts);
window.onload = () => {


}