//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Eloquent Javascript

//Chapter 02

// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// let tag = '#'
// while (tag.length <= 7) {
//   console.log(tag);
//   tag += '#'
// }

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// let size = 10
// let board = '';
// for (let row = 1; row <= size; row++) {
//   for (let column = 1; column <= size; column++) {
//     if ((row+column)%2 == 0) {
//       board += ' '
//     } else {
//       board += '#'
//     }
//   }
//   board += '\n'
// }
// console.log(board)

//Chapter 03

// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

// const min = (num1, num2) => (num1 < num2) ? num1 : num2

// console.log(min(10, 10));
// // // // → 0
// console.log(min(0, -10));
// // // // → -10

// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even. //true
// One is odd. //false
// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// function isEven(num) {
//   if( num >= 0) {
//     if (num===0) {
//       return true
//     } else if (num === 1) {
//       return false
//     } else {
//       return(isEven(num-2))
//     }
//   } else {
//     return "negative"
//   }
// }

//console.log(isEven(50));
// // → true
//console.log(isEven(75));
// // → false
//console.log(isEven(-1));
// // → ??

// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// function countBs(str) {
//   let count = 0;
//   for (let i=0; i <= str.length-1; i++) {
//     if (str[i] === "B") {
//       count += 1
//     }
//   }
//   return count;
// }

//console.log(countBs("beachBall"));
// // → 2

// function countChar(str,checkChar) {
//   let count = 0;
//   for (let i=0; i <= str.length-1; i++) {
//     (str[i] === checkChar) && (count += 1)
//   }
//   return count;
// }

// console.log(countChar("gazelle", "l"));
// // → 4





// ------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------- // 

// Exercises for Javascript part-2





// 1. Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

/*ANSWER
function camelize(str) {
  let newString = str.split("-"); //Turns str "This-Word" into a new array that reads ["This", "Word"]
  newString = newString.map(function (word, index) {
    if (index == 0) {
      return word.toLowerCase(); //lowercases the whole word
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase(); //Uppercases index 0 and adds rest of the word minus 1st element and lowercase corrects for the second argument we pass thru 
    }
  });
  newString = newString.join(""); //puts it back together 
  return newString;
}
console.log(camelize("This-Word"));

console.log(camelize("This-IS-A-longer-String"));*/

// ------------------------------------------------------

// 2. Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

/*let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b))
}


let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)*/

//Find only returns the first found item
//while filter returns it all

// -------------------------------------------------------------------------------

// 3. Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//       i--
//     }
//   }
// }

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// console.log(arr); // [3, 1]

// -------------------------------------------------------------------------------

// 4. Sort in decreasing order
// importance: 4
// let arr = [5, 12, 1, -10, 8];

// arr.sort((a, b) => b-a);

// console.log( arr ); // 12,8,5,1,-10

// --------------------------------------------------------------------------------

// 5. Copy and sort array
// importance: 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.


// --------------------------------------------------------------------------------

// 6. Create an extendable calculator
// importance: 5
// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

// Usage example:

//let calc = new Calculator;

//console.log( calc.calculate("3 + 7") ); // 10

// function Calculator() {

//   this.methods = {
//     '+' : (a,b) => a + b,
//     '-' : (a,b) => a - b
//   }

//   this.calculate = function(str) {
//     let splitString = str.split(' '),
//       a = +splitString[0],
//       op = splitString[1],
//       b = +splitString[2];

//   if (isNaN(a) || isNaN (b)) {
//     return NaN
//   }
//   return this.methods[op](a,b);
//   }
//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   }
// }

// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// //console.log(powerCalc.methods)

// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

// -------------------------------------------------------------------------------

// 7. Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.age)

// console.log(names)

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary

// ----------------------------------------------------------------------------------

// 8. Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map (user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }))

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

//console.log(usersMapped)

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

// -------------------------------------------------------------------------------

// 9. Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(arr) {
//   arr.sort((a,b) => a.age-b.age)
// }

// sortByAge(arr);

// // // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// --------------------------------------------------------------------------------

// 10. Shuffle an array
// importance: 3
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i+1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// ---------------------------------------------------------------------------------

// 11. Get average age
// importance: 4
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age,0) / users.length
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// ---------------------------------------------------------------------------------

// 12. Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   let result = []

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }
//   return result;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

//console.log( unique(strings) ); // Hare, Krishna, :-O

// -------------------------------------------------------------------------------

// 13. Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value
//     return obj
//   }, {})
// }

// function groupById(arr) {
//   let result = {}
//   arr.forEach( (item) => result[item.id] = item )
//   return result;
// }

// console.log(usersById)

// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.
