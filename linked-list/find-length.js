const LinkedList = require('./SingleLinkedList').LinkedList;
const Node = require('./SingleLinkedList').Node;

let findLengthLoop = (list) => {
  let count = 0;
  let current = list.head;

  while (current) {
    count++;
    current = current.next;
  }
  return count;
}

let findLengthRecursive = (node) => {
  if(!node){
    return 0;
  } 
  return 1 + findLengthRecursive(node.next);
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

let list = new LinkedList(new Node('11'));
list.add(new Node('20'));
list.add(new Node('13'));
list.add(new Node('11'));
list.add(new Node('24'));
list.add(new Node('20'));
list.add(new Node('24'));

printList(list)
console.log(`The length of list (loop) is: ${findLengthLoop(list)}`);
console.log(`The length of list (recursive) is: ${findLengthRecursive(list.head)}`);