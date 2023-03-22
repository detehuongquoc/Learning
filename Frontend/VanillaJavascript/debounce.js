const debounce = (funtion, duration) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      funtion.call(this, args);
    }, duration);
  };
};

function saveInput() {}

const callApiSearch = debounce(
  (event) =>
    //do somthing like call api....
    console.log(event),
  1000
);

setInterval(() => {
  debounce(console.log("hello"), 5000);
}, 500);
