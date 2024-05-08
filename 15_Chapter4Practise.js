// 1 find length
let hello="Sushil\""
console.log(hello.length)

// 2. Know about includes, starts with, ends with
// includes
let sentence = "This book is amazing to read, I will recommend it to everyone I know"
let word = "book"
console.log(`The word "${word}" ${sentence.includes(word)  ? "is" : "is not" }  present in the sentence`)

// starts with
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));    // Expected output: true
console.log(str1.startsWith('Sat', 3)); // Expected output: false

// ends with
let text = "Hello World";
let result = text.endsWith("World");
console.log(result)

// 3. extract 1000 from given string and its types
let string1 = "The amount is Rs 1000"
let string2 = Number.parseInt(string1.slice("The amount is Rs ".length))
console.log(string2)
console.log(typeof string2)

// 4. changing character
str = "Sugam"
output1 = str.replace("g","j")
console.log(output1)

output2 = output1.replace("j","g")
console.log(output2)

