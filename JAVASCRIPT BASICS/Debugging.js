function calculateSum(arr) {
  //debugger;
  let sum = 0; //const was wrong
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const total = calculateSum(numbers);
console.log("Total:", total);

const x = 10;
if (x == 5) {
  // = is assignment that is why it was wrong
  console.log("x is equal to 5");
} else {
  console.log("x is not equal to 5");
}

// function displayMessage(message) {
//   console.log("Message:", message);
// }

// const greeting = "Welcome";
// setTimeout(() => {
//   displayMessage(greeting);
// }, 2000);

async function load() {
  const allPromise = Promise.all([
    resolveTimeout(["potatoes", "tomatoes"], 1000),
    resolveTimeout(["oranges", "apples"], 1000),
  ]);

  // wait ...
  const lists = await allPromise;

  // after 1 second
  console.log(lists);
  // [['potatoes', 'tomatoes'], ['oranges', 'apples']]
}

load();

function resolveTimeout(value, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}

function rejectTimeout(reason, delay) {
  return new Promise((r, reject) => setTimeout(() => reject(reason), delay));
}
