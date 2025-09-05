//guess game
const range=prompt("enter max number");
const random=Math.floor(Math.random()*range);
console.log(random);
let guess=prompt("enter your guess between 1 to range");
while(true){
     if(guess=="quit"){
          console.log("game quitted");
          break;
     }
     if(guess==random){
          console.log("correct guess",random);
          break;
     }
     else if(guess<random){
       guess=prompt("guess was too small,enter again")
     }
     else{
       guess=prompt("guess was too large,enter again")
     }
}

