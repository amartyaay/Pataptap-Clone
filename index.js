console.log("Hi,Console user")
window.addEventListener("load", () => {
    const sounds =document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    // console.log(sounds);
    // let colors =colorRandom();

    pads.forEach((pad, index) =>{
        pad.addEventListener("click", function(){
            sounds[index].currentTime =0;
            sounds[index].play();
            createBubble();
        })
    })

    //todo make bubbles
    const createBubble= () =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.background=colorRandom();
        bubble.style.animation = 'jumps 1s ease';
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        })
    }
})

function colorRandom() {
    //red
    var r = Math.floor(Math.random() * 256);
    //green
    var g = Math.floor(Math.random() * 256);
    //blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}