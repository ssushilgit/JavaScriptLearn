// Arithmetic Operators
a = 10
b = 3
console.log("Arithmetic Operator")
console.log("a+b = ", a+b)
console.log("a-b = ", a-b)
console.log("a*b = ", a*b)
console.log("a/b = ", a/b)
console.log("a%b = ", a%b)   
console.log("a**b = ", a**b) //10*10*10 = 1000

console.log(++a) //val a = 11   //11
console.log(a++) //val a = 12   //11
console.log(--a) //val a = 11   //11
console.log(a--) //val a = 10   //11
console.log(a)   //val a = 10   //10
console.log(a--) //val a = 9    //10
console.log(a)   //val a = 9    // 9

// Assignment Operator
console.log("Assignment Operator")
c = 10
c+=5    //same as  c=c+5
console.log(c) 

// Comparision Operator
console.log("Comparision Operator")
x=5
z="5"
console.log("x==z", x==z) //true
console.log("x!=z", x!=z) //false
console.log("x===z", x===z) //false
console.log("x!==z", x!==z) //true

// Logical Operator
console.log("Logical Operator")
e=41
f=14
console.log(e>40 && f>10)
console.log(e>40 || f<10)
console.log(!true)