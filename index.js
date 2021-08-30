const container = document.querySelector(".container");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let msgTop = document.getElementById("display-msg-top");
let msgBottom = document.getElementById("display-msg-bottom"); 
const cpHand = document.querySelector("#cp-hand");
const pHand = document.querySelector("#p-hand");
let pChoice;
let cpChoose;
let hasChosen = false;
let cpScoreDisplay = document.getElementById("cp-score");
let pScoreDisplay = document.getElementById("p-score");
let cpScore = 0;
let pScore = 0;
cpScoreDisplay.innerHTML = cpScore;
pScoreDisplay.innerHTML = pScore;

container.addEventListener("click", function(){
    let bgMusic = document.getElementById("player");
    bgMusic.play();
})
 
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const tie = document.getElementById("tie");

function cpChoice(){
    let result = Math.floor(Math.random() * 3);
    switch (result){
        case 0:
            cpChoose = 'rock';
            break;
        case 1:
            cpChoose = 'paper';
            break;
        case 2:
            cpChoose = 'scissors';
            break;
        default:
            cpChoose = 'ERROR';
    }
}

rock.addEventListener("click", pickRock);


function pickRock(){
    if (hasChosen === false){
        hasChosen = true;
        pChoice = 'rock';
        cpChoice();
        pHand.style.visibility = 'visible';
        pHand.src = 'img/rock.png';
        if (cpChoose === pChoice){
            tie.play();
            msgBottom.innerHTML = 'The game is a tie!';
            cpHand.style.visibility = 'visible';
            cpHand.src = 'img/rock-v.png';
            setTimeout("cpHand.style.visibility = 'hidden'",3000);
            setTimeout("pHand.style.visibility = 'hidden'",3000);
            setTimeout("msgTop.innerHTML = ''",4000);
            setTimeout("msgBottom.innerHTML = ''",4000);
            setTimeout("hasChosen = false",4000); 
        } else if (cpChoose === 'paper'){
            lose.play()
            msgBottom.innerHTML = 'Paper covers rock!';
            cpHand.style.visibility = 'visible';
            cpHand.src = 'img/paper-v.png';
            cpScore++
            cpScoreDisplay.innerHTML = cpScore;
            setTimeout("cpHand.style.visibility = 'hidden'",3000);
            setTimeout("pHand.style.visibility = 'hidden'",3000);
            setTimeout("msgTop.innerHTML = ''",4000);
            setTimeout("msgBottom.innerHTML = ''",4000);
            setTimeout("hasChosen = false",4000);
        } else {
            win.play();
            msgBottom.innerHTML = 'Rock crushes scissors!';
            cpHand.style.visibility = 'visible';
            cpHand.src = 'img/scissors-v.png';
            pScore++
            pScoreDisplay.innerHTML = pScore;
            setTimeout("cpHand.style.visibility = 'hidden'",3000);
            setTimeout("pHand.style.visibility = 'hidden'",3000);
            setTimeout("msgTop.innerHTML = ''",4000);
            setTimeout("msgBottom.innerHTML = ''",4000);
            setTimeout("hasChosen = false",4000);
        } 
    }
}


paper.addEventListener("click", pickPaper);

function pickPaper(){
    if (hasChosen === false){
        hasChosen = true;
        pChoice = 'paper';
        cpChoice();
        pHand.style.visibility = 'visible';
        pHand.src = 'img/paper.png';
        if (cpChoose === pChoice){
            tie.play();
            msgBottom.innerHTML = 'The game is a tie!';
            cpHand.style.visibility = 'visible';
            cpHand.src = 'img/paper-v.png';
            setTimeout("cpHand.style.visibility = 'hidden'",3000);
            setTimeout("pHand.style.visibility = 'hidden'",3000);
            setTimeout("msgTop.innerHTML = ''",4000);
            setTimeout("msgBottom.innerHTML = ''",4000);
            setTimeout("hasChosen = false",4000);
        } else if (cpChoose === 'rock'){
            win.play();
            msgBottom.innerHTML = 'Paper covers rock!';
            cpHand.style.visibility = 'visible';
            cpHand.src = 'img/rock-v.png';
            pScore++
            pScoreDisplay.innerHTML = pScore;
            setTimeout("cpHand.style.visibility = 'hidden'",3000);
            setTimeout("pHand.style.visibility = 'hidden'",3000);
            setTimeout("msgTop.innerHTML = ''",4000);
            setTimeout("msgBottom.innerHTML = ''",4000);
            setTimeout("hasChosen = false",4000);
        } else {
            lose.play()
            msgBottom.innerHTML = 'Scissors cut paper!';
            cpHand.style.visibility = 'visible';
            cpHand.src = 'img/scissors-v.png';
            cpScore++
            cpScoreDisplay.innerHTML = cpScore;
            setTimeout("cpHand.style.visibility = 'hidden'",3000);
            setTimeout("pHand.style.visibility = 'hidden'",3000);
            setTimeout("msgTop.innerHTML = ''",4000);
            setTimeout("msgBottom.innerHTML = ''",4000);
            setTimeout("hasChosen = false",4000);
        }
    }
}

scissors.addEventListener("click", pickScissors);

function pickScissors(){
    if (hasChosen === false){
        hasChosen = true;
        pChoice = 'scissors';
        cpChoice();
        pHand.style.visibility = 'visible';
        pHand.src = 'img/scissors.png';
        if (cpChoose === pChoice){
            tie.play();
            msgBottom.innerHTML = 'The game is a tie!';
            cpHand.style.visibility = 'visible';
            cpHand.src = 'img/scissors-v.png';
            setTimeout("cpHand.style.visibility = 'hidden'",3000);
            setTimeout("pHand.style.visibility = 'hidden'",3000);
            setTimeout("msgTop.innerHTML = ''",4000);
            setTimeout("msgBottom.innerHTML = ''",4000);
            setTimeout("hasChosen = false",4000);
        } else if (cpChoose === 'rock'){
            lose.play()
            msgBottom.innerHTML = 'Rock crushes scissors!';
            cpHand.style.visibility = 'visible';
            cpHand.src = 'img/rock-v.png';
            cpScore++
            cpScoreDisplay.innerHTML = cpScore;
            setTimeout("cpHand.style.visibility = 'hidden'",3000);
            setTimeout("pHand.style.visibility = 'hidden'",3000);
            setTimeout("msgTop.innerHTML = ''",4000);
            setTimeout("msgBottom.innerHTML = ''",4000);
            setTimeout("hasChosen = false",4000);
        } else {
            win.play();
            msgBottom.innerHTML = 'Scissors cut paper!';
            cpHand.style.visibility = 'visible';
            cpHand.src = 'img/paper-v.png';
            pScore++
            pScoreDisplay.innerHTML = pScore;
            setTimeout("cpHand.style.visibility = 'hidden'",3000);
            setTimeout("pHand.style.visibility = 'hidden'",3000);
            setTimeout("msgTop.innerHTML = ''",4000);
            setTimeout("msgBottom.innerHTML = ''",4000);
            setTimeout("hasChosen = false",4000);
        }
    }
}