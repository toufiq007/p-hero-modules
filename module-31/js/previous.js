// var,let,const

// const --> create for constant variable
// let --> create for reassign variable
// var --> no more use var for creating variable


// default parameter
function sum(a,b=10){
    return a + b;
}

console.log(sum(10))


const myName = "my name is limon"

// template string
const ennerText = `
    <h2>Hello ${myName}</h2>
`

// arrow function
const double = x=> x*2;
console.log(double(10))


// spread operator
 const ages = [1,2,3,3,4,5];
 //copy with spread operator
 let newAges = [...ages,144,145]
 console.log(...ages)
 console.log(newAges);



// destructuring
let myInfo = {
    name:'limon',
    age:21,
    address:"madaripur",
    education:"BSc in Textile engineering",
    institution:"Pabna Textile engineering College"

}
// rest parameter
// ami je koyta variable likhbo seigulo bade baki jinish gulo amak alada ekta object er vitore dibe

let {name,institution,...restInfo} = myInfo

console.log(name)
console.log(institution)
console.log(restInfo)


 const myArr = [21,12,43,5,6,7,76,34]

 const [a,b,c,...z]  = myArr

 // array destructuring ekdom object destructuring er motoi kaj kore
console.log(a)
console.log(b)
console.log(c)
console.log(z)






