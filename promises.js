//A Promise is a proxy for a value not necessarily known when the promise is created.
// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
//  This lets asynchronous methods return values like synchronous methods:
//  instead of immediately returning the final value, the asynchronous method returns a promise to supply
//   the value at some point in the future.

const endPoint = "https://starwars.egghead.training/films";

const resolvedObj = {
  val: 20,
  then: () => Promise.reject("i hate to resolve")
};
//try in browser

fetch(endPoint)
  .then(response => {
    if (response.status != 200) {
      //throw new Error("failed");
      return Promise.reject("failed");
    }
    // return response.json();
    return Promise.resolve(resolvedObj);
  })
  .then(films => console.log(films))
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log("finally"));

//Promise.resolve

const fulfilledPromise = Promise.resolve(4);
console.log(fulfilledPromise);
//whenever you pass a native promise object to reolve method , you get back the same object
Promise.resolve(fulfilledPromise) === fulfilledPromise; //true

const rejected = Promise.reject(new Error("alas"));
console.log(rejected);
Promise.resolve(rejected) === rejected; //true

Promise.resolve(rejected).then(() => {
  console;
});

//chaining after failure
new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.log("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });

//wrapping setTimeout in promise
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(10000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);

//then() will never be called synchronously
Promise.resolve().then(() => console.log(2));
console.log(1);

const some = new Promise((resolve, reject) => resolve("ohoo"));
some.then(res => console.log(res));
