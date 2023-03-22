// throttle
const throttle = (funtion, duration) => {
  let timeOut = true;
  let test = null;
  return (...args) => {
    console.log(timeOut);
    if (timeOut) {
      funtion.call(this, args);
      timeOut = false;
    }
    if (test == null) {
      test = setInterval(() => {
        timeOut = true;
      }, duration);
    }
  };
};

const CallAPI = throttle(
  (event) =>
    //do someting
    console.log(event),
  1000
);

setInterval(() => {
  processChange("hello", "hi");
}, 100);
