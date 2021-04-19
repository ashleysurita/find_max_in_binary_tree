class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

/*
        2*
    29       4
  26      _      2
                9
  if there's not root, return null
  find the left and right values
  compare 3 values to find which is bigger
  return the bigger value
*/

function findMaxBT(root) {
    if(!root) return null
    
    const left = root.left ? findMaxBT(root.left) : null
    const right = root.right ? findMaxBT(root.right) : null
    let biggest = root.value
    
    if(left && left > biggest) biggest = left
    if(right && right > biggest) biggest = right
    
    return biggest
}

// Test Cases
console.log(findMaxBT(null)) // null
console.log(findMaxBT(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(findMaxBT(new TreeNode(2, 
                                   new TreeNode(29, 
                                                new TreeNode(26)),
                                   new TreeNode(4, 
                                                null, 
                                                new TreeNode(2, 
                                                             new TreeNode(9)))))) // 29
console.log(findMaxBT(new TreeNode(1))) // 1
