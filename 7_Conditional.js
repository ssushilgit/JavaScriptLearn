// if
let a = prompt("What is your age?")
a= Number.parseInt(a)
if (a>0){
    alert("It is a valid age")
}


// if else
let b=prompt("Enter your age")
b= Number.parseInt(b);
if(b>18){
    alert("You are allowed to drive")
}
else{
    alert("You are not elligible to drive")
}

//if else .. if
let marks=prompt("Enter your marks ")
marks = parseFloat(marks)
if(marks > 80 && marks <= 100 ){
    alert("You scored distinction")
}

else if(marks > 60 && marks <= 80 ){
    alert("You scored first divison")
}

else if(marks > 40 && marks <=60){
    alert("You scored second divison")
}

else{
    alert("You are failed")
}