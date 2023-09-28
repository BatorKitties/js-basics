//sometimes we want to repeat an action a number of times

//loops offer a quick and easy way to do something repeatedly

//for example if we want to display Hello World 5 times on the console

//we can do it like this
console.log("Hello World");

console.log("Hello World");

console.log("Hello World");

console.log("Hello World");

console.log("Hello World");

//this is not a good way to do it and its messy and ugly

//instead we can use a loop to do it which is much cleaner and easier to read

//there are many types of loops for loops, while loops, do while loops, for in loops, for of loops

//they all essentially do the same thing but in different ways

//for loops are the most common and the easiest to understand so we will start with them

//for loops have 3 parts

//1. the starting condition

//2. the condition that must be met for the loop to continue

//3. the incrementor

//the starting condition is where the loop starts

//the condition is the condition that must be met for the loop to continue

//the incrementor is what happens to the starting condition after each iteration of the loop

//for example
for (let i = 0; i < 5; i++) {
  //i is the starting condition, i < 5 is the condition, i++ is the incrementor

  console.log("Hello World"); //this will print Hello World 5 times
}

//the starting condition is i = 0, so the loop starts at 0

//the condition is i < 5, so the loop will continue as long as i is less than 5

//the incrementor is i++, so after each iteration of the loop i will increase by 1

//so the first time the loop runs i = 0, 0 is less than 5 so the loop will run

//the second time the loop runs i = 1, 1 is less than 5 so the loop will run

//the third time the loop runs i = 2, 2 is less than 5 so the loop will run

//the fourth time the loop runs i = 3, 3 is less than 5 so the loop will run

//the fifth time the loop runs i = 4, 4 is less than 5 so the loop will run

//the sixth time the loop runs i = 5, 5 is not less than 5 so the loop will not run

//so the loop will run 5 times

//the i is most commonly used as the starting condition but it can be anything its short for index

//we can also add i to the console.log to see what i is each time the loop runs

for (let i = 0; i < 5; i++) {

  console.log("Hello World", i); //this will print Hello World 5 times
}

//theres also an alternative way to write a for loop

//this is the same as the previous for loop but i starts at 1 instead of 0

for (let i = 1; i <= 5; i++) {
  //i starts at 1 and i <= 5 means i is less than or equal to 5

  //i starts at 1

  console.log("Hello World", i); //this will print Hello World 5 times
}

//this time i starts at 1 instead of 0 so it will print Hello World 5 times but the i will be 1, 2, 3, 4, 5

//instead of 0, 1, 2, 3, 4

//the loop will run 5 times as long as i is less than or equal to 5

//and because 5 is equal to 5 the loop will run 5 times

//we can make this more interesting let say we want to display the odd number between 1 to 5

//instead of logging Hello World into the console we can have this

if (i % 2 !== 0) console.log(i); //this will print 1, 3, 5

//the % is the modulus operator and it returns the remainder of a division

//so 1 % 2 is 1 because 1 / 2 is 0 with a remainder of 1

//so 1 % 2 is 1

//2 % 2 is 0 because 2 / 2 is 1 with a remainder of 0

//so 2 % 2 is 0

//3 % 2 is 1 because 3 / 2 is 1 with a remainder of 1

//so 3 % 2 is 1

//4 % 2 is 0 because 4 / 2 is 2 with a remainder of 0

//so 4 % 2 is 0

//5 % 2 is 1 because 5 / 2 is 2 with a remainder of 1

//so 5 % 2 is 1

// !== means not equal to

//!=== means equal to

//if the remainder of devision i by 2 is not equal to 0 then i is an odd number

//if the remainder of devision i by 2 is equal to 0 then i is an even number

//odd numbers are numbers that cannot be divided by 2 evenly eg 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

//there is also a way to write a for loop that counts backwards

//this is the same as the previous for loop but i starts at 5 instead of 1

for (let i = 5; i >= 1; i--) {
  //i starts at 5 and i >= 1 means i is greater than or equal to 1

  //i starts at 5

  console.log("Hello World", i); //this will print Hello World 5 times
}

//this time i starts at 5 instead of 1 so it will print Hello World 5 times but the i will be 5, 4, 3, 2, 1

//the loop will run 5 times as long as i is greater than or equal to 1

//this way is not as common but it is useful sometimes

//while loops are similar to for loops but they are a bit different

