var reverseList = function(head) {

  let prev = null, curr = head;
  while(curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  

  return prev;
}


const data = [
  { 
    head: {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}},
    output: {"val":5,"next":{"val":4,"next":{"val":3,"next":{"val":2,"next":{"val":1,"next":null}}}}}
  },
  { 
    head: {"val":1,"next":{"val":2,"next":null}},
    output: {"val":2,"next":{"val":1,"next":null}}
  },
  { 
    head: null,
    output: null
  },
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = reverseList(d.head);
  console.log('result = ', JSON.stringify(result));
  console.log('----------');
}