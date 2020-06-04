$("#phone").mask("+38(999) 999-99-99");
let singUp = document.forms.formSingUp.elements.singUp
let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let email = document.querySelector('.email');
let phone = document.querySelector('.phone');
let password = document.querySelector('.password');


singUp.addEventListener('click', () => {
   let f = document.getElementById('firstName')
   if (f.value === '' || !f.value.match(/^[a-zA-Z]*$/)) {
      f.style.border = '1px solid red';
      firstName.style.display = 'block';
   }
   else {
      f.style.border = '1px solid rgb(7, 187, 7)'
      firstName.style.display = 'none';
   };

   let l = document.getElementById('lastName')
   if (l.value === '' || !l.value.match(/^[a-zA-Z]*$/)) {
      l.style.border = '1px solid red';
      lastName.style.display = 'block';
   }
   else {
      l.style.border = '1px solid rgb(7, 187, 7)';
      lastName.style.display = 'none';
   }

   let e = document.getElementById('email')
   const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (e.value === '' || !e.value.match(emailRe)) {
      e.style.border = '1px solid red';
      email.style.display = 'block';
   }
   else {
      e.style.border = '1px solid rgb(7, 187, 7)'
      email.style.display = 'none'
   };

   let ph = document.getElementById('phone')
   if (ph.value === '' || !ph.value.match(/^\+\d{2}\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/)) {
      ph.style.border = '1px solid red';
      phone.style.display = 'block';
   }
   else {
      ph.style.border = '1px solid rgb(7, 187, 7)'
      phone.style.display = 'none'
   };

   let pas = document.getElementById('password')
   if (pas.value === '' || !pas.value.match(/^[a-zA-Z0-9]{8,15}$/)) {
      pas.style.border = '1px solid red';
      password.style.display = 'block';
   }
   else {
      pas.style.border = '1px solid rgb(7, 187, 7)';
      password.style.display = 'none';
   }
})
