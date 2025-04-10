"use strict";
var firstname = "John";
var age = 3;
var alive = true;
let greeting = "yap yap";
const addArrow = (n1, n2) => n1 + n2;
const printResult = (num) => {
    console.log('result:' + num);
};
let person;
let product;
var Role;
(function (Role) {
    Role["admin"] = "ADMIN";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role[Role["AUTHOR"] = 100] = "AUTHOR";
})(Role || (Role = {}));
let resultington;
resultington = 12;
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
let add;
