//functions practice
function greet() {
  //this is a function declaration
  console.log("Hello World"); //this is a function body
}

greet("Hello World"); //this is a function call

//you dont need to add a semicolon after the curly braces because were not declaring it like a variable (let greet = function() {})
//what goes inside the curly braces is the body of the function
//you use both () and {} to define a function
//functions are one of the fundamental building blocks in javascript
//a function is a set of statements that performs a task or calculates a value

//we can call a function by using the function name followed by ()
//for example
//greet(); this will call the function and show Hello World in the console
//we take the function name which is greet then add ()
//functions can have inputs and inputs can change how the function behaves
//lets say instead of displaying Hello World we want to display Hello Bator
//we can do that by adding a parameter to the function which is a variable thats inside the () of the function
//the parameter is only meaningful inside the function
//its only accessible inside the function and not outside the function

//we can add a parameter to the function
//for example
function greet(name) {
  //the name is the parameter
  //this is a function declaration
  console.log("Hello " + name); //the + is a concatenation operator it combines 2 strings so Hello and name
}
greet("Bator"); //this is a function call and Bator is the argument which is the value of the parameter
//we take the function name which is greet then add () then add the argument which is Bator

//we can also greet separate people by adding multiple function calls
//for example
function greet(name) {
  //the name is the parameter
  //this is a function declaration
  console.log("Hello " + name); //the + is a concatenation operator it combines 2 strings so Hello and name
}

greet("Bator"); //this is a function call and Bator is the argument which is the value of the parameter
greet("Autumn"); //this is a function call and Autumn is the argument which is the value of the parameter
greet("Aki"); //this is a function call and Aki is the argument which is the value of the parameter
greet("Michael"); //this is a function call and Michael is the argument which is the value of the parameter

//we can add multiple parameters to the function
//for example
function greet(name, lastName) {
  //the name and lastName are the parameters
  //this is a function declaration
  console.log("Hello " + name + " " + lastName); //the + is a concatenation operator it combines 2 strings so Hello and name and lastName
  //the "" between the + is a space between the name and lastName because without it it would be HelloBatorMichael since the name and lastName are 2 separate parameters
}

greet("Bator", "Michael"); //this is a function call and Bator and Michael are the arguments which are the values of the parameters
//we take the function name which is greet then add () then add the argument which is Bator and Michael

//we can greet multiple people by adding multiple parameters
//for example
function greet(name, middleName, japaneseName) {
  //the name is the parameter
  //this is a function declaration
  console.log("Hello " + name + " " + middleName + " " + japaneseName); //the + is a concatenation operator it combines 2 strings so Hello and name
}

greet("Bator", "Autumn", "Aki"); //this is a function call and Bator, Autumn and Aki are the arguments which are the values of the parameters

//how to use the ... operator for returning a truncated string
//example
function truncateString(str, num) {
  //this function takes 2 parameters, the string and the number to truncate the string
  //your code goes here
  return str.slice(0, num) + "...";
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //this will print A-tisket...

//A common pattern in JavaScript is to execute a function as soon as it is declared:
(function () {
  console.log("Chirp, chirp!");
})();
//This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

//Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

//Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
(function () {
  console.log("A cozy nest is ready");
})();
//this will print A cozy nest is ready

//An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:
function glideMixin(obj) {
  obj.glide = function () {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
}
//We can group these mixins into a module as follows:
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function (obj) {
      obj.fly = function () {
        console.log("Flying, wooosh!");
      };
    },
  };
})();
//Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:
motionModule.glideMixin(duck);
duck.glide(); // prints "Gliding on the water"

//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      //this is a mixin
      obj.isCute = function () {
        return true; //this will return true
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();
//this will print Singing to an awesome tune
