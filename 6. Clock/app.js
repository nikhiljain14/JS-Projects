const time = document.querySelector(".time");
const dateInfo = document.querySelector(".date");
const container = document.querySelector(".container");
const mode = document.querySelector(".mode");
const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");
const body = document.querySelector("body");

console.log(mode, lightMode, darkMode);

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
}

setInterval(() => setTime(), 100);

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
