
const categEL = document.querySelector('#categories');
console.log(`В списке ${categEL.children.length} категории`)
for (const element of categEL.children) {
  console.log(`Категория: ${element.firstElementChild.textContent}`)
  console.log(`Количество элементов: ${element.lastElementChild.children.length}`) 
}

 