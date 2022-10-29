const doSomething = () => {
    console.log("third");
};
console.log("first");
console.log("second");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

const link = `https://jsonplaceholder.typicode.com/todos/1`
const loadData = (link)=>{
    fetch(link)
        .then(res=> res.json())
        .then(data=> console.log(data))
}
loadData(link)
console.log("fourth");
console.log("five");

let seconds = 0;
const intervalId = setInterval(() => {
    console.log(++seconds);
    if (seconds === 10) {
        clearInterval(intervalId);
    }
}, 1000);

// console.log(intervalId)

/**
 * // interveiw question:
    1: how does browser runs javascript?
    2: how does browser works?
    3: HTTP vs HTTPS?
    4: Tell me something 
    5: What is rerender in browser?
    6: What is event loop in js?
    7: if js is single threaded, how does it handle asynchronous call?
    8: what is ssl?
    9: difference between setTimeOUt and setInterval?
    10: what is regular expression?	
 */
