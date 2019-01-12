const endPoint = "https://starwars.egghead.training/films";

//try in browser
fetch(endPoint)
  .then(response => {
    return response.json().then(films => {
      console.log(films);
      return 2;
    });
  })
  .then(films => console.log(films))
  .catch(error => {
    console.log(error);
  });

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
