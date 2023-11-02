"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
//merge two arrays alternatively
function mergeArray(arr1, arr2) {
    var i = 0, j = 0, k = 0;
    var newArr = [];
    while (i < arr1.length && j < arr2.length) {
        newArr[k] = arr1[i];
        k++;
        i++;
        newArr[k] = arr2[j];
        k++;
        j++;
    }
    while (i < arr1.length) {
        newArr[k] = arr1[i];
        k++;
        j++;
    }
    while (j < arr2.length) {
        newArr[k] = arr2[j];
        k++;
        j++;
    }
    return newArr;
}
//let x : number[] = mergeArray([1,2,3],[6,7,8,9,10])
//console.log(x)
function sumTwoNumbers() {
    var result = prompt('enter two numbers between space');
    if (typeof (result) === 'string') {
        var numArr = result.split(' ');
        var sum_1 = Number(numArr[0]) + Number(numArr[1]);
        return sum_1;
    }
    return null;
}
function passMark(mark) {
    if (mark >= 50 && mark <= 100) {
        return "passed";
    }
    else {
        return "failed";
    }
}
//passMark(50)
function specialArray(nums) {
    for (var i = 0; i <= nums.length; i++) {
        var count = 0;
        for (var j = 0; j < nums.length; j++) {
            if (nums[j] >= i) {
                count++;
            }
        }
        if (count == i) {
            return i;
        }
    }
    return -1;
}
;
function speciaArray(nums) {
    var _loop_1 = function (i) {
        if (nums.filter(function (val) { return val >= i; }).length === i) {
            return { value: i };
        }
    };
    for (var i = 0; i <= nums.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return -1;
}
;
function maxLengthBetweenEqualCharacters(s) {
    var n = s.length - 1;
    for (var i = 0; i <= n; i++) {
        console.log(s[i], s[n - i]);
        console.log(i, n - i);
        if (s[i] === s[n - i]) {
            if (i >= n - i) {
                return -1;
            }
            var arr = s.split('');
            console.log(i + 1, -(i + 1));
            return arr.slice(i + 1, -(i + 1)).length;
        }
    }
    return -1;
}
;
// binary search only possible in sorted Array
function binarySearch(arr, k) {
    var mid = Math.floor(arr.length - 1 / 2);
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        if (k < arr[mid]) {
            n = mid - 1;
        }
        else if (k > arr[mid]) {
            i = mid + 1;
        }
        else {
            return "value in ".concat(mid, " th position");
        }
    }
    return "not such value is here";
}
//let arr = [1,2,3,4,5,6,7,8,9,10]
//console.log(binarySearch(arr,5))
// binary search can only be worked of sorted array
function binarySearchRecursive(arr, k) {
    function search(start, end) {
        var mid = Math.floor((start + end) / 2);
        if (start >= end) {
            return 'no such value';
        }
        if (k > arr[mid]) {
            return search(mid + 1, end);
        }
        else if (k < arr[mid]) {
            return search(start, mid - 1);
        }
        else {
            return "value is in ".concat(mid, "th position");
        }
    }
    return search(0, arr.length - 1);
}
//let arr = [1,2,3,4,5,6,7,8,9,10]
//console.log(binarySearchRecursive(arr,11))
function log(target, key) {
    console.log('this is from log');
}
// class Some {
//     @log
//     display(){
//         console.log('jus to display')
//     }
// }
//let something = new Some()
//something.display() 
var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.value = [];
    }
    MaxHeap.prototype.insert = function (val) {
        var _this = this;
        if (!this.value.length) {
            this.value.push(val);
            return true;
        }
        this.value.push(val);
        var index = this.value.length - 1;
        var heapUp = function (index) {
            var _a;
            var parentIndex = Math.floor((index - 1) / 2);
            if (_this.value[index] > _this.value[parentIndex]) {
                _a = [_this.value[parentIndex], _this.value[index]], _this.value[index] = _a[0], _this.value[parentIndex] = _a[1];
                heapUp(parentIndex);
            }
            else {
                return;
            }
        };
        heapUp(index);
    };
    return MaxHeap;
}());
// let s = new MaxHeap()
// s.insert(1)
// s.insert(2)
// s.insert(5)
// s.insert(3)
// s.insert(10)
// console.log(s)
// check if a substring is in the string
function stringCheck(string, s) {
    var i = 0, j = 0;
    while (i < string.length) {
        if (string[i] === s[j]) {
            j++;
        }
        else {
            j = 0;
        }
        i++;
        if (j >= s.length) {
            return true;
        }
    }
    return false;
}
//console.log(stringCheck('thisissomething','ism'))
function stringCount(string, s) {
    var i = 0, j = 0, count = 0;
    while (i < string.length) {
        if (string[i] === s[j]) {
            j++;
        }
        else {
            j = 0;
        }
        if (j >= s.length) {
            count++;
            j = 0;
        }
        i++;
    }
    return count;
}
//console.log(stringCount('mysdfdsfdmysdsdsfdmy','my'))
function logging(target, name) {
    console.log(target);
    console.log(name);
}
var Some = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _some_decorators;
    return _a = /** @class */ (function () {
            function Some() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Some.prototype.some = function (some) {
                console.log(some);
            };
            return Some;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _some_decorators = [logging];
            __esDecorate(_a, null, _some_decorators, { kind: "method", name: "some", static: false, private: false, access: { has: function (obj) { return "some" in obj; }, get: function (obj) { return obj.some; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// let s = new Some()
// s.some('hai')
function uppercase(target, name, descriptor) {
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = original.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
// Apply the @uppercase decorator to a function
// class Example {
//     @uppercase
//     greet(name) {
//         return `Hello, ${name}!`;
//     }
//     @uppercase
//     saySomething(message) {
//         return message;
//     }
// }
// const example = new Example();
// const greeting = example.greet("John");
// const message = example.saySomething("This is a message.");
// console.log(greeting); // Output: "HELLO, JOHN!"
// console.log(message);  // Output: "THIS IS A MESSAGE."
var n = 1234;
var sum = 0;
while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
}
console.log(sum);
