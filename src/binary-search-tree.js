const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }


  add(data) {
    const addNode = (node) => {
      let newNode = new Node(data);

      if (!node) {
        return this.rootNode = newNode;
      }
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          addNode(node.left)
        }
      }
      if (data > node.data) {
        if (!node.right) {
          node.right = newNode;
        } else {
          addNode(node.right)
        }
      }
    }

    addNode(this.rootNode);

  }

  has(data) {
    return Boolean(this.find(data))
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) { return null; }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else {
        if (!node.left && !node.right) { return null; }

        if (!node.left) {
          return node = node.right;
        }

        if (!node.right) {
          return node = node.left;
        }

        let minAtRightSide = node.right;
        while (minAtRightSide.left) {
          minAtRightSide = minAtRightSide.left;
        }

        node.data = minAtRightSide.data;

        node.right = removeNode(node.right, minAtRightSide.data);

      }
      return node;
    }

  }


  min() {
    //1st variant
    if (!this.rootNode) {
      return;
    }
    let currentNode = this.rootNode;

    while (currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.data;
  }

  max() {
    //2nd variant
    let currentNode = this.rootNode;

    while (currentNode && currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode ? currentNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};