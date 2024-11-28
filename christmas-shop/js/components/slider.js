
export const slider = document.querySelector('.slider');
export const sliderBtns = document.querySelector('.btn-container');
const visibleArea = document.querySelector('.slider-body');
let countClick = window.innerWidth > 768 ? 3:6



const step = (slider.offsetWidth - visibleArea.offsetWidth) / countClick;
let offSet = 0;
export function sliderMove(event) {
  const click = event.target;
  const rightBtn = sliderBtns.lastElementChild;
  const leftBtn = sliderBtns.firstElementChild;
  if (click === rightBtn) {
    leftBtn.classList.remove('btn-slider__disable');
    if (offSet < step * countClick) {
      offSet = offSet - step;
    }
    slider.style.left = `${offSet}px`;
    if (Math.abs(offSet) === step * countClick) {
      rightBtn.classList.add('btn-slider__disable');
    }
  } else if (click === leftBtn) {
    rightBtn.classList.remove('btn-slider__disable');
    if (offSet !== 0) {
      offSet = offSet + step;
      slider.style.left = `${offSet}px`;
      console.log(offSet);
    }
    if (offSet === 0) {
      leftBtn.classList.add('btn-slider__disable');
    }
  }
}
