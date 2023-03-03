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
// }
// let sum = 0;
//  while(obj){
//    sum+=obj.age;
//    obj=obj.child;
//  }
//  console.log(sum);






// ikki xonali sonlarni topish :


// let arr = [12, 43, 5, "12", "1213", 4, 75, 2];
// function ikkiXonaliklar(arr) {
//     let res = arr.filter((a) => { return (a + "").length == 2; });
//     return res;
// }
// console.log(ikkiXonaliklar(arr));



// @ => A


// let str = "WEBBR@IN @C@DEMY";
// str = str.replaceAll("@" , "A")
// console.log(str);






// katta-kichikni nechtaligini chiqarib


// let string = "DilmurodXabibullaev";
// function name(str) {
//     let res = {};
//     for (l of str) {
//         if (res[l]) res[l] = res[l] + 1; else res[l] = 1;
//     }
//     console.log(res);
// }
// name(string);
// let string = "DilmurodXabibullaev";
// function name(str) {
//     let res = {};
//     for (i = 0; i < str.length; i++) {
//         if (res[i]) res[i] = res[i] + 1; else res[i] = 1;
//     }
//     console.log(res);
// }

// let i=0;
// for (i = 2; i < 10; i++) {
//     console.log(`\n${i} karaliklar\n`);
//     for (j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         // console.log(j);
//     }
// }