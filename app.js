const reviews = [
    {
        id: 1,
        name: 'Alan Walker',
        job: 'Web Developer',
        img: 'assets/person1.jpeg',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum eu metus ac molestie. Etiam ultricies, libero non feugiat dapibus, elit eros aliquet orci, vel elementum tortor neque ut lorem.'
    },
    {
        id: 2,
        name: 'Nickelblack',
        job: 'Product Design',
        img: 'assets/person2.jpeg',
        message: 'Fusce vestibulum mattis convallis. Nunc vitae volutpat est. Mauris at risus porta velit mollis mattis vitae ac mi. Proin faucibus eget lacus et malesuada.'
    },
    {
        id: 3,
        name: 'Imagine Dragons',
        job: 'Mobile Developer',
        img: 'assets/person3.jpg',
        message: 'Vivamus cursus, ipsum eget rhoncus scelerisque, nunc quam semper augue, et finibus diam est vitae elit. Donec eget turpis in libero sodales fermentum.'
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