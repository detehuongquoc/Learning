//dung de goi ham va co the bind this
//khi goi ham thi js engine sẽ gọi funtion.call()
//khi dung call se mat di this, la window
//bind khac call : bind sẽ bind this và trả và hàm mới mà không gọi, còn call sẽ bind this và gọi luôn hàm
// co the muon duoc ham

function ramdom() {
  console.log(Math.random());
}
function logger() {
  const arr = Array.prototype.slice.call(arguments);
  return arr;
}
console.log(logger(1, 2, 3));
