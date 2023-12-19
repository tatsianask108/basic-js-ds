const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  queue = [];

  getUnderlyingList() {
    return this.queue[0];
  }

  enqueue(value) {
    let listNode = new ListNode(value);
    if (this.queue.length) {
      this.queue[this.queue.length - 1].next = listNode
    }

    this.queue.push(listNode);
  }

  dequeue() {
    let element = this.queue.shift();
    return element.value;
  }
}

module.exports = {
  Queue
};
