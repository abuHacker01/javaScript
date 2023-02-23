// function chek(str1, str2) {
//     if (str1 === str2) {
//         console.log(0);
//     } else if (str1 == str2) {
//         console.log(1);
//     } else {
//         console.log(-1);
//     }
// }

// let string = "DilmurodXabibullaev";
// function name(str) {
//     let res = {};
//     for (l of str) {
//         res[l] ? res[l] = res[l] + 1 : res[l] = 1;
//     }
//     console.log(res);
// }
// name(string);


let string = "3212$!";
for (i of string) {
    var res = "";
    let kkm = "";
    if (!isNaN(i)) {
        kkm = kkm + string[i];
    } else if (res !== i.toUpperCase()) {
        kkm = kkm + string[i];
    } else {
        res = res + string[i];
    }
    console.log(res);
}


// let str = "opiafoduify3123#!@#!dsjascnknnalhdksckah";
// let res = { string: 0, number: 0, char: 0 };
// for (l of str) {
//     let res = l.toLowerCase();
//     if (!isNaN(l)) res.number++;
//     else if (res !== l.toUpperCase()) res.string++;
//     else res.char++;
// }
// console.log(res);