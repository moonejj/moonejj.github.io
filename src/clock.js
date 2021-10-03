const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // clock.innerText = `${hours}:${minutes}:${second}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

const dateMonthDay = document.querySelector("h2#date");

function getDate() {
  const date = new Date();

  const month = date.getMonth()+1;
  const day = date.getDate();
  
  // dateMonthDay.innerText = `${month}:${day}`;
  dateMonthDay.innerText = `${month}월${day}일`;
}

getDate();

