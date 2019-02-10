const BST = require('./bst').BST;
const Node = require('./bst').Node;

let preOrder = (node) => {
  if(!node){
    return;
  }

  console.log(`current node: ${node.data}`);
  preOrder(node.left);
  preOrder(node.right);
}

let preOrderLoop = (root) => {
  let nodes = [];
  nodes.push(root); 

  while (nodes.length > 0) { 
    let current = nodes.pop(); 
    console.log(`current node: ${current.data}`);
    if (current.right) { 
      nodes.push(current.right); 
    } 
    if (current.left) { 
      nodes.push(current.left); 
    } 
  }
}

/*
      1
     / \
    2   5
   / \   \
  3  4    6
*/
let tree = new BST();
tree.root = new Node('1');
tree.root.left = new Node('2');
tree.root.left.left = new Node('3');
tree.root.left.right = new Node('4');

tree.root.right = new Node('5');
tree.root.right.right = new Node('6');

console.log('using recursive...')
preOrder(tree.root);
console.log('using loop')
preOrderLoop(tree.root);