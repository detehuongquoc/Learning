const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});
// first we need remember is we need to return a promise and check if item is instanst of promise

function all(promises) {
  const _promises = promises.map((item) =>
    item instanceof Promise ? item : Promise.resolve(item)
  );
  console.log(_promises);

  // resolve if empty
  if (_promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const result = [];
    let fulfilledCount = 0;
    let isErrored = false;

    _promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          if (isErrored) return;
          result[index] = value;

          fulfilledCount += 1;
          if (fulfilledCount === _promises.length) {
            resolve(result);
          }
        },
        (error) => {
          if (isErrored) return;
          isErrored = true;
          reject(error);
        }
      );
    });
  });
}
