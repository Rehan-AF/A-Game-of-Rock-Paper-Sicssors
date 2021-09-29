let userInput = document.querySelectorAll(".option");

for (i = 0; i < userInput.length; i++) {
  userInput[i].addEventListener("click", function game1(e) {
    // result display variable
    let result = document.getElementById("result");
    let winLost = document.querySelector(".counter");
    //  computer values
    let randomNumber = Math.floor(Math.random() * 3);

    // User values
    userInputValue = Number(e.target.value);

    if (userInputValue == 0) {
      if (randomNumber == 0) {
        result.innerHTML = `computer picked rock `;
        winLost.innerHTML = `<span class="game-tie">tie</span>`;
      } else if (randomNumber == 1) {
        result.innerHTML = `conputer picked paper  `;
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
  });
}
