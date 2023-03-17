let arr = [
    { id: 1, name: "Dilmurod", status: "№1" }
];
let obj = new Object;
let i = 1;

function add(arr) {
    let obj = (obj) => {
        i += 1;
        obj += obj.id = i;
        obj += obj.name = "eshmat";
        obj += obj.status = `№${i}`;
        let gg = obj;
    };
    arr.push(gg);
}
add(arr);
add(arr);
add(arr);
console.log(arr);