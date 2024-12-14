'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBoxes = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  divBoxes.innerHTML = '';

  const boxes = [];
  let size = 30;

   for (let i = 0; i < amount; i++) {
    const el = document.createElement('div');
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    size += 10;
    el.style.backgroundColor = getRandomHexColor();
    boxes.push(el);
   }
  divBoxes.append(...boxes);
}

btnCreate.addEventListener('click', () => {
  const amount = Number(inputEl.value.trim());
     if (amount >= 1 && amount <= 100) {
      return createBoxes(amount);
     }
     inputEl.value = '';
});

btnDestroy.addEventListener('click', () => {
  divBoxes.innerHTML = '';
});