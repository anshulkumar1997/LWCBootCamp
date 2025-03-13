// With FetchAPI!!
function loadRandomUsers() {
  fetch("https://reqres.in/api/users", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

loadRandomUsers();
// With Async await
async function loadRandomUsers1() {
  let response = await fetch("https://reqres.in/api/users", {
    method: "GET",
  });
  let data = await response.json();
  console.log(response);
  console.log(data);
}
loadRandomUsers1();

async function loadRandomCatImages() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search", {
    method: "GET",
  });
  let data = await response.json();
  const imageUrl = data[0].url;
  let element = document.querySelector(".catimage");
  element.src = imageUrl;
}

loadRandomCatImages();

function loadRandomCatImages1() {
  fetch("https://api.thecatapi.com/v1/images/search", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => (imageUrl = data[0].url))
    .then(() => console.log(imageUrl));
  //.then((element) => (element = document.querySelector(".catimage").src = imageUrl))
  //.then(() => console.log(element.src));
}

loadRandomCatImages1();

// Exchange API Key 2817567a-c088-423c-939e-b3dad566a38d
// MarketData - bb26fd0e-8f64-4f20-8522-b5d75e8234a0

async function loadExchangeRate() {
  let response = await fetch(
    "https://rest.coinapi.io/v1/exchangerate/BTC/INR",
    {
      method: "GET",
      headers: { "X-CoinAPI-Key": "bb26fd0e-8f64-4f20-8522-b5d75e8234a0" },
    }
  );
  let data = await response.json();
  console.log(data);
}

loadExchangeRate();
