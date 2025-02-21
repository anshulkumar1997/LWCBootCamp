console.log("Javascript Events");
// to do the event without class we will need querySelectorall which returns nodelist
let elements = document.querySelectorAll("div");
console.log("elements", elements);
elements = Array.from(elements);
console.log("elements =>", elements);

function clickme() {
  alert("Welcome Here");
}

mouseoverhandler = () => {
  console.log(" Mouse Over Event Executed");
  let element = document.querySelector(".hover");
  element.style.display = "none";
};

mouseouthandler = () => {
  console.log(" Mouse out Event Executed");
  let element = document.querySelector(".hover");
  element.style.display = "";
};

changehandler = (event) => {
  console.log(event.target.value);
  console.log(event.target.name);
};
