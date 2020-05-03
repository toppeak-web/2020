const grettingForm = document.querySelector(".js-form"),
grettingInput = grettingForm.querySelector("input"),
greeing = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
SHOWING_CN = "show";

function saveName(text){
    localStorage.setItem(USER_LS, text)
}
function handleSubmit(event){
    event.preventDefault();
    const curreentValue = grettingInput.value;
    paintGreeting(curreentValue);
    saveName(curreentValue);
}
function askForName(){
    grettingForm.classList.add(SHOWING_CN);
    grettingForm.addEventListener("submit", handleSubmit)
}
function paintGreeting(text){
    grettingForm.classList.remove(SHOWING_CN);
    greeing.classList.add(SHOWING_CN);
    greeing.innerText = `Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
        //없는경우
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();