function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
  const newHead = new ListNode();
  let prev = newHead;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }

    prev = prev.next;
  }

  if(list1) {
    prev.next = list1;
  } else if (list2) {
    prev.next = list2;
  }

  return newHead.next;
};


const data = [
  {
    list1: { "val": 1, "next": { "val": 2, "next": { "val": 4, "next": null } } },
    list2: { "val": 1, "next": { "val": 3, "next": { "val": 4, "next": { "val": 5, "next": null } } } },
    output: { "val": 1, "next": { "val": 1, "next": { "val": 2, "next": { "val": 3, "next": { "val": 4, "next": { "val": 4, "next": { "val": 5, "next": null } } } } } } }
  },
  {
    list1: { "val": 1, "next": { "val": 6, "next": { "val": 8, "next": null } } },
    list2: { "val": 1, "next": { "val": 3, "next": { "val": 4, "next": null } } },
    output: { "val": 1, "next": { "val": 1, "next": { "val": 3, "next": { "val": 4, "next": { "val": 6, "next": { "val": 8, "next": null } } } } } }
  },
  { list1: null, list2: null, output: null },
  { list1: { "val": 0, "next": null }, list2: null, output: { "val": 0, "next": null } },
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = mergeTwoLists(d.list1, d.list2);
  console.log('result = ', JSON.stringify(result));
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}