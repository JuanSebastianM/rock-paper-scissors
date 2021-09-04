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
let result = document.getElementById('result')
// Function to start playing upon click on button
const buttonPlay = document.querySelector('#button-play')
// buttonPlay.addEventListener('click', () => {
//     playerPlay();
//     computerPlay();
//         if (playerShapeName.textContent === 'Rock' && compShapeName.textContent === 'Scissors') {
//             result.textContent = 'Rock beats scissors. Player gets +1!'
//             playerScore += 1
//             playerLog.textContent = playerScore
//         } 
//         else if (playerShapeName.textContent === 'Scissors' && compShapeName.textContent === 'Rock') {
//             result.textContent = 'Rock beats scissors. Computer gets +1!'
//             computerScore += 1
//             computerLog.textContent = computerScore
//         }
//         if (playerShapeName.textContent === 'Scissors' && compShapeName.textContent === 'Paper') {
//             result.textContent = 'Scissors beat paper. Player gets +1!'
//             playerScore += 1
//             playerLog.textContent = playerScore
//         }
//         else if (playerShapeName.textContent === 'Paper' && compShapeName.textContent === 'Scissors') {
//             result.textContent = 'Scissors beat paper. Computer gets +1!'
//             computerScore += 1
//             computerLog.textContent = computerScore
//         }
//         if (playerShapeName.textContent === 'Paper' && compShapeName.textContent === 'Rock') {
//             result.textContent = 'Paper beats rock. Player gets +1'
//             playerScore += 1
//             playerLog.textContent = playerScore
//         }
//         else if (playerShapeName.textContent === 'Rock' && compShapeName.textContent === 'Paper') {
//             result.textContent = 'Paper beats rock. Computer gets +1!'
//             computerScore += 1
//             computerLog.textContent = computerScore
//         }
//         if (playerShapeName.textContent === compShapeName.textContent) {
//             result.textContent = 'It is a draw. Keep going!'
//         }
//         if (playerScore === 5) {
//             result.textContent = `You win! Congratulations!!`
//             playerScore = 0
//             playerLog.textContent = playerScore
//             computerScore = 0
//             computerLog.textContent = computerScore
//         } else if (computerScore === 5) {
//             result.textContent = `You lose :'(... Imagine losing to a machine, lol!`
//             playerScore = 0
//             playerLog.textContent = playerScore
//             computerScore = 0
//             computerLog.textContent = computerScore
//         }
//     })
    
// change button text to "play again" after having finished the round. move reset code snippets to the top.


//Hide #button-play after clicking on it and make .options-div visible. Then, after clicking on an option, hide that div and continue.
const optionsDiv = document.querySelector('.options-div')
buttonPlay.addEventListener('click', () => {
    optionsDiv.classList.toggle('options-visible')
    buttonPlay.classList.toggle('play-button-hidden')
})
function isADraw() { 
    if (playerShapeName.textContent === compShapeName.textContent) {
        result.textContent = 'It is a draw. Keep going!'
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
    buttonPlay.classList.toggle('play-button-hidden')
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
    buttonPlay.classList.toggle('play-button-hidden')
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
    buttonPlay.classList.toggle('play-button-hidden')
    optionsDiv.classList.toggle('options-visible')
})
function checkWinner() {
    if (playerScore === 5) {
        result.textContent = `You win! Congratulations!!`
        playerScore = 0
        playerLog.textContent = playerScore
        computerScore = 0
        computerLog.textContent = computerScore
        buttonPlay.addEventListener('click', () => {
            result.textContent = ''
        })
    } else if (computerScore === 5) {
        result.textContent = `You lose :'(... Imagine losing to a machine, lol!`
        buttonPlay.addEventListener('click', () => {
            result.textContent = ''
        })
    }
}