// reverse a linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  appendNode(newNode) {
    let node = this.head;
    if (node == null) {
      //Means it's just empty list
      this.head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  printList() {
    let node = this.head;
    process.stdout.write('HEAD->');
    while (node) {
      process.stdout.write(node.data + '->');
      node = node.next;
    }
    console.log('NULL');
  }

  reverseList() {
    let curr = this.head;
    let prev = null;
    let next = null;

    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

let myList = new LinkedList();
let node = new Node(5);
myList.appendNode(node);
myList.appendNode(new Node(11));
myList.appendNode(new Node(7));

myList.printList();
myList.reverseList();
myList.printList();
