//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

//We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

//We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
  //this is a function
  let regex = /[\W_]/g; //this is a regular expression
  let smallStr = str.toLowerCase().replace(regex, "");
  let reversed = smallStr.split("").reverse().join(""); //this is a string
  return reversed === smallStr; //this is a boolean
}

palindrome("eye");

//Return true if the given string is a palindrome. Otherwise, return false.

//here what we did was we created a function called palindrome and we passed in a string called str

//then we created a regular expression called regex and we set it equal to /[\W_]/g

//then we created a variable called smallStr and we set it equal to str.toLowerCase().replace(regex, "")

//then we created a variable called reversed and we set it equal to smallStr.split("").reverse().join("")

//then we returned reversed === smallStr

//and then we called the function palindrome and we passed in a string called "eye"

//and then we got true  because eye is a palindrome

//Convert the given number into a roman numeral.

//All roman numerals answers should be provided in upper-case.
function convertToRoman(num) {
  //this is a function
  let roman = ""; //this is a string
  let romanNumeral = [
    //this is an array
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let decimalNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (let i = 0; i < decimalNumeral.length; i++) {
    //this is a for loop
    while (decimalNumeral[i] <= num) {
      //this is a while loop
      roman += romanNumeral[i];
      num -= decimalNumeral[i];
    }
  }
  return roman;
}

convertToRoman(36); //this is a function call

//what we did here was we created a function called convertToRoman and we passed in a number called num

//then we created a string called roman and we set it equal to ""

//then we created an array called romanNumeral and we set it equal to ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V","IV", "I"]

//then we created an array called decimalNumeral and we set it equal to [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9,5, 4, 1]

//then we created a for loop and we set the variable i equal to 0 and we set i < decimalNumeral.length and we set i++ which means i = i + 1

//then we created a while loop and we set decimalNumeral[i] <= num

//then we set roman += romanNumeral[i]

//then we set num -= decimalNumeral[i]

//then we returned roman

//then we called the function convertToRoman and we passed in a number called 36

//and then we got XXXVI which is 36 in roman numerals

//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

//Write a function which takes a ROT13 encoded string as input and returns a decoded string.

//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  //this is a function
  let newStr = ""; //this is a string
  let regex = /[A-Z]/; //this is a regular expression
  for (let i = 0; i < str.length; i++) {
    //this is a for loop
    if (regex.test(str[i])) {
      //this is an if statement
      newStr += String.fromCharCode(
        ((str[i].charCodeAt() - 65 + 13) % 26) + 65
      );
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

//what we did here was we created a function called rot13 and we passed in a string called str

//then we created a string called newStr and we set it equal to ""

//then we created a regular expression called regex and we set it equal to /[A-Z]/

//then we created a for loop and we set the variable i equal to 0 and we set i < str.length and we set i++ which means i = i + 1

//then we created an if statement and we set regex.test(str[i])

//then we set newStr += String.fromCharCode(((str[i].charCodeAt() - 65 + 13) % 26) + 65)

//then we set newStr += str[i]

//then we returned newStr

//then we called the function rot13 and we passed in a string called "SERR PBQR PNZC"

//and then we got "FREE CODE CAMP" which is the answer

//Return true if the passed string looks like a valid US phone number.

//The user may fill out the form field any way they choose as long as it has the format of a valid US number.

//The following are examples of valid formats for US numbers (refer to the tests below for other variants):

//555-555-5555

//(555)555-5555

//(555) 555-5555

//555 555 5555

//5555555555

//1 555 555 5555

//For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.

//Your job is to validate or reject the US phone number based on any combination of the formats provided above.

//The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
  //this is a function
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; //this is a regular expression
  return regex.test(str);
}

//what we did here was we created a function called telephoneCheck and we passed in a string called str

//then we created a regular expression called regex and we set it equal to /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/

//then we returned regex.test(str)

//then we called the function telephoneCheck and we passed in a string called "555-555-5555"

//and then we got true which is the answer

//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

//cid is a 2D array listing available currency.

//The checkCashRegister() function should always return an object with a status key and a change key.

//Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

//Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

//Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

//See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const checkCashRegister = (price, cash, cid) => {
  const UNIT_AMOUNT = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };
  let totalCID = 0;
  for (let element of cid) {
    totalCID += element[1];
  }
  totalCID = totalCID.toFixed(2);
  let changeToGive = cash - price;
  const changeArray = [];
  if (changeToGive > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } else if (changeToGive.toFixed(2) === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        temp[1] += UNIT_AMOUNT[elem[0]];
        elem[1] -= UNIT_AMOUNT[elem[0]];
        changeToGive -= UNIT_AMOUNT[elem[0]];
        changeToGive = changeToGive.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  }
  if (changeToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changeArray };
};

//what we did here was we created a function called checkCashRegister and we passed in a number called price, a number called cash, and an array called cid

//then we created an object called UNIT_AMOUNT and we set it equal to {PENNY: 0.01, NICKEL: 0.05, DIME: 0.1, QUARTER: 0.25, ONE: 1.0, FIVE: 5.0, TEN: 10.0, TWENTY: 20.0, "ONE HUNDRED": 100.0}

//then we created a variable called totalCID and we set it equal to 0

//then we created a for loop and we set the variable element equal to 0 and we set element < cid.length and we set element++ which means element = element + 1

//then we set totalCID += element[1]

//then we set totalCID = totalCID.toFixed(2)

//then we created a variable called changeToGive and we set it equal to cash - price

//then we created an array called changeArray and we set it equal to []

//then we created an if statement and we set changeToGive > totalCID

//then we returned {status: "INSUFFICIENT_FUNDS", change: changeArray}

//then we created an else if statement and we set changeToGive.toFixed(2) === totalCID

//then we returned {status: "CLOSED", change: cid}

//then we created an else statement

//then we set cid = cid.reverse()

//then we created a for loop and we set the variable elem equal to 0 and we set elem < cid.length and we set elem++ which means elem = elem + 1

//then we created a variable called temp and we set it equal to [elem[0], 0]

//then we created a while loop and we set changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0

//then we set temp[1] += UNIT_AMOUNT[elem[0]]

//then we set elem[1] -= UNIT_AMOUNT[elem[0]]

//then we set changeToGive -= UNIT_AMOUNT[elem[0]]

//then we set changeToGive = changeToGive.toFixed(2)

//then we created an if statement and we set temp[1] > 0

//then we set changeArray.push(temp)

//then we created an if statement and we set changeToGive > 0

//then we returned {status: "INSUFFICIENT_FUNDS", change: []}

//then we returned {status: "OPEN", change: changeArray}

//then we called the function checkCashRegister and we passed in a number called 19.5, a number called 20, and an array called [

["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100];
//]];

//and then we got {status: "OPEN", change: [["QUARTER", 0.5]]} which is the answer
