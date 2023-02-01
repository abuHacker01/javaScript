let num = Math.round(Math.random() * 1000);
console.log(num);
let y = parseInt(num / 100);
num = num % 100;

let o = parseInt(num / 10);  //onlik
num = num % 10;
c = num;///birlik

switch (y) {
    case 1:
        console.log("bir yuz");
        break;
    case 2:
        console.log("ikki yuz");
        break;
    case 3:
        console.log("uch yuz");
        break;
    case 4:
        console.log("tor yuz");
        break;
    case 5:
        console.log("besh yuz");
        break;
    case 6:
        console.log("olti yuz");
        break;
    case 7:
        console.log("yetti yuz");
        break;
    case 8:
        console.log("sakkiz yuz");
        break;
    case 9:
        console.log("to'qqiz yuz");
        break;
}
switch (o) {
    case 1:
        console.log("o'n");
        break;
    case 2:
        console.log("yigirma");
        break;
    case 3:
        console.log("o'ttiz");
        break;
    case 4:
        console.log("qirq");
        break;
    case 5:
        console.log("ellik");
        break;
    case 6:
        console.log("oltmush");
        break;
    case 7:
        console.log("yetmush");
        break;
    case 8:
        console.log("sakson");
        break;
    case 9:
        console.log("to'qson");
        break;
}
switch (c) {
    case 1:
        console.log("bir");
        break;
    case 2:
        console.log("ikki");
        break;
    case 3:
        console.log("uch");
        break;
    case 4:
        console.log("tor");
        break;
    case 5:
        console.log("besh");
        break;
    case 6:
        console.log("olti");
        break;
    case 7:
        console.log("yetti");
        break;
    case 8:
        console.log("sakkiz");
        break;
    case 9:
        console.log("to'qqiz");
        break;
}