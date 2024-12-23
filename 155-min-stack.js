
var MinStack = function () {
  this.values = [];
  this.min = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
  this.min.push(Math.min(val, this.min[this.min.length - 1] ?? val));
  this.values.push(val);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.min.pop();
  this.values.pop();

};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.values[this.values.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

const data = [{
  ops: ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
  args: [null, -2, 0, -3, null, null, null, null],
  output: [null, null, null, null, -3, null, 0, -2]
},
{
  ops: ["MinStack","push","getMin"],
  args: [null, -3, null],
  output: [null,null,-3]
},
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = [];
  let stack;
  for (let i = 0; i < d.ops.length; i++) {
    const operation = d.ops[i];
    let r = null;
    switch (operation) {
      case "MinStack":
        stack = new MinStack();
        break;
      case "push":
        stack.push(d.args[i]);
        break;
      case "getMin":
        r = stack.getMin();
        break;
      case "pop":
        stack.pop();
        break;
      case "top":
        r = stack.top();
        break;
    }

    result.push(r);
  }
  console.log('result = ', result);
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}