export const burger = document.querySelector('.burger-icon');
const navigation = document.querySelector('.navigation');
export const item = navigation.querySelector('.navigation-list');






export function handleBurger(event) {
  burger.classList.toggle('burger-icon-active');
  navigation.classList.toggle('burger-menu');
  document.body.classList.toggle('scroll-stop');
}
export function closeMenu() {
  navigation.classList.toggle('burger-menu');
  burger.classList.toggle('burger-icon-active');
  document.body.classList.toggle('scroll-stop');
}
