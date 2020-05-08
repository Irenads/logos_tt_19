//Завдання 1

// function arrCopy(arr) {
//     let res = [];
//     for (let key in arr)
//         res[key] = arr[key]

//     return res
// }

// let arr = [1, 2, 3, [10, 20]]
// let arr1 = arrCopy(arr)
// arr1[0] = 5

// console.log(arr)
// console.log(arr1)



//Завдання 2


// function arrToString(arr) {
//     let res = [];
//     for (let key in arr) {
//         res[key] = arr[key] + ''
//         // res[key] = arr[key].toString() //Також дасть потрібний результат
//     }
//     return res
// }

// let arr = [1, 2, 3]
// let arr1 = arrToString(arr)

// console.log(arr)
// console.log(arr1)



//Завдання 3


// function getLength(arr){
//     let res = [];
//     for (let key in arr) 
//         res[key] = arr[key].length

//     return res
// }

// let arr1 = getLength(['Ivan','Pavlo','Ira'])
// let arr2 = getLength(['Oleksiy','Andriana'])

// console.log(arr1)
// console.log(arr2)




//Завдання 4


//Перший спосіб

// function removeDuplicates(arr) {
//     let res = [];
//     for (let key in arr)
//         if (res.indexOf(arr[key]) === -1)
//             res.push(arr[key])
//     return res
// }

// let arr1 = removeDuplicates(['html', 'css', 'html', 'js'])
// let arr2 = removeDuplicates(['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss'])

// console.log(arr1)
// console.log(arr2)


//Другий спосіб

// function removeDuplicates(arr) {
//     // return Array.from(new Set(arr)) // Рішення знайшла на сайті https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
//     return [...new Set(arr)]
// }

// let arr1 = removeDuplicates(['html', 'css', 'html', 'js'])
// let arr2 = removeDuplicates(['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss'])

// console.log(arr1)
// console.log(arr2)

