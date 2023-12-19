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
    const searchTree = (node) => {
      let newNode = new Node(data);

      // if no rootNode, add rootNode
      if (!node) {
        this.rootNode = newNode;
        return;
      }
      // if value is < node.value, go left
      if (data < node.data) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode;
          // if left child, look left again
        } else {
          searchTree(node.left)
        }
      }
      // if value is > node.value, go right
      if (data > node.data) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode;
          // if right child, look left again
        } else {
          searchTree(node.right)
        }
      }
    }

    searchTree(this.rootNode);

  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentNode = this.rootNode;

    //go left until no more children
    while (currentNode && currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode ? currentNode.data : null;
  }

  max() {
    let currentNode = this.rootNode;

    //go right until no more children
    while (currentNode && currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode ? currentNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};