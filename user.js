console.log("Rumming user.js");

let userName = "Dhruv"
let userAge = 20
const printData = (auth) => {
    console.log(`Name : ${userName} , Age : ${userAge} , authenticated: ${auth}` );
    
}
module.exports = {
    userAge,
    userName,
    printData,
}
