var LiNode = /** @class */ (function () {
    function LiNode(val) {
        this.val = val;
        this.next = null;
    }
    return LiNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.lengh = 0;
        this.head = null;
        this.tail = null;
    }
    SinglyLinkedList.prototype.push = function (val) {
        var newNode = new LiNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
    };
    SinglyLinkedList.prototype.pop = function () {
        var _a;
        var current = this.head;
        while ((_a = current === null || current === void 0 ? void 0 : current.next) === null || _a === void 0 ? void 0 : _a.next) {
            current = current.next;
        }
        var popped = current === null || current === void 0 ? void 0 : current.next;
        current.next = null;
        this.tail = current;
        return popped;
    };
    SinglyLinkedList.prototype.reverse = function () {
        var current = this.head;
        var prev = null;
        var next;
        while (current) {
            next = current === null || current === void 0 ? void 0 : current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    };
    return SinglyLinkedList;
}());

let sll = new SinglyLinkedList()
sll.push(5)
sll.push(6)
sll.push(7)

console.log(sll.reverse())
