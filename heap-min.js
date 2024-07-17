class MinHeap {
  constructor(weightFunction = (i) => i) {
    this.weightFunction = weightFunction;
    this.items = [];
  }

  getItem(index) { return this.items[index]; }
  getLeftChild(index) { return this.getItem(this._getLeftIndex(index)); }
  getRightChild(index) { return this.getItem(this._getRightIndex(index)); }
  getParent(index) { return this.getItem(this._getParentIndex(index)); }

  add(item) {
    this.items.push(item);
    this._heapifyUp();
  }

  pop() {
    const item = this.items.splice(0, 1, this.items.splice(this.items.length - 1, 1)[0]);
    this._heapifyDown();
    return item[0];
  }
  
  length() {
    return this.items.length;
  }

  _getParentIndex(index) { return Math.floor((index - 1) / 2); }
  _hasParent(index) { return this._getParentIndex(index) >= 0; }

  _getLeftIndex(index) { return index * 2 + 1; }
  _hasLeftChild(index) { return this._getLeftIndex(index) < this.items.length; }

  _getRightIndex(index) { return index * 2 + 2; }
  _hasRightChild(index) { return this._getRightIndex(index) < this.items.length; }

  _swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  _heapifyUp() {
    let index = this.items.length - 1;
    while(this._hasParent(index) && this.weightFunction(this.getParent(index)) > this.weightFunction(this.getItem(index))) {
      const parentIndex = this._getParentIndex(index);
      this._swap(index, parentIndex);
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    while(this._hasLeftChild(index)) {
      const smallerChildIdx = (this._hasRightChild(index)
                            && this.weightFunction(this.getRightChild(index)) < this.weightFunction(this.getLeftChild(index)))
        ? this._getRightIndex(index) : this._getLeftIndex(index);
      const smallerChild = this.getItem(smallerChildIdx);
      
      if (this.getItem(index) < smallerChild) {
        break;
      }

      this._swap(index, smallerChildIdx);
      index = smallerChildIdx;
    }
  }
}

exports.MinHeap = MinHeap;