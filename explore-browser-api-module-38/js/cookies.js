const getCookiesByname = (name)=>{
    const cookiesString  = document.cookie;
    const cookiParts = cookiesString.split('; ')
    const cookie = cookiParts.find(c=> c.includes(name));
    if(cookie){
        let cookiename = 'country=US'
        const cookieValue = cookiename.split('=')
        console.log(cookieValue)
    }
}
let cookiename = 'country=US'
const cookieValue = cookiename.split("=")[1]
console.log(cookieValue);







