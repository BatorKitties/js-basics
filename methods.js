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

//threre are alot of methods for strings
//for example
//startsWith method is used to check if the string starts with the given string or not
//for example
const string = "Hello World";
console.log(string.startsWith("Hello")); //this will print true because hello is the first word in the string
//endsWith method is used to check if the string ends with the given string or not
//for example
const thisStr = "Hello World";
console.log(thisStr.endsWith("World")); //this will print true because world is the last word in the string
//includes method is used to check if the string includes the given string or not
//for example
const thisString = "Hello World";
console.log(thisString.includes("World")); //this will print true because world is in the string
//repeat method is used to repeat the string
//for example
const thisStringg = "Hello World";
console.log(thisStringg.repeat(3)); //this will print Hello World Hello World Hello World because it repeats the string 3 times
//length method is used to get the length of the string
//for example
const thisIsString = "Hello World";
console.log(thisIsString.length); //this will print 11 because the string has 11 characters the space is also a character
//indexOf method is used to get the index of the string
//for example
const thisIsAString = "Hello World";
console.log(thisIsAString.indexOf("Hello")); //this will print 0 because the string has an index of 0 Hello starts at 0
//lastIndexOf method is used to get the last index of the string
//for example
const thisIsAStringg = "Hello World";
console.log(thisIsAStringg.lastIndexOf("World")); //this will print 6 because the string has an index of 6 the space is also counts and it is the last index World starts at 6
//slice method is used to get the slice of the string
//for example
const thisIsAStr = "Hello World";
console.log(thisIsAStr.slice(0, 5)); //this will print Hello because the slice starts at 0 and ends at 5
//substring method is used to get the substring of the string
//for example
const thisIsAStri = "Hello World";
console.log(thisIsAStri.substring(0, 5)); //this will print Hello because the substring starts at 0 and ends at 5 just like the slice
//substr method is used to get the substr of the string
//for example
const thisIsAStrin = "Hello World";
console.log(thisIsAStrin.substr(0, 5)); //this will print Hello because the substr starts at 0 and ends at 5 just like the slice and substring
//replace method is used to replace the string
//for example
const thisIsAStrinG = "Hello World";
console.log(thisIsAStrinG.replace("Hello", "Hi")); //this will print Hi World because it replaces Hello with Hi, hi is the new string and hello is the old string
//toLowerCase method is used to convert the string to lowercase
//for example
const thisIsAStrinGG = "Hello World";
console.log(thisIsAStrinGG.toLowerCase()); //this will print hello world because it converts the string to lowercase
//toUpperCase method is used to convert the string to uppercase
//for example
const thisIsAStrinGGG = "Hello World";
console.log(thisIsAStrinGGG.toUpperCase()); //this will print HELLO WORLD because it converts the string to uppercase
//trim method is used to trim the string
//for example
const thisIsStri = "Hello World";
console.log(thisIsStri.trim()); //this will print Hello World because it trims the string it removes the spaces (whitespaces) from the start and end of the string without modifying the original string
//split method is used to split the string
//for example
const thisIsStrin = "Hello World";
console.log(thisIsStrin.split(" ")); //this will print ["Hello", "World"] because it splits the string at the space this makes it split into two strings inside an array
//match method is used to match the string
//for example
const thisIsStrinG = "Hello World";
console.log(thisIsStrinG.match("Hello")); //this will print ["Hello"] because it matches the string and returns it inside an array
//search method is used to search the string
//for example
const thisIsStrinGG = "Hello World";
console.log(thisIsStrinGG.search("Hello")); //this will print 0 because it searches the string and returns the index of the string
//charCodeAt method is used to get the char code of the string
//for example
const thisIsStrinGGG = "Hello World";
console.log(thisIsStrinGGG.charCodeAt(0)); //this will print 72 because it gets the char code of the string the char code of H is 72
//fromCharCode method is used to get the char code from the string
//for example
const inThisString = "Hello World";
console.log(String.fromCharCode(72)); //this will print H because it gets the char code from the string the char code of H is 72
//concat method is used to concat the string
//for example
const inThisStringg = "Hello World";
console.log(inThisStringg.concat(" ", "Bator")); //this will print Hello World Bator because it concats the string meaning it combines the strings "" is the space between the strings
//padStart method is used to pad the string from the start
//for example
const inThisStringgg = "Hello World";
console.log(inThisStringgg.padStart(15, "a")); //this will print aaaaaHello World because it pads the string from the start meaning it adds a to the start of the string the 15 is the length of the string
//padEnd method is used to pad the string from the end
//for example
const inThisStringggg = "Hello World";
console.log(inThisStringggg.padEnd(15, "a")); //this will print Hello Worldaaaaa because it pads the string from the end meaning it adds a to the end of the string the 15 is the length of the string
//these are the most common methods for strings and you can also use them with arrays

