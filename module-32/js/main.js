// https://jsonplaceholder.typicode.com/users

const link = `https://jsonplaceholder.typicode.com/users`;
let dataBtn = document.getElementById("loadData");
const usersContainer = document.getElementById("users");

// load data with async await with arrow function with try catch block
// const loadData = async () => {
//     try{
//         await fetch(link)
//         .then(res=> res.json())
//         .then(data=> displayData(data))
//     }
//     catch(err){
//         document.write(err)
//     }   
// };
const loadData = async () => {
    try{
        let responce = await fetch(link)
        let users = await responce.json()
        return displayData(users)
    }
    catch(err){
        document.write(err)
    }   
};

// load data with async and await function with try catch block with refular function block
// async function loadData(){
//     try{
//         let responsce = await fetch(link)
//         // console.log(responsce)
//         let users = await responsce.json()
//         displayData(users)
//     }
//     catch(err){
//         document.writeln(err)
//     }
// }

const displayData = (users) => {
    users.map((user) => {
        let { id, name, email, phone } = user;
        let userData = document.createElement("div");
        userData.innerHTML = `
            <h1>id: ${id}</h1>
            <h4>id: ${name}</h4>
            <h5>id: ${email}</h5>
            <h6>id: ${phone}</h6>
        `;
        userData.classList.add("usersStyel");
        usersContainer.appendChild(userData);
    });
};

dataBtn.addEventListener("click", (e) => {
    e.preventDefault();

    loadData();
});
