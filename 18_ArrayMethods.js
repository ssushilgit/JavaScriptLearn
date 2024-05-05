let num =[1,2,3,4,5,6,7,8,9]
console.log(num, num.length)
// delete num[0] //delete item at index 0
// console.log(num, num.length)


let num_more = [10,11,12,13,14,15,16,17,18,19]
let num_more_more = [111,112,113,114,115,116,117,118,119]

let new_Array = num.concat(num_more, num_more_more)
console.log(new_Array , new_Array.length)


num1 = [15,22,155,133,255,30,855,45,15,64,754]
console.log(num1.sort())  //sort() method will return the value starting from smallest digit until the numbers starting from that number is finished, even if other smaller numbers are there

// The output will be [133, 15, 15, 155, 22, 255, 30, 45, 64, 754, 855]

let compare=(a,b)=>{ //This function will make sorting as [15, 15, 22, 30, 45, 64, 133, 155, 255, 754, 855]
    return a-b //for sorting in ascending order, b-a for descending order 
}
let num3 = num1.sort(compare)
console.log(num3)
console.log(num3.reverse())



let num4 = [15,22,155,133,255,30,855,45,15,64,754]
console.log(num4.splice(2,5, 1011,1234,1001,1025,1044 )) //after two index 0,1 five values will be replaced
console.log(num4) //output will be [15, 22, 1011, 1234, 1001, 1025, 1044, 45, 15, 64, 754]

let num5 = [15,22,155,133,255,30,855,45,15,64,754]
let slicedNum = num5.slice(2,6) //print out values from index 2 to index 6
console.log(slicedNum)



