const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const valueBtn = document.gquerySelector('#value');

function getCount() {
    let count = 0
    function dec() {
        return (count-=1)
    }
    function inc () {
        return count+=1
    }
    return (dec,inc)

}

const elem = getCount()
console.log(elem)

decBtn.addEventListener('click')
incBtn.addEventListener('click')