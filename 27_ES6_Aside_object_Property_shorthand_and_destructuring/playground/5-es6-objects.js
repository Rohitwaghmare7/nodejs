//shorthand

const  name = "Rohit"
const  userage = "20"

const user ={
    name,
    age:userage,
    location: "Aurangabad"
}

console.log(user)

//destructuring

const product = {
    lable: "laptop",
    price: 65000,
    stock: 1,
    rating: 4.5
}

const {lable: pl,price,stock,rating = 5} = product

console.log(pl,price,stock,rating)