//https://www.hackerrank.com/challenges/30-binary-search-trees/problem
// Start of function getHeight
    this.getHeight = function(root) {
    const height = (node) => {
        if (!node) return 0
        return Math.max(1 + height(node.right), 1 + height(node.left))
    }
    return height(root)-1

    };