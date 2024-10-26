let intervalId;

function getRandomRadius() {
    return `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
}

function animateBorderRadius() {
    const img = document.querySelector('.about_us_img');
    intervalId = setInterval(() => {
        img.style.borderRadius = getRandomRadius();
    }, 1000);
}

function stopAnimation() {
    clearInterval(intervalId);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function animateColor() {
    const img = document.querySelector('.about_us_img');
    img.style.filter = `sepia(1) hue-rotate(${Math.random() * 360}deg) saturate(200%)`;
}

function resetColor() {
    const img = document.querySelector('.about_us_img');
    img.style.filter = 'none';
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.about_us_img');
    const button = document.getElementById('changeBackgroundColor');

    animateBorderRadius();

    img.addEventListener('mouseover', () => {
        stopAnimation();
        animateColor();
    });

    img.addEventListener('mouseout', () => {
        animateBorderRadius();
        resetColor();
    });

    button.addEventListener('click', changeBackgroundColor);
});
