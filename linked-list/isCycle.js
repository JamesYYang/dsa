const LinkedList = require('./SingleLinkedList').LinkedList;
const Node = require('./SingleLinkedList').Node;

//此示例使用两个指针方法来检测链表中的循环。 
//快速指针一次移动两个节点，而慢速指针移动一个节点。
let isCycle = (list) => {
  let fast = list.head;
  let slow = list.head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

let printList = (list) => {
  if (isCycle(list)) {
    console.log('Linked List is cyclic as it contains cycles or loop');
    return;
  } else {
    console.log('Linked List is not cyclic,  no cycles or loop found');
    //打印List
    let msg = '';
    let current = list.head.next;
    while (current) {
      msg = msg + `${current.data}`;
      if (current.next) {
        msg = msg + ' --> ';
      }
      current = current.next;
    }
    console.log(msg);
  }
}

let list = new LinkedList();
list.add(new Node('101'));
list.add(new Node('201'));
list.add(new Node('301'));
list.add(new Node('401'));

printList(list);

let list2 = new LinkedList();
list2.add(new Node('101'));
let cycle = new Node('201');
list2.add(cycle);
list2.add(new Node('301'));
list2.add(new Node('401'));
list2.add(cycle);
printList(list2);