


let time = {};

function setTime(time) {
let hours = +prompt('Enter hours: ');
time.hours = hours;
let minutes = +prompt('Enter minutes: ');
time.minutes = minutes;
let seconds = +prompt('Enter seconds: ');
time.seconds = seconds;
};

setTime(time);
alert(`${time.hours} : ${time.minutes} : ${time.seconds}`);   

 /* function displayTime() {
    alert(`${time.hours}:${time.minutes}:${time.seconds}`);
}; */


let seconds = {};
function addSeconds(seconds) {
    let seconds = +prompt('Enter additional seconds: ');
    time.seconds = seconds;
    let totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds + seconds;
    time.hours = Math.floor(totalSeconds / 3600) % 24;
    time.minutes = Math.floor(totalSeconds / 60) % 60;
    time.seconds = totalSeconds % 60;
};

addSeconds(seconds);
alert(`${time.hours} : ${time.minutes} : ${time.seconds}`);

function addMinutes(minutes) {
    let totalMinutes = time.hours * 60 + time.minutes + minutes;
    time.hours = Math.floor(totalMinutes / 60) % 24;
    time.minutes = totalMinutes % 60;
};

function addHours(hours) {
    time.hours = (time.hours + hours) % 24;
};



