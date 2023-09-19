//objects/reference types practice
let person = {
  firstName: "Bator", //key value pair
  lastName: "Michael",
  age: 20,
  middleName: "Autumn",
  japaneseName: "Aki",
}; //object literal the curly braces represent an object
console.log(person);
//between the curly braces we add 1 or more key value pairs
//the key is a property of the object and the value is the value of the property
//reference types are objects, arrays and functions
//objects are used to group related variables and functions together to make cleaner code
//objects are used to represent a real world entity like a persone, animal or place

//there are 2 ways to work with these properties for example if we want to change the value of firstName

//dot notation
//dots are easier and cleaner to use so try use this method
person.firstName = "Autumn"; //this will change the value of firstName to Autumn
//you take the object name which is person then add a dot then add the property name which is firstName then add an = and the new value
console.log(person.firstName); //this will show the value of firstName in the console after it has been changed
//you take console.log then add the object name which is person then add a dot then add the property name which is firstName

//bracket notation
person["firstName"] = "Aki"; //this will change the value of firstName to Aki
//you take the object name which is person then add brackets then add the property name which is firstName then add an = and the new value
console.log(person["firstName"]); //this will show the value of firstName in the console after it has been changed
//you take console.log then add the object name which is person then add brackets then add the property name which is firstName

//both of these methods do the same thing but the bracket notation is used when you dont know the property name
//so you can use a variable to access the property name and it will show the value of the property
//for example
let selection = "firstName"; //this will select the property firstName
person[selection] = "Bator"; //this will change the value of firstName to Bator
//or
let select = "firstName, lastName, age, middleName, japaneseName"; //this will select the property firstName, lastName, age
person[select] = "Bator, Michael, 20, Autumn, Aki"; //this will change the value of firstName, lastName, age to Bator, Michael, 20
//the bracket notation helped us find the value of the property name firstName, lastName, age
