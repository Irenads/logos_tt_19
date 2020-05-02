//Завдання 1


// let fib = (number) => {
//     let a = 0;
//     let b = 1;
//     let res
//     for (let i = 1; i <= number; i++) {
//         if (i == 1) {
//             res = 1
//         }
//         else {
//             res = a + b
//             a = b
//             b = res
//         }
//         console.log(res)
//     }
// }
// fib(8)


//Завдання 2

//З використанням циклу

// function geometriсProgression(n, q) {
//     let bn = 1;
//     let res = bn;
//     for (i = 1; i < n; i++) {
//         bn = bn * q
//         res += bn
//     }
//     console.log(res)
// }

// geometriсProgression(5, 2)




//З вікористанням формули знаходження суми геометричної прогресії



// function geometriсProgression(n, q) {
//     let b1 = 1;
//     let res = (b1 * (1 - q ** n)) / (1 - q);
//     console.log(res)
// }

// geometriсProgression(4, 3)

