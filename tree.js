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
    return BinarySearchTree;
}());

let bst = new BinarySearchTree()

bst.insertRec(5)
bst.insertRec(3)
bst.insertRec(6)
bst.insertRec(10)
bst.insertRec(2)
console.log(bst)