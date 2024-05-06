// for loop
let num = [12,13,14,15,16,17,18,19]
console.log("for loop")
for(let i=0;i<num.length;i++){
    console.log(num[i])
}

// foreach loop
num1 = [1,2,3,4,5,6,7,8,9]
console.log("forEach loop")
console.log("prints elements")
num1.forEach((element)=>{
    console.log(element)
})

console.log("prints its square")
num1.forEach((element)=>{
    console.log(element*element )
})



// Array.from => create an array from any other object
let names="Sushil" 
console.log(typeof names)  // 'string'
let arr=Array.from(names)
console.log(arr, typeof arr) // ['S', 'u', 's', 'h', 'i', 'l'] 'object' , array is created

// for in loop
num2=[99,88,77,66,55,44,33,22,11]
console.log("for in loop")
console.log("Returns index")
for(let u in num2){
    console.log(u)
}
console.log("Returns value")
for(let u in num2){
    console.log(num2[u])
}


// for of loop
console.log("for of loop")
console.log("Returns value")
for(let v of num2){
    console.log(v)
}