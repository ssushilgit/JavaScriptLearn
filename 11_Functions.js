const hello = () =>{    // arrow function without passing argument
    console.log("This is arrow function without passing argument")
}

function Average(x,y){   // function with passing argument
    return (x+y)/2
}

const sum =(p,q) =>{   //  arrow function passing arguments
    return p + q
}

p = 10
q = 5

console.log("The average between two number is " +Average(10,15))
console.log("The average between two number is " +Average(p,q))

hello();
console.log("The sum of two number is "+sum(15,20))
console.log("The sum of two number is "+sum(p,q))
