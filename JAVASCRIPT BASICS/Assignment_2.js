console.log("JS Assignment 2");
/*
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World

Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"

Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }

Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ

Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]

Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]

Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/

/* Q Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.
Example:
Input: "hello world"
Output: "Hello World */

let doUpperCase = (text) => {
  let textarray = text.split(" ");
  for (let item in textarray) {
    //console.log(textarray[item][0]);
    let slice1 = textarray[item].slice(0, 1);
    let slice2 = textarray[item].slice(1);
    textarray[item] = slice1.toUpperCase() + slice2;
  }

  return textarray.join(" ");
};

console.log(doUpperCase("hello world"));
// Solution

const doUpperCase1 = (inputString) => {
  let convertedArray = inputString.split(" ");
  let convertedMap = convertedArray.map(
    (currItem) => currItem[0].toUpperCase() + currItem.slice(1)
  );
  return convertedMap.join(" ");
};

console.log(doUpperCase1("hello and welcome to Salesforce"));

const doUpperCase2 = (inputString) =>
  inputString
    .split(" ")
    .map((currItem) => currItem[0].toUpperCase() + currItem.slice(1))
    .join(" ");
console.log(doUpperCase2("hello hello i am Anshul"));

/* Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"
*/

let revString = (text) => {
  let textarray = text.split("");
  textarray = textarray.reverse();
  return textarray.join("");
};

console.log(revString("Hello World"));

// Solution

const revString1 = (inputString) => inputString.split("").reverse().join("");

console.log(revString1("HeLLo WorLD"));
/*Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }
*/

let countChar = (text) => {
  let textMap = new Map();
  for (let char of text) {
    textMap[char] = (textMap[char] || 0) + 1;
  }

  return textMap;
};
console.log(countChar("hello"));

// Solution

const countChar1 = (inputString) => {
  let output = {};
  let inputArray = inputString.split("");
  for (let currItem of inputArray) {
    if (output.hasOwnProperty(currItem)) {
      output[currItem] = output[currItem] + 1;
    } else {
      output[currItem] = 1;
    }
  }
  return output;
};
console.log(countChar1("hello"));

/* Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ
*/

let genUsername = (text) => {
  let textarray = text.toUpperCase().split(" ");
  let finalArray = [];
  for (let item in textarray) {
    // textarray[item][0] also possible
    let slice1 = textarray[item].slice(0, 1);
    finalArray = [...finalArray, slice1];
  }
  return finalArray.join("");
};

console.log(genUsername("Anshul anshul"));

// Solution

const genUsername1 = (inputString) =>
  inputString
    .toUpperCase()
    .split(" ")
    .map((currItem) => currItem[0])
    .join("");

console.log(genUsername1("Anshul anshul"));

/* Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]
*/

let oddArray = (array1) => {
  let finalArray = array1.filter((currItem) => {
    return currItem % 2 === 1;
  });
  return finalArray;
};

console.log(oddArray([1, 2, 3, 4, 5, 6]));
// Another Solution

let oddArray1 = (array1) =>
  array1.filter((currItem) => {
    return currItem % 2 === 1;
  });

console.log(oddArray1([1, 2, 3, 4, 5, 6]));

/*
Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"] */

let lengthGreaterthan5 = (array1) => {
  let finalArray = array1.filter((currItem) => {
    return currItem.length >= 5;
  });
  return finalArray;
};

console.log(lengthGreaterthan5(["apple", "banana", "grape", "orange", "kiwi"]));

// Another Solution

let lengthGreaterthanequal5 = (array1) =>
  array1.filter((currItem) => {
    return currItem.length >= 5;
  });

/*
Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/

let arrayToSet = (array1) => new Set(array1);

console.log(arrayToSet([1, 2, 2, 3, 4, 4, 5]));
