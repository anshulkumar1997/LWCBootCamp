console.log("Logical Operator");

let myNumber1 = 10;
let myNumber2 = 20;

console.log(myNumber1+myNumber2);
console.log(typeof myNumber1, typeof myNumber2);
myNumber2 ="20";
console.log(myNumber1+myNumber2);
console.log(typeof myNumber1, typeof myNumber2);

console.log(myNumber1+Number(myNumber2));

myNumber2 ="20A";
if(isNaN(myNumber2)){
    console.log("MyNumber2 is not a Number thus conversion is not possible");
}
else{
    console.log(myNumber1+Number(myNumber2));
}

let myNumber3 = 10;
let myNumber4 = "20";
console.log(typeof myNumber1, typeof myNumber2);
console.log(myNumber4 - myNumber3);
console.log(myNumber4 * myNumber3);
console.log(myNumber4 / myNumber3);
console.log(myNumber4 + myNumber3);

// Assignment operator "="

let myNumber5 = 50;
myNumber5 =60;

// Comparison Operator, > , >=, <, <=, !=, ==, ===
let myNumber6 = 10;
let myNumber7 = 20;
console.log(myNumber6>myNumber7);
console.log(myNumber6<myNumber7);

// Logical Operator(&&,||,!)

console.log( true && true);
console.log( true && false);

console.log (myNumber1 >0 && myNumber3 >0);

let myString1 = "Ansh";
let myString2 = "hul";

console.log (myString1 && myString2);
console.log(myString1 && myNumber1);

console.log( true || true);
console.log( true || false);

console.log (myNumber1 >0 || myNumber3 >0);
console.log (myString1 || myString2);

console.log(myString1 || myNumber1);

let isSalaryCredited = false;

console.log("isSalaryCredited",isSalaryCredited);
isSalaryCredited=!isSalaryCredited;
console.log("isSalaryCredited",isSalaryCredited);

//ternary Operator
let age = 21;
let output= age < 18 ? "Too Young" : "Old Enough";
console.log(output);


// == only check for value and === check value and type

let myNumber8 = 3;
let myNumber9 = 3;
console.log(myNumber8,myNumber9);
console.log(typeof myNumber8, typeof myNumber9);
console.log(myNumber8 == myNumber9);
console.log(myNumber8 === myNumber9);

myNumber9 = "3";

console.log(myNumber8,myNumber9);
console.log(typeof myNumber8, typeof myNumber9);
console.log(myNumber8 == myNumber9);
console.log(myNumber8 === myNumber9);

console.log( 'anshul' == 'Anshul');
console.log( 'anshul' === 'Anshul');

console.log( 'Anshul' == 'Anshul');
console.log( 'Anshul' === 'Anshul');


// Null vs Undefined

let myString3=null;
let myString4;
console.log(typeof myString3, typeof myString4);

console.log(myString3==myString4);
console.log(myString3===myString4);
