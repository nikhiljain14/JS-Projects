const txt = document.querySelector(".txt");
let speed = document.querySelector("#speed");
let i = 1;
currentSpeed = 250 / speed.value;

const displayTxt = "Welcome To 30 Days of JavaScript!!!";
autoType();

function autoType() {
  txt.innerHTML = displayTxt.slice(0, i);
  i++;
  if (i > displayTxt.length) i = 1;
  setTimeout(autoType, currentSpeed);
}

speed.addEventListener("input",(e)=>{
  currentSpeed = 250/speed.value
})