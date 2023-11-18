let myInterval = setInterval(interval, 1000);
let time = document.querySelector(".clock");
function interval() {
  let date = new Date();
  console.log(date.toLocaleTimeString());
  time.innerHTML = date.toLocaleTimeString();
}