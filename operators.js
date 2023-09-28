
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}


convertHTML("Dolce & Gabbana");

//the operators <, >, ", ' and & are special characters in HTML

//if we want to display these characters in HTML we need to use HTML entities

//for example

//&lt; is the HTML entity for <

//&gt; is the HTML entity for >

//&quot; is the HTML entity for "

//&apos; is the HTML entity for '

//&amp; is the HTML entity for &

//here we used a for loop to loop through the string and replace the special characters with their corresponding HTML entities

//the break statement is used to break out of the switch statement

//the % operator is used to get the remainder of a division

//the % operator is the same as writing x = x % y

//for example
let remainder = 11 % 3;

console.log(remainder); //this will show 2 in the console

//the += operator is used to add a value to a variable

//the += operator is the same as writing x = x + y

//for example
let x = 5;

x += 5; //this is the same as writing x = x + 5

console.log(x); //this will show 10 in the console

//the -= operator is used to subtract a value from a variable

//the -= operator is the same as writing x = x - y

//for example
let X = 5;

x -= 5; //this is the same as writing x = x - 5

console.log(x); //this will show 0 in the console

//the *= operator is used to multiply a value to a variable

//the *= operator is the same as writing x = x * y

//for example
let xX = 5;

xX *= 5; //this is the same as writing x = x * 5

console.log(xX); //this will show 25 in the console

//the /= operator is used to divide a value from a variable

//the /= operator is the same as writing x = x / y

//for example
let xXX = 5;

xXX /= 5; //this is the same as writing x = x / 5

console.log(xXX); //this will show 1 in the console

//the ++ operator is used to increment a variable by 1

//the ++ operator is the same as writing x = x + 1

//for example
let xx = 5;

xx++; //this is the same as writing x = x + 1

console.log(xx); //this will show 6 in the console

//the -- operator is used to decrement a variable by 1

//the -- operator is the same as writing x = x - 1

//for example
let Xx = 5;

Xx--; //this is the same as writing x = x - 1

console.log(Xx); //this will show 4 in the console

//the typeof operator is used to get the type of a variable

//for example
let myName = "Bator";

console.log(typeof myName); //this will show string in the console

//the typeof operator returns the type of a variable or an expression

//the == operator is used to compare two values

//for example
let myAge = 20;

let yourAge = 20;

console.log(myAge == yourAge); //this will show true in the console

//the == operator returns true if the values are equal

//the == operator returns false if the values are not equal

//the === operator is used to compare two values and their types

//for example
let myAgee = 20;

let yourAgee = "20";

console.log(myAgee === yourAgee); //this will show false in the console

//the === operator returns true if the values are equal and their types are equal

//the === operator returns false if the values are not equal and their types are not equal

//the != operator is used to compare two values

//for example
let myNamee = "Bator";

let yourNamee = "Bator";

console.log(myNamee != yourNamee); //this will show false in the console

//the != operator returns false if the values are equal

//the != operator returns true if the values are not equal

//the !== operator is used to compare two values and their types

//for example
let myCat = "yuki";

let yourCat = "yuki";

console.log(myCat !== yourCat); //this will show false in the console

//the !== operator returns false if the values are equal and their types are equal

//the !== operator returns true if the values are not equal and their types are not equal

//the > operator is used to compare two values

//for example
let myNumber = 20;

let yourNumber = 10;

console.log(myNumber > yourNumber); //this will show true in the console

//the > operator returns true if the left operand is greater than the right operand

//the > operator returns false if the left operand is less than the right operand

//the < operator is used to compare two values

//for example
let myNumberr = 20;

let yourNumberr = 10;

console.log(myNumberr < yourNumberr); //this will show false in the console

//the < operator returns true if the left operand is less than the right operand

//the < operator returns false if the left operand is greater than the right operand

//the >= operator is used to compare two values

//for example
let thisNumber = 20;

let thatNumber = 10;

console.log(thisNumber >= thatNumber); //this will show true in the console

//the >= operator returns true if the left operand is greater than or equal to the right operand

//the >= operator returns false if the left operand is less than the right operand

//the <= operator is used to compare two values

//for example
let thisNumberr = 20;

let thatNumberr = 10;

console.log(thisNumberr <= thatNumberr); //this will show false in the console

//the <= operator returns true if the left operand is less than or equal to the right operand

//the <= operator returns false if the left operand is greater than the right operand

//the && operator is used to check if two or more conditions are true

//for example
let thisAge = 20;

let thisName = "Bator";

console.log(thisAge > 10 && thisName == "Bator"); //this will show true in the console

//the && operator returns true if all conditions are true

//the && operator returns false if one or more conditions are false

//thisAge > 10 is true because 20 is greater than 10 and thisName == "Bator" is true because thisName is equal to Bator

//the || operator is used to check if one or more conditions are true

//for example
let thisAgee = 20;

let thisNamee = "Bator";

console.log(thisAgee > 10 || thisNamee == "Bator"); //this will show true in the console

//the || operator returns true if one or more conditions are true

//the || operator returns false if all conditions are false

//the ! operator is used to reverse the result of a condition

//for example
let thisAgeee = 20;

let thisNameee = "Bator";

console.log(!(thisAgeee > 10 || thisNameee == "Bator")); //this will show false in the console

//the ! operator returns true if the condition is false

//the ! operator returns false if the condition is true

//the ? operator is used to write conditional statements

//for example
let thisMyAge = 20;

let thisMyName = "Bator";

console.log(thisMyAge > 10 ? "I am over 10" : "I am under 10"); //this will show I am over 10 in the console

//the ? operator returns the value before the : if the condition is true

//the ? operator returns the value after the : if the condition is false

//the : is used to separate the true and false values

//there are 3 types of operators in javascript

//assignment operators

//arithmetic operators

//comparison operators

//assignment operators are used to assign values to variables

//arithmetic operators are used to perform arithmetic on numbers

//comparison operators are used to compare values

//assignment operators
//the = operator is used to assign values to variables
//the += operator is used to add a value to a variable
//the -= operator is used to subtract a value from a variable
//the *= operator is used to multiply a value to a variable
//the /= operator is used to divide a value from a variable
//the ++ operator is used to increment a variable by 1
//the -- operator is used to decrement a variable by 1

//arithmetic operators
//the + operator is used to add numbers
//the - operator is used to subtract numbers
//the * operator is used to multiply numbers
//the / operator is used to divide numbers
//the % operator is used to get the remainder of a division

//comparison operators
//the == operator is used to compare two values
//the === operator is used to compare two values and their types
//the != operator is used to compare two values
//the !== operator is used to compare two values and their types
//the > operator is used to compare two values
//the < operator is used to compare two values
//the >= operator is used to compare two values
//the <= operator is used to compare two values
//the && operator is used to check if two or more conditions are true
//the || operator is used to check if one or more conditions are true
//the ! operator is used to reverse the result of a condition
//the ? operator is used to write conditional statements

//another oerator is the ... operator

//the ... operator is called the spread operator

//the ... operator is used to spread an array into multiple arguments

//for example
let thisArray = [1, 2, 3];

console.log(...thisArray); //this will show 1 2 3 in the console
