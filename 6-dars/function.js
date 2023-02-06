
// Function :

/// Function bu javascriptdagi dastur kod bloci ;

/// Dinamic function :

//// functionlar hoisting bo'ladi .
//// chunki javascript engine yurganda birinchi bo'lib function keyvordlarini o'qib oladi ;

/// call :

//// call - bu Functionimizni chaqirish ;
//// call - agar Functionimizni chaqirmasak u ishlamaydi ;

/// let/const o'z hususiyatini yo'qotishi :

//// agar globalda bitta let orqali o'zgaruvchi ochib va functionni ichidaxam
///// globaldagi bilan name-si bir xil verable ochsak xato ko'rsatmaydi ;

////// va functionni chaqirsag functionni ichidagi verable chiqadi ;

/// return :

//// returnni yonida nima turgan bo'lsa osha functionni qiymati bo'ladi ;
//// return function-ni eng oxirida yoziladi va undan kegin yozilgan xar qanday kod ishlamaydi ;


/// sytax of function :

// function functionname(parametrs) {
//     console.log("xar xil amallar");
// }

/// default parametr :

// qachonki functionni argumentida qiymat berilmasa default parametr yordam beradi ;

//// misol uchun :

//                              shular defaul parametrlar
//                                 /                 |
//                                /                  |
//                               /                   |
//                              /                    |
// function fullname(name = "eshmAt", surname = "toshmatov") {
//     name.toLowerCase();
//     surname.toLowerCase();
//     return console.log(surname + " " + name);
// }
// fullname();