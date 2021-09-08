const inputLength = document.querySelector('[data-length]');

inputLength.addEventListener("blur", (number) => {
    // console.log(Number(inputLength.attributes["data-length"].value));

    if (number.target.value.length === Number(inputLength.attributes["data-length"].value)) {
        newClass('valid');
        newClass('invalid', 'valid');
       
        // inputLength.classList.add('valid');
        // inputLength.classList.replace('invalid', 'valid');

    }
    else {
newClass('invalid');
newClass('valid', 'invalid');
//  inputLength.classList.add('invalid');
 //     inputLength.classList.replace('valid', 'invalid')
    }
})


function newClass(add, replase) {
    inputLength.classList.add(add);
    inputLength.classList.replace(replase);
}
 
 
 
 




 