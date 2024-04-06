const counts = document.querySelectorAll(".cnt");

counts.forEach((cnt) => {
  function statsIncrementer() {
    const displayCount = Number(cnt.innerHTML);
    const incrementer = cnt.dataset.stats / 444;  
    //to adjust the speed of stats, 444 can be increased to some other value to decrease stats speed and vice versa
    
    if (displayCount < cnt.dataset.stats) {
      cnt.innerHTML = `${Math.ceil(displayCount + incrementer)}`;
      setTimeout(statsIncrementer, 1);
    }
    else {
      cnt.innerHTML = cnt.dataset.stats+"+"
    }
  }
  statsIncrementer();
});
