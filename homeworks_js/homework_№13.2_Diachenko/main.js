const colors = ['darkblue', 'red', 'yellow', 'green', 'purple', 'pink', 'orange', 'coral', 'blue'];
const images = ['url(imeges/1.jpeg)', 'url(imeges/2.jpeg)', 'url(imeges/3.jpeg)', 'url(imeges/4.jpeg)', 'url(imeges/5.jpeg)', 'url(imeges/6.jpeg)', 'url(imeges/7.jpeg)', 'url(imeges/8.jpeg)', 'url(imeges/9.jpeg)'];
let isColor;

const divs = document.getElementsByClassName('divColors');

const conteiner = document.getElementById('conteiner');
conteiner.style.display = 'flex';
conteiner.addEventListener('click', event => {
    const div = event.target;
    if (div.id !== 'conteiner') {
        if (isColor) {
            document.body.style.backgroundImage = null;
            document.body.style.backgroundColor = div.style.backgroundColor;
        }
        else {
            document.body.style.backgroundImage = div.style.backgroundImage;
            document.body.style.backgroundColor = null;
        }
    }
})

const color = document.getElementById('color');
color.addEventListener('click', () => {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundImage = null;
        divs[i].style.backgroundColor = colors[i];
        divs[i].style.display = 'block';
        isColor = true;
    }
})

const image = document.getElementById('image');
image.addEventListener('click', () => {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundImage = images[i];
        divs[i].style.display = 'block';
        divs[i].style.backgroundColor = null;
        isColor = false;
    }
}) 