let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
// console.log(choices);
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");


//user Choice ()
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        // console.log(choiceId);
        playGame(userChoice);
    });
});

//computer choice ()
const genCompChoice = () => {
    const choices = ["rock" , "paper", "scissors"];
    const choicesIndex = Math.floor(Math.random() * 3);
    // console.log(choicesIndex);
    return choices[choicesIndex];
};

const drawGame = () => {
    // console.log("The Game is Draw.");
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#03071e";
};

const checkingGame = (userWin, userChoice, compChoice) => {
    if(userWin == true){
        // console.log(`The Winner is User`); 
        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        }else{
        // console.log(`The winner is Computer.`);
        compScore++;
        compScoreBoard.innerText = compScore;
        msg.innerText = `You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        }
};

const playGame = (userChoice) => {
    // console.log(`User just clicked = ${userChoice}`);
    const compChoice = genCompChoice();
    // console.log(`Computer choice is = ${compChoice}`);
    
    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "scissors" ? true : false;
            // console.log(userWin);
        }else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
            // console.log(userWin);
        }else {
            userWin = compChoice === "paper" ? true : false;
            // console.log(userWin);
        }
        checkingGame(userWin, userChoice, compChoice);
    }
};