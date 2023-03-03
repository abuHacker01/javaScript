// Type Convirsion

/// Type Convirsion-bu ma'lum data turidagi ma'lumotni boshqa data turiga o'zgartirish

/// BOOLEAN ==> STRING

// first

// let valeu = true;          // yangi o'zgaruvchhi ochildi ;
// console.log(typeof valeu); // bu yerda boolean chiqadi ;
// valeu = String(valeu);     // shu yerda stringga o'zgaryapti ;
// console.log(typeof valeu); // string-deb chiqadi ;


// STRING ==> NUMBER

// let str = "123";               // yangi o'zgaruvchhi ochildi ;
// console.log(typeof str);       // string chiqadi ;
// str = Number(str);             // shu yerda Numberga o'tdi ;
// str = Number.parseFloat(str);  // shu yerda Numberga o'tdi ;
// str = Number.parseInt(str);    // shu yerda Numberga o'tdi ;
// console.log(typeof str);       // Number chiqadi ;

/// agar string ustida (+)-dan tashqari barcha arifmetik amal bajarsaxam Numberga o'tadi

// console.log("2" / "2");          |
// console.log("2" * "2");          |____ bu xolatlarda
// console.log("2" - "2");          |

/// agar stringni oldiga (+) qo'yib qo'ysaxam Numberga o'tadi ;

/// agar hariflarni ustida arifmetik amal bajarsak NaN chiqadi ;


// Basic operators of maths :

/// 1. +.......................=> qo'shuv ;
/// 2. -.......................=> ayruv ;
/// 3. *.......................=> ko'paytiruv ;
/// 4. /.......................=> bo'luv ;
/// 5. %.......................=> foizlig bo'luv ;
/// 6. **......................=> kvadrat ;

// taqqoslash :

// &&..........................=> (--va--) belgisi :

/// bu belgi bir tomonidaxam false bo'lsa (false) qaytaradi ;
/// faqat ikkala tomonida true bo'lsa kegin (true) qaytaradi ;


// ||..........................=> (--yoki--) belgisi :

/// bu belgi bir tomonidaxam true bo'lsa (true) qaytaradi ;
/// faqat ikkala tomonida false bo'lsa kegin (false) qaytaradi ;


// ==..........................=> teng yoki yo'qligini aytadi .

/// misol uchun :

//// console.log("1" == 1);      // true


// ===.........................=> qat'iy tenglig :

/// misol uchun :

//// console.log("1" == 1);      // false

/// uni oddiy tenglikdan farqi u data typesigaxam qaraydi ;