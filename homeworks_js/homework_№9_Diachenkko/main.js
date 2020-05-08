//Завдання 1

// let str = prompt('some text');
// let result = 0;
// for(let i = 0; i < str.length; i++){
//     if(str.charAt(i) == ' '){
//         result += 1
//     }
// }
// console.log(result)




//Завдання 2


// let email = prompt('some text');
// email = email.slice(1,-1)
// if(email.indexOf('@') >= 0){
//     console.log('Hello')
// }
// else{
//     console.log('wrong')
// }




//Завдання 3


// let str = prompt('some text');
// str = str.toLowerCase()
// console.log(str.split('html1').length - 1)




//Завдання 4


let str = prompt('some text');
str = str.toLowerCase()
if (str.startsWith('http://')) {
    str = str.slice(7)
}
else if (str.startsWith('https://')) {
    str = str.slice(8)
}
console.log(str)