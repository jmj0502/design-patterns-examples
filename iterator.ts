class TreeNode {
  public value: number;
  public left: TreeNode;
  public right: TreeNode;

  public constructor(value: number) {
    this.value = value;
  }
}

class BinarySearchTree {
  public root: TreeNode;

  public constructor(root: TreeNode) {
    this.root = root;
  }

  public addValue(value: number) {
    const node = this.root;

    const addValue = (node: TreeNode) => {
      if (value < node.value) {
        if (node.left === undefined) {
          node.left = new TreeNode(value);
          return value;
        }
        addValue(node.left);
      }

      if (value > node.value) {
        if (node.right === undefined) {
          node.right = new TreeNode(value);
          return value;
        }
        addValue(node.right);
      }
    };

    return addValue(node);
  }

  // An iterator written using the iditomatic JS/TS approach.
  // (Generators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
  public *depthFirstPreOrderTraversal() {
    const values = [];
    const traverse = (node: TreeNode) => {
      if (node.left !== undefined) {
        traverse(node.left);
      }

      values.push(node.value);

      if (node.right !== undefined) {
        traverse(node.right);
      }
    };
    traverse(this.root);

    for (let i = 0; i < values.length; i++) {
      yield values[i];
    }
  }
}

const bst = new BinarySearchTree(new TreeNode(6));
bst.addValue(4);
bst.addValue(5);
bst.addValue(3);
bst.addValue(8);
bst.addValue(7);
bst.addValue(9);

// Step-by-step approach.
class BinarySearchTreeIterator {
  public values: Array<number> = [];
  public current: number = 0;

  public constructor(binarySearchTree: BinarySearchTree) {
    const depthFirstPreOrderTraversal = (node: TreeNode) => {
      if (node.left !== undefined) {
        depthFirstPreOrderTraversal(node.left);
      }

      this.values.push(node.value);

      if (node.right !== undefined) {
        depthFirstPreOrderTraversal(node.right);
      }
    };
    depthFirstPreOrderTraversal(binarySearchTree.root);
  }

  public hasNext(): boolean {
    if (this.current < this.values.length) {
      return true;
    }
    return false;
  }

  public next(): number {
    if (this.hasNext) {
      const value = this.values[this.current];
      this.current++;
      return value;
    }
    return null;
  }
}

const bstIterator = new BinarySearchTreeIterator(bst);
console.log("Manual iterator");
while (bstIterator.hasNext()) {
  console.log(bstIterator.next());
}

console.log("Generator based iterator");
for (const value of bst.depthFirstPreOrderTraversal()) {
  console.log(value);
}
