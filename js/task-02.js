const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');
// console.log(listEl);
const makeElement = ingredients.map(element => {
    const newElement = document.createElement('li');
    newElement.textContent = element;
    return newElement;

})


// console.log(makeElement);
listEl.append(...makeElement);