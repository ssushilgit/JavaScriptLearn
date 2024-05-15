// 1. Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he/she can drive or not.

// const canDrive=(age) =>{
//     return age>18 ? true : false
// }

// let age = prompt("Enter your age ")
// age = Number.parseInt(age)


// if(canDrive(age)){
//     alert("You can drive")
// }
// else{
//     alert("You cannot drive")
// }

// 2. In above question, use confirm to see if user wants to see the prompt again

// const canDrive = (age) => {
//     return age > 18 ? true : false
// }
// let runAgain =true

// while (runAgain) {
//     let age = prompt("Enter your age ")
//     age = Number.parseInt(age)

//     if (canDrive(age)) {
//         alert("You can drive")
//     }
//     else {
//         alert("You cannot drive")
//     }
//     runAgain = confirm("Do you want to play again?")
// }

// 3. In above question, use console error to log if the age entered is negative

// const canDrive = (age) => {
//     return age > 18 ? true : false
// }
// let runAgain =true

// while (runAgain) {
//     let age = prompt("Enter your age ")
//     age = Number.parseInt(age)

//     if(age<0){
//         console.error("Age entered should be valid")
//         break;
//     }

//     if (canDrive(age)) {
//         alert("You can drive")
//     }
//     else {
//         alert("You cannot drive")
//     }
//     runAgain = confirm("Do you want to play again?")
// }


// 4. Write a program to change the url to google.com (redirection) if user enters a number greater than 4
// let number = prompt("Enter a number")
// number = Number.parseInt(number)

// number>4 ? window.location.href = "https://www.google.com" : console.log("Number is less than 4") 


// 5. Change the background color according to user's input
let color = prompt("Enter the color ")
document.body.style.background = color
document.write("This is "+color +" color")