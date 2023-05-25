const input = document.getElementById('input');
const timeBlock = document.querySelector('.time');

let interval;

timeBlock.innerHTML = 0;
input.value = 0;

document.getElementById('start').addEventListener('click', () => {
    if (input.value < 0) {
        input.value = 0;
        timeBlock.innerHTML = 0;
    }

    timeBlock.innerHTML = input.value;

    clearInterval(interval);
    interval = setInterval(subtractTime, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () => {
    input.value = 0;
    timeBlock.innerHTML = 0;
});

function subtractTime() {
    if (timeBlock.innerHTML > 0) {
        timeBlock.innerHTML--;
        input.value--;
        if (input.value < 0 || timeBlock.innerHTML == 0) {
            input.value = 0;
            timeBlock.innerHTML = 0;
        } else {
            clearInterval(interval)
        }
    }
}

