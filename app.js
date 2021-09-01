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
const computerShape = document.getElementById('computer')
const computerPlay = () => {
    let choice = shapes[Math.floor(Math.random() * 3)]
    setAttributes(computerShape, {'src': `${choice.img}`, 'alt': "Chosen shape by the computer"})
}
