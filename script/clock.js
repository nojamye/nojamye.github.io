const day = document.querySelector("#day");
const clock = document.querySelector("#clock");

const dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일", ];

function getClock() {
    const now = new Date();
    const year = String(now.getFullYear()).padStart(2, "0");
    const month = String(now.getMonth()+1).padStart(2, "0");
    const date = String(now.getDate()).padStart(2, "0");
    const dday = String(dayNames[now.getDay()]);
    const hours = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    day.innerText = `${year}.${month}.${date} ${dday}`;
    clock.innerText = `${hours} : ${minute} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);
