// this 

/// this bu thini o'rab turgan functionni o'rab turgan object
//// misol uchun :

let object = {
    name: "Dilmurod",
    surname: "Xabibullaev",
    fn() {
        console.log(this.name + this.surnam);
    }
};
console.log(object.fn);
/// qachon tiz kerak ?
//// qachon oddiy usulda korsatsak

/// qachon this ishlamaydi ?

//// qachonki arrow function ishlasa


// garberge collaction :

/// garberge collectio b qachonki non-primetive data turilig verable yaratsag
//// va uni primetive-ga o'tkazsag stackdagi malumot bilan heapdagi malumoni bog'lab turuvchi ko'prig uzuladi va heapdagi malumot garbergega tushadi ;
