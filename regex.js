//regex is used to match patterns in strings

//regex is short for regular expression

//regex is a sequence of characters that forms a search pattern

//regex is used to find, replace, and extract data from strings

//regex is a very powerful tool

//whatever is in the search (cat) it will find it in the text (cat, fat, hat, mat, etc)

//that will find the word cat in the text if you put at in the search it will find all the at in the text

//this is a regex pattern
let pattern = /hello/;

//this is a regex pattern that matches the word hello

//the / / is a regex pattern

//the text were looking for is hello

//to find the word hello in a string we can use the match method
let str = "hello world"; //this is the string were looking for the word hello in

let result = str.match(pattern); //this will return an array of the matches

console.log(result); //this will print ["hello"]

//the match method returns an array of the matches

//in this case the match is hello

//the match method also returns the index of the match

//you need flags to make the regex pattern more powerful

//you can put multiple flags in the same regex pattern

//for example
let flags = /hello/gi;

//this regex pattern will match depending on the case and it will match all instances of hello

//flags are used to perform case-insensitive and global searches

//the i flag is used to perform case-insensitive matching

//which means it will find the match depending on the case

//if its lower case it will match lower case if its upper case it will match upper case

//the g flag is used to perform a global match

//with global matching the match method will return all matches while without global

//matching it will only return the first match it finds

//the m flag is used to perform multiline matching

//to use flags you put them after the second / in the regex pattern

let insWord = /hello/i; //this will match hello, Hello, HELLO, HeLlO, etc

let gloWord = /hello/g; //this will match all instances of hello for example hello hello hello

let multiWord = /hello/m; //this will match hello if its on multiple lines for example hello

//there is also a wildcard character

//the wildcard character is the period .

//the wildcard character matches any character

let wildWord = /h.llo/g; //this will match hello, hallo, hxllo, h1llo, etc

//the . character matches any character

//so it will match any character in place of the . in the text

//the only thing it wont match is a new line

//if you wanna search for t. and another . (t..) it wont wrap the new line because . doesnt match new lines

//if you wanna match a new line you have to use the s flag

//the s flag is used to match new lines

//for example
let newLineWord = /t..s/g; //this will match this, that, thus, etc

//this will match any character in place of the . and it will match a new line

//there is also a + character

//the + character matches one or more of the previous character

//what its saying is it has to find as many of that character as possible but at least one

//for example
let plusWord = /he+llo/g; //this will match hello, heello, heeeello, etc

//this will match as many e as possible but at least one e in hello

//you put the + after the character you want to match one or more of

//there is also a ? character

// ? it means the previous character is optional

//for example
let questionWord = /he?llo/g; //this will match hello, hallo, hxllo, h1llo, etc

//this will match at least one e but if there is no e it will ignore it because its optional

//you put the ? after the character you want to match zero or one of

//you can use the + and ? together as well as other characters

//for example
let plusQuestionWord = /he?l+o/g; //this will match hello, hallo, hxllo, h1llo, heello, heeeello, etc

//this will match at least one e but if there is no e it will ignore it because its optional

//and it will match as many l as possible but at least one l in hello

//there is also a * character (star indicator)

//the * character works like the + and ? characters together

//the * character matches zero or more of the previous character

//for example
let starWord = /he*llo/g; //this will match hello, hallo, hxllo, h1llo, heello, heeeello, etc

//its saying that its optional but also match as many as possible in a row

//you put the * after the character you want to match zero or more of

//if you search re* it will match all the e that follow it if there are any

//if not it will just match the r itself

//if you want to search for periods you have to escape them

//to escape a character you put a backslash \ before it

//for example
let escapeWord = /\./g; //this will match any period in the text

//if you dont escape the . it will match any character

//for example
let noEscapeWord = /h.llo/g; //this will match hello, hallo, hxllo, h1llo, etc

//because its just a wildcard character

//so the escape treats this . as a period and not a wildcard character

