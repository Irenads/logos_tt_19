
let userForm = document.forms['user-form'];
const users = [];
let table = document.getElementById('table-body')
const log = userForm.login
const pass = userForm.password
const email = userForm.email

userForm.add.addEventListener('click', function () {
    if (user) {
        user.login = log.value;
        user.password = pass.value;
        user.email = email.value;
        user = null;
        userForm.add.innerText = 'Add user'
    } else {
        let newUser = new User(log.value, pass.value, email.value);
        users.push(newUser)
    }

    render()
    clearInputs()
})

function render() {
    table.innerHTML = ''
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerText = i + 1;
        tr.appendChild(td)
        for (let key in users[i]) {
            let usTD = document.createElement('td');
            usTD.innerText = users[i][key]
            tr.appendChild(usTD)
        }
        let editTD = `<td><button onclick="editUser(${i})" class="edit">Edit</button></td>`
        let deleteTD = `<td><button onclick="deleteUser(${i})" class="delete">Delete</button></td>`
        tr.innerHTML += editTD
        tr.innerHTML += deleteTD
        table.appendChild(tr)
    }
}

function clearInputs() {
    log.value = '';
    pass.value = '';
    email.value = ''
}

function deleteUser(id) {
    users.splice(id, 1)
    render()
}

let user;

function editUser(id) {
    user = users[id];
    log.value = user.login;
    pass.value = user.password;
    email.value = user.email;
    userForm.add.innerText = 'Save edit';
}

function User(log, pass, email) {
    this.login = log;
    this.password = pass;
    this.email = email;
}