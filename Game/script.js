let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); // Use querySelectorAll

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options =["rock","paper","scissors"];
     const index = Math.floor(Math.random()*3);
     return options[index];
};

const drawGame = () => {
    msg.innerText = "Game is draw ,play it again";
    msg.style.backgroundColor = "yellow";
};

const showWinner =(userWin,userChoice, compChoice) =>{
    userScore++;
    userScorePara.innerText =userScore;
    if(userWin){
       
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor =  "green";
    }else{
        compScore++;
    compScorePara.innerText =compScore;
        msg.innerText = `you beats! ${userChoice} win ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{

const compChoice = genCompChoice();


if(userChoice === compChoice){
     drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        compChoice === "paper"?false:true;
    }else if(userChoice === compChoice){
        userWin = compChoice === "scissors"?false:true;
    } else {
        userWin = compChoice === "rock"?false:true;
    }
    showWinner(userWin ,userChoice, compChoice);
}


}
choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
        const userChoice = choice.getAttribute("id");
      
        playGame(userChoice);
    });
});