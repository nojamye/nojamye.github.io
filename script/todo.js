const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const CHECK_CLASSNAME = "checked";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.closest("li");
    li.remove();
    toDos = toDos.filter((item) => parseInt(li.id) !== item.id );
    saveToDos();
}

function checkToDo(event) {
    const li = event.target.closest("li");
    if (li.classList.contains(CHECK_CLASSNAME)) {
        li.classList.remove(CHECK_CLASSNAME);
        toDos = toDos.filter((item) => {
            if (item.id.toString() === li.id) {
                item.check = 0;
            }
            return item;
        })
        saveToDos();
    } else {
        li.classList.add(CHECK_CLASSNAME);
        toDos = toDos.filter((item) => {
            if (item.id.toString() === li.id) {
                item.check = 1;
            }
            return item;
        });
        saveToDos();
    }
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    if (newTodo.style !== 0) {
        span.classList.add("style" + newTodo.style);
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("checkBtn");
    deleteBtn.addEventListener("click", deleteToDo)
    checkBtn.addEventListener("click", checkToDo);
    deleteBtn.innerHTML = "<i class='fa-solid fa-x'></i>";
    checkBtn.innerHTML = "<i class='fa-solid fa-check'></i>";

    const colors = document.createElement("ul");
    colors.id = "colors";
    // for (let i=0; i<colorTemplate.length; i++) {
    for (let i=0; i<4; i++) {
        const li = document.createElement("li");
        li.classList.add("style"+i);
        li.addEventListener("click", changeColor);
        colors.appendChild(li);
    }

    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);
    li.appendChild(colors);
    if (parseInt(newTodo.check) === 1) {
        li.classList.add(CHECK_CLASSNAME);
    }
    toDoList.appendChild(li);
}

function changeColor(event) {
    const target = event.target;
    const targetClass = target.className;
    const li = target.closest("ul").closest("li");
    let span = null;
    for (let i=0; i<li.children.length; i++) {
        if (li.children[i].localName === "span") {
            span = li.children[i];
            break;
        }
    }

    if (span.classList.contains(targetClass)) {
        span.className = "";
        toDos = toDos.filter((item) => {
            if (item.id.toString() === li.id) {
                item.style = 0;
            }
            return item;
        })
    } else {
        span.className = "";
        span.classList.add(targetClass);
        toDos = toDos.filter((item) => {
            if (item.id.toString() === li.id) {
                item.style = Number(targetClass.charAt(targetClass.length-1));
            }
            return item;
        })
    }
    saveToDos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        check: 0,
        style: 0
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos;
}