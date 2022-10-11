// find and filter almost same methods
// filter gives all of these items that should match the condition
// find gives only first items that should match the condition

const products = [
    {id:2,name:'tablet',price:12000},
    {id:3,name:'mobile',price:56000},
    {id:2,name:'pc',price:100000},
    {id:1,name:'laptop',price:120000},
]


const numbers = [1.43,89,5,100,1,30]

// find the first item that price is higer than 12000
let allItems = products.filter(product=> product.price > 12000);
console.log(allItems)


let firstItem = products.find(product=> product.price > 12000 );
console.log(firstItem)


// filter gives all of the items that fullfill the condition
const dividedByFive = numbers.filter(x=> x%5===0)
console.log(dividedByFive)

// find give only the first items
const firstDividedWithFive = numbers.find(x=> x%5===0)
console.log(firstDividedWithFive)


