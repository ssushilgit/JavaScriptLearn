// Chapter 3 Practise Set
// 1. to print the marks of students in an object using for loop

obj = {
    harry: 98,
    rohan: 79,
    akash: 88
}
const length = Object.keys(obj).length;
console.log(length)
for(let b=0; b<length; b++){
    console.log("The marks obtained by "+ Object.keys(obj)[b] +" is " +obj[Object.keys(obj)[b]])
}

// 2. Write above program in for in loop
for (let i in obj){
    console.log("The marks obtained by "+ i +" is " +obj[i]);
}

// 3. Program to print "try again " until correct number is entered
let correct_number = 50
let entered_number

while (entered_number !== correct_number) {
    console.log("Try again")

    entered_number = prompt("Enter a number ");
    // Convert the user input to a number
    entered_number = parseInt(entered_number);
}

console.log("You entered the correct number:", entered_number);

// 4. function to find mean of 5 numbers
const mean = (a,b,c,d,e) =>{
    return (a+b+c+d+e)/5
}

console.log(mean(20,20,20,20,20))

