//task color

// let box = document.querySelector(sel);
// box.style.height = '200px';
// box.style.width = '200px';
// box.style.backgroundColor = 'purple';
// box.style.margin = ' 0 auto';
// box.style.textAlign = 'center';
// box.style.border = '2px solid black';

// let colors = ['red', 'yellow', 'green', 'blue'];
// let count = 0;

// box.onmouseover = function () {
//     this.style.backgroundColor = colors[count % colors.length];
//     count++;
// };
// box.onmouseout = function () {
//     this.style.backgroundColor = 'purple';
// };




//task secret


// let box = document.querySelector('div');
// box.style.height = '200px';
// box.style.width = '200px';
// box.style.backgroundColor = 'purple';
// box.style.margin = ' 0 auto';
// box.style.textAlign = 'center';
// box.style.border = '7px ridge orange';
// box.innerText = 'У мене є секрет';


// box.onmouseover = box.onmouseup = function () {
//     this.style.backgroundColor = 'yellow';
//     this.innerText = 'Хочеш знать який?';
//     this.style.color = 'blue';
// };

// box.onmousedown = function() {
//     this.style.backgroundColor = 'black';
//     this.innerText = 'А я тобі не скажу';
//     this.style.color = 'white';
// };

// box.onmouseout = function () {
//     this.style.backgroundColor = 'purple';
//     this.innerText = 'У мене є секрет';
//     this.style.color = 'black';
// };




// task images

// let page = document.body;
// page.style.display = 'flex';
// page.style.justifyContent = 'space-around';
// page.style.paddingTop = '100px';

// function click(element) {
//     let ask = prompt('Input an image link');
//     element.target.style.backgroundImage = `url(${ask})`;
//     element.target.style.backgroundSize = 'cover';
// };

// let box = document.querySelectorAll('div');
// for (let i = 0; i < box.length; i++) {
//     box[i].style.width = '300px';
//     box[i].style.height = '350px';
//     box[i].style.border = 'thick double black';
//     box[i].onclick = click;
// }



//task text

let text = document.getElementById("myList");

text.onclick = function(event) {
    console.log(event);
    console.log(event.target);

    let element = event.target;
    element.style.color = element.innerText + '';
};

