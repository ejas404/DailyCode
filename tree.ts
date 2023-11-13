class TreeNode {
    val: number;
    left: any;
    right: any;

    constructor(val: number) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    root: TreeNode | null;
    constructor() {
        this.root = null
    }

    insert(val: number) {
        let newNode = new TreeNode(val)
        if (!this.root) { this.root = newNode; return true }
        else {
            let root = this.root

            while (true) {
                if (val < root.val) {
                    if (!root.left) {
                        root.left = newNode
                        break
                    } else {
                        root = root.left
                    }
                } else if (val > root.val) {
                    if (!root.right) {
                        root.right = newNode
                        break;
                    } else {
                        root = root.right
                    }
                }
            }

            return true
        }
    }

    insertRec(val: number) {
        let newNode = new TreeNode(val)

        if (!this.root){
            this.root = newNode
        }else{
            let insertVal = (newNode, root: TreeNode) => {
                if (!root) {
                    root = newNode
                    return root
                }

                if (val < root.val) {
                    root.left = insertVal(newNode,root.left)
                } else if (val > root.val) {
                   root.right = insertVal(newNode,root.right)
                }
                return root
            }

           this.root = insertVal(newNode ,this.root)
        }
           

        
    }
}