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
    function tagNode(node) {
        if (!node) return false;
        else if (node.tagged) return true;

        node.tagged = true;

        return tagNode(node.next);
    }
    return tagNode(head);
};