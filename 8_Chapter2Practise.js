// Chapter 2 Practise Set
// 1. Check whether age of a person lies between 10 and 20
let age=prompt("Enter a age: ")
if(age>10 && age<20 ){
    console.log("The age lies betwenn 10 and 20")
}
else{
    console.log("The age does not lies between 10 and 20")
}

// 2. Switch case
let fruit=prompt("Enter a fruit ")
switch (fruit) {
    case "Banana":
        console.log("Banana is yellow");
        break;
    case "Apple":
        console.log("Apple is red");
        break;
    case "Orange":
        console.log("Orange is orange");
        break;
    default:
        console.log("I don't know this fruit");
} 

// 3. To find whether a number is divisible by 2 and 3
let z=prompt("Enter a number ")
z=Number.parseInt(z)
if(z%2==0 && z%3==0){
    console.log("The number is divisble by 2 and 3")
}
else{
    console.log("The number is not divisible by 2 and 3")
}


// 4. To find whether a number is divisible by either 2 or  3
let x = prompt("Enter a number ")
x = Number.parseInt(x)
if (x % 2 == 0 || x % 3 == 0) {
    if (x % 2 == 0) {
        console.log("The number is divisble by 2")
    }
    else{
        console.log("The number is divisible by 3")
    }
}
else {
    console.log("The number is not divisible by neither 2 nor 3")
}

// 5. Program to print "You can drive" or "You cannot drive " using ternary operator
let umar =prompt("Enter your umar ")
umar>18 ? console.log("You can drive "): clg("You cannot drive")
