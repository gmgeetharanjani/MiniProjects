/* Requirement: CountDown Timer 
    Description: A simple countdown timer that counts down to 0 seconds.

    // Real World Use Case:
    - Online Test
    - Auctions
    - Online Sales in E-commerce Websites
    - OTP Verification
    - Movie Ticket Booking


    // Must have features:
    - Timer should display the time in MM:SS format
    - Timer should have Start, Pause, Reset buttons
    - Timer should start from the given time


    // Good to have features:
    - Timer should display the time in HH:MM:SS or DD:HH:MM:SS format
    - Add Validation for any input field
*/

const minMSBInput = document.getElementById('minMSB');
const minLSBInput = document.getElementById('minLSB');
const secMSBInput = document.getElementById('secMSB');
const secLSBInput = document.getElementById('secLSB');

const timer = document.getElementById('timer');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let minutes = 0;
let seconds = 0;
let timerId = null;

// Add event listeners
startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
resetBtn.addEventListener('click', onReset);
minMSBInput.addEventListener('input', onInput);
minLSBInput.addEventListener('input', onInput);
secMSBInput.addEventListener('input', onInput);
secLSBInput.addEventListener('input', onInput);

function onStart() {
    // Get the minutes and seconds from the input fields
    minutes = parseInt(minMSBInput.value + minLSBInput.value);
    seconds = parseInt(secMSBInput.value + secLSBInput.value);

    if (minutes === 0 && seconds === 0) {
        alert('Please enter a valid time');
        return;
    }

    // Disable the input fields and start button
    updateDisplayAndButtons(true, false);

    timerId = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timerId);
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        setTimerDisplay(minutes, seconds);
        // timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function setTimerDisplay(minutes, seconds) {
    minMSBInput.value = String(Math.floor(minutes / 10)).padStart(1, '0');
    minLSBInput.value = String(minutes % 10).padStart(1, '0');
    secMSBInput.value = String(Math.floor(seconds / 10)).padStart(1, '0');
    secLSBInput.value = String(seconds % 10).padStart(1, '0');
}

function updateDisplayAndButtons(startStatus = false, stopStatus = false) {
    minMSBInput.disabled = startStatus;
    minLSBInput.disabled = startStatus;
    secMSBInput.disabled = startStatus;
    secLSBInput.disabled = startStatus;

    startBtn.disabled = startStatus;
    stopBtn.disabled = stopStatus;
}

function onStop() {
    // Enable the input fields and start button
    updateDisplayAndButtons(false, true);
    clearInterval(timerId);
}

function onReset() {
    // Enable the input fields and buttons
    updateDisplayAndButtons(false, false);
    clearInterval(timerId);
    // timer.textContent = '00:00';
    minMSBInput.value = '0';
    minLSBInput.value = '0';
    secMSBInput.value = '0';
    secLSBInput.value = '0';
    timerId = null; // handle memory leak
}

// input validation - check if the input is a number

function onInput(e) {
    const input = e.target;
    if (isNaN(input.value)) {
        input.value = '';
    }
}








