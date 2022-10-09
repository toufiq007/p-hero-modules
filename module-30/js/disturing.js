// Object and Array Destructuring
const car ={
    name:'Tesla carbon x1',
    manufacture: "tesla manufacturing company",
    country:'usa',
    price : '1000k',
    charging: '500 watt charger',
    models:[
        'carbon x1','new model 2022','iron power extreme'
    ],
    facilites :[
        {
            battery:'good',
            EMI :'all banks'
        },
        {
            efficiency:'very efficiency',
            dropPrice:5000,
            engine:'japanise hot spinner castle',
            color:['red','white','blue']
        }
    ]
}

// find the color property with distructing
let [firstColor,secondColor,thirdColor] = car.facilites[1].color
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)

const [obj1,obj2] = car.facilites
// console.log(obj1)
// console.log(EMI)
let {battery,EMI} = obj1
let {efficiency,dropPrice,engine} =obj2

console.log(efficiency)
console.log(dropPrice)
console.log(engine)


console.log(battery)
console.log(EMI)



// object Destructuring
// let {name,manufacture,country,charging,price} = car


// console.log(name)
// console.log()

// const name = car.name


const {price,name,manufacture,charging} = car;

console.log(manufacture)
console.log(name)


const [model1,model2,model3] = car.models

console.log(model1)
console.log(model2)
console.log(model3)






