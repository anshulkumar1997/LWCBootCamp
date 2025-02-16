console.log("Destructure JS");

let myFavFruit = ["Apple", "Watermelon","Cheeku"];
let myFavFruit1 = myFavFruit[0];
let myFavFruit2 = myFavFruit[1];
let myFavFruit3 = myFavFruit[2];
console.log("myFavFruit",myFavFruit);
console.log("myFavFruit1",myFavFruit1);
console.log("myFavFruit2",myFavFruit2);
console.log("myFavFruit3",myFavFruit3);
let [myFavFruit4,myFavFruit5,myFavFruit6] = myFavFruit;
console.log("myFavFruit4",myFavFruit4);
console.log("myFavFruit5",myFavFruit5);
console.log("myFavFruit6",myFavFruit6);
let [myFavFruit7,myFavFruit8] = myFavFruit;
let [myFavFruit9, ,myFavFruit10] = myFavFruit;
console.log("myFavFruit7",myFavFruit7);
console.log("myFavFruit8",myFavFruit8);
console.log("myFavFruit9",myFavFruit9);
console.log("myFavFruit10",myFavFruit10);

let [Fav1,Fav2,...rest] = myFavFruit;
console.log("Fav1",Fav1);
console.log("Fav2",Fav2);
console.log("rest",rest);

let myDetails= {
    fname : "Anshul",
    country : "India",
    age : 27
};
let {fname:FirstName,/*country,*/age} =myDetails;
console.log("fname",FirstName);
//console.log("country",country);
console.log("age",age);


