"use strict";
// console.log("My New House in West Germany");
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: "mario", score: 35 };
function formatUser(user) {
    console.log(` ${user.name} logged in with score ${user.score}`);
}
formatUser(userOne);
formatUser({ name: "luigi", score: 42 });
//union types
let someId;
someId = 1;
someId = "abc123";
let email = null;
email = "shem4soul@gmail.com";
email = null;
let anotherId;
anotherId = 123;
anotherId = "abc123";
//union type pitfalls
//type guards
function swapIdType(id) {
    //can only use props and methods common to
    //both number and string types
    //parseInt(id) --> not allowed because id could be a string or number
    if (typeof id === "string") {
        //can use string methods here
        return parseInt(id);
    }
    else {
        //can use number methods and properties here
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");
console.log(idOne, idTwo);
//# sourceMappingURL=index.js.map