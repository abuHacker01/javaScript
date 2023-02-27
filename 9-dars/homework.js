let arr = [9, 1, 2, 3, 4, 5, 6];
let res = arr.sort((a, b) => a - b);
res = arr.slice(-2);
res = arr = arr.sort((a, b) => b - a);
let res1 = res.splice(0, 1);
let res2 = res.splice(1);
console.log(res1 - res2);

console.log(arr);