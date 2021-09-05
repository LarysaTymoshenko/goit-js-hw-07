const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const valueBtn = document.querySelector('#value');

let counterValue = 0

function onDecCount() {
    
    valueBtn.textContent = counterValue
    return (counterValue -= 1)
    }
    function  onIncCount() {
        
        valueBtn.textContent = counterValue
        return (counterValue += 1)
    }
   

// const elem = getCount()
//  console.log(elem)

decBtn.addEventListener('click', onDecCount)
incBtn.addEventListener('click',onIncCount)