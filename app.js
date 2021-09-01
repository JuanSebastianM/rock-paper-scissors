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
const computerShape = document.getElementById('computer')
const computerPlay = () => {
    let choice = shapes[Math.floor(Math.random() * 3)]
    computerShape.setAttribute('src', `${choice.img}`)
}