const inputLength = document.querySelector('[data-length]');

inputLength.addEventListener("blur", (number) => {
    // console.log(Number(inputLength.attributes["data-length"].value));

    if (Number(number.target.dataset.length) >= Number(inputLength.attributes["data-length"].value)) { inputLength.classList.add('valid') };
    else{
    inputLength.classList.replace('valid', 'invalid')}
})
 
 
 
 
// function  onCheckDataLength(event) {
//     Number(event.currentTarget.dataset.length) === event.currentTarget.value.length ?
//         setClass('valid', 'invalid') :
//         setClass('invalid', 'valid')
// }

// function setClass(add, remove) {
//   refs.input.classList.add(add)
//   refs.input.classList.remove(remove)
// }
// // 




 