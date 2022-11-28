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
let computerChoice = 'PAPER'

function playRound(playerChoice,computerChoice){
    console.log (`You chose ${playerChoice} and the computer chose ${computerChoice}.` )
    if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS'){
        console.log('You win!')
        return 'win'
    } else if (playerChoice == 'ROCK' && computerChoice == 'PAPER'){
        console.log('You lose!')
        return 'lose'
    } else if (playerChoice == 'ROCK' && computerChoice == 'ROCK'){
        console.log("It's a draw!")
        return 'draw'
    } else if (playerChoice == 'PAPER' && computerChoice == 'ROCK'){
        console.log('You win!')
        return 'win'
    } else if (playerChoice == 'PAPER' && computerChoice == 'SCISSORS'){
        console.log('You lose!')
        return 'lose'
    } else if (playerChoice == 'PAPER' && computerChoice == 'PAPER'){
        console.log("It's a draw!")
        return 'draw'
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'PAPER'){
        console.log('You win!')
        return 'win'
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'ROCK'){
        console.log('You lose!')
        return 'lose'
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'SCISSORS'){
        console.log("It's a draw!")
        return 'draw'
    }
}


   
playRound(playerChoice,computerChoice)
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