const inputRange = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");


inputRange.addEventListener("input", (event) => {

    // console.log(event);
  inputText.style.fontSize = event.target.value + `px`;
});
