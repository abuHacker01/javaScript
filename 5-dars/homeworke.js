let num = Math.round(Math.random() * 1000);
console.log(num);
let yuzlig = parseInt(num / 100);
num = num % 100;
let onlig = parseInt(num / 10);
num = num % 10;
let birlig = num;
a = "", b = "", d = "";
switch (yuzlig) {
    case 1:
        a = "bir yuz";
        break;
    case 2:
        a = "ikki yuz";
        break;
    case 3:
        a = "uch yuz";
        break;
    case 4:
        a = "to'r yuz";
        break;
    case 5:
        a = "bech yuz";
        break;
    case 6:
        a = "olti yuz";
        break;
    case 7:
        a = "yetti yuz";
        break;
    case 8:
        a = "sakkiz yuz";
        break;
    case 9:
        a = "to'qqiz yuz";
        break;
}
switch (onlig) {
    case 1:
        b = "o'n";
        break;
    case 2:
        b = "yigirma";
        break;
    case 3:
        b = "o'ttiz";
        break;
    case 4:
        b = "qiriq";
        break;
    case 5:
        b = "ellig";
        break;
    case 6:
        b = "oltmush";
        break;
    case 7:
        b = "yetmush";
        break;
    case 8:
        b = "sakson";
        break;
    case 9:
        b = "to'qson";
        break;
}
switch (birlig) {
    case 1:
        c = "bir";
        break;
    case 2:
        c = "ikki";
        break;
    case 3:
        c = "uch";
        break;
    case 4:
        c = "to'rt";
        break;
    case 5:
        c = "bech";
        break;
    case 6:
        c = "olti";
        break;
    case 7:
        c = "yetti";
        break;
    case 8:
        c = "sakkiz";
        break;
    case 9:
        c = "to'qqiz";
        break;
}
console.log(a, b, c);