const account = document.forms.createAccount;
const firstName = account.elements.firstName;
const secondName = account.elements.secondName;
const email = account.elements.email;
const position = account.elements.position;
const agree = account.elements.agree;
const btnSingUp = account.elements.btnSingUp;

const man = document.getElementById('man')
const one = document.getElementById('one')
const two = document.getElementById('two')
const icon = document.getElementById('icon')

const text = document.getElementById('text')
const btnSingOut = document.getElementById('singOut')

agree.addEventListener('click', function () {
    agree.elements += 'checked';
    if (agree.checked) {
        btnSingUp.disabled = false;
        btnSingUp.style.backgroundColor = 'rgb(4, 179, 54)';
    } else {
        btnSingUp.disabled = true;
        btnSingUp.style.backgroundColor = 'rgba(4, 179, 54, 0.242)';
    }
})

btnSingUp.addEventListener('click', function () {
    one.style.display = 'none';
    two.style.display = 'flex';
    if (man.checked == false) {
        icon.style.backgroundImage = 'url(icon/woman.png)';
    }

    text.innerHTML = `<h3>${firstName.value}  ${secondName.value}</h3><p>${email.value}</p><p>${position.value}</p>`

})

btnSingOut.addEventListener('click', function () {
    two.style.display = 'none';
    one.style.display = 'block';
    firstName.value = "";
    secondName.value = "";
    email.value = "";
    man.checked = true;
    icon.style.backgroundImage = 'url(icon/man.png)';
    position.value = "";
    agree.checked = false;
    btnSingUp.disabled = true;
    btnSingUp.style.backgroundColor = 'rgba(4, 179, 54, 0.242)';
})