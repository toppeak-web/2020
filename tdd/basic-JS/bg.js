const body = document.querySelector("body");

const IMG_NUM = 5;



function paintImg(IMG_NUM){
    const image = new Image();
    image.src = `bg/${IMG_NUM + 1}.jpg`;
    image.classList.add("bgImg");
    body.prepend(image); //appendChild

}

function genRandom(){
    const num = Math.floor(Math.random() * IMG_NUM);
    return num;
}

function init(){
    const randomNum = genRandom();
    paintImg(randomNum);
}

init();