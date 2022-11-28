function getComputerChoice(){
    const choices = ['ROCK','PAPER','SCISSORS']
    return choices[Math.floor(Math.random() * choices.length)]
}
//console.log(getComputerChoice())

function getPlayerChoice(){
    let playerChoice = prompt('Choose between Rock, Paper or Scissors.')
    while (playerChoice.toLocaleUpperCase() != 'ROCK' && playerChoice.toLocaleUpperCase() != 'PAPER' && playerChoice.toLocaleUpperCase() != 'SCISSORS'){
        playerChoice = prompt('Your choice is not valid. Choose between Rock, Paper or Scissors.')
    }
    return playerChoice.toLocaleUpperCase()
}

//let playerChoice = getPlayerChoice()
//let computerChoice = getComputerChoice()

let playerChoice = 'ROCK'
let computerChoice = 'SCISSORS'

function playGame(playerChoice,computerChoice){
    console.log (`You chose ${playerChoice} and the computer chose ${computerChoice}.` )
    if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS'){
        console.log('You win!')
        return 
    }
}
   
playGame(playerChoice,computerChoice)
/* 
    ROCK - PAPER
    ROCK - SCISSORS
    ROCK - ROCK
    PAPER - ROCK
    PAPER - SCISSORS
    PAPER - PAPER
    SCISSORS - PAPER
    SCISSORS - ROCK
    SCISSORS - SCISSORS
    */