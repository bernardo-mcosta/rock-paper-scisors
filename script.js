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

let playerChoice = 'SCISSORS'
let computerChoice = 'PAPER'

function playRound(playerChoice,computerChoice){
    console.log (`You chose ${playerChoice} and the computer chose ${computerChoice}.` )
    if (playerChoice == computerChoice){
        return 'draw'
    } else if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS'){
        return 'win'
    } else if (playerChoice == 'ROCK' && computerChoice == 'PAPER'){
        return 'lose'
    } else if (playerChoice == 'PAPER' && computerChoice == 'ROCK'){
        return 'win'
    } else if (playerChoice == 'PAPER' && computerChoice == 'SCISSORS'){
        return 'lose'
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'PAPER'){
        return 'win'
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'ROCK'){
        return 'lose'
    }
}
//playRound(playerChoice,computerChoice)

function game(){
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++){
        console.log(`Starting round ${i+1}...`)
        let result = playRound(playerChoice,computerChoice)
        if (result == 'win'){
            playerScore++
        } else if (result =='lose'){
            computerScore++
            console.log('You lose!')
        } else {
            console.log("It's a draw!")
        }
    }
    console.log(computerScore)
    console.log(playerScore)
    showWinner(playerScore,computerScore)
}

game()


function showWinner(playerScore,computerScore){
    if (playerScore > computerScore){
        console.log('You won the game!')
    } else if (playerScore < computerScore){
        console.log('You lost the game!')
    } else 
        console.log('It\'s a tie!')
}