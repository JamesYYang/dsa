const LinkedList = require('./SingleLinkedList').LinkedList;
const Node = require('./SingleLinkedList').Node;

let getLastNode = (list, n) => {
  let fast = list.head;
  let slow = list.head;
  let start = 1;

  while (fast.next != null) {
    fast = fast.next;
    start++;

    if (start > n) {
      slow = slow.next;
    }
  }
  
  return slow;

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
list.add(new Node('5'));
list.add(new Node('6'));
list.add(new Node('7'));
list.add(new Node('8'));
list.add(new Node('9'));
list.add(new Node('10'));


printList(list);
console.log(`the last 3 node is ${getLastNode(list, 3).data}`);