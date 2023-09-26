//arrays practice
//arrays are used to store a list of items
//sometimes we deal with a list of objects for example a list of items in a shopping cart in that situation we use an array of objects to store the list
//arrays are a data structure that we use to represent a list of items

//for example
let shoppingCart = ["apple", "banana", "orange"]; //this is an array literal
console.log(shoppingCart); //this will show the array in the console
//the square brackets represent an array
//note that each element has an index number and that determines the position of the element in the array starting from 0
//so apple is 0, banana is 1 and orange is 2
//if we want to access an element in the array we use the index number
//for example
shoppingCart[0]; //this will show apple in the console
//we take the array name which is shoppingCart then add square brackets then add the index number which is 0
console.log(shoppingCart[0]); //this will show apple in the console
//arrays can also change at runtime meaning you can add or remove elements from the array
//for example
shoppingCart[3] = "pear"; //this will add pear to the array
//we take the array name which is shoppingCart then add square brackets then add the index number which is 3 then add an = and the new value
console.log(shoppingCart); //this will show the array in the console after it has been changed
//the array now has 4 elements apple, banana, orange and pear
//the length is also dynamic meaning it will change depending on how many elements are in the array
//for example
shoppingCart.length; //this will show 4 in the console
console.log(shoppingCart.length); //this will show 4 in the console
//we take the array name which is shoppingCart then add .length to show the length of the array

//if we want to add an element to the end of the array we use the push method
//for example
shoppingCart.push("grape"); //this will add grape to the end of the array
//we take the array name which is shoppingCart then add .push then add the new value
console.log(shoppingCart); //this will show the array in the console after it has been changed
//the array now has 5 elements apple, banana, orange, pear and grape

//if we want to add an element to the beginning of the array we use the unshift method
//for example
shoppingCart.unshift("mango"); //this will add mango to the beginning of the array
//we take the array name which is shoppingCart then add .unshift then add the new value
console.log(shoppingCart); //this will show the array in the console after it has been changed
//the array now has 6 elements mango, apple, banana, orange, pear and grape

//if we want to add an element to the middle of the array we use the splice method
//for example
shoppingCart.splice(2, 0, "kiwi"); //this will add kiwi to the middle of the array
//we take the array name which is shoppingCart then add .splice then add the index number which is 2 then add 0 then add the new value
console.log(shoppingCart); //this will show the array in the console after it has been changed
//the array now has 7 elements mango, apple, kiwi, banana, orange, pear and grape
//2 is the index number of the element we want to add the new element after
//0 is the number of elements we want to remove

//if we want to remove an element from the end of the array we use the pop method
//for example
shoppingCart.pop(); //this will remove grape from the end of the array
//we take the array name which is shoppingCart then add .pop
console.log(shoppingCart); //this will show the array in the console after it has been changed
//the array now has 6 elements mango, apple, kiwi, banana, orange and pear

//if we want to remove an element from the beginning of the array we use the shift method
//for example
shoppingCart.shift(); //this will remove mango from the beginning of the array
//we take the array name which is shoppingCart then add .shift
console.log(shoppingCart); //this will show the array in the console after it has been changed
//the array now has 5 elements apple, kiwi, banana, orange and pear

//if we want to remove an element from the middle of the array we use the splice method
//for example
shoppingCart.splice(2, 1); //this will remove kiwi from the middle of the array
//we take the array name which is shoppingCart then add .splice then add the index number which is 2 then add 1
console.log(shoppingCart); //this will show the array in the console after it has been changed
//the array now has 4 elements apple, banana, orange and pear
//2 is the index number of the element we want to remove
//1 is the number of elements we want to remove

//if we want to find the index number of an element in the array we use the indexOf method
//for example
shoppingCart.indexOf("banana"); //this will show 1 in the console
//we take the array name which is shoppingCart then add .indexOf then add the element we want to find the index number of
console.log(shoppingCart.indexOf("banana")); //this will show 1 in the console
//1 is the index number of banana in the array

