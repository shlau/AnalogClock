const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const TOTAL_HOURS = 12;
const TOTAL_MINUTES = 60;
const TOTAL_SECONDS = 60;
const TOTAL_DEGREES = 360;

const INTERVAL = 1000;



function runClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let hourPosition = (hours + (minutes / TOTAL_MINUTES) ) * TOTAL_DEGREES / TOTAL_HOURS;
    let minutePosition = (minutes + (seconds / TOTAL_SECONDS)) * TOTAL_DEGREES / TOTAL_MINUTES;
    let secondPosition = seconds * TOTAL_DEGREES / TOTAL_SECONDS;
    
    HOURHAND.style.transform = "rotate(" + hourPosition +"deg)";
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
}

var interval = setInterval(runClock, INTERVAL);
