console.log("Set Collection");

let mySet = new Set();

console.log(mySet);

mySet.add('Burger');
mySet.add('Pizza');
mySet.add('Sandwich');
mySet.add('Pizza');

console.log(mySet);

// check if sandwich is present or not

console.log(mySet.has("Sandwich"));
console.log(mySet.has("Sandiwich"));
mySet.delete("Sandwich");
console.log('mySet',mySet);

let myFavCities = new Set([
    "Delhi", "Mumbai", "Hyderabad"
]);
console.log(myFavCities);

for(let currItem of myFavCities){
    console.log(currItem);
}