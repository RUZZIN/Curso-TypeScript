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

// 6 - Destructuring 

const fruits = ["Maça", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits

console.log(f1)

console.log(f3)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    catergory: "Periféricos",
    color: "Cinza"
}

const {
    name: productName,
    price, catergory: productCategory,
    color
} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}.`)

// 7 - Spread operator

const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 1000000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}
console.log(car)

// 8 - Classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola v", 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

console.log(shirt.productWithDiscount(50))

const tenis = new Product('Tenis verde', 120)

console.log(tenis.productWithDiscount(20))

// 9 - Herança

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

console.log(hat.showColors)