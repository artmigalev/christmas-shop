import { Component } from './component.js';

async function getCards() {
  const response = await fetch('../../assets/gifts.json');
  const data = await response.json();
  return data;
}
const gifts = await getCards();

const container = renderRandomGifts(gifts);
const wrapperGiftToHomePage = document.querySelector('.gifts-wrapper');

function giftCreated(data) {
  let category = '';

  switch (data.category) {
    case 'For Work':
      category = 'card-work';
      break;
    case 'For Health':
      category = 'card-health';
      break;
    case 'For Harmony':
      category = 'card-harmony';
      break;
  }
  const card = new Component(
    { className: `card gifts-card ${category} ` },
    new Component({ className: 'card-img' }),
    new Component(
      { className: 'card-footer' },
      new Component({
        tag: 'span',
        className: 'card-category',
        text: data.category,
      }),
      new Component({
        tag: 'span',
        className: 'card-description',
        text: data.name,
      })
    )
  );
  return card.getNode();
}
function createdRandomNumToArr(length, data) {
  let arr = [];
  while (arr.length !== length) {
    let randomIndex = Math.round(Math.random(1) * (data.length - 1));
    arr.push(randomIndex);
    arr = [...new Set(arr)];
  }
  return arr;
}
function renderRandomGifts(data) {
  const container = new Component({ className: 'gifts-container' }).getNode();
  const arrCards = createdRandomNumToArr(4, data).map((i) =>
    giftCreated(data[i])
  );

  container.append(...arrCards);
  return container;
}

//**Implementation of the Category switching for products on the gifts page: */

function renderAllGifts(data) {
  const container = new Component({
    className: 'cards-container gifts-container',
  }).getNode();

  const array = data.map((_, i) => giftCreated(data[i]));
  container.append(...array);
  console.log(container.children);

  return container;
}

function renderCategoryGifts(event) {
  const tab = event.target;
  const containerGifts = document.querySelector(
    '.gifts-wrapper .gifts-container'
  );
  const arrCards  = Array.of(...renderAllGifts(gifts).children);
  if (
    tab.textContent.includes('work') &&
    !tab.classList.contains('uninteractive')
  ) {
    chanched(tab);

    containerGifts.innerHTML = '';
    containerGifts.append(
      ...arrCards.filter((el) => el.classList.contains('card-work'))
    );
  }
  if (
    tab.textContent.includes('health') &&
    !tab.classList.contains('uninteractive')
  ) {
    chanched(tab);

    containerGifts.innerHTML = '';
    console.log(arrCards);
    containerGifts.append(
      ...arrCards.filter((el) => el.classList.contains('card-health'))
    );
  }
  if (
    tab.textContent.includes('harmony') &&
    !tab.classList.contains('uninteractive')
  ) {
    chanched(tab);

    containerGifts.innerHTML = '';
    console.log(
      ...arrCards.filter((el) => el.classList.contains('card-harmony'))
    );
    containerGifts.append(
      ...arrCards.filter((el) => el.classList.contains('card-harmony'))
    );
    console.log(arrCards);
  }
  if (
    tab.textContent.includes('All') &&
    !tab.classList.contains('uninteractive')
  ) {
    chanched(tab);
    containerGifts.innerHTML =""
    containerGifts.append(renderAllGifts(gifts));
  }
}

function chanched(node){
  const nodeList = document.querySelectorAll('.tab')
  nodeList.forEach((element) => element.classList.remove("uninteractive"));
  node.classList.add('uninteractive');
}

export {
  container,
  wrapperGiftToHomePage,
  gifts,
  renderCategoryGifts,
  renderAllGifts,
};
