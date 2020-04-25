let name=prompt('Введіть імя');
let password;

if(name==null){alert('Вхід скасовано');}

else if(name.match(/^[A-Za-zА-Яа-яІі]+$/)){
    password=prompt('Введіть пароль')
    if(password=='ЛОГОС'){
        alert('Ласкаво просимо');
    }
    else if(password==null){alert('Вхід скасовано');
    }
    else alert('Пароль невірний');
}

else alert('Я Вас не знаю')