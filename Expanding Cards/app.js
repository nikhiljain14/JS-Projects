const cards = document.querySelectorAll(".card");

// function for removving the active class from each card element
function removeActiveClass() {
  for (const card of cards) {
    card.classList.remove("active");
  }
}

// adding click event listener to each card element
for (const card of cards) {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add("active");
  });
}
