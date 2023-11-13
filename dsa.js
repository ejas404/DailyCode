// dsa binary search
// for binary search the array providing must be sorted
function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor((start + end) / 2);
    while (start <= end) {
        if (arr[mid] === val) {
            return "the value is in ".concat(mid + 1, "th position");
        }
        if (val < arr[mid]) {
            end = mid - 1;
        }
        else if (val > arr[mid]) {
            start = mid+1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return 'there is no such value existing';
}

let s =binarySearch([1,2,3,4,5,6,6,7,7,8], 8)
console.log(s)