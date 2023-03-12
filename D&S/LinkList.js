function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let l1 = new ListNode(5);
let l2 = new ListNode(2);
let l3 = new ListNode(13);
let l4 = new ListNode(3);
let l5 = new ListNode(18);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
var removeNodes = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
};
console.log(removeNodes(l1));
