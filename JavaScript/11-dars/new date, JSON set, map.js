// New Date :

/// New Date-bizga kamputerdagi vaqtni chiqarib beradi :














// JSON :

/// JSON-ning kengaytmasi : JavaScript Object Notation

/// JSON-ning vazifasi :

//// bizing o'zgaruvchilar boshqa programming language lar bilan to'g'ri kelmasligi mumkun .
///// shuning uchun bizga JSON-kerak ;

//// biz beckend-da malumot oldi-berdilari uchunxam JSON-dan foidalanamiz

/// JSON-daxam xuddi JavaScript-ga o'xshab extncioni bo'ladi ;

/// JSON-ni syntaxi boshqa faylda :

//// uni objectdan farqi :
///// uni keylarixam stringda yoziladi ;

//// uni faqat ikkitalig qo'shtirnoqda yozish shart . Budegani bittalig qo'shtirnoda yozsa xato beradi


/// Metods :

//// add :

///// stringfy...........=> objectni keylarini string ichida yozib beradi ;

//// exec :

///// agar iz uni ichidagi bironta malumotni chiqarmoxchi bo'lsag
////// oddiy nuqtabilan chiqara olmaymiz . Uning uchun :

///// parse.............=> bitta parametr qaysi JSON-ga kirishi misol uchun :

////// let obj = { name: "Dilmurod", surname: "Xabibullaev", age: 15, work: false };                    |
////// let res = JSON.stringify(obj);                                                                   |---------bu yerda 15-chiqadi ;
////// console.log(JSON.parse(res).age);                                                                |

//// Agar biz backentga faqat o'zimiz xoxlgan malumotlarni jo'natmoxchi bo'lsag :

///// let obj = { name: "Dilmurod", surname: "Xabibullaev", age: 15, work: false };                     |
///// let res = JSON.stringify(obj, ["name"]);                                                          |---------bu yerda (--{"name":"Dilmurod"}--)chiqadi
///// console.log(res);                                                                                 |

///// buni sababi ikkinchi parametrda jo'natmoxchi bo'lgan key-ni yozganimiz ;

//// bizda uchinchi parametrxam bor :

// let obj = { name: "Dilmurod", surname: "Xabibullaev", age: 15, work: false };       |
// let res = JSON.stringify(obj, ["name", "surnam", "age", "work"],2);                 |---------u bizda (--name/surname/age/work--)ni oldidan nechta probel bo'lishini elon qiladi
// console.log(res);                                                                   |

//{
//    name: 'Dilmurod',
//    surname: 'Xabibullaev',
//    age: 15,
//    work: false,
//}



// map , set :

/// Sizda qanaqa malumot turi bo'lishidan qat'iy nazar xuddi anashu malumot turini saqlab qo'yadi ;
//// map va set o'zimizning ojectga o'xshaydi . Misol uchun :

// let map = new Map();                |
// let obj = Object();                 |_________bu yerda : (Map(0) {})___chiqadi
// console.log(map);                   |                    ({}       )
// console.log(obj);                   |

///// ularning farqi :

////// mapda (--Map(0)--)- bor

/// agar biz map-ni to'liq hususiatlarini ishlatishimiz uchun ularni metodlaridan foidalanishimiz kerak :

/// Metods :

//// set................=> malumot qo'shish uchun . Ikkita qiymat qbul qiladi : 1.key , 2.value ;

///// objectdan farqi :
////// objectda key va valuelarni (--:--)-bilab ajratadi . map-da esa (--=>--)-bilan
//// get
//// delete
//// clear