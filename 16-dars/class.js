// Error handling :

/// bizda biron-bir muammo bo'ladigan bo'lsa proeckt to'gridan-to'g'ri ishlashdan to'xtaydi ;
//// uni oldini olish uchun (--try catch--)-dan foidalanish

/// syntax of try catch :

// let str = "dadaadadadadadadada";
// try {
//     console.log(num);
// } catch {
//     console.log(str);
// }

//// console.log(num)-qilganimizda (num is not defined)-chiqadi . Lekin catch-da (console.log(str);)-deb yozganmiz uchun str-ning qiymati chiqadi ;

//// biz catch-ga "condition" berishinmiz mumkun . Uni keginchalig trydagi kelgan errorni nazarda tutsag bo'ladi misol uchn :

// try {                                        |
//     console.log(num);                        |
// } catch (err) {                              |------------------ bu yerda (--ReferenceError: num is not defined--)-chiqadi ;
//     console.log(err);                        |
// }                                            |

// try {                                        |
//     console.log(num);                        |
// } catch (err) {                              |--------- bu yerda (--ReferenceError--)-chiqadi ;
//     console.log(err.name);                   |
// }                                            |

// try {                                        |
//     console.log(num);                        |
// } catch (err) {                              |--------- bu yerda (--num is not defined--)-chiqadi ;
//     console.log(err.name);                   |
// }                                            |