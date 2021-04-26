class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

/*
  >      1
    2        3

*/

function findMaxBT(root) {
    if(!root) return null
    
    const left = root.left ? findMaxBT(root.left) : null
    const right = root.right ? findMaxBT(root.right) : null
    return Math.max(root.value, left, right)
}

// Test Cases
console.log(findMaxBT(null)) // null
console.log(findMaxBT(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(findMaxBT(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29
console.log(findMaxBT(new TreeNode(1))) // 1
