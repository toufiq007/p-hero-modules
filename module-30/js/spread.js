const maxnumber = Math.max(1,2,3)
// console.log(maxnumber)

const myNumbers = [1,2,3,4,5,10,20,40]

const maxNumbers2 = Math.max(...myNumbers)

console.log(maxNumbers2)


// create new array with spread operator
let myArray = [1,2,3,4,5,6]
let newMyArray = myArray;

console.log(myArray===newMyArray) // output true. it means this two array is same
// if we push elements in both array two array will be modified

// so here is the solution
let numbers2 = [...myArray]
console.log(myArray===numbers2)

// here two arrays are different. if we add one array one can't be modified

// copy a array with spread operator

let numbers3 = [10,20,30, ...myArray, 1000,2000]
console.log(numbers3)







