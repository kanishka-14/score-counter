let stopwatch;
let score = 0;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    stopwatch = setInterval(updateStopwatch, 1000);
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
  }
}

function stopStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(stopwatch);
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
  }
}

function updateStopwatch() {
  let stopwatchDisplay = document.getElementById('stopwatch');
  let timeArray = stopwatchDisplay.innerText.split(':');
  let hours = parseInt(timeArray[0]);
  let minutes = parseInt(timeArray[1]);
  let seconds = parseInt(timeArray[2]);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  stopwatchDisplay.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);

  // Automatically increment the score every 5 seconds
  if (seconds % 5 === 0) {
    score++;
    document.getElementById('score').innerText = 'Score: ' + score;
  }
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
