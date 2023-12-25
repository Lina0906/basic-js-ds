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

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let newListNode = new ListNode(value);
    if (!this.first) {
      this.first = newListNode;
    } else {
      this.last.next = newListNode;
    }
    this.last = newListNode;
  }

  dequeue() {
    if (!this.first) return null;
    const firstList = this.first;
    if (this.first === this.last) {
      this.last = null;
      this.first = null;
    } else {
      this.first = this.first.next;
    }
    return firstList.value;
  }

}

module.exports = {
  Queue
};
