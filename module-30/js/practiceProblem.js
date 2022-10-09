let myArr = [1,2,3]

myArr.pop()

myArr.shift()


myArr.unshift(10)

console.log(myArr)

// push --> add the element to the array at the last index
// pop  --> remove the element to the array at the last index
// shift --> remove the element to the array at the first index 
// unshift --> add the element to the array at the first index


function getSum(a,b=9){
    return a+b
}

console.log(getSum(2,7))

const y = x=> x*x;
const z = y(5)

console.log(z)

const division= (num1, num2) => console.log(num1 /num2);