//you can also use the ... operator to return a truncated string
//for example
function truncateString(str, num) {
  //this function takes 2 parameters, the string and the number to truncate the string
  //your code goes here
  return str.slice(0, num) + "...";
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//this will print A-tisket... because it returns the truncated string meaning it returns the string with ... at the end

//theres also the hasOwnProperty method
//the hasOwnProperty method returns true if the property is found in the object
//for example
let myObj = {
  top: "hat",
  bottom: "pants",
};
console.log(myObj.hasOwnProperty("top")); //this will print true because the property top is found in the object
//the hasOwnProperty method returns false if the property is not found in the object
//for example
let myObjj = {
  top: "hat",
  bottom: "pants",
};
console.log(myObjj.hasOwnProperty("middle")); //this will print false because the property middle is not found in the object

//the instanceof method is used to check if the object is an instance of the class
//for example
class Bird {
  constructor(name) {
    this.name = name;
  }
}
let duck = new Bird("Donald");
console.log(duck instanceof Bird); //this will print true because the duck is an instance of the Bird class
//class is a template for creating objects you can use it to create objects
//for example
class Dog {
  constructor(name) {
    this.name = name;
  }
}
let dog = new Dog("Rex");
console.log(dog.name); //this will print Rex because the dog is an instance of the Dog class
//the instanceof method returns true if the object is an instance of the class
//for example
class Cat {
  constructor(name) {
    this.name = name;
  }
}
let cat = new Cat("Tom");
console.log(cat instanceof Cat); //this will print true because the cat is an instance of the Cat class
//the instanceof method returns false if the object is not an instance of the class

//theres a method called map which handles the details of iterating over an array
//This helps to avoid semantic errors, like the "Off By One Errors"
//the map method can be used in place of a for loop why? because it is a higher order function that accepts a callback function as an argument
//for example
let oldArray = [1, 2, 3, 4, 5]; //this is the old array
let newArray = oldArray.map(function (val) {
  return val + 3;
});
console.log(newArray); //this will print [4, 5, 6, 7, 8] because it adds 3 to each element in the array
//so 1 would be 4, 2 would be 5, 3 would be 6, 4 would be 7, 5 would be 8
//the val is the current value of the array
//the newArray is the new array
//the numbers in the array are the elements of the array

//lets try it with this example
//consider this scenario: you are browsing the we in your browser and want to track the tabs you have opened lets try to model this using some simple object oriented code
//a window object is made up of tabs and you usually have more than one window open
//the titles of each open site in each window object is held in an array
//after working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open
//closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it
//the code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join()
//the array tabs is part of the Window object that stores the name of the open pages
//change window.prototype.tabClose so it removes the correct tab
//for example
function Window(tabs) {
  this.tabs = tabs; //we keep a record of the array inside the object
}
//when you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};
//when you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab"); //let's open a new tab for now
  return this;
};
//when you close a tab
Window.prototype.tabClose = function (index) {
  //only change code below this line
  var tabsBeforeIndex = this.tabs.splice(0, index); //get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(1); //get the tabs after the tab
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); //join them together

  return this;
};
//let's create three browser windows
var workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]); //your mailbox, drive, and other work sites
var socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]); //social sites
var videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); //entertainment sites
//now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() //open a new tab for cat memes
  .join(videoWindow.tabClose(2)) //close third tab in video window and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs); //this will print ["FB", "Gitter", "Reddit", "Twitter", "Medium", "new tab", "Netflix", "YouTube", "Vine", "GMail", "Work mail", "Docs", "freeCodeCamp", "new tab"]
//because it opens a new tab for cat memes, closes the third tab in the video window and joins it, closes the first tab in the work window and opens a new tab for it
//the tabOpen() method opens a new tab for cat memes
//the join() method joins the video window and closes the third tab in the video window
//the tabClose() method closes the third tab in the video window

//the solution to window.prototype.tabClose is
Window.prototype.tabClose = function (index) {
  //only change code below this line
  var tabsBeforeIndex = this.tabs.splice(0, index); //get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(1); //get the tabs after the tab
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); //join them together

  return this; //return the window object
};
//If you haven't already figured it out, the issue in this challenge was with the splice call in the tabClose() function.
//Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.
//and the concat method is used to join two or more arrays
//One of the core principles of functional programming is to not change things.
//Changes lead to bugs.
//Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect.
//A function, ideally, should be a pure function, meaning that it does not cause any side effects.
//Let's try to master this discipline and not alter any variable or object in our code.

//fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.
//for example
//the global variable
var fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}
var newValue = incrementer(); //should equal 5
console.log(fixedValue); //should print 4
//the newValue is the new value of the fixedValue
