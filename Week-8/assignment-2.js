/**
 * Valid BST
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root;

  constructor() {
    this.root = null;
  }

  isValidBST(root, min = null, max = null) {
    if (root === null) return true;

    if (
      (min !== null && root.value <= min) ||
      (max !== null && root.value >= max)
    )
      return false;

    return (
      this.isValidBST(root.left, min, root.value) &&
      this.isValidBST(root.right, root.value, max)
    );
  }
}

const n1 = new Node(2);
n1.left = new Node(1);
n1.right = new Node(3);
const t1 = new Tree();
t1.root = n1;
console.log(t1.isValidBST(t1.root));
