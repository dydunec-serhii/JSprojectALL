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
        info: 'Реалізував такы ыгри як: "Футбол", "вгадай число", "інтерактивне меню" та доробив майже усі секції на сайті за один день'
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

const compScoreElem = document.getElementById('compScore');
const userScoreElem = document.getElementById('userScore');
const choices = document.querySelectorAll('.choise');
const resultText = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

let userScore = 0;
let compScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.dataset.choice;
        const compChoice = getComputerChoice();
        const result = determineWinner(userChoice, compChoice);
        if (result === 'win') {
            userScore++;
            resultText.textContent = 'Ви виграли раунд!';
            resultText.style.color = 'rgb(3, 153, 0)';
            resultText.style.fontFamily = 'Montserrat Alternates';
            resultText.style.fontSize = '12px';
            resultText.style.fontWeight = '400';
            resultText.style.lineHeight = '15px';
            resultText.style.letterSpacing = '0%';
            resultText.style.textAlign = 'right';
            resultText.style.position = 'relative';
            resultText.style.width = '275px';
            resultText.style.height = '15px';
            resultText.classList.add('all-center-mar');
        } else if (result === 'lose') {
            compScore++;
            resultText.textContent = 'Комп’ютер виграв раунд!';
            resultText.style.fontFamily = 'Montserrat Alternates';
            resultText.style.fontSize = '12px';
            resultText.style.fontWeight = '400';
            resultText.style.lineHeight = '15px';
            resultText.style.letterSpacing = '0%';
            resultText.style.textAlign = 'right';
            resultText.style.position = 'relative';
            resultText.style.width = '275px';
            resultText.style.height = '15px';
            resultText.style.color = 'rgb(153, 0, 0)';
            resultText.classList.add('all-center-mar');
        } else {
            resultText.textContent = 'Нічия!';
            resultText.style.color = 'gray';
            resultText.style.fontFamily = 'Montserrat Alternates';
            resultText.style.fontSize = '12px';
            resultText.style.fontWeight = '400';
            resultText.style.lineHeight = '15px';
            resultText.style.letterSpacing = '0%';
            resultText.style.textAlign = 'right';
            resultText.style.position = 'relative';
            resultText.style.width = '275px';
            resultText.style.height = '15px';
            resultText.classList.add('all-center-mar');
        }

        userScoreElem.textContent = `Ви - ${userScore}`;
        compScoreElem.textContent = `Комп’ютер - ${compScore}`;
    });
});

resetBtn.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    userScoreElem.textContent = `Ви - 0`;
    compScoreElem.textContent = `Комп’ютер - 0`;
    userScoreElem.style.color = 'black';
    compScoreElem.style.color = 'black';
    resultText.style.color = 'black';
    resultText.style.fontFamily = 'Montserrat Alternates';
    resultText.style.fontSize = '12px';
    resultText.style.fontWeight = '400';
    resultText.style.lineHeight = '15px';
    resultText.style.letterSpacing = '0%';
    resultText.style.textAlign = 'left';
    resultText.style.position = 'relative';
    resultText.style.width = '169px';
    resultText.style.height = '15px';
    compScoreElem.style.fontFamily = 'Montserrat Alternates';
    userScoreElem.style.fontFamily = 'Montserrat Alternates';
    compScoreElem.style.fontSize = '12px';
    userScoreElem.style.fontSize = '12px';
    compScoreElem.style.fontWeight = '400';
    userScoreElem.style.fontWeight = '400';
    compScoreElem.style.lineHeight = '15px';
    userScoreElem.style.lineHeight = '15px';
    compScoreElem.style.letterSpacing = '0%';
    userScoreElem.style.letterSpacing = '0%';
    compScoreElem.style.textAlign = 'left';
    userScoreElem.style.textAlign = 'left';
    compScoreElem.style.position = 'relative';
    userScoreElem.style.position = 'relative';
    compScoreElem.style.width = '169px';
    userScoreElem.style.width = '169px';
    compScoreElem.style.height = '15px';
    userScoreElem.style.height = '15px';
    resultText.textContent = '';
});

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random() * options.length);
    return options[rand];
}

function determineWinner(user, comp) {
    if (user === comp) return 'draw';
    if (
        (user === 'rock' && comp === 'scissors') ||
        (user === 'scissors' && comp === 'paper') ||
        (user === 'paper' && comp === 'rock')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}


// const buutFoot = document.getElementById('buut-foot');
// buutFoot.addEventListener(('click'), () => {
//     buutFoot.classList.add('buut-window-foot');
//     buutFoot.textContent = 'dfghjk,mnbvfd';
//     textContent.style.color = 'black'
// })
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Відкрити модальне вікно
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Закрити вікно при натисканні на хрестик
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрити вікно при кліку поза вікном
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
const saveBtn = document.getElementById("saveBtn");
const usernameInput = document.getElementById("username");
const welcomeModal = document.getElementById("welcomeModal");
const thankYouModal = document.getElementById("thankYouModal");

saveBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  
  if (name !== "") {
    welcomeModal.classList.add("hidden");
    thankYouModal.classList.remove("hidden");
  } else {
    alert("Будь ласка, введіть ім’я!");
  }
});

