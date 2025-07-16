
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
const toggleTheme = document.getElementById('toggleTheme');
const body = document.body;

// Зчитуємо з localStorage (якщо раніше вибирали)
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

