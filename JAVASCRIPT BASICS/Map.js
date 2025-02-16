console.log('Map Collection');

let myMap = new Map();
console.log('myMap',myMap);

// add values in Map
myMap.set("1", "Anshul");
myMap.set(2, 49);
myMap.set(true, "Developer");
console.log('myMap',myMap);

// to access values in Map
console.log(myMap.get("1"));
console.log(myMap.get(true));
console.log(myMap.size);

let favPlaces = new Map([
    ["Jaipur","Palace"],
    ["Pune", "Fort"],
    ["Goa","Beaches"]
]);
console.log("favPlaces", favPlaces);

for( let currItem of favPlaces){
    console.log(currItem);
}

for( let [key,value] of favPlaces){
    console.log(key,value);
}

for( let currItem of favPlaces.keys()){
    console.log(currItem);
}

for( let currItem of favPlaces.values()){
    console.log(currItem);
}