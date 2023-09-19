//endswith method is used to check the string ends with the given string or not
//for example
const str = "Hello World";
console.log(str.endsWith("World")); //this will print true because the w is capital
console.log(str.endsWith("world")); //this will print false because the string is case sensitive

function endsWith(str, target) {
  //this function takes 2 parameters, the string and the string to check if it ends with
  //your code goes here
  return str.endsWith(target);
}

console.log(endsWith("Hello World", "World")); //this will print true because the w is capital

function confirmEnding(str, target) {
  //this function takes 2 parameters, the string and the string to check if it ends with
  return str.slice(str.length - target.length) === target;
}

//the length of the string is 6
//the length of the target is 1
//so the slice will start at 6 - 1 = 5 meaning the a Bastian
//which will return n and thats targets last character
//so the slice will start at the 5th character
//so the slice will return the last character of the string

console.log(confirmEnding("Bastian", "n")); //this will print true
