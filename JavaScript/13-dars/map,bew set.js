// Scope

/// scope-lar xar xil bo'ladi :

//// function scope
//// while scope
//// if & else scope
//// for loop scope...

/// scopelarni ishlashi :

//// aslida javacriptda yozgan kodlarimiz bitta global scope-da joylashadi :
///// ayni JavaScript file ochishimiz bilan uni ichida ko'rinms scope ochiladi ;

/// scope-ni ko'rinishi :

// let a = 2;
// {
//     let a = 1;
// }
// console.log(a);   /// bu yerda ikki chiqadi chunki 1-degan o'zgaruvchi scope ichida ;


// let q = 2;
// {
//     console.log(q);     /// bu yerda ikki chiqadi cchunki scope-da chiqish bor kirish yo'q;
// }

// Lexical Environment :

/// qayerda scope bo'lsa o'sha yerni o'zini (--Lexical Environment--)-bo'ladi ;

/// Lexical Environment ikkiga bo'linadi :

//// 1. recorde 
//// 1. reference

/// qachonki biz misol uchun console.log qilsag :

//// birinchi bo'lib recordega qaraydi . Agar topa olmasa kegin reference-dan qidiradi .           | shu xodisani (--Lexical Environment--) deyiladi ;


// Closure function :


/// Closure function-deb qachonki function o'zini scope-sidan tashqaridagi o'zgaruvchini ishlatsa aytadi ;

/// misol uchun :

// let number =12;                       |
// function name(num) {                  |
//     console.log(num);                 |__________shu (--Closure function--) deyiladi ;
// }                                     |
// name(number);                         |

// Array.prototype.length