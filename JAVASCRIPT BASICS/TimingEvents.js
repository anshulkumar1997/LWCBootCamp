setTimeout(() => {
  console.log("Timeout Done ✔️");
}, 5000);

let intervalDetails = "";
intervalDetails = setInterval(() => {
  console.log("Timeinterval Done ✔️");
}, 5000);

setTimeout(() => {
  clearInterval(intervalDetails);
  console.log("Interval Stopped");
}, 15000);

// Question

let intervalCount = 0;
let timeoutCount = 0;

function intervalFunction() {
  intervalCount++;
  console.log(`Interval tick: ${intervalCount} `);
  if (intervalCount === 5) {
    clearInterval(intervalId);
  }
}

function timeoutFunction() {
  timeoutCount++;
  console.log(`Timeout tick: ${timeoutCount}`);
  if (timeoutCount === 3) {
    clearTimeout(timeoutId);
  }
}

const intervalId = setInterval(intervalFunction, 1000);
const timeoutId = setTimeout(timeoutFunction, 500);

console.log("Start");

// What will be the first line of Output?
// Start --> timeout tick : 1 --> Interval tick 1-2-3-4-5
