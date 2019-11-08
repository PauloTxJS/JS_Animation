let screen = false;

//Taking the field by id
let a = document.querySelector("div#bot-container");

//adding event
a.addEventListener('click', toClick);
window.addEventListener('load', toClick);


function toClick() {
    
    //Stop animation
    screen = !screen;
    a.style.backgroundColor = screen ? "#aa9600" : "transparent";

    //Play music
    var audio1 = new Audio();
    audio1.src = "audio/s.mp3";
    audio1.play();
    
}   