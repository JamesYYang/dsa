const BST = require('./bst').BST;
const Node = require('./bst').Node;

let inOrder = (node) => {
  if(!node){
    return;
  }
  
  inOrder(node.left);
  console.log(`current node: ${node.data}`);
  inOrder(node.right);
}

let inOrderLoop = (root) => {
  let nodes = []; //使用数组来模拟堆栈
  let current = root;

  while (nodes.length > 0 || current) { 
    //先将左子树全部入栈
    if(current){
      nodes.push(current);
      current = current.left;
    }else{
      //到达左子树叶子节点时，我们将堆栈弹出并打印节点
      //然后遍历右子树
      let node = nodes.pop(); 
      console.log(`current node: ${node.data}`);
      current = node.right;
    }
  }
}

/*
      4
     / \
    2   5
   / \   \
  1  3    6
*/
let tree = new BST();
tree.root = new Node('4');
tree.root.left = new Node('2');
tree.root.left.left = new Node('1');
tree.root.left.right = new Node('3');

tree.root.right = new Node('5');
tree.root.right.right = new Node('6');

console.log('using recursive...')
inOrder(tree.root);
console.log('using loop')
inOrderLoop(tree.root);