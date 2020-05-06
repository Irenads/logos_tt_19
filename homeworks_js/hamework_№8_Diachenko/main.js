//Завдання 1



// function getDigits(number){
//     console.log(number - Math.floor(number))
// }

// getDigits(1.25)




//Завдання 2



// function getArea(number) {
//     if (number == null) {
//         console.log('Будь ласка, введіть радіус!')
//     } else if (isNaN(number)) {
//         console.log('Повинно бути числове значення.')
//     } else {
//         let res = Math.PI * Math.pow(number, 2);
//         console.log(`Площа дорівнює ${res} квадратних одиниць.`);
//     }
// }

// getArea()
// getArea('a')
// getArea(9)




//Завдання3


function getSqrt(number) {
    if (number == null) {
        console.log('Будь ласка, введіть число.')
    } 
    else if (isNaN(number)) {
        console.log('Повинно бути числове значення.')
    } 
    else if (number<0) {
        console.log('Введіть додатнє число.')
    } 
    else {
        let res = Math.sqrt(number);
        console.log(`Квадратний корінь з ${number} дорівнює  ${res} `);
    }

}
getSqrt()
getSqrt('a')
getSqrt(4)
getSqrt(-5)
