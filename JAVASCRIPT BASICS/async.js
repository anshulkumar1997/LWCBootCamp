// Callback Hell
setTimeout(() => {
  console.log("Hello 1");
  setTimeout(() => {
    console.log("Hello 2");
    setTimeout(() => {
      console.log("Hello 3");
      setTimeout(() => {
        console.log("Hello 4");
      }, 5000);
    }, 5000);
  }, 5000);
}, 5000);

// Promise

function generatePromise(message) {
  return new Promise((resolve, reject) => {
    if (!message) {
      reject("Message is Empty");
    } else {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, 1000);
    }
  });
}

//how to call the Promise
generatePromise("1st call")
  .then(() => {
    console.log("1st Promise resolved Successfully");
    generatePromise("2nd call");
  })
  .then(() => {
    console.log("2nd Promise resolved Successfully");
    generatePromise();
  })
  .then(() => {
    console.log("3rd Promise resolved Successfully");
  })
  .catch((error) => {
    console.log("Promise Rejected");
  });

// Rejection in Promise
generatePromise()
  .then(() => {
    console.log("Promise resolved Successfully");
  })
  .catch((error) => {
    console.log("Promise Rejected");
  });

async function generateDifferentPromises() {
  try {
    await generatePromise("Await 1");
    await generatePromise("Await 2");
  } catch (error) {
    console.log(error);
  }
}

generateDifferentPromises();

// Promise.all

function resolveTimeOut(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

function rejectTimeOut(reason, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(reason);
    }, delay);
  });
}

async function load() {
  let promise1 = resolveTimeOut("Welcome to JS", 200);
  //let promise2 = resolveTimeOut("Anshul Promise", 200);
  let promise2 = rejectTimeOut("Loading Failed", 500);
  //const allPromise = Promise.all([promise1, promise2]); //  promise all AND Type
  const anyPromise = Promise.any([promise1, promise2]); //  promise any OR Type
  const racePromise = Promise.race([promise1, promise2]); //  promises race and 1st one comes
  try {
    //const lists1 = await allPromise;
    //console.log("lists", lists1);
    //const lists2 = await anyPromise;
    //console.log("lists", lists2);
    const lists3 = await racePromise;
    console.log("lists", lists3);
  } catch (error) {
    console.log(error);
  }
}

load();
