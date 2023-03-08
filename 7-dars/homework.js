// mandarinni axlatga tashlash

/// let user = {};
/// user.name = "John";
/// user.surname = "Smith";
/// user.name = "Pate"
/// delete user.name;

// objectni bo'sh-bo'shemasligini tekshirib beradi

/// function isEmpty(test) {
///     if (test === {}) {
///         return true;
///     } else {
///         return false;
///     }
/// }

/// console.log(isEmpty(user))

// eng katta oylig

// let obj = {
//     Ann: Math.round(Math.random() * 1000),
//     Joxn: Math.round(Math.random() * 1000),
//     Pete: Math.round(Math.random() * 1000)
// };
// console.log(obj);
// let valeus = Object.values(obj);
// let res = 0;
// if (valeus[0] > res) {
//     res = valeus[0];
// } if (valeus[1] > res) {
//     res = valeus[1];
// } if (valeus[2] > res) {
//     res = valeus[2];
// }
// console.log(res);

// qiymatlarni qo'shib ket

/// let obj = {
///     esmat: 100,
///     toshmat: 150,
///     gulmat: 200,
/// };
/// let res = 0;
/// function dubling(obj) {
///     for (key in obj) {
///         res += obj[key];
///     }
/// }
/// dubling(obj);
/// console.log(res);

/// if (valeus[0] > valeus[1] && valeus[0] < valeus[2] || valeus[0] < valeus[1] && valeus[0] > valeus[2]) {
///     res = valeus[0];
/// } if (valeus[1] > valeus[0] && valeus[1] < valeus[2] || valeus[1] < valeus[0] && valeus[1] > valeus[2]) {
///     res = valeus[1];
/// } if (valeus[2] > valeus[1] && valeus[2] < valeus[0] || valeus[2] < valeus[1] && valeus[2] > valeus[0]) {
///     res = valeus[2];
/// }
/// console.log(res);

/// if (valeus[0] < res) {
///     res = va leus[0];
/// } if (valeus[1] < res) {
///     res = valeus[1];
/// } if (valeus[2] < res) {
///     res = valeus[2];
/// }
/// console.log(res);
//
// multiplyNumerics

/// let menu = {
///     width: 200,
///     height: 300,
///     title: "My menu"
/// };
/// let valeus = Object.values(menu);

/// function multiplyNumeric(obj) {
///     for (key in obj) {
///         if (typeof obj[key] == "number") {
///             obj[key] *= 2;
///         }
///     }
/// }
/// multiplyNumeric(menu);