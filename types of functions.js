//theres other types of functions
//the function that performs a task which is called a procedure
//for example
function greet(name, middleName, japaneseName) {
  //the name is the parameter
  //this is a function declaration
  console.log("Hello " + name + " " + middleName + " " + japaneseName); //the + is a concatenation operator it combines 2 strings so Hello and name
}

greet("Bator", "Autumn", "Aki"); //this is a function call and Bator, Autumn and Aki are the arguments which are the values of the parameters

//the function that calculates a value which is called a function
//for example
function square(number) {
  return number * number;
} //the return keyword returns the result of the function

let number = square(2); //this is a function call and 2 is the argument which is the value of the parameter and the result is 4
console.log(number); //this will display 4 in the console
//we dont need to declare a separate variable to store the result of the function
//we can also do this
console.log(square(2)); //this will display 4 in the console
//console.log is also a function as well as square which is why we have two functions in one line
