let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");
const msg = document.getElementById("msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // console.log(choice);
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const getCompChoice = () => {
    const arr = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random(3)*3);
    return arr[idx];
}

const playGame = (userChoice) =>{
    const compChoice = getCompChoice();
    if(userChoice === compChoice){
        msg.innerText = "It was a Tie!";
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
    }
    else if(userChoice === "rock" && compChoice === "scissors"){
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else if(userChoice === "paper" && compChoice === "rock"){
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else if(userChoice === "scissors" && compChoice === "paper"){
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
