const LinkedList = require('./SingleLinkedList').LinkedList;
const Node = require('./SingleLinkedList').Node;

let findMiddleElement = (list) => {
  let head = list.head;
  let length = 0;
  let middle = head;
  let current = head;

  while(current.next){
    length = length + 1;
    if(length % 2 ===0){
      middle = middle.next;
    }
    current = current.next;
  }
  if(length % 2 === 1){
    middle = middle.next;
  }

  return middle;
}

let list = new LinkedList();
list .add(new Node("first"));
list .add(new Node("second"));
list .add(new Node("third"));
list .add(new Node("fourth"));
list .add(new Node("fifth"));

console.log(findMiddleElement(list).data);