//if we want to match any character that comes before the . thats escaped

//we can use the wildcard character before the escaped period

//for example
let wildEscapeWord = /.\./g; //this will match any character that comes before a period

//another important character is he \w character

//the \w character matches any word character

//a word character is any letter, number, or underscore

//for example
let wordWord = /\w/g; //this will match any word character like a letter, number, or underscore

//there is also the \W character its the same but with a capital W

//the \W character matches any non-word character

//a non-word character is anything that isnt a letter, number, or underscore

//for example
let nonWordWord = /\W/g; //this will match any non-word character like a space or a period

//there is also the \s character

//the \s character matches any whitespace character like a space or a tab

//for example
let spaceWord = /\s/g; //this will match any whitespace character like a space or a tab

//there is also the \S character its the same but with a capital S

//the \S character matches any non-whitespace character

//a non-whitespace character is anything that isnt a space or a tab or a new line

//for example
let nonSpaceWord = /\S/g; //this will match any non-whitespace character like a letter, number, or underscore

//there is also the \d character

//the \d character matches any digit character

//a digit character is any number

//for example
let digitWord = /\d/g; //this will match any digit character like a number 0-9

//there is also the \D character its the same but with a capital D

//the \D character matches any non-digit character

//a non-digit character is anything that isnt a number

//for example
let nonDigitWord = /\D/g; //this will match any non-digit character like a letter, space, or underscore

//lets say we wanted to capture all of the words that are longer than 4 characters long with the word character

//we cant use + or * etc

//we have to use the curly braces {}

//the curly braces {} is used to match a specific number of characters

//for example
let curlyWord = /\w{4}/g; //this will match any word character that is 4 characters long

//we can also use the curly braces {} to match a range of characters

//for example
let curlyRangeWord = /\w{4,7}/g; //this will match any word character that is between 4 and 7 characters long

//we can also use the curly braces {} to match a minimum number of characters

//for example
let curlyMinWord = /\w{4,}/g; //this will match any word character that is at least 4 characters long

//we can also use the curly braces {} to match a maximum number of characters

//for example
let curlyMaxWord = /\w{,7}/g; //this will match any word character that is at most 7 characters long

//we can also use the curly braces {} to match an exact number of characters

//for example
let curlyExactWord = /\w{4}/g; //this will match any word character that is exactly 4 characters long

//another thing we can do is character groupings [] so we can get all characters in a group

//character groupings [] are used to match a character from a group of characters

//lets say we wanted to get any single word that ends in at

//and get a 3 letter word that ends in at and want to get the words that

//start with either f or c

//what we could do is inside [] put the fc and at outside of the []

//for example
let charGroupWord = /[fc]at/g; //this will match any word that starts with f or c and ends in at

//this will match fat, cat, fAt, cAt, etc

//we can also do ranges inside [] so we can get all characters in a range

//like a-z or A-Z or 0-9 for numbers

//for example
let charRangeWord = /[a-z]at/g; //this will match any word that starts with a letter between a and z and ends in at

//this will match fat, cat, bat, etc

//or

//for example
let charRangeWord2 = /[A-Z]at/g; //this will match any word that starts with a letter between A and Z and ends in at

//this will match Fat, Cat, Bat, etc

//a-z and A-Z both match the same thing but one is lowercase and the other is uppercase

//you can also do a-z and A-Z together

//for example
let charRangeWord3 = /[a-zA-Z]at/g; //this will match any word that starts with a letter between a and z or A and Z and ends in at

//this will match Fat, Cat, Bat, fat, cat, bat, etc

//we can also do numbers

//for example
let charRangeWord4 = /[0-9]/g; //this will match any word that starts with a number between 0 and 9
//this will match 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

//we can do numbers and letters

//for example
let charRangeWord5 = /[a-zA-Z0-9]/g; //this will match any word that starts with a letter between a and z or A and Z or a number between 0 and 9

