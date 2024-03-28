const open = document.querySelector(".open")
const close = document.querySelector(".close")
const container = document.querySelector(".main-container")

open.addEventListener("click",()=>{
  container.classList.add("active")
})

close.addEventListener("click",()=>{
  container.classList.remove("active")
})