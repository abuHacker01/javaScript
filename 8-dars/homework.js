function name(str) {
    let res = {};
    for (l of str) {
        if (res[l]) {
            res[l] = res[l] + 1;
        } else {
            res[l] = 1;
        }
    }
    console.log(res);
}
name("Webbrain Academy");