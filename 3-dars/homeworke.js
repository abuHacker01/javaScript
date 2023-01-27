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
// undefined + 1    // NaN
// "\t \n" - 2      // -2 numberda



/////////// ikkinchi rasim