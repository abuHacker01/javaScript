

let date = new Date();
let LT = `${date.getHours()}:${date.getMinutes()}`;
let LTS = `${date.getHours() - 12}:${date.getMinutes()}:${date.getSeconds()} AM`;
// let L = `${data.getDate() < 10 ? 0 : ""}${data.getDate()}/${data.getMonth() < 10 ? 0 : ""}${data.getMonth() + 1}/${data.getFullYear()}`;
// let l = `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getFullYear()}`;


// let LL;
// let LLL;
// let lll;
// let LLLL;
// let llll;
setInterval(() => {
    LT.innerHTML = LT;
    LTS.innerHTML = LTS;
    // L.innerHTML = L;
    // l.innerHTML = l;
    // LL.innerHTML = `${date.getHourse()}:${date.getMinutes()}`;
    // time.innerHTML = `${date.getHourse()}:${date.getMinutes()}`;
    // time.innerHTML = `${date.getHourse()}:${date.getMinutes()}`;
    // time.innerHTML = `${date.getHourse()}:${date.getMinutes()}`;
}, 1000)

