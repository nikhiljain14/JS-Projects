const labels = document.querySelectorAll(".form_controls label");

labels.forEach((label)=>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx)=>`<span style="transition-delay:${50*idx}ms">${letter}</span>`)
    .join('')
})



// .split('') :-- this splits each letter of label.innerText i.e Email into an array [E,m,a,i,l]
// .map() :-- then the map method works on the above array [E,m,a,i,l] and returns the array containing span elements ex. [<span style="transition-delay:0ms">E</span>,<span style="transition-delay:50ms"m</span>,..]
// .join('') :-- this then again converts the array returned by map(i.e span element array) into string