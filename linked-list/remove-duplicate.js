const LinkedList = require('./SingleLinkedList').LinkedList;
const Node = require('./SingleLinkedList').Node;

let removeDuplicate = (list) => {
  let node1 = list.head;
  let node2 = null;

  //outer loop
  while(node1 && node1.next){
    node2 = node1;
    //inner loop
    while(node2.next){
      if(node1.data === node2.next.data){
        //remove duplicate node
        node2.next = node2.next.next;
      }else{
        node2 = node2.next;
      }
    }
    node1 = node1.next;
  }
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
console.log('remove dupliate number in list')
removeDuplicate(list)
printList(list)