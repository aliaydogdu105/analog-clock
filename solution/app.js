const second = document.querySelector(".sec");
const minute = document.querySelector(".min");
const hour = document.querySelector(".hour");

function myClock() {
  let secs = new Date().getSeconds();
  let mins = new Date().getMinutes();
  let hours = new Date().getHours();

  second.style.transform = `translateX(100%) rotate(${180 + secs * 6}deg)`;
  minute.style.transform = `translateX(100%) rotate(${180 + mins * 6}deg)`;
  hour.style.transform = `translateX(100%) rotate(${180 + hours * 30}deg)`;
}

setInterval(myClock, 1000);
