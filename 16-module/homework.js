let arr = [
    { id: 1, name: "Dilmurod", status: "№1" }
];

let add = (id) => {
    let obj = {};
    obj.id = id;
    obj.name = "eshmat";
    obj.status = `№${id}`;
    arr.push(obj);
};

add(2);
add(98765)



console.log(arr);