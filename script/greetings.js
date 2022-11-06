const container = document.getElementById("container");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const greeting = document.querySelector("#greeting");
const notLogin = document.querySelectorAll("#containerWrap > *:not(#login-form)");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    setTimeout(() => {
        paintGreetings(username);
    }, 320);
} 

function paintGreetings(username) {
    container.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `안녕하세요, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    notLogin.forEach((element) => {element.classList.remove(HIDDEN_CLASSNAME)});
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    container.classList.add(HIDDEN_CLASSNAME);
    notLogin.forEach((element) => {element.classList.add(HIDDEN_CLASSNAME)});
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
