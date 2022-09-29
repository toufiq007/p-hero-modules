let item2 = document.getElementById("item2")
let ulContainer = document.getElementById("item-ul")
let sectionContainer = document.getElementById("secion-container")



// *** stop eventBubble --> stopPropagation()
// it is use when we donot need event bubbling


item2.addEventListener("click",(e)=>{
    item2.style.background = "blue"
    item2.style.color = "#fff"
    console.log("item2 called")
    e.stopPropagation()
})


ulContainer.addEventListener("click",(e)=>{
    ulContainer.style.background= "coral"
    ulContainer.style.color = "#fff"
    console.log("ul container called")
    e.stopPropagation()
})

sectionContainer.addEventListener("click",(e)=>{
    sectionContainer.style.background= "lightgreen"
    sectionContainer.style.color= "#fff"

    console.log("section container called")
    e.stopPropagation()
})


