// let listItems = document.getElementsByClassName("list-item")

// for (let item of listItems){
//     console.log(item)
// }

// document.querySelectorAll(".list-item").forEach((item) => {
//     item.addEventListener("click", (e) => {
//         // one way to remove the current element
//         // e.target.parentNode.removeChild(e.target)

//         // second way to remove the current element
//         item.parentNode.removeChild(item);
//     });
// });


// right way
document.getElementById("event-container").addEventListener("click",(e)=>{
    e.target.parentNode.removeChild(e.target)
})


document.querySelector("#btn").addEventListener("click",(e)=>{
    let container = document.getElementById("event-container")
    let li = document.createElement("li")
    li.textContent = 'create a new item'
    container.appendChild(li)
    li.classList.add('list-item')
})


