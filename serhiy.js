
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
var isAlive = setInterval (function (){
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    // if (cactusLeft < 50 && cactusLeft < 0 && dinoTop >=140) {
    //     alert('game over(');
    // }
},10)


// document.addEventListener('keydown', function (event) {
//     const activeEl = document.activeElement;
//     const isInput = activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA';

//     if (event.code === 'Space' && !isInput) {
//       event.preventDefault();
//       // твоя логіка
//     }
//   });
// const dino = document.querySelector('.dino-gogle');
// let get = 50;
// dino.addEventListener('keydown', (event) => {
//     if (event.code === space) {
//         event.preventDefault();
//         get += 20;
//         dino.setAttribute('cx', get);
//     }
// }) 
// const dino = document.getElementById('dino-gogle');
// let jumping = false;

// dino.addEventListener('keydown', function (event) {
//     if (event.code === 'Space' && !jumping) {
//         event.preventDefault();
//         jumping = true;

//         // Підстрибнути вгору (менше y)
//         dino.setAttribute('y', '80');

//         // Через 400мс повернутися вниз
//         setTimeout(() => {
//             dino.setAttribute('y', '130');
//             jumping = false;
//         }, 400);
//     }
// });
// >>>>>>> 8c91da71063189ad624e0094ad9abfba99b2d4f1
