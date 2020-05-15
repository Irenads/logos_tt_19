// let bodyColor = document.getElementById('color');
// bodyColor.onclick = function () {
//     let body = document.body;
//     let colors = prompt("color");
//     body.style.backgroundColor = colors + '';
// };

// let fontsFamily = document.getElementById('font-family');
// fontsFamily.onclick = function () {
//     let body = document.body;
//     let fonts = prompt('serif, sans-serif or cursive');
//     body.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
// };

// let txtAlignh1 = document.getElementById('text-align');
// txtAlignh1.onclick = function () {
//     let heading = document.getElementById('header');
//     let aligns = prompt('left, right or center');
//     heading.style.textAlign = aligns;
// };

// let pColor = document.getElementById('pColor');
// pColor.onclick = function () {
//     let p = document.querySelector('p');
//     let colors = prompt('color');
//     p.style.background = colors + '';
// };

// let colorTextP = document.getElementById('colorText');
// colorTextP.onclick = function () {
//     let c = document.querySelector('p');
//     let colors = prompt('color');
//     c.style.color = colors + '';
// };

// let link = document.getElementById('link');
// link.onclick = function () {
//     console.log(link);
//     let newLinks = document.querySelectorAll('a');
//     for (let i = 0; i < newLinks.length; i++) {
//         let lincColor = prompt('Linc color');
//         newLinks[i].style.color = lincColor + '';
//     }
// }

// let colorTxtDiv = document.getElementById('colorTxtdiv');
// colorTxtDiv.onclick = function () {
//     let d = document.getElementById('div');
//     let colors = prompt('color');
//     d.style.color = colors + '';
// };

// let fontSize = document.getElementById('fontSi');
// fontSize.onclick = function () {
//     let s = document.getElementById('div');
//     let fSize = prompt('size');
//     s.style.fontSize = fSize + 'px';
// };

// let fontWeight = document.getElementById('font-weight');
// fontWeight.onclick = function () {
//     let w = document.getElementById('div');
//     let fWeight = prompt('font-weight');
//     w.style.fontWeight = fWeight + '';
// };

// let liType = document.getElementById('type');
// liType.onclick = function () {
//     let ul = document.querySelector('ul');
//     let typeli = prompt('circle, square or disc');
//     ul.type = typeli;
// };

//ДОДАТОК ДО ЗАВДАННЯ: на сторінці додала li, при click на який користувач вирішується поставлене завдання
function aText(str) {
    let index = str.indexOf('/');
    if (index > 0) {
        str = str.slice(0, index)
    }
    let first = str.indexOf('.');
    if (str.startsWith('www.') && first > 0) {
        str = str.slice(first + 1)
    }
    let last = str.lastIndexOf('.');
    if (last > 0) {
        str = str.slice(0, last)
    }
    return str
}

function aText(str) {
    str = str.toLowerCase()
    if (str.startsWith('http://')) {
        str = str.slice(7)
    } else if (str.startsWith('https://')) {
        str = str.slice(8)
    }
    return aText(str);
}

function aLink(str) {
    str = str.toLowerCase()
    if (!str.startsWith('http://') && !str.startsWith('https://')) {
        if (!str.startsWith('www.'))
            str = 'www.' + str
        str = 'http://' + str
    }
    return str;
}

let aHref = document.getElementById('aHref');
aHref.onclick = function () {
    let newAHref = document.querySelectorAll('a');
    for (let i = 0; i < newLinks.length; i++) {
        let str = prompt('some text');
        newAHref[i].href = aLink(str);
        newAHref[i].innerText = aText(str);
    }
}
