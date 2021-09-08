const hand_hour = document.querySelector(".hand-hour");
const hand_minute = document.querySelector(".hand-minute");
const hand_second = document.querySelector(".hand-second");

const tick_tock = new Audio("./tick.mp3");

function timeHandler() {
  let time = new Date();

  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  hand_hour.style.transform = `rotate(${
    (hour / 12 + minute / (60 * 12)) * 360
  }deg)`;

  hand_minute.style.transform = `rotate(${
    (minute / 60 + second / (60 * 60)) * 360
  }deg)`;

  hand_second.style.transform = `rotate(${(second / 60) * 360}deg)`;

  button.textContent === "Unmute" ? tick_tock.pause() : tick_tock.play();
}

setInterval(timeHandler, 1000);

const button = document.querySelector("button");

button.textContent = "Unmute";
button.className = "btn-unmute";

button.addEventListener("click", ticktockHandler);

function ticktockHandler() {
  button.textContent = button.textContent === "Unmute" ? "Mute" : "Unmute";
  button.className =
    button.textContent === "Unmute" ? "btn-mute" : "btn-unmute";
}
