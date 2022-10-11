const numbers = [2,8,4,6,3];

let output = numbers.map(x=> x*2);
console.log(output)



const numbers2 = [12,56,87,44];
const halfOfTheNumbers = numbers2.map(x=> (x/2));

// console.log(halfOfTheNumbers)



// take the first chracter of the strings inside the followring array
const friends = ['Tom hanks', 'Tom cruise', 'Tom brady', 'Tom solaiman']
const firstCharacter = friends.map(str=> str[0]);

// console.log(firstCharacter)


const products = [
    {id:1,name:'laptop',price:120000},
    {id:2,name:'pc',price:100000},
    {id:3,name:'mobile',price:56000},
    {id:2,name:'tablet',price:12000},
]

const productsName = products.map((item)=> item.name)
console.log(productsName)



