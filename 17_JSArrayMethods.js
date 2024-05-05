  let num = [1,2,3,4]
  console.log(num, typeof num) 
  let b = num.toString()
  console.log(b, typeof b) //converts num objects to string
  let c = num.join("-")
  console.log(c, typeof c) // add - as join between the array

  let d= num.pop() //removes last item
  console.log(d)
  console.log(num)


  let e = num.push(18)  //push 18 in the array
  console.log(e) //returns index where 'e' is pushed
  console.log(num)

  let f = num.shift() //removes element from start of the array
  console.log(f)
  console.log(num)

  let g = num.unshift(100) //adds element to the start of the array
  console.log(g)
  console.log(num)

//   pop() removes element from the end while shift() removes element from the start
//   push() adds element to the end while unshift() adds element to the start