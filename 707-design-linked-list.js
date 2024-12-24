var ListNode = function (val, next, prev) {
  this.val = val ?? 0;
  this.next = next ?? null;
  this.prev = prev ?? null;
};

const ASC = 1;
const DESC = 0;

var MyLinkedList = function () {
  this.head = new ListNode();
  this.tail = new ListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;

};

MyLinkedList.prototype.getTravesalOrder = function (index) {
  return (this.size - index) < index ? DESC : ASC;
}
/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype._getNodeAtIndex = function (index) {
  let item;
  if (this.getTravesalOrder(index) === ASC) {
    item = this.head.next;
    while(item && index-- > 0) {
      item = item.next;
    }
  } else {
    item = this.tail.prev;
    index = this.size - index - 1;
    if (index < 0) return null;
    while (item && index-- > 0) {
      item = item.prev;
    }
  }
  return !item || item === this.head || item ===  this.tail ? null : item;
};

MyLinkedList.prototype.get = function (index) {
  const item = this._getNodeAtIndex(index);
  return item?.val ?? -1;
}

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val)
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val);
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }

  const newItem = new ListNode(val);
  if (index === 0) {
    this._addBetween(newItem, this.head, this.head.next);
  } else if (index === this.size) {
    this._addBetween(newItem, this.tail.prev, this.tail);
  } else {
    let itemAtIndex = this._getNodeAtIndex(index);
    this._addBetween(newItem, itemAtIndex.prev, itemAtIndex)
  }

  this.size++;
};

MyLinkedList.prototype._addBetween = function (item, prev, next) {
  item.prev = prev;
  item.next = next;
  next.prev = item;
  prev.next = item;
}

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
  const itemAtIndex = this._getNodeAtIndex(index);
  if (!itemAtIndex) {
    return;
  }

  const next = itemAtIndex.next;
  const prev = itemAtIndex.prev;
  next.prev = prev;
  prev.next = next;

  this.size--;
};

const data = [
  // {
  //   ops: ["MyLinkedList", "addAtHead", "get", "addAtHead", "addAtHead", "deleteAtIndex", "addAtHead", "get", "get", "get", "addAtHead", "deleteAtIndex"],
  //   args: [[], [4], [1], [1], [5], [3], [7], [3], [3], [3], [1], [4]]
  // },
  // {
  //   ops: ["MyLinkedList","addAtHead","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","get","deleteAtIndex","deleteAtIndex"],
  //   args: [[],[2],[1],[2],[7],[3],[2],[5],[5],[5],[6],[4]]
  // },
  // {
  //   ops: ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"],
  //   args: [[],[1],[3],[1,2],[1],[1],[1]]
  // },
  // {
  //   ops: ["MyLinkedList","addAtHead","deleteAtIndex"],
  //   args: [[],[1],[0]]
  // },
  // {
  //   ops: ["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"],
  //   args: [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]
  // },
  // {
  //   ops: ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"],
  //   args: [[],[1],[3],[1,2],[1],[0],[0]]
  // },
];

const result = [null];
const ll = new MyLinkedList();

ll.addAtHead(4);
result.push([]);

result.push(ll.get(1));

ll.addAtHead(1);
result.push([]);

ll.addAtHead(5);
result.push([]);

ll.deleteAtIndex(3);
result.push([]);

ll.addAtHead(7);
result.push([]);

result.push(ll.get(3));
result.push(ll.get(3));
result.push(ll.get(3));

ll.addAtHead(1);
result.push([]);

ll.deleteAtIndex(4);
result.push([]);

console.log(result);

for (let d of data) {
  let output = [];
  let linkedList;
  for (let i = 0; i < d.ops.length; i++) {
    let op = d.ops[i];
    let result = null;
    switch (op) {
      case "MyLinkedList":
        linkedList = new MyLinkedList();
        break;
      case "addAtHead":
        linkedList.addAtHead(d.args[i][0]);
        break;
      case "addAtTail":
        linkedList.addAtTail(d.args[i][0]);
        break;
      case "addAtIndex":
        linkedList.addAtIndex(d.args[i][0], d.args[i][1]);
        break;
      case "get":
        result = linkedList.get(d.args[i][0]);
        break;
      case "deleteAtIndex":
        linkedList.deleteAtIndex(d.args[i][0], d.args[i][1]);
        break;
    }

    output.push(result);

  }

  console.log(output);
}