console.log("Spread Operator");

let numberOne = [1,2,3];
let numberTwo = [4,5,6,];

//Concatenation  of Array
let combinedArray = [...numberOne, ...numberTwo];
console.log("numberOne",numberOne);
console.log("numberTwo",numberTwo);
console.log("combinedArray",combinedArray);

// Expand the String

let myName = "My Name is Anshul";
console.log(myName);
console.log(...myName);

let myString = "ANSHUL";
let myCharArray = [...myString];
console.log('myCharArray',myCharArray);

// add elements in Array
numberOne=[...numberOne,7,8,9];
console.log("numberOne",numberOne);
numberOne=[10,11,12,...numberOne];
console.log("numberOne",numberOne);

// Adding the Objects
let myObj1 = {"fname" : "Anshul", "skills": ["JS","Apex","LWC"]};
let myObj2 = {"age" : 27, "Country":"India"};
let finalObject = {...myObj1, ...myObj2};
console.log("finalObject", finalObject);

//Copy an Array and Object

let myFavFruit = ["Apple", "Watermelon"];
let myFavFruitCopywithAssigment = myFavFruit; //Deep Copy with Reference

console.log("myFavFruit",myFavFruit);
console.log("myFavFruitCopywithAssigment",myFavFruitCopywithAssigment);
myFavFruitCopywithAssigment.push("Cheeku");
console.log("myFavFruit",myFavFruit);
console.log("myFavFruitCopywithAssigment",myFavFruitCopywithAssigment);

let myFavFruitCopywithSpread = [...myFavFruit]; // Shallow Copy
myFavFruitCopywithSpread.push("Banana");
console.log("myFavFruit",myFavFruit);
console.log("myFavFruitCopywithSpread",myFavFruitCopywithSpread);

let myDetails = {"fname" : "Anshul", "country" : "India" };
let myDetailsCopywithAssigment = myDetails;
let myDetailsCopywithSpread = {...myDetails};

console.log("myDetails",myDetails);
console.log("myDetailsCopywithAssigment",myDetailsCopywithAssigment);
console.log("myDetailsCopywithSpread",myDetailsCopywithSpread);

myDetailsCopywithAssigment.age = 27;

myDetailsCopywithSpread.City = 'Delhi';

console.log("myDetails",myDetails);
console.log("myDetailsCopywithAssigment",myDetailsCopywithAssigment);
console.log("myDetailsCopywithSpread",myDetailsCopywithSpread);

