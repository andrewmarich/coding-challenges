/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = []
    let current = head

    while (current.next !== null) {
        arr.push(current.val)
        current = current.next
        if (current.next === null) {
            arr.push(current.val)
        }
    }

    let end = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[end]) {
            end--
        } else {
            return false
        }
    }
    return true
};