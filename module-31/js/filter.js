const numbers = [12, 89, 1, 29, 54, 60, 23, 650, 1020, 11, 890];

const largestNumber = Math.max(...numbers);
console.log(largestNumber);

const bigNums = numbers.filter((num) => num > 20);
console.log(bigNums);

const products = [
    { id: 1, name: "laptop", price: 120000 },
    { id: 2, name: "pc", price: 100000 },
    { id: 3, name: "mobile", price: 56000 },
    { id: 2, name: "tablet", price: 12000 },
];

// find the product product greater than 60000
const expensiveProducts = products.filter((product) => product.price > 60000);

let productName = expensiveProducts.map((product) => product.name);
console.log(productName);

// quiz

function min(nums) {
    return Math.min(nums);
}
console.log(min([1, 3, 2]));


const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);


const {x, y, z} = {x: 1, y1: 2, z: 3};

console.log(y)


const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);


const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const firstFriedn = friends.find(friend=> friend.length === 5)
console.log(firstFriedn)


const product = {
    name: 'Laptop', 
    model:'Yoga 3',
    price:49000, 
    dusk: '512SSD'
    }
const {price} = product
console.log(price)    