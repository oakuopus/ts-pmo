"use strict";
// enum is an enumerated list that stores data in number format for storage space, but is still readable code. you can access its values in any object that you call it in
var italianRot;
(function (italianRot) {
    italianRot["shark"] = "tralalero tralala";
    italianRot["tree"] = "brr brr patapim";
    italianRot["drum"] = "tung tung tung tung tung sahur";
    italianRot["coffee"] = "cappacinoo assassinooo";
})(italianRot || (italianRot = {}));
console.log(italianRot.tree);
const planes = {
    plane: "bombombini gusini",
    plane2: "bombardiro crocodilo"
};
console.log(planes.plane);
// fucntions in typescript are similar to functions in any code but they allow you to specify the data type of the value the function returns, or void if it returns no value
function returnRot(rot) {
    return "welcome to the arena " + rot;
}
console.log(returnRot(italianRot.drum));
var userRole;
(function (userRole) {
    userRole[userRole["Admin"] = 0] = "Admin";
    userRole[userRole["Editor"] = 1] = "Editor";
    userRole[userRole["Viewer"] = 2] = "Viewer";
})(userRole || (userRole = {}));
var currentVariable = userRole.Editor;
console.log(currentVariable);
let printer = {
    name: "reginald",
    gradeLevel: 2,
    isEnrolled: false,
};
console.log(printer);
function calculateTotal(price, taxRate) {
    console.log(price + (price * taxRate));
}
calculateTotal(100, 0.02);
