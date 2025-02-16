console.log("Looping");
let myFavCars = ['Audi', 'BMW', 'VW', 'Hyundai','Mercedes'];
let myDetails = {
fname:"Anshul",
age:27,
Country:"India"
};
// for for(initialisation,condition,increment/decrement)

for(let i=0; i<myFavCars.length;i++ ){
console.log(`${i+1}. ${myFavCars[i]}`);
}

// while while(condition)

let currentIndex = 0;
while(currentIndex < myFavCars.length){
console.log(`${currentIndex+1}. ${myFavCars[currentIndex]}`);
currentIndex++;
}

// do while

/* do{

}while()
*/

do{
console.log("Loop is Executed");
}while(1===2);


// for of Loop
/*
for(let currentItem of myFavcars)

*/

for(let currItem of myFavCars){
console.log("currItem",currItem);
}
// index and Item
for(let currItem of myFavCars.entries()){
console.log("currItem",currItem);
}

for(let [index,car] of myFavCars.entries()){
console.log(`${index+1}. ${car}`);
}

// to make Object iterable, we have three methods
// 1) Object.keys
// 2) Object.values
// 3) Object.entries

for(let currItem of Object.keys(myDetails)){
console.log("currItem",currItem);
console.log("Property Value ",myDetails[currItem]);
}

for(let currItem of Object.values(myDetails)){
console.log("currItem",currItem);
}

for(let currItem of Object.entries(myDetails)){
console.log("currItem",currItem);
}

for(let [Key,Value] of Object.entries(myDetails)){
console.log(Key,Value);
}

//for in Loop 
/*
*for(Let variablename in collection)
*/

for(let currItem in myFavCars){
console.log(currItem, myFavCars[currItem]);
}

for( let currItem in myDetails){
console.log(currItem, myDetails[currItem]);
}


// Complex

let openingHours = {
fri : {open:'10 AM', close: "11 PM"},
sat : {open:'10 AM', close: "11:30 PM"},
sun : {open:'10 AM', close: "1 AM"},
};

for(let currItem in openingHours){
console.log(currItem);
console.log(openingHours[currItem]);
let {open,close} = openingHours[currItem];
console.log(open,close);
console.log(`On ${currItem} Club starts at ${open} and closes at ${close}`);
}

for(let currItem of Object.entries(openingHours)){
console.log(currItem);
}

for(let [day, hours] of Object.entries(openingHours)){
console.log(day, hours);
}
for(let [day, {open,close}] of Object.entries(openingHours)){
    console.log(day, open,close);
    console.log(`On ${day} Club starts at ${open} and closes at ${close}`);
    }