//while loops have 2 parts

//1. the condition

//2. the incrementor

//the condition is the condition that must be met for the loop to continue

//the incrementor is what happens to the starting condition after each iteration of the loop

//for example
while (i < 5) {
  //i < 5 is the condition

  console.log("Hello World"); //this will print Hello World 5 times

  i++; //this is the incrementor
}

//the condition is i < 5, so the loop will continue as long as i is less than 5

//the incrementor is i++, so after each iteration of the loop i will increase by 1

//so the first time the loop runs i = 0, 0 is less than 5 so the loop will run

//you can also use a while loop to count backwards

while (i >= 1) {
  //i >= 1 is the condition

  console.log("Hello World"); //this will print Hello World 5 times

  i--; //this is the incrementor
}

//the condition is i >= 1, so the loop will continue as long as i is greater than or equal to 1

//the incrementor is i--, so after each iteration of the loop i will decrease by 1

//so the first time the loop runs i = 5, 5 is greater than or equal to 1 so the loop will run

//theres also a do while loop

//do while loops have 2 parts

//1. the condition

//2. the incrementor

//the condition is the condition that must be met for the loop to continue

//the incrementor is what happens to the starting condition after each iteration of the loop

//for example
do {
  console.log("Hello World"); //this will print Hello World 5 times

  i++; //this is the incrementor

} while (i < 5); //i < 5 is the condition

//the condition is i < 5, so the loop will continue as long as i is less than 5

//the incrementor is i++, so after each iteration of the loop i will increase by 1

//for in loops are used to loop through the properties of an object

//for example
const person = {
  name: "John",
  age: 30,
  city: "New York",

}; //this is an object

for (let key in person) console.log(key); //this will print name, age, city

//key is the name of the variable that will be used to store the property name

//in this case the property names are name, age, city

//so key will be name, age, city

//for of loops are used to loop through the elements of an array

//for example
const colors = ["red", "green", "blue"]; //this is an array

for (let color of colors) console.log(color); //this will print red, green, blue

//color is the name of the variable that will be used to store the element

//in this case the elements are red, green, blue

//so color will be red, green, blue

//we can also use loops to loop through a string

//for example
const str = "Hello World"; //this is a string

for (let char of str) console.log(char); //this will print H, e, l, l, o, , W, o, r, l, d

//char is the name of the variable that will be used to store the character

//in this case the characters are H, e, l, l, o, , W, o, r, l, d

//so char will be H, e, l, l, o, , W, o, r, l, d

//we can also do nested loops

//nested loops are loops inside loops

//for example
for (let i = 0; i < 5; i++) {
  //this is the outer loop
  for (let j = 0; j < 5; j++) {
    //this is the inner loop

    console.log("Hello World"); //this will print Hello World 25 times
  }
}

//the outer loop will run 5 times

//the inner loop will run 5 times for each iteration of the outer loop

//iteration means each time the loop runs

//so the inner loop will run 5 times 5 times

//so the inner loop will run 25 times

//so Hello World will be printed 25 times

//j stands for the inner loop and i stands for the outer loop

//we can also use loops to loop through an array of objects

//for example
const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 },
]; //this is an array of objects

for (let person of people) console.log(person); //this will print {name: "John", age: 30}, {name: "Mike", age: 23}, {name: "Nancy", age: 40}

//person is the name of the variable that will be used to store the object

//we will be doing a function and a while loop here with summing numbers also using if statements

//A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

//example
function sumPrimes(num) {
  if (num <= 1) {
    return "Numbers lower than 0 dont work here";
  }
  let counter = 2;
  let sum = 0;

  while (counter <= num) {
    if (isPrime(counter)) {
      sum += counter;
    }
    counter += 1;
  }
  return sum;
}

function isPrime(singleNumber) {
  let counter = 2;
  while (counter < singleNumber) {
    if (singleNumber % counter === 0) {
      return false;
    }
    counter += 1;
  }
  return true;
}

let result = sumPrimes(977);

console.log(result); //this will print 73156

//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

//example
function dropElements(arr, func) {
  //this is a function with an array and a function
  while (arr.length > 0 && !func(arr[0])) {
    //this is a while loop with an array and a function
    arr.shift(); //this will remove the first element of the array
  }
  return arr; //this will return the array
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

//this will print [3, 4]

//this is a while loop with a function as well
