class LinkedList{
  constructor(head){
    if(head){
      this.head = head;
    }else{
      this.head = new Node("head");
    }
    this.tail = this.head;
  }

  add(node){
    this.tail.next = node;
    this.tail = node;
  }
}

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;
exports.Node = Node;