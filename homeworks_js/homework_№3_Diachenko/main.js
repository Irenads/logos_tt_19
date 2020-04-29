// Завдання 1 

//перший варіант

// let n=+prompt('Введіть число');
// for(let i=1;n; i*=n--)
// console.log(i)

//другий варіант рішення Завдання 1

// let n=+prompt('Введіть число');
// let res=1;
// for(let i=1; i<=n; i++){
//     res*=i
// }
// console.log(res)



//Завдання 2


// for(let i = 1000; i<=9999; i+=3)
//     document.write(i+' ')


//Завдання 3

// let n=1;
// for(let i=1; n<=55; n++, i+=3){
// document.write(i+' ')}


//Завдання 4

// for(let i=90; i>=0; i-=5){
// console.log(i)}


//Завдання 5

// let n=1;
// for(let i=2; n<=20; n++, i*=2){
// document.write(i+' ')}


//Завдання 6

// for(let i=2; i<1000; i=2*i-1){
//     document.write(i+' ')
// }


//завдання 7

// let n=-166
// for(let i=0; i<100; i=2*n+200, n++){
//     if(i>-99 && (i<-9 || i>9))
//     document.write(i+' ')
// }




//Завдання 8

let n=+prompt('Введіть число');
let s=+prompt('Введіть степінь');

let res=1;
if(s>0){
for(let i=1; i<=s; i++){
    res=res*n
}
}
else if(s<0){
    s=-s;
    for(let i=1; i<=s; i++){
    res=res*n
    }
    res=1/res
}
console.log(res)