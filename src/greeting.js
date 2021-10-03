const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


//2
function paintingGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);

  greeting.innerText = `Wellcome, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  profile.classList.remove(HIDDEN_CLASSNAME);

}

//3
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  
  const usernameThatTheUserWrote = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);

  paintingGreeting();
}

//1
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);  
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintingGreeting();
}
