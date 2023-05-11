// // array ichidagi sonlarni bir-birga qo'shish


// // let arr = [5, 4, 3, 9];
// // console.log(eval(arr.join("+")));





// // arrayni ichidagi sanoqni topish :


let arr = [`W123456eb/.>?./?>}"{brain`, "academy"];
function name(str) {
    let res = {};
    for (l of str) {
        if (res[l]) res[l] = res[l] + 1; else res[l] = 1;
    }
    console.log(res);
}
name(arr + "");






// // arrayni bir-biriga taqqoslash :


// // let arr1 = [1, 7];
// // let arr2 = [1, 7];
// // function arrTaq(arr1, arr2) {
// //     arr1 = arr1 + "";
// //     arr2 = arr2 + "";
// //     console.log(arr1 == arr2);
// // }
// // arrTaq(arr1, arr2);





// // arrayni sort qilish :


// let users = [
//     {id:1, year: 1998, engine: 1, name: "Tico"},
//     {id:2, year: 2005, engine: 1.2, name: "Matiz"},
//     {id:3, year: 2010, engine: 1.6, name: "Gentra"},
//     {id:4, year: 2010, engine: 1.5, name: "Cobalt"},
//     {id:5, year: 2012, engine: 2, name: "Malibu"},
//     {id:6, year: 2000, engine: 1.2, name: "Damas"},
//     {id:7, year: 2018, engine: 2.4, name: "Tracer"}
// ]

// let res1 = users.filter((v)=> v.year < 2000)
// console.log(res1);


// let res2 = users.filter((v)=> v.year > 2010)
// console.log(res2);


// let res3 = users.sort((a, b) => a.engine - b.engine )
// console.log(res3);


// let res4 = users.sort((a, b) => a.year - b.year )
// console.log(res4);


// let res5 = users.sort((a, b) => a.name.localeCompare(b.name) )
// console.log(res5);

// let res6 = users.filter((v)=> v.year < 2000)
// console.log(res6);