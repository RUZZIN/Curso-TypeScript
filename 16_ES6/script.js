// 1 - var, let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for(let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

function logName() {
    const name = "Ruan"
    console.log(name)
}

const name = "Pablo"

logName()

console.log(name)

// 2- Arrow Functions

const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if(name) {
        return "Olá" +name+ "!"
    } else {
        return "Olá"
    }
}

console.log(greeting("Ruan"))
console.log(greeting())

const testeArrow = () => console.log("Testou!")

testeArrow()

const user = {
    name: "Theo",
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(this)
            console.log("Username: " + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    },
}

// user.sayUserName()
// user.sayUserNameArrow()

// 3 - Filter

const arr = [1,2,3,4,5]

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: "Ruan", avaible: true},
    {name: "Ana", avaible: false},
    {name: "Ivani", avaible: false},
    {name: "Thaynara", avaible: true},
]

const avaibleUsers = users.filter((user)=> user.avaible)
const notAvaibleUsers = users.filter((user)=> !user.avaible)

console.log(avaibleUsers)
console.log(notAvaibleUsers)

// 4 - Map

const products = [
    {name: "Camisa", price: 10.99, catergory: "Roupas"},
    {name: "Chaleira Elétrica", price: 49.99, catergory: "Eletro"},
    {name: "Fogão", price: 399.99, catergory: "Eletro"},
    {name: "Calça jeans", price: 59.99, catergory: "Roupas"},
]

products.map((product) => {
    if(product.catergory === "Roupas") {
        product.onSale = true
    }
})

console.log(products)

// 5 - Template literals

const userName = "Ruan"
const age = 19

console.log(`O nome do usuário e ${userName} e ele tem ${age} anos.`)
console.log("O nome do usuário e " + userName + " e ele tem "+ age + " anos.")