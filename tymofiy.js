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

function updateMaxNumber() {
    const values = [int1.value, int2.value, int3.value]
        .map(v => Number(v))
        .filter(v => !isNaN(v));
    if (values.length > 0) {
        const max = Math.max(...values);
        p3n.textContent = `Найбільше число, яке ви ввели - ${max}`;
    } else {
        p3n.textContent = '';
    }
}

[int1, int2, int3].forEach(input => {
    input.addEventListener('input', updateMaxNumber);
});

const input = document.querySelector('#iddd');
const p = document.querySelector('#yu');
input.addEventListener('input', () => {
    const value = Number(input.value);
    if (!isNaN(value) && input.value !== '') {
        if (value % 4 === 0) {
            p.textContent = `Ви народилися у високосний рік!`;
            p.style.position = 'relative';
            p.style.width = '212px';
            p.style.height = '15px';
            p.style.fontFamily = 'Montserrat Alternates';
            p.style.fontSize = '12px';
            p.style.fontWeight = '400';
            p.style.lineHeight = '15px';
            p.style.letterSpacing = '0%';
            p.style.textAlign = 'right';
            p.style.color = 'rgb(3, 153, 0)';
        } else {
            p.textContent = `Ви народилися не у високосний рік!`;
            p.style.position = 'relative';
            p.style.width = '230px';
            p.style.height = '15px';
            p.style.color = 'rgb(153, 0, 0)';
            p.style.fontFamily = 'Montserrat Alternates';
            p.style.fontSize = '12px';
            p.style.fontWeight = '400';
            p.style.lineHeight = '15px';
            p.style.letterSpacing = '0%';
            p.style.textAlign = 'right';
        }
    } else {
        p.textContent = '';
    }
});

const input2 = document.querySelector('#bmwx5');
const p2 = document.querySelector('#ropopo');
const guessButton = document.querySelector('#guessButton');
guessButton.addEventListener('click', () => {
    const userGuess = Number(input2.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        p2.textContent = 'Будь ласка, введіть число від 1 до 100.';
        p2.style.color = 'rgb(153, 0, 0)';
        return;
    }

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Загадане число: ${randomNumber}`);
    if (userGuess === randomNumber) {
        p2.textContent = `Вітаю, Ви вгадали число ${randomNumber}`;
        p2.style.color = 'rgb(3, 153, 0)';
        p2.style.fontFamily = 'Montserrat Alternates';
        p2.style.fontSize = '12px';
        p2.style.fontWeight = '400';
        p2.style.lineHeight = '15px';
        p2.style.letterSpacing = '0%';
        p2.style.textAlign = 'right';
        p2.style.position = 'relative';
        p2.style.width = '275px';
        p2.style.height = '15px';
    } else {
        p2.textContent = `Ви програли, комп’ютер загадав ${randomNumber}`;
        p2.style.color = 'rgb(153, 0, 0)';
        p2.style.fontFamily = 'Montserrat Alternates';
        p2.style.fontSize = '12px';
        p2.style.fontWeight = '400';
        p2.style.lineHeight = '15px';
        p2.style.letterSpacing = '0%';
        p2.style.textAlign = 'right';
        p2.style.position = 'relative';
        p2.style.width = '275px';
        p2.style.height = '15px';
    }
});





const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('calcresult');

function calculate(operator) {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    let res = '';
    if (!isNaN(a) && !isNaN(b)) {
        switch (operator) {
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                res = a / b;
                break;
        }
    } else {
        res = 'Введіть два числа!';
    }
    result.textContent = res;
    result.style.color = 'black';
}