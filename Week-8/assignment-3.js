/**
 * Level order traversal of BinaryTree
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  levelOrderTraversal(root = this.root) {
    if (root === null) return [];

    const queue = [];
    const result = [];

    queue.push(root);
    queue.push(null);

    const tempArr = [];
    while (queue.length) {
      const head = queue.shift();

      if (head == null) {
        result.push([...tempArr]);
        tempArr.length = 0;

        if (queue.length) {
          queue.push(null);
        }
      } else {
        tempArr.push(head.value);
        if (head.left) queue.push(head.left);
        if (head.right) queue.push(head.right);
      }
    }

    return result;
  }
}

const n1 = new Node(1);
n1.left = new Node(2);
n1.right = new Node(4);
n1.left.left = new Node(3);
n1.left.right = new Node(5);
n1.right.left = new Node(7);
n1.right.left.right = new Node(7);

const t1 = new Tree();
t1.root = n1;
console.log(t1.levelOrderTraversal());
