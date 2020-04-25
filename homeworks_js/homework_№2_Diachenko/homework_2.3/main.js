let ask=prompt('Введіть чісло від 1 до 12');
if(ask<1 || ask> 12){
    alert('Ви ввели число яке не відповідає умові')
} 
else if(ask==12 || ask==1 || ask==2){
    alert('Зима')
   }
   else if(ask>=9 || ask== 11){
    alert('осінь')
   }
   else if(ask>=6 || ask== 8){
    alert('літо')
   }else if(ask>=3 || ask== 5){
    alert('весна')
   }

