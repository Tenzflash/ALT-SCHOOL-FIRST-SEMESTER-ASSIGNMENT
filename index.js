// Get the stopwatch display box from the HTML file
const display = document.getElementById("display");

// Variables for keeping track of the stopwatch
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Functions for the start button
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

// Functions for the stopping the timer
function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

// Functions for resetting the timer
function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
}
// Update the stopwatch time to call every 10 milliseconds

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
      // Break down elapsed time into hours, minutes, seconds, and ms

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

 // For the proper format of display
    display.textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

//  To pad single digits with a leading zero 
function pad(unit) {
    return unit.toString().padStart(2, "0");
}
