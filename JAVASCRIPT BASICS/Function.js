console.log("Function and Expression");

// function Declaration: Legacy

function calc1(number1, number2){
    let sum = number1+number2;
    return sum;
}

// function expression:recommended

let calc2 = function (number1, number2){
    let sum = number1+number2;
    return sum;
};

let calc1result = calc1(10,5);
console.log("calc1result",calc1result);

let calc2result = calc1(20,5);
console.log("calc2result",calc2result);

let calc3result = calc3(100,5);
console.log("calc3result",calc3result);
//hoisting 
// works with Function declaration but not with Function Expression

// function Declaration

function calc3(number1, number2){
    let sum = number1+number2;
    return sum;
}
let calc4 = function (number1, number2){
    if(number2){
    let sum = number1+number2;
    return sum;
    }
    else{
        return number1;
    }
};

let calc4result = calc4(40);
console.log("calc4result",calc4result);

// Arrow Functions

let calc5 = (number1, number2) => {
    if(number2){
    let sum = number1+number2;
    return sum;
    }
    else{
        return number1;
    }
};

let calc5result = calc4(40,50);
console.log("calc5result",calc5result);

let greet = function(username){
    return `${username}, Welcome to learn JS`;
};
console.log(greet('Anshul'));

let greetArrow = username => `${username}, Welcome to learn JS`;

console.log(greetArrow('Anshul'));

let welcomeMessage = ()=> "Welcome to learn JS";
console.log(welcomeMessage());

// callback functions

function welcomeMe(name,callMe){
  console.log(`Hello ${name}`);

  callMe();
}

function greetMeToo(){
    console.log(`Welcome To JS`);
}

function goodBye(){
    console.log(`Good Bye`);
}

welcomeMe('Anshul',greetMeToo);

welcomeMe('Anshul',goodBye);

setTimeout(()=>{},1000);