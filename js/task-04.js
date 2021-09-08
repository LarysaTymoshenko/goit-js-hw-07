const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const valueBtn = document.querySelector('#value');

let counterValue = 0

function onDecCount() {
    counterValue -= 1;
    valueBtn.textContent = counterValue;
    return ;
    }
    function  onIncCount() {
        counterValue += 1;
        valueBtn.textContent = counterValue;
        return ;
    }
   

// const elem = getCount()
//  console.log(elem)

decBtn.addEventListener('click', onDecCount)
incBtn.addEventListener('click',onIncCount)