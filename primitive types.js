//Primitive Types/ value types practice
let myName = "Bator"; //string literal
let myAge = 20; //number literal
let isApproved = true; //boolean literal you can also use false
let myFirstName = undefined; //undefined literal
let selectedColor = null; //null literal we use null when we want to clear the value of a variable
//there are 5 primitive types in javascript string, number, boolean, undefined, null
//string is a sequence of characters used for text surrounded by quotes '' or "" or ``
//string example ('hello world')
//number is a number without quotes 1, 2, 3, 4, 5 used for numbers and decimals
//number example (1, 2, 3, 4, 5)
//boolean is true or false used for making decisions like if statements
//boolean example (true or false)
//undefined is a value that is not assigned to a variable
//undefined example (let name;)
//null is a value that is assigned to a variable but has no value
//null example (let name = null;) you can change the value of null to a string, number, boolean, undefined

//more primitive types practice
let thisName = "Bator"; //string literal

let thisAge = 20; //number literal

let Approved = true; //boolean literal you can also use false

let thisFirstName = undefined; //undefined literal

let thisColor = null; //null literal we use null when we want to clear the value of a variable

//Return an English translated sentence of the passed binary string.

//The binary string will be space separated.

//were using strings and numbers here which are all primitive types

function binaryAgent(str) {
  let binary = str.split(" ");
  let decimal = [];
  let sentence = [];
  for (let i = 0; i < binary.length; i++) {
    decimal.push(parseInt(binary[i], 2));
    sentence.push(String.fromCharCode(decimal[i]));
  }
  return sentence.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000" +
    "01100010 01101111 01101110 01100110 01101001 01110010 01100101" +
    "01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

//Return the length of the longest word in the provided sentence.

//Your response should be a number.
