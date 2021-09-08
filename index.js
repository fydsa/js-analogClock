const hand_hour = document.querySelector(".hand-hour");
const hand_minute = document.querySelector(".hand-minute");
const hand_second = document.querySelector(".hand-second");

const tick_tock = new Audio(
  "https://s19.picofile.com/d/8440504176/f9bb29a6-15f4-429f-bede-fb1704a4277c/tick.mp3"
);

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

  button.textContent === "Unmute tick-tock"
    ? tick_tock.pause()
    : tick_tock.play();
}

setInterval(timeHandler, 1000);

const button = document.querySelector("button");

button.textContent = "Unmute tick-tock";
button.className = "btn-unmute";

button.addEventListener("click", ticktockHandler);

function ticktockHandler() {
  button.className =
    button.textContent === "Unmute tick-tock" ? "btn-mute" : "btn-unmute";
  button.textContent =
    button.textContent === "Unmute tick-tock"
      ? "Mute tick-tock"
      : "Unmute tick-tock";
}
