const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputName);


function onInputName(event) {
 if(event.currentTarget.value){
    nameOutput.textContent=event.currentTarget.value
     return;
    }
    nameOutput.textContent = 'незнакомец';
}

