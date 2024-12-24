var ListNode = function (val, prev, next) {
  this.val = val ?? 0;
  this.prev = prev ?? null;
  this.next = next ?? null;
};

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.tail = new ListNode(homepage);
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  const newItem = new ListNode(url, this.tail);
  this.tail.next = newItem;
  this.tail = newItem;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while(this.tail.prev && steps-- > 0) {
    this.tail = this.tail.prev;
  }

  return this.tail.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while(this.tail.next && steps-- > 0) {
    this.tail = this.tail.next;
  }

  return this.tail.val;
};

const data = [{
  ops: ["BrowserHistory", "visit", "visit", "visit", "back", "back", "forward", "visit", "forward", "back", "back"],
  args: [["leetcode.com"], ["google.com"], ["facebook.com"], ["youtube.com"], [1], [1], [1], ["linkedin.com"], [2], [2], [7]],
  output: [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]
}];

for (let d of data) {
  const output = [];
  let bh;
  for (let i = 0; i < d.ops.length; i++) {
    let result = null;
    switch (d.ops[i]) {
      case "BrowserHistory":
        bh = new BrowserHistory(d.args[i][0]);
        break;
      case "visit":
        bh.visit(d.args[i][0]);
        break;
      case "back":
        result = bh.back(d.args[i][0]);
        break;
      case "forward":
        result = bh.forward(d.args[i][0]);
        break;

    }
    output.push(result);
  }

  const expectedJsonOutput = JSON.stringify(d.output);
  const jsonOutput = JSON.stringify(output)

  console.log('ops = ', JSON.stringify(d.ops));
  console.log('args = ', JSON.stringify(d.args));
  console.log('expectedOutput = ', expectedJsonOutput);
  console.log('output         = ', jsonOutput);
  jsonOutput === expectedJsonOutput ? console.log('ok') : console.error('nok');
  console.log('----------');
}