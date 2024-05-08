// 1. Create an array of numbers and take input from the user to add numbers to this array
let arr =[10,12,14,16,18,20]        //new array named arr is defined
let  a = prompt("Enter a number")   //number is asked from the user
a = Number.parseInt(a)              //converted to integer
let newarr = arr.push(a)            // the number is added to the array named arr
console.log(newarr)                 //returns how many numbers present in the array
console.log(arr)                    // returns the array named arr with added number

// 2. Keep on adding numbers in the array until 0 is entered
let arr2= [1,2,3,4,5,6]
let b;
let newarr2;
do{
    b =prompt("Enter a number")
    b = Number.parseInt(b)
    newarr2 = arr2.push(b)

}while(b!=0);

console.log(newarr2)
console.log(arr2)

// 3. Filter the numbers from the array which are divisible by 10
let arr3 =[10,20,45,77,40,90,1200,43,85,99,190]
let newarr3=arr3.filter((value) =>{
    return value%10 ==0
}) 
console.log(newarr3)

// 4. Create an array of square of a given number
let arr4= [1,2,3,4,5,6]
let newarr4 = arr4.map((x)=>{
    return x*x
})
console.log(newarr4)

// 5.Use reduce to calculate factorial of a given number from an array of first n natural numbers.(n being the number whose factorial needs to be calculated)
arr5 = [1,2,3,4,5,6,7,8,9,10]
let fact=1
let n = prompt("Enter value of n");
n=Number.parseInt(n)
let newarr5 = arr5.slice(0,n).reduce((x1, x2)=>{
    return x1*x2;
})
console.log(newarr5)
 