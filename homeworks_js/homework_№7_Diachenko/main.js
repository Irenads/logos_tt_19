//Завдання 1


// let person = {
//     firstName: 'Ivan',
//     secondName: 'Ivanov',
//     showData() {
//         return this.firstName + ' ' + this.secondName
//     }
// }
// let newPerson = {}
// for (let i in person) {
//     newPerson[i] = person[i]
// }
// newPerson.firstName = 'Petro'
// newPerson.secodtName = 'Petriv'
 
// console.log(person.showData())
// console.log(newPerson.showData())



//Завдання 2


let MyMath = {
    a: 5,
    b: 2,
    sum() {
        return this.a + this.b
    },
    multiplication() {
        return this.a * this.b
    },
    division() {
        return this.a / this.b
    },
    subtraction() {
        return this.a - this.b
    }
}

console.log(MyMath.sum())

console.log(MyMath.multiplication())

console.log(MyMath.division())

console.log(MyMath.subtraction())

