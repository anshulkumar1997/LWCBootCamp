console.log("String Methods");

let myDetails = "My Name is Anshul";

// Length of String

console.log("myDetails",myDetails.length);

// Extracting String

let text = "Apple, Banana, Kiwi";
console.log(text);

//slice(Start Position, endposition+1) (end not included)
// substring(Start Position, endposition)
//substr(Start Position, length)

let sliceBanana1 = text.slice(7,12);
let sliceBanana2 = text.slice(7,13);
console.log("sliceBanana1",sliceBanana1);
console.log("sliceBanana2",sliceBanana2);

let sliceRemainingFruits = text.slice(7);
console.log("sliceRemainingFruits",sliceRemainingFruits);

// slice with negative start position

let part = text.slice(-1);
console.log("part",part);
let part1 = text.slice(-12);
console.log("part1",part1);

// substring(Start Position, end)
// in substring if you pass negative value in positions it will be 0.

let substringBanana = text.substring(7,13);
console.log("substringBanana",substringBanana);
let partSubstring = text.substring(-12);
//let partSubstring = text.substring(0);
console.log("partSubstring",partSubstring);

// substr(Start position, length)

let substrBanana = text.substr(7,6);
console.log("substrBanana",substrBanana);

//replace
//replace will only replace the first match
//replace is case sensitive
//replace will not modify existing string

let newFruitsText = text.replace("Banana","Mango");
console.log("newFruitsText",newFruitsText);
console.log("text",text);

let text1 = "Apple, Banana, Banana, Kiwi";
let newFruitsText1 = text.replace("Banana","Mango");
console.log("newFruitsText1",newFruitsText1);
console.log("text1",text1);

// Uppercase Lowercase
console.log(myDetails);
console.log(myDetails.toUpperCase());
console.log(myDetails.toLowerCase());

// Concatenation
let text2="Hello";
let text3="JS";

let finalString = `${text2} ${text3}`;
console.log("finalString", finalString);
let finalString1 =text2.concat(text3);
console.log("finalString1", finalString1);
let finalString2 =text2.concat(" ",text3);
console.log("finalString2", finalString2);

// trim(), trimstart(), trimEnd()

let trimMe = '           Hello World    ';
console.log(trimMe.trim());
console.log(trimMe.trimStart());
console.log(trimMe.trimEnd());

// padstart , padEnd
let myNumber = "5"; // 0005 OR ****5

console.log(myNumber.padStart(5,"*"));
console.log(myNumber.padEnd(2,"$"));

// split ==> [] : convert String to Array
let mycsvDetails = "Anshul, Anshul, ANshul,ANSHUL";
let mycsvDetailsArray = mycsvDetails.split(",");
console.log("mycsvDetailsArray",mycsvDetailsArray);

// Convert Array into Str
// toString & join

let myToString = mycsvDetailsArray.toString();
console.log("myToString",myToString);

let joinString = mycsvDetailsArray.join("%");
console.log("joinString",joinString);

// Search the String (search, match)
// indexof ==> index position of a String, return -1 if not present
// includes ==> if present return true, else false
console.log(text);
console.log(text.indexOf("Banana"));
console.log(text.indexOf("Mango"));

let sliceBanana3 = text.slice(text.indexOf("Banana"),text.indexOf("Banana")+6);
console.log("sliceBanana3",sliceBanana3);

console.log(text.includes("Banana"));
console.log(text.includes("Mango"));

// startsWith() starting with Value or not

console.log(text.startsWith("Apple"));
console.log(text.startsWith("Banana"));

// endsWith() end value or not
console.log(text.endsWith("Kiwi"));
console.log(text.endsWith("Banana"));

// break the String into array -->split
// convert array into set -->
// combine the set -->join

let myString = "Hello World World";
let myStringArray = myString.split(" ");
console.log("myStringArray", myStringArray);

let finalArray =[];
myStringArray.map( currItem =>{
    if(!finalArray.includes(currItem)){
        finalArray = [...finalArray,currItem];
    }
});
console.log(finalArray.join(" "));