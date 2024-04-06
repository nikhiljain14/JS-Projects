const time = document.querySelector(".time");
const dateInfo = document.querySelector(".date");
const container = document.querySelector(".container");
const mode = document.querySelector(".mode");
const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");
const body = document.querySelector("body");
const hoursElm = document.querySelector(".hours");
const minutesElm = document.querySelector(".minutes");
const secondsElm = document.querySelector(".seconds");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

//function for setting current time
function setTime() {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let date = d.getDate();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  hours <= 12
    ? (time.innerHTML = `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }<span>AM</span>`)
    : (time.innerHTML = `${hours - 12 < 10 ? "0" + (hours - 12) : hours - 12}:${
        minutes < 10 ? "0" + minutes : minutes
      }<span>PM</span>`);

  dateInfo.innerHTML = `${date < 10 ? "0" + date : date} ${
    months[month]
  }, ${year}`;

  hoursElm.style.transform = `rotate(${scale(hours, 1, 12, 0, 360)}deg)`;
  minutesElm.style.transform = `rotate(${scale(minutes, 1, 60, 0, 360)}deg)`;
  secondsElm.style.transform = `rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
}

//function for mapping a range of numbers to another range of numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTime();
setInterval(() => setTime(), 1000);


// dark mode and light mode goes here
mode.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    lightMode.style.display = "none";
    darkMode.style.display = "block";
  } else {
    body.classList.add("dark");
    lightMode.style.display = "block";
    darkMode.style.display = "none";
  }
});
