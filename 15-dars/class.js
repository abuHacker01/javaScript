// clsss

/// class bu : (--template for creating object--) yaniy :
//// objectlarni yasash uchun shablon

/// yangi class yaratish :

// class Str { }                  |
// let obj = new Str();           |-------bu yerda (--Str {}--)-chiqadi
// console.log(obj);              |

/// biz class bilan yangi o'zgaruvchi yaratishimiz mumku ,
//// xatto functionxam yaratishimiz mumkun :

// class Str {                                     |
//     number = 0;                                 |
//     count(params) {                             |
//         console.log(++this.number);             |
//     }                                           |-------------- bu yerda xar ishlaganda numberni qiymatini oshirin beradi . yani bir qo'shganini eslab qoladi ;
// }                                               |
// let obj = new Str();                            |
// obj.count()                                     |
// obj.count()                                     |
// obj.count()                                     |


/// ammo boshqa o'zgaruvchiga tenglab ketsan unda eslab qolmayni yaniy :


// class Str {                                     |
//     number = 0;                                 |
//     count() {                                   |
//         console.log(++this.number);             |
//     }                                           |
// }                                               |---------------- bu yerda (--1 1 2 2--)-chiqadi ;
// let obj = new Str();                            |
// let obj1 = new Str();                           |
// obj.count();                                    |
// obj1.count();                                   |
// obj.count();                                    |
// obj1.count();                                   |

/// contraktor :

//// qachonki (let obj1 = new Str())- bunday qilib o'zgaruvchi ochsag contraktor birinchi o'rinda yuradi . pasta yoki tepada bo'lishidan qatiy nazar ;

/// security verable :
//// biz yasagan oddiy verable :
// class Str {
//     password = 017746;
//     login = "text";
// }

//// biz yasagan private o'zgaruvchi : private- shaxsiy degani :

// class Str {
//     #password = 017746;
//     #login = "text";
// }

//// ularning farqi private o'zgaruvchini tashqaridin exec qila olmaymiz ;

//// uni exec qilish uchun ;

// class Str {
//     #password = 017746;
//     #login = "text";
//     password(){
//         console.log(this.#password);
//     }
// }

//// uni o'zgartirish uchun setter, getter-lar yordamga keladi :

// class Str {
//     #password = 11;
//     #login = "text";
//     get password() {
//         return this.#password;
//     }
//     set password(newValue) {
//         this.#password = newValue;
//     }
// }
// let add = new Str();
// add.password = 22;
// console.log(add.password);


///// get shunchaki malumotni ekranga chiqarish degani ;
///// set esa malumotni o'zgartirish degani

//// bu esa public degani :

// class Str {
//     _password = 017746;
//     _login = "text";
// }

//// public bilan oddiy o'zgaruvchini JavaScript-da umuman farqi yo'q . Ammo clean code jixatidan public-publicemas degan afzalroq ;

// inheritance :

/// extends :

//// extends-bu kengaytirmoq degani yani :

// class Str {                                |
//     login = "text";                        |
// }                                          |
// class Num extends Str {                    |_____________bu yerda Num metodlarini kengaytiryapti Str metodlar bilan
//     password = 017746;                     |
// }                                          |
// let add = new Num();                       |
// console.log(add.login);                    |

///// endi xoxlasag add.login-deb uni exec qila olamiz ;
////// shumalumotni meros qilib olish degani ;

/// super :

// class Str {
//     login = "text";
// }
// class Num extends Str {
//     password = 017746;
//     func() {
//         console.log(super.login);
//     }
// }
// let add = new Num();
// console.log(add.func());

//// yani biz super bilan boshqa functionlarni ishlatishimiz mumkun ;


