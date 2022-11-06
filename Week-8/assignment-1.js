/**
 * Max depth of binary tree
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root;

  constructor() {
    this.root = null;
  }

  maxDepth(root) {
    if (root === null) {
      return 0;
    }
    return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
  }
}

const n1 = new Node(1);
n1.left = new Node(2);
n1.right = new Node(3);
n1.right.left = new Node(4);
n1.right.right = new Node(5);
const b1 = new BinaryTree();
b1.root = n1;
console.log(b1.maxDepth(b1.root));

const n2 = new Node(1);
n2.right = new Node(2);
n2.left = new Node(3);
const b2 = new BinaryTree();
b2.root = n2;
console.log(b2.maxDepth(b2.root));
