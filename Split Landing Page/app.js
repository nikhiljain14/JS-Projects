const left = document.querySelector(".left")
const right = document.querySelector(".right")
const container = document.querySelector(".container")

left.addEventListener("mouseenter",()=>{
  container.classList.add("hover_left");
})

left.addEventListener("mouseleave",()=>{
  container.classList.remove("hover_left");
})

right.addEventListener("mouseenter",()=>{
  container.classList.add("hover_right");
})

right.addEventListener("mouseleave",()=>{
  container.classList.remove("hover_right");
})
