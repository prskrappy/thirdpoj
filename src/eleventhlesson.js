"use strict";



//Исходные данные задачи в конце ролика:
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

function myBind(context, fn) {
    return function(...args) {
        return fn.apply(context, ...args)
    }
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 19, job: 'SMM'}

myBind(person1, logPerson)()
myBind(person2, logPerson)()


// function summWith(a) {
//     return function (b) {
//         return (a + b)
//     }
// }

// const summWithFive = summWith(5)
// console.log(summWithFive(4))

// const array = [1, 2, 3, 4, 5]

// // function multBy(arr, n) {
// //     return arr.map(item => item * n)
// // }

// // console.log(multBy(array, 5))
// // console.log(array.multBy(5))

// Array.prototype.multBy = function(n) {
//     console.log(`mult ${this} by ${n}`)
//     return (this.map((i) => i * n))
// }
// // function hello() {
// //     console.log('hello', this)
// // }

// const array2 =array.multBy(2)

// const person = {
//     name: 'vladilen',
//     age: 25,
//     // ageAlert() {
//     //     alert('Vlad age ' + this.age)
//     // },
//     sayHello() {
//         alert('hello Vlad ' + this.name)
//         return this.ageAlert()
//     }
// }

// const lena = {
//     name: 'Elena',
//     age: 32,
//     ageAlert() {
//         alert('Lena age ' + this.age)
//     },
//     sayHello() {
//         alert('hello Lena ' + this.name)
//     }
// }

//person.logInfo.bind(lena)('doctor')

// person.ageAlert()
// person.sayHello()
// person.sayHello.bind(lena)()

// const person = {
//     name: "john",
//     age: 25,
//     greet() {
//         alert("Greet!")
//     }
// }

// person.sayHi = function(phrase) {
//     alert(this.name + ' ' + phrase)
// }

// // person.greet()
// // person.sayHi('vau')

// const user = {
//     __proto__: person
// }

// // user.sayHi('ogo')

// const vadim = Object.create(person)
// vadim.name = 'Vadim'

// const str = 'new string'
// const str2 = new String('very new string')
// let head = {
//     glasses: 1
// };
  
// let table = {
//     __proto__: head,
//     pen: 3
// };
  
// let bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2
// };
  
// let pockets = {
//     __proto__: bed,
//     money: 2000
// };

// alert(pockets.sheet)
// alert(pockets.pillow)
// alert(pockets.glasses)

