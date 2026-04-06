let choice = ["rock", "paper", "scissors"];

let playernumber = Math.floor(Math.random() * 3);
let computernumber = Math.floor(Math.random() * 3);

let playerchoice = choice[playernumber];
let computerchoice = choice[computernumber];

let message = "Player: " + playerchoice + " Computer: " + computerchoice + "\n";

if(playernumber == computernumber){
    message += " It's a tie!";
} else if(playernumber == "rock" && computernumber == "scissors") 
{    message += " Player wins!";
}   else if(playernumber == "paper" && computernumber == "rock")
{    message += " Player wins!";
}   else if(playernumber == "scissors" && computernumber == "paper")
{    message += " Player wins!";
} else {
    message += " Computer wins!";
}

console.log(message);


