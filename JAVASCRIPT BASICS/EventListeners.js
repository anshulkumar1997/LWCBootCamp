function changeHandler(event) {
  console.log(event.target.value);
  let value = event.target.value;
  // Whenever User enter value as 10
  // then fire the custom event

  // step 1 - create the custom event
  if (value == 10) {
    const myevent = new CustomEvent("valueten", {
      detail: {
        message: "User have entered value 10",
      },
    });

    // step 2 - dispatch event
    document.dispatchEvent(myevent);
  }
}

// handle the event

document.addEventListener("valueten", (event) => {
  console.log("Access Event Data", event.detail.message);
});
