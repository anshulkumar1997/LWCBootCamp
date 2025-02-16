console.log('Variables')

// Let can be updated but not redeclared and has Block scope not global
let myName = "Anshul";
console.log('Name', myName);

myName='Anshu';
console.log('Name', myName);

// Const cannot be updated or redeclared also have Block scope

const myFirstName="Anshul";
console.log('First Name', myFirstName);

// const behaves differently with Objects and Arrays,
// we can change the whole values but we can't change the whole Object/Array
const myObject = {fname:"Okay", lname:"Hans"}
console.log(myObject);
myObject.fname="No";
console.log(myObject);

// Var can be reassigned and redeclared as well but Bad Practice to use it. Scope is Global

var bootcamp = "LWC";
console.log('bootcamp',bootcamp);
bootcamp = "LWC1";
console.log('bootcamp',bootcamp);
var bootcamp = "LWC";
console.log('bootcamp',bootcamp);

console.log(window.bootcamp);

