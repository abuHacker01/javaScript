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
//         if (res[l]) res[l] = res[l] + 1; else res[l] = 1;
//     }
//     console.log(res);
// }
// name(string);


// let string = "$7$$&3!&$&!$&!$&!$&!$!&$!&$!&$!&$!&$!&!$&!$&!$&!2$$12";
// function name(str) {
//     str = str.replaceAll("$", "");
//     str = str.replaceAll("&", "");
//     str = str.replaceAll("!", "");
//     str = str.replaceAll("%", "");
//     console.log(str);
// }
// name(string);

// let str = "opiafoduify3123#!@#!dsjascnknnalhdksckah";
// let res = { string: 0, number: 0, char: 0 };
// for (l of str) {
//     let res = l.toLowerCase();
//     if (!isNaN(l)) res.number++;
//     else if (res !== l.toUpperCase()) res.string++;
//     else res.char++;
// }
// console.log(res);