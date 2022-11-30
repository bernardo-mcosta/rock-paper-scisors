function getComputerChoice(){
    const choices = ['ROCK','PAPER','SCISSORS']
    return choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerChoice(){
    let choice = prompt('Choose between Rock, Paper or Scissors.')
    while (choice.toLocaleUpperCase() != 'ROCK' && choice.toLocaleUpperCase() != 'PAPER' && choice.toLocaleUpperCase() != 'SCISSORS'){
        choice = prompt('Your choice is not valid. Choose between Rock, Paper or Scissors.')
    }
    return choice.toLocaleUpperCase()
}

function playRound(){
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()
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

function game(){
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++){
        console.log(`Starting round ${i+1}...`)
        let result = playRound()
        if (result == 'win'){
            playerScore++
            console.log('You win!')
        } else if (result =='lose'){
            computerScore++
            console.log('You lose!')
        } else {
            console.log("It's a draw!")
        }
    }
    console.log('-- FINAL RESULT --')
    console.log(`Computer score: ${computerScore}`)
    console.log(`Your score: ${playerScore}`)
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