// katta va kichik sonlarni topib beradi :


// const getText = (str) => {
//     let katta = "";
//     let  kichik = "";
//     for (i of str) {
//         (i === i.toUpperCase()) ? i === " " ? "" : katta += 1 : kichik += i;
//     }
//     console.log(`${katta.length}ta katta, ${kichik.length}ta kichkina`);
// };
// getText("WebbBrain AcaDemy");






// dublecatelarni o'chirish :





// string ichidagi raqamlarni topish :


// let string = "Maca5rena";
// function raqt(str) {
//     let res = ""
//     for (i of str) {
//         if (!isNaN(i)){
//             res =+ i
//         }
//     }
//     console.log(res);
// }
// raqt(string);






// dublikate qilish


// let str = "webrain";
// function duble(string) {
//     let res = "";
//     for (i of string) {
//         res = res + i + i;
//     }
//     console.log(res);
// }
// duble(str)





// eng kattalarini topib uni ayrish :

// function lastNumber(arr) {
//   while (arr.length > 1) {
//     let array = arr.sort((a, b) => a - b);
//     let res = array[array.length - 1] - array[array.length - 2];
//     array.splice(array.length - 2, 2);
//     res ? array.push(res) : null;
//   }
//   return arr;
// }
// console.log(lastNumber([11, 14, 12]));





// age-larni yig'indisini topish :

// let obj = {
//     title: "webbrain",
//     age: 2,
//     child: {
//         age: 2,
//         name: "webbrain",
//         child: {
//             age: 3
//         }
//     }
// };
// let sum = 0;
// while (obj) {
//     sum += obj.age;
//     obj = obj.child;
// }
// console.log(sum);






// ikki xonali sonlarni topish :


// let arr = [12, 43, 5, 032, "12", "1213", 4, 75, 2];
// function ikkiXonaliklar(arr) {
//     let res = arr.filter((a) => { return (a + "").length == 2; });
//     return res;
// }
// console.log(ikkiXonaliklar(arr));



// @ => A


// let str = "Webbr@in @c@demy";
// str = str.replaceAll("@" , "a")
// console.log(str);

// ikkinchi variant

// const getWeb = (str) => {
//     let result = "";
//     for (let i of str) {
//         if (i === "@") {
//             result += "a";
//         } else {
//             result += i;
//         }
//     }
//     return result;
// };
// console.log(getWeb("Webbr@in Ac@demy"));








// let string = "DilmurodXabibullaev";
// function name(str) {
//     let res = {};
//     for (l of str) {
//         if (res[l]) res[l] = res[l] + 1; else res[l] = 1;
//     }
//     console.log(res);
// }
// name(string);