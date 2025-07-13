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
divfootball.addEventListener('mouseout', (event) => {
    divfootballball.removeEventListener('mousemove')
});
