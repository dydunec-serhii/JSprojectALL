const toggleTheme = document.getElementById('toggleTheme');
const body = document.body;
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    toggleTheme.checked = true;
}

toggleTheme.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});



const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
document.addEventListener('click', function (event) {
    jump();
})
function jump() {
    if (dino.classList != "jump") {
        dino.classList.add('jump')
    }
    setTimeout(function () {
        dino.classList.remove('jump')
    }, 300)
}
var isAlive = setInterval(function () {
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    // if (cactusLeft < 50 && cactusLeft < 0 && dinoTop >=140) {
    //     alert('game over(');
    // }
}, 10)
// const sun = document.querySelector('.sun');
// const moon = document.querySelector('.moon');
// sun.href = 'index.html';
// document.body.appendChild(sun);
// moon.href = 'moon.html';
// document.body.appendChild(moon);
// sun.addEventListener('click', () => {
//     window.location.href = 'index.html';
// })
// moon.addEventListener('click', () => {
//     window.location.href = 'moon.html';
// })
const photos = [
    {
        src: './big-img/serhiy.jpg',
        name: 'Сергій Дудинець',
        info: 'Зробив гру про динозавра та стилізував головну сторінку'
    },
    {
        src: './big-img/timafiy.jpg',
        name: 'Тимофій Снісар',
        info: 'Реалізував гру "Футбол" та інтерактивне меню'
    },
    {
        src: './big-img/chatGpt.png',
        name: 'chatGpt',
        info: 'він був там, коли складно)'
    }
];

let currentIndex = 0;
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const photo = document.getElementById('photo');
const nameText = document.getElementById('studentName');
const infoText = document.getElementById('studentInfo');

function updateSlide() {
    const member = photos[currentIndex];
    photo.src = member.src;
    nameText.textContent = member.name;
    infoText.textContent = member.info;
}

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updateSlide();
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateSlide();
});

updateSlide();

