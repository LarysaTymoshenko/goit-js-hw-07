const inputLength = document.querySelector('[data-length]');

inputLength.addEventListener("blur", (number) => {
    // console.log(Number(inputLength.attributes["data-length"].value));
    function newClass(add, replase) {
   inputLength.classList.add(add);
    inputLength.classList.replace(replase);
}

    if (number.target.value.length === Number(inputLength.attributes["data-length"].value)) {

        newClass('valid', 'invalid'); 

    }
    else {

newClass('invalid', 'valid');

    }
})



 
 
 
 




 