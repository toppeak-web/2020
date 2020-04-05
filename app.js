const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("paintcolor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "#fff"
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
ctx.fillStyle = "#2c2c2c"


let painting = false;
let filling = false;
function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath()
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    
}

function handleCanvasClick(){
    if(filling){ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
}

function handleCM(event){
    event.preventDefault();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}
Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);

function handleRangeCh(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}
function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerHTML = "Fill";
    } else {
        filling = true;
        mode.innerHTML = "Paint";
        // ctx.fillStyle = ctx.strokeStyle;
    }

}
function handleSaveCilck() {
    const image = canvas.toDataURL("image/jpeg/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS"
    link.click();
}
if(range){
    range.addEventListener("input", handleRangeCh);
}
if(mode){
    mode.addEventListener("click", handleModeClick);
}
if(saveBtn){
    saveBtn.addEventListener("click", handleSaveCilck)
}