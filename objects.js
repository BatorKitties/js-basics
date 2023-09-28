
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

//theres an object method called sayName

//for example
let duck = {
  name: "Ducky",
  numLegs: 2, //this is a property
  sayName: function () {
    return "The name of this duck is " + duck.name + ".";
  }, //this is a method
}; //this is an object

duck.sayName();

//this will return "The name of this duck is Ducky."

//you can change the sayName to say anything you want like sayAge or sayLegs etc

//theres a special keyword called this

//this refers to the object that the method belongs to

//for example
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog.sayLegs(); //this will return "This dog has 4 legs."

//this.numLegs will refer to the numLegs property in the dog object

//this is a better way to access the object that the method belongs to

//theres a prototype property

//all objects in javascript have a prototype property

//the prototype property is where you put methods and properties that you want other objects to inherit

//the constructor function is useful when you need to create multiple objects that have similar properties and methods

//think of the constructor as a blueprint for the creation of new objects

//for example
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4; //this is a prototype property

//theres also the ownProps property

//the ownProps property returns an array of all the properties that belong to an object

//for example
let ownProps = [];
for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); //this will return ["name", "numLegs"]

//You have now seen two kinds of properties: own properties and prototype properties.

// Own properties are defined directly on the object instance itself.

//And prototype properties are defined on the prototype.

//example
function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let ducky = new Bird("Donald");

//theres another prototype called prototypeProps

//the prototypeProps property returns an array of all the prototype properties that belong to an object

//for example
let prototypeProps = [];
for (let property in ducky) {
  if (!ducky.hasOwnProperty(property)) {
    prototypeProps.push(property);
  }
}

console.log(prototypeProps); //this will return ["numLegs"]

//kinda like the ownProps property but this one returns the prototype properties

//the ! means not, so if the property is not a prototype property then it will push it to the array

//Here is how you add ducky's own properties to the array ownProps and prototype properties to the array prototypeProps
let ownPropss = [];
let protoTypeProps = [];
for (let property in ducky) {
  if (ducky.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); //this will return ["name"]

console.log(prototypeProps); //this will return ["numLegs"]

//theres also the constructor property

//the constructor property returns the constructor function that created the object

//for example
function Bird(name) {
  this.name = name;
}

let duckyy = new Bird("Donald");

let beagle = new Dog("Snoopy");

console.log(duckyy.constructor === Bird); //this will return true

console.log(beagle.constructor === Dog); //this will return true

//the constructor property is a reference to the constructor function that created the instance

//the constructor property can be overwritten

//for example
function Bird(name) {
  this.name = name;
}
function Dog(name) {
  this.name = name;
}

let duckyyy = new Bird("Donald");

let beaglee = new Dog("Snoopy");

Bird.prototype.constructor = Dog;

Dog.prototype.constructor = Bird;

console.log(duckyyy.constructor === Bird); //this will return false

console.log(beaglee.constructor === Dog); //this will return false

//The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is.

// Here's an example of how this could be used:
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

//since the constructor property can be overwritten it’s generally better to use the instanceof method to check the type of an object.

// the instanceof method would achieve the same thing:
function joinBirdFraternity(candidate) {
  if (candidate instanceof Bird) {
    return true;
  } else {
    return false;
  }
}

//Up until now you have been adding properties to the prototype individually

//This becomes tedious after more than a few properties.

//A more efficient way is to set the prototype to a new object that already contains the properties.

//This way, the properties are added all at once:
Bird.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object:

/*Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  }
  describe: function () {
    console.log("My name is " + this.name);
  }
}; */

//the describe method is used to describe the object in the console meaning it will print My name is (the dogs name) in the console

//the eat method is used to eat the object in the console meaning it will print nom nom nom in the console

//There is one crucial side effect of manually setting the prototype to a new object.

//It erases the constructor property! This property can be used to check which constructor function created the instance,

//but since the property has been overwritten, it now gives false results:

duck.constructor === Bird; // false -- Oops

duck.constructor === Object; // true, all objects inherit from Object.prototype

duck instanceof Bird; // true, still works

//To fix this, whenever a prototype is manually set to a new object,

//remember to define the constructor property

//for example
Bird.prototype = {
  constructor: Bird, //this is the constructor property
  numLegs: 2, //this is a property
  eat: function () {
    console.log("nom nom nom"); //this is a method
  },
  describe: function () {
    console.log("My name is " + this.name); //this is a method
  },
};

//Define the constructor property on the Dog prototype.

//for example
Dog.prototype = {
  constructor: Dog, //this is the constructor property this is how you define the constructor property
  numLegs: 4, //this is a property
  eat: function () {
    console.log("nom nom nom"); //this is a method
  },
  /*describe: function () {
    console.log("My name is " + this.name); //this is a method
  }*/
};

//Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it.

// For example, here the Bird constructor creates the duck object
function Bird(name) {
  this.name = name;
}
let duckk = new Bird("Donald");

//duck inherits its prototype from the Bird constructor function.

//You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duckk); // returns true

//Use isPrototypeOf to check the prototype of beagle.

//for example
function Dog(name) {
  this.name = name;
}

let beagleee = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagleee); //this will return true

