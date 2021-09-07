const inputLength = document.querySelector('[data-length]');

inputLength.addEventListener("blur", (number) => {
    // console.log(Number(inputLength.attributes["data-length"].value));

    if (number.target.value.length >= Number(inputLength.attributes["data-length"].value)) {
        inputLength.classList.add('valid');
        inputLength.classList.replace('invalid', 'valid');
    }
    else {
 inputLength.classList.add('invalid');
    inputLength.classList.replace('valid', 'invalid')}
})
 
 
 
 




 