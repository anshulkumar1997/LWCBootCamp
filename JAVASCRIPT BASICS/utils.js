// Export during declaration

export let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
export const DATE_OF_BIRTH_YEAR = 1947;
export function sayHi(message) {
  alert(message);
}

// Export after declaration

function doAdd(num1, num2) {
  alert(num1 + num2);
}

export { doAdd };

// default export

export default function doMul(num1, num2) {
  alert(num1 * num2);
}