//All objects in JavaScript (with a few exceptions) have a prototype.

//Also, an object’s prototype itself is an object.

//Because a prototype is an object, a prototype can have its own prototype!

//In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype); // returns true

//How is this useful? You may recall the hasOwnProperty method

let duckkk = new Bird("Donald");

duckkk.hasOwnProperty("name"); // yields true

//The hasOwnProperty method is defined in Object.prototype,

//which can be accessed by Bird.prototype, which can then be accessed by duck.

//This is an example of the prototype chain.

//In this prototype chain, Bird is the supertype for duck,

//while duck is the subtype.

//Object is a supertype for both Bird and duck.

//is isPrototypeOf is used to check if an object exists in another objects prototype chain

//for example
function Dog(name) {
  this.name = name;
}

let beagleeee = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagleeee); //this will return true

//this is the same as the previous example but this time we are using the isPrototypeOf method

//theres a principle in programming called dont repeat yourself (DRY) which means dont repeat yourself

//the reason why repeated code is a problem is because any change requires fixing code in multiple places

//this usually means more work for programmers and more room for errors

//notice how the describe method is repeated in the Bird and Dog constructors

//for example
function Bird(name) {
  this.name = name;
}
Bird.prototype = {
  constructor: Bird,
  describe: function () {
    console.log("My name is " + this.name);
  },
};
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//the describe method is repeated in two places

//the code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal

//for example
function Animal() {} //this is the supertype
Animal.prototype = {
  constructor: Animal,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//since Animal includes the describe method, you can remove it from Bird and Dog

//for example
function Bird(name) {
  this.name = name;
}
Bird.prototype = {
  constructor: Bird,
};
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
};

//you created a supertype called Animal that defined behaviors shared by all animals:

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

//This and the next challenge will cover how to reuse Animal's methods inside Bird and Dog without defining them again.

//It uses a technique called inheritance.

//This challenge covers the first step: make an instance of the supertype (or parent).

//You already know one way to create an instance of Animal using the new operator:

let animal = new Animal();

//There are some disadvantages when using this syntax for inheritance,

//which are too complex for the scope of this challenge.

//Instead, here's an alternative approach without those disadvantages:

let animaL = Object.create(Animal.prototype);

//Object.create(obj) creates a new object, and sets obj as the new object's prototype.

//Recall that the prototype is like the "recipe" for creating an object.

//By setting the prototype of animal to be Animal's prototype,

//you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

animal.eat();

animal instanceof Animal;

//The instanceof method here would return true.

//animaL inherits all of Animal's properties, including the eat method.

//for example
function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

let animAl = Object.create(Animal.prototype);

animal.eat(); //this will return "nom nom nom"

//use Object.create to make two instances of Animal named duck and beagle.

//for example
function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

let duCk = Object.create(Animal.prototype); // Change this line

let beagLe = Object.create(Animal.prototype); // Change this line

duCk.eat(); //this will return "nom nom nom"

beagLe.eat(); //this will return "nom nom nom"

//this part covers the second step:

//set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);

//Remember that the prototype is like the "recipe" for creating an object.

//In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

let dUck = new Bird("Donald");

dUck.eat(); //this will return "nom nom nom"

//dUck inherits all of Animal's properties, including the eat method.

//modify the code so that instances of Dog inherit from Animal.

Dog.prototype = Object.create(Animal.prototype);

