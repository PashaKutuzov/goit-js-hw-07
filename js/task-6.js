function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector("input[type=number]")
const buttonCreate = document.querySelector("button[data-create]")
const buttonDestroy = document.querySelector("button[data-destroy]")
const boxesContainer = document.querySelector("#boxes");

input.addEventListener("change", handleInput)
buttonCreate.addEventListener("click", createButton);

function handleInput(event) {
  console.log(event.currentTarget.value);
  
  }


function createBoxes(amount) {


let size = 30


for (let i = 0; i < amount; i++) {
  const box = document.createElement("div")
  

  box.style.width = `${size}px`
  box.style.height = `${size}px`
  box.style.backgroundColor = getRandomHexColor()
  boxesContainer.appendChild(box);
  size += 10
 };
}



function createButton() {
  const amount = input.value;


if(amount >= 1 && amount <= 100){
  createBoxes(amount);
  // input.value = "";
}
else{
  alert("введіть число від 1 до 100!")
}

};


buttonDestroy.addEventListener("click", function () {
  boxesContainer.innerHTML = ""; 
});






