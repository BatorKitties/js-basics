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

//Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT

//Functional programming is about:

//1.Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

//2.Pure functions - the same input always gives the same output

//3.Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

//lets use this example of preparing tea for the team
//Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.
//for example
const prepareTea = () => "greenTea";
const getTea = (numOfCups) => {
  const teaCups = [];
  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);
//this will print 40 cups of green tea

//now lets do two types of tea green tea and black tea and store them in the tea4GreenTeamFCC and tea4BlackTeamFCC variables to get 27 cups of green tea and 13 cups of black tea
//for example
const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackTea";
const gEtTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
console.log(tea4GreenTeamFCC);
console.log(tea4BlackTeamFCC);
//this will print 27 cups of green tea and 13 cups of black tea
//the for loop will run 27 times for the green tea and 13 times for the black tea and push the teaCup into the teaCups array

//The last challenge was a step closer to functional programming principles, but there is still something missing.
//We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.
//Another principle of functional programming is to always declare your dependencies explicitly.
//This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
//There are several good consequences from this principle.
//The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.
//This can give you more confidence when you alter, remove, or add new code.
//You would know what you can or cannot change and you can see where the potential traps are.
//Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

//Let's update the incrementer function to clearly declare its dependencies.
//Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.
//for example
//the global variable
var fixedValue = 4;

function incrementer(value) {
  //the value is the argument
  return value + 1;
}
var newValue = incrementer(fixedValue); //should equal 5
console.log(fixedValue); //should print 4
//the newValue is the new value of the fixedValue

//you cant return without an argument which was the problem in the last challenge
//So far, we have seen two distinct principles for functional programming:
//Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.
//Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.
//Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

//Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list).
//The remove function should remove the given bookName from the array passed to it.

//Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.
//for example
//the global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];
//this global variable is a book list
function add(arr, bookName) {
  //this is a function declaration
  let newArr = [...arr]; //this is a new array
  newArr.push(bookName); //this will push the bookName into the newArr
  return newArr; //this will return the newArr
}

function remove(arr, bookName) {
  //this is a function declaration
  let newArr = [...arr]; //this is a new array
  if (newArr.indexOf(bookName) >= 0) {
    //this will check if the bookName is in the newArr
    newArr.splice(newArr.indexOf(bookName), 1); //this will remove the bookName from the newArr
    return newArr; //this will return the newArr
  }
}
//this will print the bookList and add and remove the bookNames from the bookList
console.log(add(bookList, "A Brief History of Time"));

//so far we have learned to use pure functions to avoid side effects in a program.
//Also, we have seen the value in having a function only depend on its input arguments.
//This is only the beginning.
//As its name suggests, functional programming is centered around a theory of functions.
//It would make sense to be able to pass them as arguments to other functions, and return a function from another function.
//Functions are considered first class objects in JavaScript, which means they can be used like any other object.
//They can be saved in variables, stored in an object, or passed as function arguments.

//Let's start with some simple array functions, which are methods on the array object prototype.
//In this exercise we are looking at Array.prototype.map(), or more simply map.
//The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element.
//It does this without mutating the original array.
//When the callback is used, it is passed three arguments.
//The first argument is the current element being processed.
//The second is the index of that element and the third is the array upon which the map method was called.
//See below for an example using the map method on the users array to return a new array containing only the names of the users as elements.
//For simplicity, the example only uses the first argument of the callback.
//for example
const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];
const names = users.map((user) => user.name);
console.log(names); //this will print John, Amy, camperCat

//The watchList array holds objects with information on several movies.
//Use map to pull the title and rating from watchList and save the new array in the rating variable.
//The code in the editor currently uses a for loop to do this, replace the loop functionality with your map expression.
//for example
//the global variable
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzYwNjI4NF5BMl5BanBnXkFtZTYwMDk0MDE5._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAwMTUwNjcwNl5BMl5BanBnXkFtZTYwMDk0MDE5._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 153 wins & 159 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwNzM4OV5BMl5BanBnXkFtZTYwMDk0MDE5._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "2,122,415",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwODQzNjAzMl5BMl5BanBnXkFtZTYwMDk0MDE5._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "1,183,879",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwOTMwOTM4Ml5BMl5BanBnXkFtZTYwMDk0MDE5._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "1,025,471",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];
//this global variable is a watch list
//the global variable should be const instead of var because it wont change
//the global variable should be an array because its a list of movies
const ratings = watchList.map((item) => ({
  title: item["Title"],
  rating: item["imdbRating"],
}));
console.log(JSON.stringify(ratings));
//this will print the title and rating of the movies in the watch list
//the JSON.stringify() method converts a JavaScript object or value to a JSON string
//JSON is a syntax for storing and exchanging data

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

//convert a string to spinal case and return the string in all lowercase letters and words separated by dashes
//for example
function spinalCase(str) {
  //this is a function declaration
  return str //this will return the string
    .split(/\s|_|(?=[A-Z])/) //this will split the string into an array
    .join("-") //this will join the array with -
    .toLowerCase(); //this will make the string lowercase
}
console.log(spinalCase("This Is Spinal Tap")); //this will print this-is-spinal-tap
//spinal case is all lowercase words joined by dashes

//pig latin is a way of altering english words.
//the rules are as follows:
//1. if a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it
//2. if a word begins with a vowel, just add way at the end
//translate the provided string to pig latin
//for example
function translatePigLatin(str) {
  //this is a function declaration
  let consonantRegex = /^[^aeiou]+/; //this is a regular expression
  let myConsonants = str.match(consonantRegex); //this will match the consonants
  return myConsonants !== null //this will return the consonants
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay") //this will replace the consonants with nothing and add the consonants and add ay
    : str.concat("way"); //this will add way
}
console.log(translatePigLatin("consonant")); //this will print onsonantcay
//this will print consonant in pig latin which is onsonantcay