let beaGle = new Dog("Snoopy");

beaGle.eat(); //this will return "nom nom nom"

//when an object inherits its prototype from another object, it also inherits the supertype's constructor property.

//here's an example:
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let ducKk = new Bird();

duckk.constructor; // function Animal(){...}

//But duck and all instances of Bird should show that they were constructed by Bird and not Animal.

//To do so, you can manually set Bird's constructor property to the Bird object:

Bird.prototype.constructor = Bird;

duckk.constructor; // function Bird(){...}

//A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

//For example, Bird is a constructor that inherits its prototype from Animal:
function Animal() {}
Animal.prototype.eat = function () {

  console.log("nom nom nom");
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

//in addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects.

//Here, Bird will get a fly() function.

//Functions are added to Bird's prototype the same way as any constructor function:

Bird.prototype.fly = function () {

  console.log("I'm flying!");
};

//Now instances of Bird will have both eat() and fly() methods:

let birD = new Bird();

birD.eat(); // prints "nom nom nom"

birD.fly(); // prints "I'm flying!"

//Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.

//Then add a bark() method to the Dog object so that beagles can both eat() and bark().

//The bark() method should print "Woof!" to the console.

//for example
function Animal() {}

Animal.prototype.eat = function () {

  console.log("nom nom nom");
};
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {

  console.log("Woof!");
};

let beagLE = new Dog();

beagLE.eat(); //this will return "nom nom nom"

beagLE.bark(); //this will return "Woof!"

//In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:

ChildObject.prototype = Object.create(ParentObject.prototype);

//Then the ChildObject received its own methods by chaining them onto its prototype:

ChildObject.prototype.methodName = function () {
  "...";
};

//It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override.

//Here's an example of Bird overriding the eat() method inherited from Animal:

function Animal() {}
Animal.prototype.eat = function () {
  return "nom nom nom";
};
function Bird() {}

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function () {
  return "peck peck peck";
};

//If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

//1. duck => Is eat() defined here? No.

//2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.

//3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.

//4. Object => JavaScript stopped searching before reaching this level.

//Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."

//for example
function Bird() {}
Bird.prototype.fly = function () {
  return "I am flying!";
};
function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

let penguiN = new Penguin();

console.log(penguiN.fly()); //this will return "Alas, this is a flightless bird."

//As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

//For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

let flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
};

//The flyMixin takes any object and gives it the fly method.
let bird = {
  name: "Donald",
  numLegs: 2,
};

let plane = {
  model: "777",
  numPassengers: 524,
};

flyMixin(bird);

flyMixin(plane);

//Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

bird.fly();

plane.fly();

//The console would display the string Flying, wooosh! twice, once for each .fly() call.

//Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

//Create a mixin named glideMixin that defines a method named glide.

//Then use the glideMixin to give both bird and boat the ability to glide.

//for example
let bIrd = {
  name: "Donald",
  numLegs: 2,
};
let boat = {
  name: "Warrior",
  type: "race-boat",
};
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("Gliding, wooosh!");
  };
};

glideMixin(bIrd);

glideMixin(boat);

bIrd.glide(); //this will return "Gliding, wooosh!"

boat.glide(); //this will return "Gliding, wooosh!"

//In the previous steps, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

bird.name = "Duffy";

//Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

//The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function () {
    return hatchedEgg;
  };
}

let ducKy = new Bird();

ducky.getHatchedEggCount();

//Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. In JavaScript, a function always has access to the context in which it was created. This is called closure.

//Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

//for example
function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}

let weight = new Bird();

weight.getWeight(); //this will return 15

//up until now all of these have been constructor functions and diffrent examples of them and ways to use them

//they are used to create objects so thats why they are put in the objects section

//there are other ways to create objects

//one way is to use the class keyword

//the class keyword declares a new function

//the class keyword is a syntax to create a constructor function

//the class keyword is just a syntax to create a constructor function

//for example
class Dog {
  constructor(name) {
    this.name = name;
  }
}
//this is the same as
function Dog(name) {
  this.name = name;
}

//more objects practice
let Dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + dog.numLegs + " legs.";
  },
};

console.log(Dog.name); //this will return Spot

console.log(Dog.numLegs); //this will return 4

console.log(Dog.sayLegs()); //this will return This dog has 4 legs.
