let say='Welcom';
let name=prompt('Your Name');
let divH=prompt('Main div height');
let divW=prompt('Main div width');
let bgColor=prompt('Main div background');
let secondDivH=prompt('Second div height');
let secondDivW=prompt('Second div width');
let secondbg=prompt('Second div background');

document.write(`<div style="display: flex;justify-content: center;"><div style="display: flex;flex-direction: column; border-radius:5%;justify-content: center; align-items: center; height: ${divH}px;width: ${divW}px;background: ${bgColor};"><div style="height: ${secondDivH}px;width: ${secondDivW}px;background: url(${secondbg});background-size: cover;"></div><p>${say}, ${name}</p> </div></div>`)


