/**
 * localStorage
 * methods
 *   --> getItem()
 *   --> setItem()
 *   --> removeItem()
 *   --> clear()  kore dile full localStorage tai clear hoye jabe
 */

// data pathanor somoy obossoi json e convert kore nite hobe
// data get korar somoy obossoi json data te parse kore nite hobe

// add item to the localStorage
document.querySelector("#addBtn").addEventListener("click", (e) => {
    let inputField = document.querySelector("#userName");
    let inputFieldValue = inputField.value;
    console.log(inputFieldValue);
    localStorage.setItem("name", inputFieldValue);
    inputField.value = "";
});

// remove item from the localStorage
document.querySelector("#removeBtn").addEventListener("click", (e) => {
    localStorage.removeItem("name");
});





