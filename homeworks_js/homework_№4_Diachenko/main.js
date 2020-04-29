
let password;
let chek=5;


while(password != '1111'){
    password=prompt('Ведіть пароль');
    chek--

    if(password=='1111'){
        alert('Запрошуємо на сайт')
        continue
    }
    else{
        alert('У Вас залишилось ' + chek+ ' спроб') 
    }

   if(chek==0){
       
    alert('Будь ласка, спробуйте пізніше')
    password='1111'
   }
    
}
