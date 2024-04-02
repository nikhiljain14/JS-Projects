window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
});

const keys = document.querySelectorAll(".key");

keys.forEach((k) => {
    k.addEventListener("click", (e) => {
        let soundName = k.getAttribute("data-key");
        k.classList.add("playing");
        const audio = document.querySelector(`audio[data-key="${soundName}"]`);
        audio.currentTime = 0;
        audio.play();
    });

    k.addEventListener("transitionend",(e)=>{
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove("playing");
    });
});