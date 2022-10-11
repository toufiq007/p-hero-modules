
// array of object


 const users = [
    {id:1,name:"abul",job:'doctor'}
 ]


console.log(users[0].name)
users.forEach(obj=>{
    console.log(obj.name)
})

const data = {
    count:5000,
    data1:[
        {
            id:1,name:"babul",job:'leader'
        },  
        {
            id:2,name:"dabul",job:'leader'
        },  
    ]
}

// const firstPersonName = data.data[0].name;
// console.log(firstPersonName)

let {data1} = data

let [personOne] = data1;

console.log(personOne.name)


const myUsers = {
    id:5001,
    name:"thomas perri",
    address:{
        street:{
            first:'Azampur Kachabazar',
            second:'baitul mal jame mosjid',
            third:'left flat'
        }
    }
}


// optional chaining

const faltNo = myUsers.address?.street?.third;

console.log(faltNo)






