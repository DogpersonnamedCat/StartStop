let counter = document.getElementById("counter");
let goal = document.getElementById("goal");
let gamingStatus = 0;
let winLoseMessage = document.getElementById("winLose");
let rt;
let rtPlus;

let startButton = document
  .getElementById("start")
  .addEventListener("click", function (e) {
    if (gamingStatus == 1) {
      e.preventDefault;
    } else {
      gamingStatus = 1;
      //function reference as 2nd param, must be nested or else function is called immediately
      incrementTimer(0);
      getRandomTime(3);
    }
  });

let stopButton = document
  .getElementById("stop")
  .addEventListener("click", function (e) {
    if (gamingStatus == 0) {
      e.preventDefault;
    } else {
      stopGame();
      winLoseMessage.innerHTML = "Analyzing.";
      // Allows for any input lag from Stop trigger and final incrementTimer call, if any
      setTimeout(function () {
        checkWinCondition();
      }, 1000);
    }
  });

let resetButton = document
  .getElementById("reset")
  .addEventListener("click", function (e) {
    if (gamingStatus == 1) {
      e.preventDefault();
    } else {
      resetGame(gamingStatus, counter, goal, winLoseMessage);
    }
  });

// Starts and updates time through real time
function incrementTimer(time) {
  setTimeout(function () {
    if (gamingStatus == 1) {
      counter.innerHTML = time.toFixed(2);
      incrementTimer(time + 0.01);
    }
  }, 10);
}

function getRandomTime(t) {
  rt = Math.random(t) * t + 1;
  // rt should be no less than 1
  if (rt < 1) {
    return rt + 2;
  }
  rtPlus = rt + 3;
  document.getElementById("goal").innerHTML =
    rt.toFixed(2) + " - " + rtPlus.toFixed(2);
  return rt, rtPlus;
}

function stopGame() {
  if (gamingStatus == 0) {
    gamingStatus = 1;
  } else {
    gamingStatus = 0;
  }
  return gamingStatus;
}

function checkWinCondition() {
  let pTime = counter.innerHTML;
  let cTime1 = rt.toFixed(2);
  let cTime2 = rtPlus.toFixed(2);
  if (pTime >= cTime1 && pTime <= cTime2) {
    winLoseMessage.innerHTML = "<span class='display-6'>You Win!</span>";
  } else {
    winLoseMessage.innerHTML = "<span class='display-6'>Try Again...</span>";
  }
  return winLoseMessage;
}

function resetGame(state, pTime, cTime, message) {
  state.innerHTML = 0;
  pTime.innerHTML = "0";
  cTime.innerHTML = 0;
  message.innerHTML = "Press Start to Play!";
  return state, pTime, cTime, message;
}
