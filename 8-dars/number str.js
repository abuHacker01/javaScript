let str = "opiafoduify3123#!@#!dsjascnknnalhdksckah";
let res = { string: 0, number: 0, char: 0 };
for (l of str) {
    let lt = l.toLowerCase();
    if (!isNaN(l)) res.number++;
    else if (lt !== l.toUpperCase()) res.string++;
    else res.char++;
}
console.log(res);