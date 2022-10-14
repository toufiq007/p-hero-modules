// link https://randomuser.me/api/?results=5000
const link = `https://randomuser.me/api/?results=5000`

const loadData = async ()=>{
    await fetch(link)
    .then(res=> res.json())
    .then(data=> console.log(data.results))
}

loadData()