//this will match Fat, Cat, Bat, fat, cat, bat, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, etc

//another thing thats very useful is the ability to put things inside a group

//for example
let groupWord = /(t|T)/g; //this will match any word that starts with t or T
//the | means or

// the && means and

//the ! means not

//the ^ means starts with

//the $ means ends with

//lets say we want to match he after the (t|T)

//we can do that by putting he after the (t|T)

//for example
let groupWord2 = /(t|T)he/g; //this will match any word that starts with t or T and ends in he

//this will match the, The, etc

//another thing we can do with groups is use them with the {} to match a specific number of characters

//for example
let groupWord3 = /(t|T){2,3}/g; //this will match any word that starts with t or T and is between 2 and 3 characters long

//whatever you put inside the () is what it will match and whatever you put inside the {} is how many of those characters it will match

//you can also put the escaped \. after the {} to match a period with the text

//for example
let groupWord4 = /(t|T){2,3}\./g; //this will match any word that starts with t or T and is between 2 and 3 characters long and ends in a period

//this will match t., T., tt., TT., etc

//another important thing is the ^ character

//the ^ character matches the beginning of a string or line

//for example
let beginWord = /^hello/g; //this will match any word that starts with hello or with h

//although it cant match a letter or word that isnt at the beginning of the string or line

//because the ^ is the very beginning of the entire chunk of text

//so it cant match anything that isnt at the beginning of the entire chunk of text

//if we wanted to do it per each individual line of text we would use the m flag

//for example
let beginWord2 = /^hello/gm; //this will match any word that starts with hello or with h

//what the m flag is doing is saying that the ^ is the beginning of each adn every line of text that we have

//instead if the actual statement as a whole

//another thing we could use is the $ character

//the $ character matches the end of a string or line of text

//for example
let endWord = /\.$/g; //this will match any word that ends with a period

//although it cant match a letter or word that isnt at the end of the string or line

//but just as with the ^ character we can use the m flag to match the end of each period in all lines or strings of text

//for example
let endWord2 = /\.$/gm; //this will match any word that ends with a period

//theres also the look ahead and look behind

//the look ahead is the ?= character

//the look behind is the ?<= character

//the look ahead is used to match a pattern followed by a specific pattern

//the look behind is used to match a pattern preceded by a specific pattern

//for example
let lookAheadWord = /hello(?= world)/g; //this will match any word that starts is followed by world

//this will match hello world, hello world, hello world, etc

//the ?= is whats saying look ahead of us

//and the = is whats saying match the pattern that comes after the =  saying its positive

//now the look behind is the opposite

//for example
let lookBehindWord = /(?<=hello) world/g; //this will match any space that is before world and is preceded by hello

//this will match the spaces before the words or letters but not the actual words or letters

//the < is whats saying look behind us

//and the = is whats saying match the pattern that comes after the =  saying its positive

//thats what these look ahead and look behind are doing they allow you to look at things

//that either happen before or after the thing you want to capture

//but it doesnt actually capture or select the thing youre looking behind or ahead for

//theres also the negative look ahead and negative look behind

//the negative look ahead is the ?! character

//the negative look behind is the ?<! character

//the negative look ahead is used to match a pattern not followed by a specific pattern

//the negative look behind is used to match a pattern not preceded by a specific pattern

//for example
let negLookAheadWord = /hello(?! world)/g; //this will match anything is not followed by world

//the ?! is whats saying look ahead of us

//and the ! is whats saying match the pattern that comes after the !  saying its negative

//now the negative look behind is the opposite

//for example
let negLookBehindWord = /(?<!hello) world/g; //this will take all the text and leave out the spaces before the words or letters so opposite of the look behind

//the < is whats saying look behind us

//and the ! is whats saying match the space that comes before the word hello  saying its negative

//now were gonna be looking into implementing regex to check for a phone number

//this is a great example because it can be really simple and get more complex as you add things

