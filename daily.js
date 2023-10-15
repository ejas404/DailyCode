"use strict";
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
var x = mergeArray([1, 2, 3], [6, 7, 8, 9, 10]);
console.log(x);
function sumTwoNumbers() {
    var result = prompt('enter two numbers between space');
    if (typeof (result) === 'string') {
        var numArr = result.split(' ');
        var sum = Number(numArr[0]) + Number(numArr[1]);
        return sum;
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
passMark(50);
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
            var arr_1 = s.split('');
            console.log(i + 1, -(i + 1));
            return arr_1.slice(i + 1, -(i + 1)).length;
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
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 5));
