# find_max_in_binary_tree

### Problem:
```
class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function findMaxBT(root) {
    // Write your code here.
    return -1       
}

// Test Cases
console.log(findMaxBT(null)) // null
console.log(findMaxBT(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(findMaxBT(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29
console.log(findMaxBT(new TreeNode(1))) // 1
```
