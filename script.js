const range=prompt("enter max number");
const random=Math.floor(Math.random()*range);
document.getElementById("range-display").innerText=`The maximum range is between 0 to ${range}`;
 function checkGuess() {
      const guess = Number(document.getElementById("guess").value);
      const result = document.getElementById("result");
      if (guess === random) {
        result.innerText = `Correct! The number was ${random}`;
      } else if (guess < random) {
        result.innerText = "Too low! Try again.";
      } else {
        result.innerText = "Too high! Try again.";
      }
    }


