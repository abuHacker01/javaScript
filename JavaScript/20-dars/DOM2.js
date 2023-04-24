// DOM 2

/// agar biz html-ga biron-bi element qo'shmoxchi bo'lsag :

//// let body = document.querySelector(".theBiggest");                   |
//// body.before(`<h1>before</h1>`)                                      |                                           <h1>before</h1>
//// body.append(`<h1>append</h1>`);                                     |-----------------bu yeda bu narsa chiqadi: <h1>prepend</h1> <h1>append</h1>
//// body.prepend(`<h1>prepend</h1>`)                                    |                                           <h1>after</h1>
//// body.after(`<h1>after</h1>`);                                       |

///// before.............=> biz ko'rsatkan elementdan oldin element qo'shadi ;
///// append.............=> biz ko'rsatkan elementni boshidan element qo'shadi ;
///// prepend............=> biz ko'rsatkan elementni oxiridan element qo'shadi ;
///// after..............=> biz ko'rsatkan elementdan kegin elementdan qo'shadi ;

/// remove :

//// biz agar body.remove() dydigan bo'lsak ko'rsatgan elementimiz o'chib ketadi ;

/// cloneNode :

//// cloneNode-bizga ko'rsatgan elementimizni ichidagi yozuvda tashqari xama narsanini copy qilib beradi ;

///// let body = document.querySelector(".theBiggest");                        |__________ bu yerda body-dan clonega clone qilyapti ;
///// let clone = body.cloneNode()                                             |

/// biz DOM-ni html bilan js-ni ulash uchun ishlatamiz 
/// usiz biz html css-ni xarakatga keltira olmaymiz chunki faqat dom bilangina 