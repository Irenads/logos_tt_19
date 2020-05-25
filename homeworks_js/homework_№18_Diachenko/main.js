// Завдання 1. forEach
// let arr = [5, 6, 7, 8, 9];
// let sum = 0;
// arr.forEach(element => sum+=element)
// console.log(sum)


// Завдання 2. Map

// let arr = [5, 6, 7, 8, 9];
// const newArr = arr.map(element => element * element)
// console.log(newArr)


// Завдання 3. Every

// let arr = [
//     {
//         name: 'Ivan',
//         country: 'Ukraine'
//     },
//     {
//         name: 'Petro',
//         country: 'Ukraine'
//     },
//     {
//         name: 'Miguel',
//         country: 'Cuba '
//     }
// ]

// let result = arr.every(u => u.country == 'Ukraine');
// console.log(result)



// Завдання 4. Some

// let arr = [
//     {
//         name: 'Ivan',
//         country: 'Ukraine'
//     },
//     {
//         name: 'Petro',
//         country: 'Ukraine'
//     },
//     {
//         name: 'Miguel',
//         country: 'Cuba '
//     }
// ]

// let result = arr.some(u => u.country == 'Ukraine');
// console.log(result)


// Завдання 5. Filter

// let arr = [1,'string', [3, 4], 5, [6, 7]];
// const filterArr = arr.filter(elem => Array.isArray(elem))
// console.log(filterArr)


// Завдання 6. Reduce

// let arr = [1, 2, 5, 0, 4, 5, 6];
// const sum = arr.reduce(function (accumulator, currentValue, index, array) {
//     if (index > array.indexOf(0)) {
//         currentValue = 0;
//     }
//     return accumulator + currentValue;
// }, 0);
// console.log(sum)

// let arr = [1, 2, 3, 0, 4, 5, 6];

// let count = 1;
// const sum = arr.reduce(function (accumulator, currentValue, index, array) {
//     if (accumulator + currentValue === 10) {
//         count += index;
//     }
//     return accumulator + currentValue;
// }, 0);
// console.log(count)




// Завдання 7. Любим методом

let arr = [1, -2, 3, 0, 4, -5, 6, -11];
const numb = arr.filter(element => element > 0).map(element => Math.sqrt(element))
console.log(numb)