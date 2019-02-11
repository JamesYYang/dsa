const BST = require('./bst').BST;
const Node = require('./bst').Node;

let postOrder = (node) => {
  if(!node){
    return;
  }
  
  postOrder(node.left);
  postOrder(node.right);
  console.log(`current node: ${node.data}`);
}

let postOrderLoop = (root) => {
  let nodes = []; //使用数组来模拟堆栈
  nodes.push(root); //先将根节点入栈

  while (nodes.length > 0) { 
    let last = nodes[nodes.length - 1];
    //如果堆栈顶上的节点是叶子节点，就出栈并打印
    if(!last.left && !last.right){
      let node = nodes.pop();
      console.log(`current node: ${node.data}`);
    }else{
      //先将右子树入栈
      if(last.right){
        nodes.push(last.right);
        last.right = null; //避免死循环
      }
      //左子树入栈
      if(last.left){
        nodes.push(last.left);
        last.left = null; //避免死循环
      }
    }

    
  }
}

/*
      6
     / \
    3   5
   / \   \
  1  2    4
*/
let tree = new BST();
tree.root = new Node('6');
tree.root.left = new Node('3');
tree.root.left.left = new Node('1');
tree.root.left.right = new Node('2');

tree.root.right = new Node('5');
tree.root.right.right = new Node('4');

console.log('using recursive...')
postOrder(tree.root);
console.log('using loop')
postOrderLoop(tree.root);