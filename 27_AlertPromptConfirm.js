alert("Enter value of x ") //displays
let x = prompt("Enter the value of x here")  //takes some values
x=Number.parseFloat(x)
alert("You have entered x of type "+ typeof x)
let write=confirm("Are you sure you want to write?")
if(write){
    document.write(x) 
}
else{
    document.write("Please allow me to write")
}
