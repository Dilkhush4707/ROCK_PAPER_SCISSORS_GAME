let user;
let computerchoice;
let scoreStr = localStorage.getItem("Score");
let score = JSON.parse(scoreStr) || {
  win: 0,
  lose: 0,
  tie: 0,
};
function displayScore() {
  return (document.querySelector(".score_result").innerText = score.win);
}

//this is a reset score function

function reset(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lose: 0,
        tie: 0,
      };
  displayScore();
}

// this function is a computer choice genrator
function genrateComputerChoice() {
  let randomNumber = Math.random() * 3;
  let computerpick = document.querySelector(".computerMove");
  computerpick.classList.removeall;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerpick.classList.add("rockimg");
    return "Rock";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerpick.classList.add("peperimg");
    return "Paper";
  } else {
    computerpick.classList.add("scissorsimg");
    return "Scissors";
  }
}
// this funtion use in win decision
function getResult(computerMove, userMove, scoreStr) {
  let userpick = document.querySelector("#userMove");
  userpick.classList.removeall;
  if (userMove === "Rock") {
    userpick.classList.add("rockimg");
    if (computerMove === "Rock") {
      score.tie = score.tie + 1;
      return " Its tie";
    } else if (computerMove === "Paper") {
      score.lose = score.lose + 1;
      return "computer win";
    } else if (computerMove === "Scissors") {
      score.win = score.win + 1;
      return "you won";
    }
  } else if (userMove === "Paper") {
    userpick.classList.add("peperimg");
    if (computerMove === "Rock") {
      score.win = score.win + 1;
      return "you won";
    } else if (computerMove === "Paper") {
      score.tie = score.tie + 1;
      return " Its tie";
    } else if (computerMove === "Scissors") {
      score.lose = score.lose + 1;
      return "computer win";
    }
  } else {
    userpick.classList.add("scissorsimg");
    if (computerMove === "Rock") {
      score.lose = score.lose + 1;
      return "computer win";
    } else if (computerMove === "Paper") {
      score.win = score.win + 1;
      return "you won";
    } else if (computerMove === "Scissors") {
      score.tie = score.tie + 1;
      return " Its tie";
    }
  }
}

// this is a result function
function showResult(user, computer, result) {
  localStorage.setItem("Score", JSON.stringify(score));
  document.querySelector(".matchResult").innerText =
    result !== undefined ? ` ${result} ` : "";
  document.querySelector(".history").innerText = ` ${displayScore()}`;
}
showResult();
