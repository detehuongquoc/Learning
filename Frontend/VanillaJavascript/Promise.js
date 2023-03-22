const promise1 = Promise.resolve(3);
const promise2 = 42;

class MyPromise {
  constructor() {
    // your code here
    return (...args) => {
      console.log(arggs);
    };
  }

  then(onFulfilled, onRejected) {
    // your code here
  }

  catch(onRejected) {
    // your code here
  }

  static resolve(value) {
    // your code here
  }

  static reject(value) {
    // your code here
  }
}
const promise3 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});
