const LinkedList = require('./SingleLinkedList').LinkedList;
const Node = require('./SingleLinkedList').Node;

let reverse = (list) => {
  list.head = reverseRecursive(list.head);
}

let reverseRecursive = (node) => {
  if(!node.next){
    return node;
  }

  let newHead = reverseRecursive(node.next);
  node.next.next = node;
  node.next = null;
  return newHead;
}

let printList = (list) => {
    //打印List
    let msg = '';
    let current = list.head;
    while (current) {
      msg = msg + `${current.data}`;
      if (current.next) {
        msg = msg + ' --> ';
      }
      current = current.next;
    }
    console.log(msg);
}

let list = new LinkedList(new Node('1'));
list.add(new Node('2'));
list.add(new Node('3'));
list.add(new Node('4'));

printList(list);
reverse(list);
console.log('reverse list..........');
printList(list);
