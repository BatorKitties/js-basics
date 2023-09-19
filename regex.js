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
let groupWord3 = /(t|T){2,3/g; //this will match any word that starts with t or T and is between 2 and 3 characters long
