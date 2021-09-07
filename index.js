const hand_hour = document.querySelector(".hand-hour");
const hand_minute = document.querySelector(".hand-minute");
const hand_second = document.querySelector(".hand-second");

function timeHandler() {
  const time = new Date();

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  console.log("the min??", minute, hour / 12 + minute / 60);

  hand_hour.style.transform = `rotate(${
    (hour / 12 + minute / (60 * 12)) * 360
  }deg)`;
  hand_minute.style.transform = `rotate(${(minute / 60) * 360}deg)`;
  hand_second.style.transform = `rotate(${(second / 60) * 360}deg)`;
}

setInterval(timeHandler, 1000);
