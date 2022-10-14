// json --> javascript object notation

const users = {
    id: 1,
    name: "Mostafiz limon",
    age: 21,
    tech: {
        mobile: "flutter",
        web: "js",
        android: "kotlin",
    },
};

// JSON.stringify() --> convert js object to json 
// JSON.parse() --> convert json object to js object

let jsonObject = JSON.stringify(users);

let parseJson = JSON.parse(jsonObject);

console.log(typeof parseJson)



const myArray = [1,2,3,4,5];
let jsonArray = JSON.stringify(myArray)

// jsonArray is not more a array . it is string now
// any array operation can not be applicable for this string
// all string operation can be applicable here


console.log(jsonArray)
console.log(myArray)    




// quiz
const stuInfo = JSON.stringify({ name: "James", roll: 3 });

console.log(stuInfo.name)



