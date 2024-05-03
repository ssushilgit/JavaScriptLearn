
// Array - variables that can hold more than one values

// Arrays are mutable, so arrays can be changed but strings are immutable, so strings cannot be changed

let a = [1,2,3,4,false, "Not present", null]
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7]) //undefined because index 6 doesnot exist
console.log(a)
console.log("The length of a is "+a.length)

a[7] = 7  // adding new value to the array
console.log(a[7])  //print the array with new value

a[0] = 15 //changing the value of a with index 0
console.log(a)
console.log(typeof a) // Arrays type is object

console.log("The length of a is "+a.length) // prints the length of the array with newly added value

// using for loop
for (let i=0;i<a.length;i++){
    console.log(a[i])
}

// using for in loop
for (let z in a){
    console.log(a[z])
}