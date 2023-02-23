let string = "webbrain";
function name(str) {
    let res = {};
    for (l of str) {
        res[l] ? res[l] = res[l] + 1 : res[l] = 1;
    }
    console.log(res);
}
name(string);














