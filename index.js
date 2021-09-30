// user input buttons
let userInput = document.querySelectorAll(".option");

let result = document.getElementById("result");
let winLost = document.querySelector(".counter");
// score
let win = document.querySelector(".win");
let lose = document.querySelector(".lost");
let p = 1;
let z = 1;
for (let i = 0; i < userInput.length; i++) {
  userInput[i].addEventListener("click", function game1(e) {
    // result display variable

    //  computer values
    let randomNumber = Math.floor(Math.random() * 3);

    // User values
    userInputValue = Number(e.target.value);

    if (userInputValue == 0) {
      if (randomNumber == 0) {
        result.innerHTML = `computer picked rock `;
        winLost.innerHTML = `<span class="game-tie">tie</span>`;
      } else if (randomNumber == 1) {
        result.innerHTML = `computer picked paper  `;
        winLost.innerHTML = `<span class="game-lost">you lose</span>`;
      } else if (randomNumber == 2) {
        result.innerHTML = `computer picked scissors `;
        winLost.innerHTML = `<span class="game-won">you win</span>`;
      }
    } else if (userInputValue == 1) {
      if (randomNumber == 0) {
        result.innerHTML = `computer picked rock `;
        winLost.innerHTML = `<span class="game-won">you win</span>`;
      } else if (randomNumber == 1) {
        result.innerHTML = `conputer picked paper `;
        winLost.innerHTML = `<span class="game-tie">tie</span>`;
      } else if (randomNumber == 2) {
        result.innerHTML = `computer picked scissors `;
        winLost.innerHTML = `<span class="game-lost">you lose</span>`;
      }
    } else if (userInputValue == 2) {
      if (randomNumber == 0) {
        result.innerHTML = `computer picked rock `;
        winLost.innerHTML = `<span class="game-lost">you lose</span>`;
      } else if (randomNumber == 1) {
        result.innerHTML = `conputer picked paper `;
        winLost.innerHTML = `<span class="game-won">you win</span>`;
      } else if (randomNumber == 2) {
        result.innerHTML = `computer picked scissors  `;
        winLost.innerHTML = `<span class="game-tie">tie</span>`;
      }
    } else {
      console.log(`not working`);
    }

    // storing score
    let getscore = document.querySelector(".get-score").textContent;

    if (getscore == "you win") {
      console.log("win workin");
      win.innerHTML = p++;
    } else if (getscore == "you lose") {
      console.log("lose workin");
      lose.innerHTML = z++;
    }
  });
}
let resetScore = document.querySelector(".reset");
resetScore.addEventListener("click", function () {
  result.innerHTML = " ";
  winLost.innerHTML = " ";
  win.textContent = `0`;
  p = 1;
  lose.textContent = `0`;
  z = 1;
});
