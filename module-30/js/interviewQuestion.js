// practice problem 1
/**
 * 1: write a arrow function taht will take 3 parameters., will multiply the parameters and will return the result
 * 2: write the following senetence in three lines and print the result: 
 *   I am a web develper. I love to code. I love to eat biriyani
 * 2: write an arrow function that will take 2 parameters. One parameter will come from you and the other paramter will be a default parameter. Add these two parameters and return the result.
 */


// solve 1
const arrowFunction = (a,b,c)=>{
    return a*b*c;
}
// console.log(arrowFunction(10,20,30))



// solve 2
const printLine = ()=>{
    console.log(`I am a web developer.\nI love to code.\nI love to eat biriyani`)
}
// printLine()


// solve 3
const addParameter = (a="hello",b)=>{
    console.log(`${a} ${b}`)
}

addParameter("","limon")