//this will help work on your skills n regular expressions

//were gonna create a phone number
1234567890;

//we have three, three and four digits here

//this is going to be the easiest phone number to check for because all we need to do is check for 10 characters in a row

//so we can say
let phoneNum = /\d{10}/g; //this will match any phone number that is 10 digits long

//this will match 1234567890, 0987654321, 1234567890, etc

//we could also have different types of phone numbers like this one so we need to be able to account for that too
123 - 456 - 7890;

//so were gonna enable the m flag to search for each line of text individually to make sure that they all still work

//so instead of just checking for 10 characters in a row we need to check for groupings

//for example
let phoneNum2 = /\d{3}-?\d{3}-?\d{4}/gm; //this will match any phone number that is 10 digits long and has a - in between the numbers the ? is saying that the - is optional

//this will match 1234567890, 0987654321, 1234567890, 123-456-7890, 098-765-4321, 123-456-7890, etc

//since the - is optional it will match with or without the - in between the numbers

//you could also write the phone number by just putting a space in between the numbers

//which is also common but we again need to account for that

//so we could do this
let phoneNum3 = /\d{3}[ -]?\d{3}[ -]?\d{4}/gm; //this will match any phone number that is 10 digits long and has a - or a space in between the numbers the ? is saying that the - or space is optional

//the [] is saying that it can be either a - or a space and any form of the - or space is optional and will match

//this will match 1234567890, 0987654321, 1234567890, 123-456-7890, 098-765-4321, 123-456-7890, 123 456 7890, 098 765 4321, 123 456 7890, etc

//now lets say that the end result is that we wanna take ant phone number that were given

//and convert it to just 10 numbers in a row with no spaces or dashes no parentheses

//what were gonna need to do is capture all of our digits

//for example
let phoneNum4 = /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/gm; //this will match any phone number that is 10 digits long and has a - or a space in between the numbers the ? is saying that the - or space is optional

//this will show up the different matches and groups and it will all capture separate sections of the digits

//you can select the different groups by using the $ character

//for example
$1$2$3; //this will select the first group, second group, and third group

//so 123 456 7890 what this is doing is taking the different groups and putting them one after another

//you could also name your groups

//for example
let phoneNum5 =
  /(?<areaCode>\d{3})[ -]?(?<firstThree>\d{3})[ -]?(?<lastFour>\d{4})/gm; //this will match any phone number that is 10 digits long and has a - or a space in between the numbers the ? is saying that the - or space is optional

  //this will name the 3 groups so we can select them by name and it will be easier to find them or know which group is which

//now lets look at another example where the ( ) are around the area code

//now we need to account for the parentheses around the area code

//so we can do this
let phoneNum6 = /\(?(?<areacode>\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/gm; //this will show up the area code with the parentheses around it

//this will match 1234567890, 0987654321, 1234567890, 123-456-7890, 098-765-4321, 123-456-7890, 123 456 7890, 098 765 4321, 123 456 7890, (123)4567890, (098)7654321, (123)4567890, etc

//another type of number is if there a +1 in front of the number

//which we need to account for as well

//so we can do this
let phoneNum7 =
  /((\+1)[ -])?\(?(?<areacode>\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/gm; //this will show up the +1 in front of the numbers

  //its will also show up just the +1 as well as the +1 with a space

//theres also a none capturing group

//the none capturing group is the ?: character

//this will not check for something with a group

//for example
let phoneNum8 = /(?:(\+1)[ -])?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}/gm; //this will be a none capturing group which will remove the +1 with the space and only show the +1 with no space

//now there 4 capturing groups
 
$1$2$3$4; //and this will print all our groups and numbers exactly like we want them

//more regex practice
let thisRegex = /hello/;

let thisStr = "hello world";

let thisResult = thisStr.match(thisRegex);

console.log(thisResult);

//this will print ["hello"]

//the match method returns an array of the matches

//in this case the match is hello