//if we want to find the index number of an element in the array we use the includes method
//for example
shoppingCart.includes("banana"); //this will show true in the console
//we take the array name which is shoppingCart then add .includes then add the element we want to find the index number of
console.log(shoppingCart.includes("banana")); //this will show true in the console
//true means that the element is in the array
//false means that the element is not in the array

//if we want to combine 2 arrays we use the concat method
//for example
let shoppingCart2 = ["apple", "banana", "orange"]; //this is an array literal
let shoppingCart3 = ["mango", "kiwi", "pear"]; //this is an array literal
let shoppingCart4 = shoppingCart2.concat(shoppingCart3); //this will combine the 2 arrays
//we take the array name which is shoppingCart2 then add .concat then add the array name which is shoppingCart3
console.log(shoppingCart4); //this will show the array in the console after it has been changed
//the array now has 6 elements apple, banana, orange, mango, kiwi and pear
//shoppingCart2 is the first array and shoppingCart3 is the second array and shoppingCart4 is the combined array

//if we want to slice an array we use the slice method
//for example
let shoppingCart5 = shoppingCart4.slice(1, 4); //this will slice the array
//we take the array name which is shoppingCart4 then add .slice then add the index number which is 1 then add the index number which is 4
console.log(shoppingCart5); //this will show the array in the console after it has been changed
//the array now has 3 elements banana, orange and mango
//1 is the index number of the element we want to start slicing from
//4 is the index number of the element we want to stop slicing at

//if we want to reverse an array we use the reverse method
//for example
shoppingCart5.reverse(); //this will reverse the array
//we take the array name which is shoppingCart5 then add .reverse
console.log(shoppingCart5); //this will show the array in the console after it has been changed
//the array now has 3 elements mango, orange and banana

//if we want to sort an array we use the sort method
//for example
shoppingCart5.sort(); //this will sort the array
//we take the array name which is shoppingCart5 then add .sort
console.log(shoppingCart5); //this will show the array in the console after it has been changed
//the array now has 3 elements banana, mango and orange

//if we want to join an array we use the join method
//for example
shoppingCart5.join(); //this will join the array
//we take the array name which is shoppingCart5 then add .join
console.log(shoppingCart5); //this will show the array in the console after it has been changed
//the array now has 3 elements banana, mango and orange

//if we want to split an array we use the split method

//if we want to loop through an array we use the for of loop
//for example
for (let fruit of shoppingCart5) console.log(fruit); //this will loop through the array
//we take the array name which is shoppingCart5 then add for of then add the variable name which is fruit then add console.log then add the variable name which is fruit
//the for of loop will loop through the array and show each element in the console
//the for of loop is used to loop through an array or string
//the for in loop is used to loop through an object

//if we want to loop through an array we use the forEach method
//for example
shoppingCart5.forEach((fruit) => console.log(fruit)); //this will loop through the array
//we take the array name which is shoppingCart5 then add .forEach then add the parameter name which is fruit then add an arrow function then add console.log then add the parameter name which is fruit
//the forEach method will loop through the array and show each element in the console
//the forEach method is used to loop through an array or string

//if we want to loop through an array we use the map method
//for example
shoppingCart5.map((fruit) => console.log(fruit)); //this will loop through the array
//we take the array name which is shoppingCart5 then add .map then add the parameter name which is fruit then add an arrow function then add console.log then add the parameter name which is fruit
//the map method will loop through the array and show each element in the console
//the map method is used to loop through an array or string

//if we want to loop through an object we use the for in loop
//for example
for (let key in person) console.log(key); //this will loop through the object
//we take the object name which is person then add for in then add the variable name which is key then add console.log then add the variable name which is key
//the for in loop will loop through the object and show each key in the console
//the for of loop is used to loop through an array or string

//the ... is called the spread operator and it is used to spread the elements of an array
//for example
const arr = [1, 2, 3];
console.log(...arr); //this will print 1 2 3

//more arrays practice
let customers = ["John", "Mary", "Joe", "Jack", "Jill"]; //this is an array literal

//if we want to access an element in the array we use the index number
//for example
customers[0]; //this will show John in the console
//we take the array name which is customers then add square brackets then add the index number which is 0
console.log(customers[0]); //this will show John in the console
