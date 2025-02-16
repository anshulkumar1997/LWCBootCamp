console.log("JS Objects");

let myDetails = {
    "fname" : "Anshul",
    "age" : 27,
    "skills":["Admin","Apex","LWC","JS"], 
};
console.log("myDetails",myDetails);
console.log(typeof myDetails);

// JSON.Stringify : Object into String

let jsonString = JSON.stringify(myDetails);
console.log("jsonString",jsonString);
console.log(typeof jsonString);

// JSON.parse :String to Object

let jsonObject = JSON.parse(jsonString);
console.log("jsonObject",jsonObject);
console.log(typeof jsonObject);

// Modify Object 1) "." 2) []

myDetails.lname = "Anshul";
console.log("myDetails",myDetails);

myDetails.age= 27.5;
console.log("myDetails",myDetails);
// [] --> whenever we have to populate property dynamically
let country = "Country";
myDetails[country]="India";
console.log("myDetails",myDetails);

myDetails["City Name"]="Delhi";
console.log("myDetails",myDetails);

// Access the value from Object, ".", []

let myCountry = myDetails.Country;
console.log("myCountry",myCountry);

let myCity = myDetails["City Name"];
console.log("myCity",myCity);