
// let password;
// let chek=5;


// while(password != '1111'){
//     password=prompt('Ведіть пароль');
//     chek--

//     if(password=='1111'){
//         alert('Запрошуємо на сайт')
//         continue
//     }
//     else{
//         alert('У Вас залишилось ' + chek+ ' спроб') 
//     }

//    if(chek==1){
       
//     alert('Будь ласка, спробуйте пізніше')
//     password='1111'
//    }
    
// }

let ask = prompt('Ведіть пароль');
let n = 5;
while (ask !== '1111' && n >1) {
    n--
    alert('У Вас залишилось ' + n+ ' спроб')
    ask = prompt('Ведіть пароль');   
}

if (ask == '1111') {
    alert('Запрошуємо на сайт')
}
else {
    alert('Будь ласка, спробуйте пізніше')
}
