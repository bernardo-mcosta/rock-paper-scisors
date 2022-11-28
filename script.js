function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
//console.log(getComputerChoice())

function getPlayerChoice(){
    let playerChoice = prompt('Choose between Rock, Paper or Scissors.')
    while (playerChoice.toLocaleUpperCase() != 'ROCK' && playerChoice.toLocaleUpperCase() != 'PAPER' && playerChoice.toLocaleUpperCase() != 'SCISSORS'){
        playerChoice = prompt('Your choice is not valid. Choose between Rock, Paper or Scissors.')
    }
    return playerChoice
}



getPlayerChoice()
//|| playerChoice.toLocaleUpperCase != 'PAPER' || playerChoice.toLocaleUpperCase != 'SCISSORS' 