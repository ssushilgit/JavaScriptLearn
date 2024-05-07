let arr = [11,22,33,45,88,74]
console.log(arr)
// forEach loop calls a function for each element
console.log("Using forEach loop")
arr.forEach((u)=>{
    console.log(u)
})

// Array map method
console.log("Using array map method ")
let b = arr.map((value,index)=>{   // map creates a new array by performing some operation on each array element
    console.log(value,index)
    return (value + 1)
})
console.log(b)

// Array filter method
console.log("Array filter function displaying values greater than 30")
let c= arr.filter((val)=>{
    return val>30
})
console.log(c)

// Array reduce method
let arr2 = [1,2,3,4,5,2,1]
console.log("Using function in reduce method ")
const reduce_function = (h1,h2) =>{
    return h1+h2
}
let newarr3 =arr2.reduce(reduce_function)
console.log(newarr3)

console.log("Only using reduce method")
let d = arr2.reduce((h1,h2)=>{
    return h1+h2
})
console.log(d)