const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const slides = document.querySelectorAll(".slide");
const slideList = document.querySelector(".slider");

let currPage = 0;

const SPEED = 300;
const WIDTH = 100;

function handleLeft() {
    if(currPage > -1){
        slideList.style.transition = SPEED + "ms";
        slideList.style.transform = "translate3d(" + (WIDTH * (1 - currPage)) + "vw, 0px, 0px";
        console.log("left");
        currPage -= 1;
    } else {

    }
}

function handleRight() {
    if(currPage < slides.length - 1){
        slideList.style.transition = SPEED + "ms";
        slideList.style.transform = "translate3d(-" + (WIDTH * (currPage + 1)) + "vw, 0px, 0px";
        console.log("right");
        currPage += 1;
    } else {

    }
}

function handleKeyBtn(event) {
    if(event.keyCode === 37) {
        handleLeft();
    } else if(event.keyCode === 39) {
        handleRight();
    }
    console.log("keyboard");
    console.log(event);
}

function init(){
    leftBtn.addEventListener("click", handleLeft);
    rightBtn.addEventListener("click", handleRight);
    document.addEventListener("keydown", handleKeyBtn);
}

init();