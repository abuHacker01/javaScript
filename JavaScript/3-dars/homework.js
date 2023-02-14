/////////// birinchi rasim

// let a = 1,
//     b = 1;
// let c = ++a; // 2

/// chunki agar o'zgaruvchi nomidan oldin "++" turgan bo'lsa o'zgaruvchiga 1-qo'shadi .

// let d = b++; // 1

/// chunki o'zgaruvchi nomidan kegin "++" turibdi .
//// bu degani birinchi "b" ga tenglab kegin "b" ga 1-qoshyapti .

// ================

// let a = 2;
// let x = 1 + (a *= 2)
// console.log(x);     // x = 5

/// chunki qavs ichida "a"ni "a" ko'paytirilgan 2 ga tengladik buning javobi esa 4 .
/// qavs taqisida 4-ga 1 qo'shilgan uni javobiesa : 5

// ================

// console.log("" + 1 + 0);       // stringda 10
/// chunki birinchi o'rinda stringga 1-ni qo'shyapmiz javob stringda 1
/// kegin stringda 1-ga 0ni qo'shyapmiz javob (--stringda 10--)


// console.log("" - 1 + 0);       // -1 numberda

/// birinchi bo'lib stringdan 1-ni ayrildi javob "-1"
/// kegin "-1"-ga 0-ni qo'shamiz o'z xolicha qoladi ;


// true + false     // 1 numberda

/// true = 1 , false = 0
/// 1 + 0 = 1  javob 1


// 6 / "3"          // 2 numberda

/// bo'luv amali bo'lgani uchun string numberga o'tadi ;
/// va "6"-ni "3"-ga bo'lsa javob (--2--)


// "2" * "3"        // 6 numberda

/// bundaxam ko'paytiruv amali stringni numberga o'tkazib beradi
/// kegin esa 2 * 3 = 6 javob (--6--)


// 4 + 5 + "px"     // 9px stringda

/// birinchi bo'lib 4 + 5 = 9 // number stringga o'tdi ;
/// 9 + "px" = "9px" javob (--"9px"--)


// "$" + 5 + 4      // $54 stringda

/// "$" + 5 = "$5" // number stringga o'tdi ;
/// "$5" + 4 = "$45" javob (--"$45"--)


// "4" - 2          // 2 numberda

/// "4" - 2 = 2 javob (--2--) // number stringga o'tdi ;


// "4px" - 2        // NaN

/// "4px" - 2 bu yerda (-) stringni numberga o'tkazib beradi
/// kegin 4px-ga 2-ni qo'shadi javob esa (--NaN--)


// " -9 " + 5       // " -9 5 " stringda

/// pilus belgisi bilan number stringg o'tib ketadi ;
/// kegin javob shunday bo'ladi (--" -9 5 "--)


// " -9 " - 5       // -14 numberda

/// bu yerda + emas - bo'lgani uchun stringga o'tmaydi nabarot string numberga o'tib ketadi
/// va o'z-o'zidan javobi (-14) bo'lado


// null + 1         // 1 numberda

/// chuni (null)-0 ga teng .
/// va 0ga 1-ni qo'shsag javob 1 bo'ladi ;


// undefined + 1    // NaN
/// bu yerda undefined raqam emas .
/// shuning uchun raqam bo'lmagan element ustida matematik amal bajarsak NaN chiqadi ;

// "\t \n" - 2      // -2 numberda



/////////// ikkinchi rasim


// 5 > 4        // true

/// chunki (5) (4)-dan kichkina ;


// "apple" > "pineapple"   // false

/// chunki ularning birinhi indexiga qaraydi .
/// aniqki (a)-xarifi (p)-xarifidan oldin keladi ;


// undefined == null        // true

/// chunki undefinedning qiymati bilan nullning qiymati bir xil


// undefined === null       // false

/// chunki undefined bilan nullning datatypesi ikkixil ;

// null == "\n0\n"        // false

/// chunki nullning qiymati umuman stringni qiymati-bilan tenglashaolmaydi ;


// null === +"\n0\n"      // false

/// chunki nullning qiymati umuman stringni qiymati-bilan tenglashaolmaydi ;


// if ("0") {
//     console.log("Hello");
// }

/// bu yerda agr "0"-bo'lsa "Hello" ni chiqar deyapti


// let result;
// if (a + b < 4) {
//     result = "Belov";
// } else {
//     result = "Over";
// }

/// by yerda esa (a) + (b) (4)-dan kichik bolsa result "Belov"-ga teng bo'lsin
/// agar unday bo'lmasa "Overga" teng bo'lsin