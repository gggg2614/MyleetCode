/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reversePrint = function (head) {
  var arr = [];
  var p = head;
  while (p) {
    arr.unshift(p.val);
    p = p.next;
  }
  return arr;
};

var a = {val: 1, next: {val: 2, next: {val: 3, next: null}}};

console.log(reversePrint(a));
