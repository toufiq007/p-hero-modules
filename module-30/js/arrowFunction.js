
// for without parameter
const printThis = ()=> true;

console.log(printThis())


// for single paramter
const double = x=> x*x;

console.log(double(10))


// for double parameter
const multiply = (a,b)=>{
    return a * b;
}
console.log(multiply(10,2))


//  short arrow function
const triple = (x)=> x*x*x;

console.log( triple(10))



// long arrow function
const printLongItem = ()=>{
    console.log('This is the long arrow function')
}
printLongItem()



