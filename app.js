const reviews = [
    {
        id: 1,
        name: 'Manuel Dávila',
        job: 'Programador en Wix',
        img: 'assets/madbot.JPG',
        message: 'Just kidding'
    },
    {
        id: 2,
        name: 'Edson Huamani',
        job: 'PHP Developer',
        img: 'assets/sunqupacha.jpeg',
        message: 'Por un Perú tecnológico'
    },
    {
        id: 3,
        name: 'Thom Maurick',
        job: 'Backend Developer',
        img: 'assets/golang.svg',
        message: 'Hola Erick'
    },
    {
        id: 4,
        name: 'César Ortega',
        job: 'Backend Developer',
        img: 'assets/linux.png',
        message: 'Hola mundo'
    },
    {
        id: 5,
        name: 'Erick Rivas',
        job: 'Programador de la Nasa',
        img: 'assets/penguin.png',
        message: 'Hola Thom'
    }
]

const $img = document.getElementById('person-img')
const $author = document.getElementById('author')
const $job = document.getElementById('job')
const $info = document.getElementById('info')

const $prevBtn = document.querySelector('.prev-btn')
const $nextBtn = document.querySelector('.next-btn')
const $randomBtn = document.querySelector('.random-btn')

let currentItem = 0

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem)
})

$prevBtn.addEventListener('click', e => {
    e.preventDefault()
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})

$nextBtn.addEventListener('click', e => {
    e.preventDefault()
    currentItem++
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
})

$randomBtn.addEventListener('click', e => {
    e.preventDefault()
    currentItem = parseInt(Math.random() * reviews.length)
    showPerson(currentItem)
})

function showPerson(person) {
    const item = reviews[person]
    $img.src = item.img
    $author.textContent = item.name
    $job.textContent = item.job
    $info.textContent = item.message
}