const emptyBoxes = document.querySelectorAll(".empty-box");
const filledBox = document.querySelector(".filled-box");

filledBox.addEventListener("dragstart", dragStart);
filledBox.addEventListener("dragend", dragEnd);

emptyBoxes.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
});

function dragStart() {
  setTimeout(() => {
    this.classList.remove("filled-box");
  }, 0);
}
function dragEnd() {
  this.classList.add("filled-box");
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}
function dragLeave() {
  this.classList.remove("hovered");
}
function dragDrop() {
  this.append(filledBox);
  this.classList.remove("hovered");
}

// className is a property that returns a string representing the value of the class attribute of the specified element, or sets the value of the class attribute.
// When setting className, you replace the entire list of classes with a single string.
// If you set className to an empty string, it will remove all existing classes.

// element.className = "newClass";
// element.className += "newClass";  to add more than one class
