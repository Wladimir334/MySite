



let time = {}
function setTime(time) {
let hours = +prompt('Enter hours: ');
time.hours = hours;
let minutes = +prompt('Enter minutes: ');
time.minutes = minutes;
let second = +prompt('Enter seconds: ');
time.second = second;
};

setTime(time);
alert(`${time.hours} : ${time.minutes} : ${time.second}`);   


let seconds = {};
function addSeconds(seconds) {
    let second = +prompt('Enter additional seconds: ');
    time.second = second;
    let totalSeconds = time.hours * 3600 + time.minutes * 60 + time.second + second;
    time.hours = Math.floor(totalSeconds / 3600) % 24;
    time.minutes = Math.floor(totalSeconds / 60) % 60;
    time.second = totalSeconds % 60;
};

addSeconds(seconds);
alert(`${time.hours} : ${time.minutes} : ${time.second}`);

let minutes = {}
function addMinutes(minutes) {
    let minute = +prompt('Enter additional minutes: ');
    time.minute = minute;
    let totalMinutes = time.hours * 60 + time.minute + minute;
    time.hours = Math.floor(totalMinutes / 60) % 24;
    time.minute = totalMinutes % 60;
};

addMinutes(minutes)
alert(`${time.hours} : ${time.minute} : ${time.second}`);


let hours = {}
function addHours(hours) {
    let hour = +prompt('Enter additional hours: ');
    time.hour = hour;
    time.hour = (time.hour + hour) % 24;
};

addHours(hours)
alert(`${time.hour} : ${time.minute} : ${time.second}`);


