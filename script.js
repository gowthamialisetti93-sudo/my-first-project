let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");
let date = document.getElementById("date");

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    hours = hours % 12;
    hours = hours ? hours : 12;

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;

    ampm.innerHTML = session;

    date.innerHTML = currentTime.toDateString();

}, 1000);
