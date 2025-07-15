const divfootball = document.querySelector('#football');
const divfootballball = document.querySelector('#football-ball');

divfootball.addEventListener('mouseover', (event) => {
    divfootball.addEventListener('mousemove', (event) => {
        const rect = divfootball.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        let x = offsetX - divfootballball.offsetWidth / 2;
        let y = offsetY - divfootballball.offsetHeight / 2;
        x = Math.max(0, Math.min(x, rect.width - divfootballball.offsetWidth));
        y = Math.max(0, Math.min(y, rect.height - divfootballball.offsetHeight));

        let ballX = x
        let ballY = y
        divfootballball.style.left = `${ballX}px`;
        divfootballball.style.top = `${ballY}px`;
    });
});
divfootball.addEventListener('mouseout', () => {
    divfootballball.removeEventListener('mousemove')
});

const p3n = document.querySelector('#p2p2p');
const int1 = document.querySelector('#int1');
const int2 = document.querySelector('#int2');
const int3 = document.querySelector('#int3');
if (int1.value !== '' || int2.value !== '' || int3.value !== '') {
    let number = Math.max(Number(int1.value), Number(int2.value), Number(int3.value));
    p3n.textContent = `Найбільше число, яке ви ввели - ${number}`;
    p3n.body.appendChild(p3n);
}
    
