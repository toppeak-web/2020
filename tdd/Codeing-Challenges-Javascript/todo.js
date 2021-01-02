const todoFrom = document.querySelector(".js-toDoForm"),
todoInput = todoFrom.querySelector("input"),
todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let = arrays = [];

function delTodo(event){
    const btn = event.target,
    li = btn.parentElement;
    todoList.removeChild(li);
    const cleanToDos = arrays.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    arrays = cleanToDos
    saveToDos()
}


function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(arrays)) //data 타입을 str문자열로
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌"
    delBtn.addEventListener("click", delTodo)
    const span = document.createElement("span"),
    lengthId = arrays.length + 1;
    span.innerText = text
    li.appendChild(delBtn)
    li.appendChild(span)
    li.id = lengthId
    todoList.appendChild(li)
    const toDoObj = {
        text: text,
        id: lengthId
    }
    arrays.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = "";
    
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS)
    if(toDos !== null){
        const parsedToDos = JSON.parse(toDos);//str 타입을 오브젝트 파일로변환
        console.log(parsedToDos) 
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text)
        })
    }
}
function init(){
    loadToDos();
    todoFrom.addEventListener("submit", handleSubmit)
}
init();