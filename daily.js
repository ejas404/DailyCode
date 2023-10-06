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
