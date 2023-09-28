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

//there is also a constructor function

//constructors are functions that create new objects they define properties and behaviors that will belong to the new object

//think of them as a blueprint for the creation of new objects

//here is an example of a constructor function
function Bird() {
  this.name = "Albert"; // you use ; instead of , because its a function
  this.color = "blue"; //you use = instead of : because its a function
  this.numLegs = 2;

} 
//this is a constructor function

console.log(Bird); //this will print the constructor function

//the constructor is a function but works like an object because it has properties and methods and its cleaner to use

//the constructor function is defined with a capitalized name to distinguish it from other functions that are not constructors

//the constructor function is defined with the keyword this

//this is a reference to the new object that is being created by the constructor

//the constructor function is useful when you need to create multiple objects that have similar properties and methods

//note that the constructor function is useless on its own

//it is only useful when it is used with the new keyword

//you can call the constructor function with the new keyword

//for example
let blueBird = new Bird(); //this is a new object

//the blueBird is a variable given to change Bird into blueBird

//the new keyword creates a new object from the constructor function

//the new keyword calls the constructor function and assigns the new object to the Bird variable

//the new keyword tells javascript to create a new instance of Bird called blueBird

//just like any object its properties can be accessed and modified

//for example
blueBird.name = "Albert"; //this will print Albert

blueBird.name; //this will print Albert
//note this inside the constructor always refers to the object being created

//the new keyword is used when calling a constructor function

//the new keyword creates a new instance of the object

//the new keyword creates a new object from the constructor function

//the new keyword calls the constructor function and assigns the new object to the Bird variable

//the new keyword tells javascript to create a new instance of Bird called blueBird

//its creates a new instance so you can use the same constructor function to create multiple objects

//now blueBird has all the properties defined inside the Bird constructor

blueBird.name; //this will print Albert

blueBird.color; //this will print blue

blueBird.numLegs; //this will print 2

//The Bird a constructor worked well. However,

//notice that all Birds that are created with the Bird constructor

//are automatically named Albert, are blue in color, and have two legs.

//What if you want birds with different values for name and color?

//It's possible to change the properties of each bird manually but that would be a lot of work

//To more easily create different Bird objects,

//you can design your Bird constructor to accept parameters

//for example
function Bird(name, color) {
  //you would put the name and color you want here
  this.name = name; // you would put the name you want here
  this.color = color; //you would put the color you want here
  this.numLegs = 2;

} 
//this is a constructor function

console.log(Bird); //this will print the constructor function

//then pass in the values as arguments to define each unique bird into the Bird constructor

//for example
let cardinal = new Bird("Bruce", "red");

//this will create an object called cardinal and it will have the properties of name and color

//the cardinal object will have the name of Bruce and the color of red instead of Albert and blue

//now we have two different Bird objects, Albert and Bruce

//which can be called with the cardinal and blueBird variables

//the nummber of legs is still 2 which is why we dont need to pass it as an argument into cardinal

//the cardinal has these properties

cardinal.name; //this will print Bruce

cardinal.color; //this will print red

cardinal.numLegs; //this will print 2

//The constructor is more flexible.

//It's now possible to define the properties for each Bird at the time it is created,

//which is one way that JavaScript constructors are so useful.

//They group objects together based on shared characteristics and behavior and define

//a blueprint that automates their creation

//Anytime a constructor function creates a new object,

//that object is said to be an instance of its constructor.

//JavaScript gives a convenient way to verify this with the instanceof operator.

// instanceof allows you to compare an object to a constructor,

//returning true or false based on whether or not that object was created with the constructor

//for example
let Bird = function (name, color) {
  //you would put the name and color you want here
  this.name = name; // you would put the name you want here
  this.color = color; //you would put the color you want here
  this.numLegs = 2;
};

let crow = new Bird("Alexis", "black");

crow instanceof Bird;

//this will return true because crow was created by the Bird constructor

//if an object is created without using a constructor,

//instanceof will verify that it is not an instance of that constructor

//for example
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2,
};

canary instanceof Bird;

//this will return false because canary was not created by the Bird constructor

//note that the instanceof method is a boolean method

//it will return true or false depending on if the object was created with a constructor or not

//theres a function called a callback function

//a callback function is a function that is passed into another function as an argument

//this function can then be invoked during the execution of that higher order function

//which takes the callback function as an argument

//the function that accepts the callback function is called a higher order function

//the higher order function will use the callback function at some point in the future

//for example
function callbackFunction() {
  console.log("Hello World");
} //this is a callback function
function higherOrderFunction(callback) {
  callback();
} 
//this is a higher order function

higherOrderFunction(callbackFunction); //this is a function call

//this will print Hello World in the console

//the callback function is passed into the higher order function as an argument

//theres also a function called a higher order function

//a higher order function is a function that accepts another function as an argument

//this function can then be invoked during the execution of that higher order function

//which takes the callback function as an argument

//the function that accepts the callback function is called a higher order function

//the higher order function will use the callback function at some point in the future

//for example
function callbackFunction() {
  console.log("Hello World");
} //this is a callback function
function higherOrderFunction(callback) {
  callback();
} 
//this is a higher order function

higherOrderFunction(callbackFunction); //this is a function call

//this will print Hello World in the console

//the callback function is passed into the higher order function as an argument

//the opposite of the map method is a for loop they both do the same thing in different ways

//theres a currying function

//currying is the process of taking a function with multiple arguments

//and returning a series of functions that take one argument and eventually resolve to a value

//The arity of a function is the number of arguments it requires.

//Currying a function means to convert a function of N arity into N functions of arity 1.

//In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

//Here's an example:
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function (y) {
    return x + y;
  };
}

const curried = (x) => (y) => x + y; //this is a curried function

curried(1)(2);

//curried(1)(2) would return 3 because the first argument is 1, and the second argument is 2 so it adds 1 + 2 which equals 3

//This is useful in your program if you can't supply all the arguments to a function at one time.

//You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available.

//Here's an example using the curried function in the example above:
const funcForY = curried(1);

console.log(funcForY(2)); // 3

//Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

//Here's an example:
function impartial(x, y, z) {
  return x + y + z; //this will add x + y + z
}

const partialFn = impartial.bind(this, 1, 2); //this will add 1 + 2

partialFn(10); // 13

//currying pretty much adds the arguments together and gives you the sum like doing math
