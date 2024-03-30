const userInput = document.querySelector("#input");
const userChoicesContainer = document.querySelector(".user-choices");

//by default focus on textarea
userInput.focus();

//function for creating choice elements
function createChoiceElement(userInput) {
  const choicesArr = userInput
    .split(",")
    .filter((choice) => choice.trim() !== "")
    .map((choice) => choice.trim());

  // clears previous contents
  userChoicesContainer.innerHTML = "";

  choicesArr.forEach((choice) => {
    const btn = document.createElement("button");
    btn.innerHTML = choice;
    btn.classList.add("btn");
    userChoicesContainer.append(btn);
  });
}

//function for random selection of a choice
function randomChoiceSelect() {
  const iterations = 30;
  const btns = document.querySelectorAll(".btn");
  const btnsLength = btns.length;

  //randomly highlighting each choice
  const intervalId = setInterval(() => {
    let randomIdx = Math.floor(Math.random() * btnsLength)
    btns[randomIdx].classList.add("choice-color");
    setTimeout(() => {
      btns[randomIdx].classList.remove("choice-color");
    }, 100);
  }, 100);

  //final selection of one choice
  setTimeout(() => {
    clearInterval(intervalId);
    btns[Math.floor(Math.random() * btnsLength)].classList.add("choice-color");
  }, iterations * 100);

}

userInput.addEventListener("keyup", (e) => {
  createChoiceElement(userInput.value);
  if (e.key === "Enter") {
    userInput.value = "";
    randomChoiceSelect();
  }
});
