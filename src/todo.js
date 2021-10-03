const toDoForm = document.querySelector("#todo-form"),
toDoInput = toDoForm.querySelector("#todo-form input"),
toDoList = document.querySelector("#todo-list");

const TODOS_LS = "toDos";

let toDos = [];
let idNumbers = 1;

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); 
    });
    
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.html = "id";
    const button = document.createElement("button");
    const span = document.createElement("span");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");

    span.innerText = text;

    const newID = idNumbers;
    idNumbers += 1;
    
    button.innerText = "❌";
    li.appendChild(button);
    label.appendChild(input);
    label.appendChild(span);
    li.appendChild(label);
    toDoList.appendChild(li);
    // toDoList.appendChild(label);
    button.addEventListener("click", deleteToDo);
    
    li.id = newID;


    const toDoObj = {
        text: text,
        id: newID
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();