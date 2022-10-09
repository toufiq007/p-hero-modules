// before es6 method
function add(first, second) {
    // option one
    // if (second=== undefined){
    //     second = 30
    // }
    // if (first=== undefined){
    //     first = 10
    // }

    // option two
    // first===undefined ? first=20: first=first
    // second===undefined ? second=50: second=second

    // option three
    // shortcut method
    first = first || 10;
    second = second || 30;

    // console.log(first, second);
    let total = first + second;
    return total;
}

const result = add();

// console.log(result);




const multiply = (a=10,b)=>{
    const multiply = a * b;
    // console.log(a,b)
    return multiply
}
let result2 = multiply(20);
// console.log(result2)


const fullName = (first,last="limon")=>{
    return first + " " + last
}

console.log(fullName('Mostafiz'))
