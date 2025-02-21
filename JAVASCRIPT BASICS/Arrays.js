console.log("Arrays");

let emptyArray = []; // empty array

console.log("emptyArray", emptyArray);
console.log("typeof emptyArray", typeof emptyArray);

let myCars = ["BMW", "Audi", "Ferrari", "Volvo"];
console.log("myCars=>", myCars);
console.log(myCars[0]);

let myFavCars = [];

console.log(myCars.length);
console.log(myFavCars.length);

// add the elements in array
// push --> add the element in array at end
// unshift --> add element in array at beginning
// spread operator
myCars.push("Mercedes");
console.log("myCars=>", myCars);

myCars.unshift("Mazda");
console.log("myCars=>", myCars);

myCars = ["Hyundai", ...myCars];
console.log("myCars=>", myCars);

// remove the elements from array
// pop --> remove the element from array from end. return the removed element
// shift --> remove the element from the start. return the removed element

let popItem = myCars.pop();
console.log("popItem=>", popItem);
console.log("myCars=>", myCars);

let shiftItem = myCars.shift();
console.log("shiftItem=>", shiftItem);
console.log("myCars=>", myCars);

// modify the element from array
// replace Ferrari with Mercedes

myCars[3] = "Mercedes";
console.log("myCars=>", myCars);

// search Element
// indexof
// includes // true // false

console.log(myCars.indexOf("BMW"));
console.log(myCars.indexOf("Ferrari"));

console.log(myCars.includes("BMW"));
console.log(myCars.includes("Ferrari"));

//how to convert array into string
// toString() --> ',' separated by ,
// join() --> decide separator

console.log(myCars.toString());
console.log(myCars.join(" "));

// splice --> add and remove in array
// splice(param1, param2,rest)
// param1 --> position where new element will be added
// param2 --> How many elements needs to be removed
// rest --> new elements you have to add
// splice --> return the array of deleted elements
// splice --> modify the Array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// add 2 fruits
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log("fruits=>", fruits);
let splicedfruits = fruits.splice(1, 2);
console.log("splicedfruits=>", splicedfruits);
console.log("fruits=>", fruits);

// slice --> extract any Portion from array go for slice.
// slice --> do not modify the array
// slice --> return the new Array
// slice(param1,param2)
// param1 --> index of starting argument
// param2 --> index of end argument + 1

let slicedArray = fruits.slice(1, 3);
console.log("slicedArray=>", slicedArray);
console.log("fruits=>", fruits);

let slicedArray1 = fruits.slice(0, 2);
console.log("slicedArray1=>", slicedArray1);

// Iterations

let bankingTransactions = [5000, -7000, 9000, -4000, 2000];
console.log("bankingTransactions=>", bankingTransactions);

// forEach((currItem,index,originalArray) =>{}) it is a Callback function inside forEach
bankingTransactions.forEach((currItem, index, array) => {
  console.log("currItem=>", currItem);
  console.log("index=>", index);
  console.log("array=>", array);
});
// All Parameters not necessary
bankingTransactions.forEach((currItem, index) => {
  console.log("currItem=>", currItem);
  console.log("index=>", index);
});
bankingTransactions.forEach((currItem) => {
  console.log("currItem=>", currItem);
});

bankingTransactions.forEach((currItem) => {
  currItem = currItem / 10;
});

// map method return the item. Same as forEach

let updatedArray = bankingTransactions.map((currItem) => {
  return currItem / 10;
});

console.log("updatedArray=>", updatedArray);
console.log("bankingTransactions=>", bankingTransactions);

// get all the deposit from Array
// filter --> returning Array

let depositArray = bankingTransactions.filter((currItem) => currItem > 0);
console.log("depositArray=>", depositArray);

let withdrawArray = bankingTransactions.filter((currItem) => currItem < 0);
console.log("withdrawArray=>", withdrawArray);

let myFruits = ["fig", "Apple", "Guava", "Cherry"];
// give the fruits for which the fruit name is greater than 3 characters
console.log("myFruits =>", myFruits);
let filteredFruits = myFruits.filter((currItem) => {
  return currItem.length > 3;
});
console.log("filteredFruits =>", filteredFruits);

// find --> always return one entry/item
// check if transaction array have 9000 entry
// if present will return the entry
let entryFor9000 = bankingTransactions.find((currItem) => {
  return currItem === 9000;
});
console.log("entryFor9000=>", entryFor9000);
// Otherwise undefined
let entryFor900 = bankingTransactions.find((currItem) => {
  return currItem === 900;
});
console.log("entryFor900=>", entryFor900);

// reverse elements in Array
console.log("myFruits =>", myFruits);
console.log("myFruits Reversed =>", myFruits.reverse());
