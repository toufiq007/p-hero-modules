// api link https://api.kanye.rest/

const loadBtn = document.querySelector("#loadBtn");
const container =  document.getElementById("quotesContainer");
const quote = document.getElementById("quote")
const link = `https://api.kanye.rest/`

const loadData = async ()=>{
    try{
        await fetch(link)
        .then(res=> res.json())
        .then(data=> displayTheData(data))
    }
    catch(err){
        document.write(err)
    }
}

const displayTheData = (data)=>{
    let {quote} = data
    container.innerText = `"${quote}"`
}

loadBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    loadData()
    // quote.style.display = "block"
    quote.style.opacity = "1"
})