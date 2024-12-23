var reverseList = function(head) {
  
  let newHead = head;
  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }
  head.next = null;
  return newHead;

}

// var reverseList = function(head) {
  // let curr = head, prev = null;
  // while (curr) {
  //   const next = curr.next;
  //   curr.next = prev;
  //   prev = curr;
  //   curr = next;
  // }
  // return prev;
// };

const data = [
  { head: {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}} },
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = reverseList(d.head);
  console.log('result = ', JSON.stringify(result));
  console.log('----------');
}