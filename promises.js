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

//race
// A common use case for racing promises is to create a time out on the client.
// You can send a request and race that request with a timeout of whatever length you give it,
//  passing Promise.reject to the timeout handler.

// racing a promise against a timeout promise is a possible use case.
//  Another scenario might be fetching the same information from two different sources and only waiting for
//   the faster response.
const p1 = new Promise((resolve, reject) => resolve("ohoo"));
const p2 = new Promise((resolve, reject) => reject("alas"));

Promise.race([p1, p2])
  .then(() => console.log("happy"))
  .catch(er => console.log(er));

/**
 * Below are the Promise.all() with Various parameters.
 **/

// Defined the Resuable Callback.
var onFulFillment = function(data) {
  console.log("Success: ", data);
};

var onRejection = function(error) {
  console.log("Catch: ", error);
};

// Below are the Invalid Promises.
var invalidPromise1 = Promise.all(undefined);
var invalidPromise2 = Promise.all();
var invalidPromise3 = Promise.all({});
var invalidPromise4 = Promise.all(99);
var invalidPromise5 = Promise.all(true);
var invalidPromise6 = Promise.all(false);

// Below all triggers Rejection Callback of Catch Method
invalidPromise1.then(onFulFillment).catch(onRejection);

// This call rejection callback in then method is one more way.
invalidPromise2.then(onFulFillment, onRejection);

invalidPromise3.then(onFulFillment).catch(onRejection);
invalidPromise4.then(onFulFillment).catch(onRejection);
invalidPromise5.then(onFulFillment).catch(onRejection);
invalidPromise6.then(onFulFillment).catch(onRejection);

var invalidPromise7 = Promise.all("test");
// Trigger FulFillment Callback of then Method.
// Then Method Return: ["t", "e", "s", "t"]

var invalidPromise8 = Promise.all("");
var invalidPromise9 = Promise.all([]);
// Trigger FulFillment Callback of then Method.
// Then Method Return: []

invalidPromise7.then(onFulFillment).catch(onRejection);
invalidPromise8.then(onFulFillment).catch(onRejection);
invalidPromise9.then(onFulFillment).catch(onRejection);

const somefunction = function(x) {
  return Promise.resolve(x);
};

somefunction("some")
  .then(r => console.log(r))
  .then(r => console.log(r)); //if you want "some" here, use pyramid

//promises fall through
// The reason this happens is because when you pass then()
// a non-function (such as a promise), it actually interprets it as then(null)
Promise.resolve("foo")
  .then(Promise.resolve("bar"))
  .then(function(result) {
    console.log(result); //prints foo
  });

//So just remind yourself: always pass a function into then()!
Promise.resolve("foo")
  .then(function() {
    return Promise.resolve("bar");
  })
  .then(function(result) {
    console.log(result); //prints bar
  });

const doSomething = function() {
  return Promise.resolve("anu");
};

const doSomethingElse = function(x) {
  return Promise.resolve("dd" + x);
};

doSomething()
  .then(x => {
    return doSomethingElse(x);
  })
  .then(x => console.log(x)); //ddundefined

doSomething().then(function() {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
