/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;

    function dfs(node) {
        if (!node) return 0;
        return 1 + Math.max(dfs(node.left), dfs(node.right));
    }

    return Math.abs(dfs(root.left) - dfs(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
};