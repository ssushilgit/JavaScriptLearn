// for loop - loop a blok of code no. of times
// program to add first n natural numbers
let sum=0
let n = prompt("Enter the value of n ")
n=Number.parseInt(n)
for (var i = 1 ; i<n; i++){
    sum = sum + (i+1)
}
console.log("The sum of first "+n+ " natural number is "+sum)
console.log(i)

// for in loop - loops through the keys of an object
 let obj = {
    Sushil : 87, 
    Saroj : 94,
    SushilDhakal : 96,
    Ritesh : 84
 }
 for (let a in obj){
    console.log("The marks obtained by " +a+ " is " +obj[a])
 }

// for of loop - loops through the values of an object
let c = "Sushil Shrestha"
for( let b of c){
console.log(b)
}


// while loop - loops a block on a specific condition until condition remains true
let num = prompt("Enter a number ")
num =Number.parseInt(num )
let a=0
while(a<num){
    console.log(a)
    a++
}


// do-while loop - while loop variant which runs at least once
let nums = prompt("Enter a number to print ")
nums =Number.parseInt(nums )
let value=0
do{
    console.log(value)
    value++
}while(value<nums);

