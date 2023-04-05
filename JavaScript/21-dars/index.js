console.log("started");
setTimeout(() => {
    console.log("SetTymeOut - 1");
}, 1000);
for (let i = 0; i < 10000; i++) { }
console.log(i);
setTimeout(() => {
    console.log("SetTymeOut - 2");
}, 0);
Promise.resolve(() => {
    console.log("Promise");
}).then((res) => (res));
console.log("Finished");