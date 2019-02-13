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

  insert(data){
    if(!this.root){
      this.root = new Node(data);
      return;
    }

    let current = this.root;
    while(current){
      if(data > current.data){
        if(!current.right){
          current.right = new Node(data);
          return;
        }
        current = current.right;
      }else{
        if(!current.left){
          current.left = new Node(data);
          return;
        }
        current = current.left;
      }
    }
  }

  find(data){
    let current = this.root;

    while (current) {
      if(data < current.data){
        current = current.left;
      }else if(data > current.data){
        current = current.right;
      }else{
        return current;
      }
    }
    return null;
  }

  print(){
    //中序遍历二叉查找树，可以输出有序的数据序列，时间复杂度是 O(n)，非常高效
    this.inOrder(this.root);
  }

  inOrder(node){
    if(!node){
      return;
    }
    
    this.inOrder(node.left);
    console.log(`node: ${node.data}`);
    this.inOrder(node.right);
  }

  delete(data){
    let current = this.root; //指向要删除的节点，初始化为root
    let pp = null; //记录current的父节点
    //先找到要删除的节点
    while(current && current.data !== data){
      pp = current;
      if(data > current.data) current = current.right;
      else current = current.left;
    }

    if(!current) return; //没有找到

    //要删除的节点有两个子节点
    if(current.left && current.right){ //查找右子树最小节点
      let minR = current.right; //最小节点
      let minRP = current; //最小节点的父节点
      while(minR.left){
        minRP = minR;
        minR = minR.left;
      }
      current.data = minR.data; //将最小节点的值替换到current中
      current = minR; //删除minR
      pp = minRP;
    }

    //删除的节点是叶子节点或仅有一个子节点
    let child; //current的子节点
    if(current.left) child = current.left;
    else if(current.right) child = current.right;
    else child = null;

    if(!pp) this.root = child; //删除的是根节点
    else if(pp.left === current) pp.left = child;
    else pp.right = child;

  }
}

let tree = new BST();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(6);
tree.insert(7);
tree.insert(1);
tree.insert(2);
tree.insert(9);
tree.insert(4);


/*
        5
      /   \
    3       8
   / \     /  \
  1   4   6    9
   \       \
    2       7  
              
*/

tree.print();
console.log('delete node 8')
tree.delete(8)
tree.print();