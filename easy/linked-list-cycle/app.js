/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let pastNodes = new Set();
    let currentNode = head;

    while (currentNode) {
        if (pastNodes.has(currentNode)) {
            return true;
        }
        pastNodes.add(currentNode);
        currentNode = currentNode.next;
    }
    return false;
};