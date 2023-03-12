// let time = new Date();
// let date = new Date();
// let months = date.getMonth();
// let day = date.getDate();
// if (months < 10) {
//     months += 1;
//     months = "0" + (months);
// }
// day < 10 ? day = "0" + (day + 1) : day;
// let oy = date.getMonth();
// switch (oy) {
//     case 0:
//         oy = "January";
//         break;
//     case 1:
//         oy = "February";
//         break;
//     case 2:
//         oy = "March";
//         break;
//     case 3:
//         oy = "April";
//         break;
//     case 4:
//         oy = "May";
//         break;
//     case 5:
//         oy = "Juny";
//         break;
//     case 6:
//         oy = "July";
//         break;
//     case 7:
//         oy = "August";
//         break;
//     case 8:
//         oy = "Semtember";
//         break;
//     case 9:
//         oy = "October";
//         break;
//     case 10:
//         oy = "November";
//         break;
//     case 11:
//         oy = "December";
//         break;
// }
// let oylar = date.getMonth();
// switch (oylar) {
//     case 0:
//         oylar = "Jan";
//         break;
//     case 1:
//         oylar = "Feb";
//         break;
//     case 2:
//         oylar = "Mar";
//         break;
//     case 3:
//         oylar = "Apr";
//         break;
//     case 4:
//         oylar = "May";
//         break;
//     case 5:
//         oylar = "Jun";
//         break;
//     case 6:
//         oylar = "Jul";
//         break;
//     case 7:
//         oylar = "Aug";
//         break;
//     case 8:
//         oylar = "Sem";
//         break;
//     case 9:
//         oylar = "Oct";
//         break;
//     case 10:
//         oylar = "Nov";
//         break;
//     case 11:
//         oylar = "Dec";
//         break;
// }
// let hafta = date.getDay();
// switch (hafta) {
//     case 0:
//         hafta = "Sunday";
//         break;
//     case 1:
//         hafta = "Monday";
//         break;
//     case 2:
//         hafta = "Tuesday";
//         break;
//     case 3:
//         hafta = "Wednesday";
//         break;
//     case 4:
//         hafta = "Thusday";
//         break;
//     case 5:
//         hafta = "Firday";
//         break;
//     case 6:
//         hafta = "Saturday";
//         break;
// }
// let haftalar = date.getDay();
// switch (haftalar) {
//     case 0:
//         haftalar = "Sun";
//         break;
//     case 1:
//         haftalar = "Mon";
//         break;
//     case 2:
//         haftalar = "Tue";
//         break;
//     case 3:
//         haftalar = "Wed";
//         break;
//     case 4:
//         haftalar = "Thu";
//         break;
//     case 5:
//         haftalar = "Fir";
//         break;
//     case 6:
//         haftalar = "Sat";
//         break;
// }
// let jj = date.getHours();
// let gg = date.getMinutes();
// let ap = "";
// jj > 12 ? ap = "PM" : ap = "AM";
// gg < 10 ? gg = "0" + gg : gg = gg;
// let ss = `${jj}:${gg} ${ap}`;
// function moment() {
//     return {
//         format(rad) {
//             if (rad == "LT") {
//                 console.log(`${ss}`);
//             } else if (rad == "LTS") {
//                 console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
//             } else if (rad == "L") {
//                 console.log(`${day}/${months}/${date.getFullYear()}`);
//             } else if (rad == "l") {
//                 console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
//             } else if (rad == "LL") {
//                 console.log(`${oy} ${date.getDate()}, ${date.getFullYear()}`);
//             } else if (rad == "ll") {
//                 console.log(`${oylar} ${date.getDate()}, ${date.getFullYear()}`);
//             } else if (rad == "LLL") {
//                 console.log(`${oy} ${date.getDate()}, ${date.getFullYear()} ${ss}`);
//             } else if (rad == "lll") {
//                 console.log(`${oylar} ${date.getDate()}, ${date.getFullYear()}, ${ss}`);
//             } else if (rad == "LLLL") {
//                 console.log(`${hafta},  ${oy} ${date.getDate()}, ${date.getFullYear()}, ${ss}`);
//             } else if (rad == "llll") {
//                 console.log(`${haftalar}, ${oylar}  ${date.getDate()}, ${ss}`);
//             }
//         }
//     };
// };
// moment().format(ыек);