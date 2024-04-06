const background = document.querySelector(".container");
const loader = document.querySelector(".load");

let count = 0;

function loading() {
  count++;
  if (count > 99) clearInterval(intervalId);
  loader.innerHTML = `${count}%`;
  loader.style.opacity = scale(count, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(count, 0, 100, 25, 0)}px)`;
}

let intervalId = setInterval(loading, 25);

//function for mapping a range of numbers to another range of numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
