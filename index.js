let rock = 0;
let paper = 1;
let scissors = 2;
let userInput = document.querySelectorAll(".option");
for (i = 0; i < userInput.length; i++) {
  userInput[i].addEventListener("click", function (e) {
    // result display variable
    let result = document.getElementById("result");
    //  computer values
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(` computer values ${randomNumber}`);

    // User values
    userInputValue = Number(e.target.value);
    console.log(`you picked ${userInputValue}`);

    if (userInputValue == 0) {
      if (randomNumber == 0) {
        result.innerHTML = `computer picked rock <span class="game-tie">tie</span>`;
      } else if (randomNumber == 1) {
        result.innerHTML = `conputer picked paper <span class="game-lost">you lost</span> `;
      } else if (randomNumber == 2) {
        result.innerHTML = `computer picked scissors <span class="game-won">you win</span>`;
      }
    } else if (userInputValue == 1) {
      if (randomNumber == 0) {
        result.innerHTML = `computer picked rock <span class="game-won">you win</span>`;
      } else if (randomNumber == 1) {
        result.innerHTML = `conputer picked paper <span class="game-tie">tie</span>`;
      } else if (randomNumber == 2) {
        result.innerHTML = `computer picked scissors <span class="game-lost">you lost</span>`;
      }
    } else if (userInputValue == 2) {
      if (randomNumber == 0) {
        result.innerHTML = `computer picked rock <span class="game-lost">lost</span>`;
      } else if (randomNumber == 1) {
        result.innerHTML = `conputer picked paper <span class="game-won">you win</span>`;
      } else if (randomNumber == 2) {
        result.innerHTML = `computer picked scissors <span class="game-tie">tie</span> `;
      }
    } else {
      console.log(`not working`);
    }
  });
}
