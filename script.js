function computerPlay(){
    let rps_array = ['rock','paper','scissors'];
    let random_rps = Math.floor(Math.random()*3);
    return rps_array[random_rps];
}

function playGround(playerSelection, computerSelection){
    let pSelection = playerSelection.toLowerCase();
    let comSelection = computerSelection.toLowerCase();
    if(pSelection == 'rock' && comSelection == 'paper'){
        return "You Lose! Paper beats Rock";
    }else if(pSelection == 'rock' && comSelection == 'scissors'){
        return "You Win! Rock beats Scissors";
    }else if(pSelection == 'paper' && comSelection == 'rock'){
        return "You Win! Paper beats Rock";
    }else if(pSelection == 'paper' && comSelection == 'scissors'){
        return "You Lose! Scissors beats Paper";
    }else if(pSelection == 'scissors' && comSelection == 'rock'){
        return "You Lose! Rock beats Scissors";
    }else if(pSelection == 'scissors' && comSelection == 'paper'){
        return "You Win! Scissors beats Paper";
    }else{
        return "Tie!";
    }
}

let computerSelection = computerPlay();
let playerSelection = prompt("Choose one among Rock , Paper and Scissors");

let result = playGround(playerSelection, computerSelection);
console.log(computerSelection);
console.log(playerSelection);
console.log(result);