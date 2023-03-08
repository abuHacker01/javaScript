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


// let str = "weebbraaainn";
// function deldeb(string) {
//     let res = "";
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] !== string[i + 1]) {
//             res += string[i];
//         }
//     }
//     console.log(res);
// }
// deldeb(str);







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






// palindromligini topadi :


// let palin = "nonq";
// function taqqosla(str) {
//     let res1 = str.split("");
//     let res2 = str.split("").reverse();
//     function arrTaq(arr1, arr2) {
//         arr1 = arr1 + "";
//         arr2 = arr2 + "";
//         console.log(arr1 == arr2);
//     }
//     arrTaq(res1, res2);
// }
// taqqosla(palin);







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







// stringni ziplashtirish :


// let aa = "wwwweeebbaaaaiiiiinnn";

// let res = "";
// let res2 = 2;
// aa = aa.split("");
// for (l of aa) {

// }





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






// objektning bulean valeulig keylarini olib beradi :


let obj = { name: "dilmurod", uy: true, mashina: false };

let rr = Object.values(obj);
for (i of rr) {
    
}





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




// string ichida nechtadan ve nechta xarifligini aytadi :


// let string = "DilmurodXabibullaev";
// function name(str) {
//     let res = {};
//     for (l of str) {
//         if (res[l]) res[l] = res[l] + 1; else res[l] = 1;
//     }
//     console.log(res);
// }
// name(string);








// eng kattalarini topib uni ayrish :


// function lastNumber(arr) {
//     while (arr.length > 1) {
//         let array = arr.sort((a, b) => a - b);
//         let res = array[array.length - 1] - array[array.length - 2];
//         array.splice(array.length - 2, 2);
//         res ? array.push(res) : null;
//     }
//     return arr;
// }
// console.log(lastNumber([12, 43, 13, 42]));