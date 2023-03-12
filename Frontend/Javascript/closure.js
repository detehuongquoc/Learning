//ghi nho ham duoc thuc thi va co the truy cap gia tri ben ngoai cua no

function createCrease() {
  let counter = 0;

  function inCrease() {
    return ++counter;
  }
  return inCrease;
}
const increase1 = createCrease();
console.log(increase1());
console.log(increase1());
console.log(increase1());

store = "hello";
store = "hi";
console.log(store);
