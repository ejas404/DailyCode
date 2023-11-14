var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (val) {
        var newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return true;
        }
        else {
            var root = this.root;
            while (true) {
                if (val < root.val) {
                    if (!root.left) {
                        root.left = newNode;
                        break;
                    }
                    else {
                        root = root.left;
                    }
                }
                else if (val > root.val) {
                    if (!root.right) {
                        root.right = newNode;
                        break;
                    }
                    else {
                        root = root.right;
                    }
                }
            }
            return true;
        }
    };
    BinarySearchTree.prototype.insertRec = function (val) {
        var newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            var insertVal_1 = function (newNode, root) {
                if (!root) {
                    root = newNode;
                    return root;
                }
                if (val < root.val) {
                    root.left = insertVal_1(newNode, root.left);
                }
                else if (val > root.val) {
                    root.right = insertVal_1(newNode, root.right);
                }
                return root;
            };
            this.root = insertVal_1(newNode, this.root);
        }
    };
    BinarySearchTree.prototype.preOrder = function (root) {
        if (root === void 0) { root = this.root; }
        if (!root)
            return undefined;
        else {
            var stack = [root];
            var orderArr = [];
            while (stack.length) {
                var current = stack.pop();
                orderArr.push(current === null || current === void 0 ? void 0 : current.val);
                if (current.right) {
                    stack.push(current.right);
                }
                if (current.left) {
                    stack.push(current.left);
                }
            }
            return orderArr;
        }
    };
    BinarySearchTree.prototype.inOrder = function (root) {
        if (root === void 0) { root = this.root; }
        var stack = [];
        var res = [];
        var current = root;
        while (stack.length || current) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            res.push(current.val);
            current = current.right;
        }
        return res;
    };
    BinarySearchTree.prototype.postOrder = function (root) {
        if (root === void 0) { root = this.root; }
        var stack = [root];
        var res = [];
        while (stack.length) {
            var current = stack.pop();
            res.unshift(current === null || current === void 0 ? void 0 : current.val);
            if (current.left) {
                stack.push(current.left);
            }
            if (current.right) {
                stack.push(current.right);
            }
        }
        return res;
    };
    BinarySearchTree.prototype.preorderRecursive = function (root) {
        if (root === void 0) { root = this.root; }
        var res = [];
        function traverse(root) {
            if (root) {
                res.push(root.val);
                if (root.left)
                    traverse(root.left);
                if (root.right)
                    traverse(root.right);
            }
        }
        traverse(root);
        return res;
    };
    BinarySearchTree.prototype.bfs = function (root) {
        if (root === void 0) { root = this.root; }
        var queue = [root];
        var res = [];
        while (queue.length) {
            var current = queue.shift();
            res.push(current === null || current === void 0 ? void 0 : current.val);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return res;
    };
    return BinarySearchTree;
}());

let bst = new BinarySearchTree()

bst.insertRec(5)
bst.insertRec(3)
bst.insertRec(6)
bst.insertRec(10)
bst.insertRec(2)
console.log(bst)
console.log(bst.bfs())