// Timer variables
let timerInterval;
let timerSeconds = 0;
let isTimerRunning = false;

// Stopwatch variables
let stopwatchInterval;
let stopwatchSeconds = 0;
let isStopwatchRunning = false;

// Timer functions
function startTimer() {
  if (!isTimerRunning) {
    const input = document.getElementById("timer-input");
    const timeInSeconds = parseInt(input.value);

    if (!isNaN(timeInSeconds)) {
      timerSeconds = timeInSeconds;
      updateTimerDisplay();
      timerInterval = setInterval(updateTimer, 1000);
      input.value = ""; // Clear the input field
      isTimerRunning = true;
    }
  }
}

function updateTimer() {
  if (timerSeconds <= 0) {
    clearInterval(timerInterval);
    alert("Timer finished!");
    isTimerRunning = false;
    return;
  }

  timerSeconds--;
  updateTimerDisplay();
}

function stopTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timerSeconds = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const formattedTime = formatTime(timerSeconds);
  document.getElementById("timer").textContent = formattedTime;
}

// Stopwatch functions
function startStopwatch() {
  if (!isStopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    isStopwatchRunning = true;
  }
}

function updateStopwatch() {
  stopwatchSeconds++;
  const formattedTime = formatTime(stopwatchSeconds);
  document.getElementById("stopwatch").textContent = formattedTime;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  isStopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  isStopwatchRunning = false;
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const formattedTime = formatTime(stopwatchSeconds);
  document.getElementById("stopwatch").textContent = formattedTime;
}

// Common functions
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    padTime(hours) + ":" +
    padTime(minutes) + ":" +
    padTime(remainingSeconds)
  );
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}
