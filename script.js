const txt = document.getElementById('txt');
let time = txt.value;

const timer = document.getElementsByClassName('timer');
const btn = document.getElementById('btn');

let interval;



btn.addEventListener('click', () => changeText());

function changeText() {
  time = txt.value;
  stopInterval();
  interval = setInterval(timeSet, 1000);
}

function stopInterval() {
  clearInterval(interval);
}

function timeSet() {
  if (time < 0) {
    return;
  } else {
    document.getElementById("timer").innerText = time;
    time--;
  }
}
