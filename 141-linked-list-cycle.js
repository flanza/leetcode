function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function array2list(arr, cycleIdx) {
  let cycle;
  let head;
  let prev = null;
  let tail;
  for(let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], prev);
    if (i === arr.length -1) {
      tail = head;
    }
    if (i === cycleIdx) {
      cycle = head;
    }
    prev = head;
  }

  if (cycle) {
    tail.next = cycle;
  }

  return head;
}

var hasCycle = function(head) {
  if (!head || !head.next) return false;
  let slow = head, fast = head;
  do {
    slow = slow.next;
    fast = fast.next?.next;
    if (slow && fast && slow === fast) return true;
  } while (slow && fast);

  return false;
};

const data = [
  { list: [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5], pos: -1, output: false },
  { list: [3,2,0,-4], pos: 1, output: true }
]

for (let d of data) {
  console.log(JSON.stringify(d));
  const list = array2list(d.list, d.pos);
  const result = hasCycle(list);
  console.log('result = ', JSON.stringify(result));
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}