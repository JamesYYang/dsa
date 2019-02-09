class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  clear() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  size() {
    let current = this.root;
    let size = 0;
    let stack = [];

    while (stack.length > 0 || current) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        size++;
        current = stack.pop();
        current = current.right;
      }
    }
    return size;
  }
}