//adding scroll event listener
window.addEventListener("scroll", scrollRevealAnimation);

let boxCount = 10; //initialized with 10, as 9 elements already created in Html to make page scrollable for every sizes (especially for making bigger screen scrollable)

// function for scroll reveal elements animation
// you can also use scrollReveal, AOS Libraries for Animation on Scroll instead of implementing it
function scrollRevealAnimation() {
  let trigger = window.innerHeight - window.innerHeight / 4;  
  const boxes = document.querySelectorAll(".box");
  console.log(boxes);
  boxes.forEach((box) => {
    if (box.getBoundingClientRect().top < trigger) box.classList.add("active");
    else box.classList.remove("active");
  });
  infiniteScroll();
}

// function for infinite scroll
function infiniteScroll() {
  let { clientHeight, scrollTop, scrollHeight } = document.documentElement;

  //main logic for infinite scroll
  if (Math.ceil(clientHeight + scrollTop) >= scrollHeight-100) {
    createElm();
  }
}

// function for creating new Elements dynamically
function createElm() {
  const divElm = document.createElement("div");
  divElm.innerHTML = `BOX ${boxCount++}`;
  divElm.classList.add("box");
  const container = document.querySelector(".container");
  container.append(divElm);
}

// for applying animation to initial boxes without scrolling too.
scrollRevealAnimation();