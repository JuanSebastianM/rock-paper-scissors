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
// All Player's information.
const playerShape = document.getElementById('player')
let playerShapeName = document.getElementById('player-shape')
const playerPlay = () => {
    let choice = shapes[Math.floor(Math.random() * 2)]
    setAttributes(playerShape, {'src': `${choice.img}`, 'alt': "Chosen shape by the player"})
    playerShapeName.textContent = `${choice.name}`
}
// Scores log
let playerScore = 0
let playerLog = document.getElementById('player-score')
let computerScore = 0
let computerLog = document.getElementById('comp-score')
// Function to start playing upon click on button
const button = document.querySelector('button')
button.addEventListener('click', () => {
    playerPlay();
    computerPlay();
    if (playerShapeName.textContent === 'Rock' && compShapeName.textContent === 'Scissors') {
        console.log('Rock beats scissors. Player gets +1!')
        playerScore += 1
        playerLog.textContent = playerScore
    } 
    else if (playerShapeName.textContent === 'Scissors' && compShapeName.textContent === 'Rock') {
        console.log('Rock beats scissors. Computer gets +1!')
        computerScore += 1
        computerLog.textContent = computerScore
    }
    if (playerShapeName.textContent === 'Scissors' && compShapeName.textContent === 'Paper') {
        console.log('Scissors beat paper. Player gets +1!')
        playerScore += 1
        playerLog.textContent = playerScore
    }
    else if (playerShapeName.textContent === 'Paper' && compShapeName.textContent === 'Scissors') {
        console.log('Scissors beat paper. Computer gets +1!')
        computerScore += 1
        computerLog.textContent = computerScore
    }
    if (playerShapeName.textContent === 'Paper' && compShapeName.textContent === 'Rock') {
        console.log('Paper beats rock. Player gets +1')
        playerScore += 1
        playerLog.textContent = playerScore
    }
    else if (playerShapeName.textContent === 'Rock' && compShapeName.textContent === 'Paper') {
        console.log('Paper beats rock. Computer gets +1!')
        computerScore += 1
        computerLog.textContent = computerScore
    }
    if (playerShapeName.textContent === compShapeName.textContent) {
        console.log('It is a draw. Keep going!')
    }
})
//Now I have to create the score count variable to register every point.
// And create the buttons so that the player can choose whatever he/she wants to play.