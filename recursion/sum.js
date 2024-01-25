// Write a recursive function that computes the sum of all numbers from 1 to n, where n is given as parameter

function sum(n){
    if(n <= 1) return n;
    return n+sum(n-1)
}

console.log(sum(3))