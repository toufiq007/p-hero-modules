document.getElementById("applyBg").addEventListener("click",(e)=>{
    // document.body.style.background = "#000"
    // document.body.style.color = "#fff"
    // querySelectorAll use korle foreach loop can be applicable
    // let friends = document.querySelectorAll(".friend");

    // friends.forEach((friend)=>{
    //     console.log(friend)
    // })

    // getElementsByClassName use korle foreach loop is not applicable.Only general loop is applicable for here

    let friends = document.getElementsByClassName("friend")
    for (let friend of friends){
        friend.style.background = "lightblue"
    }

})


document.getElementById("centredThird").addEventListener("click",(e)=>{
    document.getElementById("thrid").classList.toggle("third-item")
})



document.getElementById("addNewFriend").addEventListener("click",(e)=>{
    let friendContainer = document.getElementById("friend-conainer")
    let div = document.createElement("div")
    div.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus rem nostrum eligendi rerum! Nulla tempora consequuntur, accusantium unde odio vitae incidunt totam quidem exercitationem facilis delectus cum ut natus.</p>
    `
    div.classList.add("friend")
    friendContainer.appendChild(div)
})




