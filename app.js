const shapes = [
    {
        name: 'Rock',
        img: 'images/rock.png'
    },
    {
        name: 'Paper',
        img: 'images/paper.png'
    },
    {
        name: 'Scissors',
        img: 'images/scissors.png'
    }
]
// function to set the src of the image and an alt message for a11y
function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key])
    }
}
// All Computer's information
const computerShape = document.getElementById('computer')
let compShapeName = document.getElementById('comp-shape')
const computerPlay = () => {
    let choice = shapes[Math.floor(Math.random() * 3)]
    setAttributes(computerShape, {'src': `${choice.img}`, 'alt': "Chosen shape by the computer"})
    compShapeName.textContent = `${choice.name}`
}
// Player's information.
const playerShape = document.getElementById('player')
let playerShapeName = document.getElementById('player-shape')
// Scores log
let playerScore = 0
let playerLog = document.getElementById('player-score')
let computerScore = 0
let computerLog = document.getElementById('comp-score')
let result = document.getElementById('result')
// After match has finished, display Play Again button and hide #button-play
const playAgain = document.querySelector('#play-again')
//Hide #button-play and instructions after clicking on Play and make .options-div visible. Then, after clicking on an option, hide that div and continue
const buttonPlay = document.querySelector('#button-play')
const optionsDiv = document.querySelector('.options-div')
const instructions = document.querySelector('#instructions')
function resetScore() {
    playerScore = 0
    playerLog.textContent = playerScore
    computerScore = 0
    computerLog.textContent = computerScore
    setAttributes(playerShape, {'src': "", 'alt': ""})
    playerShapeName.textContent = ""
    setAttributes(computerShape, {'src': "", 'alt': ""})
    compShapeName.textContent = ""
}
buttonPlay.addEventListener('click', () => {
    optionsDiv.classList.toggle('options-visible')
    buttonPlay.classList.toggle('hidden-element')
    if (result.textContent === '') { resetScore() }
    if ((playerLog.textContent === '0') && instructions.classList.contains('hidden-element') === false) {
        instructions.classList.toggle('hidden-element')
    }
})
// Functions to confirm whether it is a draw and if there's a winner
function isADraw() { 
    if (playerShapeName.textContent === compShapeName.textContent) {
        result.textContent = 'It is a draw. Keep going!'
    }
}
function checkWinner() {
    if (playerScore === 5) {
        result.textContent = `You win! Congratulations!!`
        buttonPlay.classList.toggle('hidden-element')
        playAgain.classList.toggle('play-again-visible')
    } else if (computerScore === 5) {
        result.textContent = `You lose :'(... Imagine losing to a machine, lol!`
        buttonPlay.classList.toggle('hidden-element')
        playAgain.classList.toggle('play-again-visible')
    }
}
// If Player plays rock
const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    computerPlay();
    setAttributes(playerShape, {'src': `${shapes[0].img}`, 'alt': "Chosen shape by the player"})
    playerShapeName.textContent = 'Rock'
    if (playerShapeName.textContent === 'Rock' && compShapeName.textContent === 'Scissors') {
        result.textContent = 'Rock beats scissors. You get +1!'
        playerScore += 1
        playerLog.textContent = playerScore
    } 
    else if (playerShapeName.textContent === 'Rock' && compShapeName.textContent === 'Paper') {
        result.textContent = 'Paper beats rock. Computer gets +1!'
        computerScore += 1
        computerLog.textContent = computerScore
    }
    isADraw()
    checkWinner()
    buttonPlay.classList.toggle('hidden-element')
    optionsDiv.classList.toggle('options-visible')
})
// If Player plays paper
const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    computerPlay();
    setAttributes(playerShape, {'src': `${shapes[1].img}`, 'alt': "Chosen shape by the player"})
    playerShapeName.textContent = 'Paper'
    if (playerShapeName.textContent === 'Paper' && compShapeName.textContent === 'Scissors') {
        result.textContent = 'Scissors beat paper. Computer gets +1!'
        computerScore += 1
        computerLog.textContent = computerScore
    }
    else if (playerShapeName.textContent === 'Paper' && compShapeName.textContent === 'Rock') {
        result.textContent = 'Paper beats rock. You get +1'
        playerScore += 1
        playerLog.textContent = playerScore
    }
    isADraw()
    checkWinner()
    buttonPlay.classList.toggle('hidden-element')
    optionsDiv.classList.toggle('options-visible')
})
// If Player plays scissors
const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    computerPlay();
    setAttributes(playerShape, {'src': `${shapes[2].img}`, 'alt': "Chosen shape by the player"})
    playerShapeName.textContent = 'Scissors'
    if (playerShapeName.textContent === 'Scissors' && compShapeName.textContent === 'Rock') {
        result.textContent = 'Rock beats scissors. Computer gets +1!'
        computerScore += 1
        computerLog.textContent = computerScore
    }
    else if (playerShapeName.textContent === 'Scissors' && compShapeName.textContent === 'Paper') {
        result.textContent = 'Scissors beat paper. You get +1!'
        playerScore += 1
        playerLog.textContent = playerScore
    }
    isADraw()
    checkWinner()
    buttonPlay.classList.toggle('hidden-element')
    optionsDiv.classList.toggle('options-visible')
})
playAgain.addEventListener('click', () => {
    result.textContent = '';
    buttonPlay.classList.toggle('hidden-element')
    playAgain.classList.toggle('play-again-visible')
    resetScore()
})