function makeUser() {
    return {
        name: "Eshmat",
        ref: this
    };
}
let user = makeUser()
console.log(user.ref.name);